import React, {useState} from 'react';

function UsingHook() {
	const [flag, setFlag] = useState(true);
	return (<div>
		<h2>十九、react 18新版本生命周期钩子</h2>
		<button onClick={() => setFlag(!flag)}>切换Son的显示或隐藏</button>
		{flag && <Son/>}
	</div>)
}

class Son extends React.Component {
	state = {};

	// 组件挂载完成阶段，通常用于发送异步网络请求
	componentDidMount() {
		console.log('componentDidMount阶段，请求发送起来');
		this.timer = setInterval(() => {
			console.log('定时器运行中……');
		}, 1000);
	}

	/**
	 *
	 * @componentWillUnmount组件
	 * 组件要卸载阶段，用于清除一些副作用，必须定时器或者事件绑定等等
	 * 例如：清除定时器或清除事件绑定
	 *
	 * 1.组件渲染后，定时器运行
	 * 2.点击按钮，Son子组件被卸载，观察到卸载了的组件，定时器仍然在运行
	 * 3.componentWillUnmount清除这种副作用
	 *
	 * */
	componentWillUnmount() {
		console.log('componentWillUnmount清除副作用');
		// 当前组件都卸载了，定时器仍然在运行，清除这种副作用
		clearInterval(this.timer);

	}

	render() {
		return (<div>
			<h4>我是Son子组件</h4>
		</div>)
	}
}

export default UsingHook;