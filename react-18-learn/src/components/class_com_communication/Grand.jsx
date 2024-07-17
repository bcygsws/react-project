import React from "react";

/**
 * @name:
 * @description:类组件通信的三种方式：
 * 1.父传子 props
 * ----子组件props或者 直接解构{}，最常用场景，此处不做解释
 * 2.子传父 父组件传递方法给子组件，子组件调用传过来的方法，传递数据
 * ---
 *
 * 3.兄弟组件通信 将其分为一次父传子+子传父，然后桥接起来
 *
 *  注：关于类组件接收父组件属性，要么不写构造，直接this.props获取父组件传递过来的属性；
 *  要么，写全构造函数和super语句
 *
 *  constructor(props){
 *      super(props);
 *      this.state={
 *          msg:props.name
 *      }
 *  }
 *
 * */
class Son1 extends React.Component {
	// 先接收一个父组件传递过来的方法，用以接收当前组件Son1传给Parent的数据
	state = {
		info: "传给兄弟组件son2的数据"
	}

	render() {
		return (<div>
			<h4>这是Son1孙子组件</h4>
			{/*	点击按钮，son1向son2传递数据*/}
			{/*son1向父组件传递info*/}
			<button onClick={() => this.props.onToFat(this.state.info)}>向兄弟组件son2传递数据</button>
		</div>)
	}
}

class Son2 extends React.Component {
	state = {
		son2: ''
	}

	// getDerivedStateFromProps存在只有一个目的，就是props变化时，更新state
	// props由之前的{info:''} 到 {info:'传给兄弟组件son2的数据'}，需要生成新的state了
	static getDerivedStateFromProps(props, state) {
		console.log(props);
		// 返回值是当前state的最新值
		return {son2: props.info}
	}


	render() {
		return (<div>
			<h4>这是Son2孙子组件</h4>
			<div>兄弟组件son1传递过来的数据：{this.state.son2}</div>
		</div>)
	}
}

class Parent extends React.Component {

	state = {
		f: this.props.onToParent,
		msg: "传递给父组件的数据",
		// 用以保存Son1组件传递过来的数据
		info: ''
	}
	// 传递给子组件Son1,接收子组件Son1传递过来的数据；然后，在顺下传给另一个子组件Son2
	son1ToFat = (val) => {
		console.log(val);
		this.setState({...this.state, info: val});

	}

	render() {
		return (<div>
			<h3>这是Parent组件</h3>
			<Son1 onToFat={this.son1ToFat}/>
			<div>son1传递给son2的数据展示：{this.state.info}</div>
			<Son2 info={this.state.info}/>
			<button onClick={() => this.state.f(this.state.msg)}>点击按钮，将msg传递给父组件Grand</button>
		</div>)
	}
}

function Grand() {
	const sonToFatHandle = (val) => {
		// val接收子组件Parent传递过来的数据
		console.log(val);

	}
	return (<div>
		<h2>二十、类组件常用的三种通信：父传子、子传父和兄弟组件通信</h2>
		<Parent onToParent={sonToFatHandle}/>
	</div>)
}

export default Grand;