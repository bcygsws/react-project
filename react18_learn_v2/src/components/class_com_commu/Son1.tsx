import {Component} from "react";

class Son1 extends Component {
    /**
     * @desc:生命周期钩子getDerivedStateFromProps(props,state)
     * 注：derive 得到，取得；derive from 从xxx衍生出，起源于
     *
     * 1.作用：将父组件传递的props,实时赋值给state状态
     *
     * 2.说明：它是一个静态方法，它接受两个参数，第一个参数是
     * 父组件传递的props，第二个参数是当前组件的state状态，
     * 返回值是一个对象，对象中的key就是state状态的key，
     * value就是state状态的value。
     *
     * */
    static getDerivedStateFromProps(props: any, state: any) {
        console.log("state===", state);
        return {
            mid: props.mid // 类似setState功能了
        }
    }


    render() {
        return <div>
            <h6>我是Son1组件</h6>
            {/*父组件传递的数据，红色；祖父组件传递数据，绿色*/}
            <p style={{color: 'green'}}>son1组件接收兄弟son的值：{this.state?.mid}</p>
        </div>
    }

}

export default Son1;