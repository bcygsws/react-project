/**
 * @desc:二十一、类组件通信
 *
 *
 * */
import {Component} from "react";

class Son extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            msg: props.msg,
            fun: props.fun,
            sibling: 'son to son1 data',
            sonToSon: props.sonToSon// 其父组件传递过来的方法
        }
    }

    toParent = () => {
        // 调用父组件的sonToSon方法
        this.state.sonToSon(this.state.sibling);
    }

    render() {
        return <div>
            <p>我是Son组件</p>
            {/*父组件传递的数据，红色；祖父组件传递数据，紫色*/}
            <p style={{color: 'red'}}>{this.state.msg}</p>
            <button onClick={() => this.state.fun('我是祖父组件传给parent组件的数据')}>son组件调用parent组件方法
            </button>
            <hr/>
            {/*向兄弟组件传递数据*/}
            <button onClick={this.toParent}>向兄弟组件Son1传递数据</button>
        </div>
    }

}

// 演示：类组件中，兄弟组件通信
// 思路：Son---先传给Parent---再传给Son
class Son1 extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            mid: props.mid,
        }
    }


    render() {
        return <div>
            <p>我是Son1组件</p>
            {/*父组件传递的数据，红色；祖父组件传递数据，紫色*/}
            <p style={{color: 'purple'}}>{this.state.mid}</p>
        </div>
    }

}

class Parent extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            fun: props.fun,
            msg: '我是parent组件数据',
            mid: '',// 过渡数据，接收son传递过来的数据
        }
    }

    // 子组件向父组件传值，不符合单向数据流原则；父组件先传递个方法给子组件
    sonToSon = (val: any) => {
        console.log('parent val====', val);
        this.setState({
            mid: val
        });
    }

    render() {
        const {fun, msg} = this.state as any;
        return <div>
            <h6>我是Parent组件</h6>
            <p>中转数据：{this.state.mid}</p>
            <Son fun={fun} msg={msg} sonToSon={this.sonToSon}/>
            <Son1 mid={this.state.mid}/>
        </div>
    }
}

function Grand() {
    const funToSon = (val: any) => {
        console.log("val====", val);
    }
    return (<div>
        <h6>二十一、这是祖父组件向孙子组件传值</h6>
        <Parent fun={funToSon}/>
    </div>)

}

export default Grand;