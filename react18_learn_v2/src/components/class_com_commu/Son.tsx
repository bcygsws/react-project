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
            <h6>我是Son组件</h6>
            {/*父组件传递的数据，红色；祖父组件传递数据，紫色*/}
            <p style={{color: 'red'}}>{this.state.msg}</p>
            <button onClick={() => this.state.fun('我是祖父组件传给son组件的数据')}>son组件调用祖父组件fun方法
            </button>
            <hr/>
            {/*向兄弟组件传递数据*/}
            <button onClick={this.toParent}>向兄弟组件Son1传递数据</button>
        </div>
    }

}
export default Son;