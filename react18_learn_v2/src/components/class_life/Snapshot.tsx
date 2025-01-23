import React, {Component} from 'react';


/**
 * @desc:使用getSnapshotBeforeUpdate()钩子，在更新阶段，实现更新前的快照
 * 参考文档：https://blog.csdn.net/gaogzhen/article/details/129782007
 * 三大系列：scroll系列含义，参考：https://blog.csdn.net/weixin_58562766/article/details/143806081
 *
 * 场景：
 * 问题：1.父组件中，点击按钮，卸载组件；当前子组件卸载了，但是，子组件componentDidMount钩子还在执行
 * 结果：组件即使卸载了，但是，子组件componentDidMount钩子中定时器，还在持续输出 "Snapshot组件是否在组件卸载后，还在执行？"
 * 这造成了内存资源的浪费
 * 解决：1.在子组件componentWillUnmount钩子中，清除定时器
 *
 * 以上问题，很容易和react18中的钩子useEffect联系起来,useEffect中同样涉及清除副作用的问题
 * 使用闭包来解决这个问题，在闭包中清除掉定时器
 *
 * useEffect(() => {
 *     const timer = setInterval(() => {
 *         console.log('定时器执行了');
 *     }, 1000)
 *     return () => {
 *         clearInterval(timer);
 *     }
 * },[])
 *
 *
 *
 * */
class Snapshot extends Component {
    state = {
        newsList: [] as Array<string>
    }
    // 在类组件中，使用ref,获取组件或元素标签的方法
    list = React.createRef<any>();

    static getDerivedStateFromProps(props: any, state: any) {
        console.log('Snapshot组件的getDerivedStateFromProps钩子');
        console.log('state==', state);
        return null;
    }

    // 每隔1s增加一条数据
    componentDidMount() {
        // 接收一下定时器函数，为了卸载组件时，清除定时器，避免内存泄漏
        this.timer = setInterval(() => {
            // 注意必须，在定时器内部获取newsList，才能实现push或者unshift的效果
            // 每一次newsList生成了，不会被重置，然后叠加上另外一个添加的元素
            const {newsList} = this.state;
            const news = '新闻' + (newsList.length + 1);
            this.setState({
                newsList: [news, ...newsList]
            });
            // 验证组件卸载了？我是否还在执行
            console.log('Snapshot组件是否在组件卸载后，还在执行？');
        }, 1000)
    }

    // 注1：getSnapshotBeforeUpdate钩子返回值，是作为componentDidUpdate()的第三个参数
    // 注2：在17.xx版本开始，该钩子不推荐使用，使用useEffect或componentDidUpdate来处理组件更新的信息
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any {
        // 获取更新前，内容的高度（一般等于=固定可视区域+scrollTop）
        return this.list.current?.scrollHeight;
    }

    // 第三参数：可选参数，snapshot就是getSnapshotBeforeUpdate钩子返回值

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        if (snapshot) {
            // scrollTop：卷曲出可视区域的高度
            // 新增了一条数据了，渲染是重新计算得到最新的scrollTop
            this.list.current.scrollTop += this.list.current?.scrollHeight - snapshot;
        }
    }

    componentWillUnmount() {
        console.log('Snapshot组件即将卸载');
        // 解决组件卸载时，内存占用的问题
        clearInterval(this.timer);
    }

    render() {
        return (<div className="snapshot">
            <ul className="news-list" ref="list">
                {this.state.newsList.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>)
    }
}

export default Snapshot;