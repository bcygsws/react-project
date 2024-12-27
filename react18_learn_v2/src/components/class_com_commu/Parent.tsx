import {Component} from "react";
import Son1 from "@/components/class_com_commu/Son1.tsx";
import Son from "@/components/class_com_commu/Son.tsx";

class Parent extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            fun: props.fun,
            msg: '我是parent组件数据',
            mid: '',// 过渡数据，接收son传递过来的数据
        };
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
            <h4>我是Parent组件</h4>
            <p>中转数据：{this.state.mid}</p>
            <Son fun={fun} msg={msg} sonToSon={this.sonToSon}/>
            <Son1 mid={this.state.mid}/>
        </div>
    }
}
export default Parent;