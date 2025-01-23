/**
 * @desc: 类组件生命周期
 *
 * */
import React from 'react';
import Snapshot from "@/components/class_life/Snapshot";

class ClassLife extends React.Component {
    state = {
        flag: true
    }
    clickHandler = () => {
        this.setState({
            flag: false
        })
    }

    render() {
        return (<div>
            <div>二十二、ClassLife-类组件的生命周期</div>
            <button onClick={this.clickHandler}>卸载子组件Snapshot</button>
            {this.state.flag && <Snapshot/>}
        </div>);
    }

}


export default ClassLife;