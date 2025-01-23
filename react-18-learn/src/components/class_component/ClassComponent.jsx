import {Component} from "react";

class ClassComponent extends Component {
	// 类属性定义state
	// 如果将state定义在构造函数中，使用this.state={}
	state = {
		count: 0
	}
	// 定义事件回调函数
	clickHandler = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (<div>
			<h2>十八、类组件</h2>
			<div>count值：{this.state.count}</div>
			<button onClick={this.clickHandler}>+1</button>
		</div>)
	}
}

export default ClassComponent;