import {useState} from "react";

/**
 * @React框架绑定事件，注意事项：不像vue中，绑定事件，很灵活@语法
 *
 * 1.react中绑定事件，采用on+事件名的 驼峰命名法；语法：
 * onEvent={}
 * 例如：onClick={事件名称}
 *
 * 2.拿到参数e
 *
 * 3.点击按钮，事件触发时，再传递参数，需要在onClick事件中使用箭头函数；否则，页面渲染时，立即执行了
 * 例如：onClick={clickHandler2("Jack")}  当前组件渲染时，控制台立即打印： 他的名字是Jack
 * 例如：onClick={()=>clickHandler2("Jack")}  当前组件渲染时，点击按钮才会打印： 他的名字是Jack
 *
 * 4.综合2,3；如果既要传参，又要拿到参数e,该如何书写？
 *
 * @React的useState()
 * useState()实际上是一个hook
 * 1.useState，允许向组件添加一个状态变量，从而影响组件的渲染结果
 * 例如本例：
 * flag --->!flag
 * useState(！flag) 状态改变，界面同步更新
 *
 * 2.
 *
 *
 * */

function BindingEvent() {
	// 改变数据，更新界面
	const clickHandler = () => {
		setFlag(!flag);
	}
	let [flag, setFlag] = useState(true);

	// 3.1 拿到点击事件的参数
	const clickHandler1 = (e) => {
		console.log("我显示了", e);
	}
	// 3.2 点击事件触发时，传递参数
	const clickHandler2 = (name) => {
		console.log(`他的名字是${name}`);
	}
	// 3.3 点击事件时，才触发打印；并且需要拿到参数e
	const clickHandler3 = (e, name) => {
		console.log("参数e", e);
		console.log("点击时传递的name实参", name);
	}
	return (<div>
		<h3>二、我是绑定事件组件BindingEvent</h3>
		{/*点击事件,点击按钮切换*/}
		<button onClick={clickHandler}>点击切换</button>
		<br/>
		{/*点击事件，拿到【事件参数】e*/}
		<button onClick={clickHandler1}>在终端打印点击事件参数e</button>
		<br/>
		{/*3.点击事件，在点击时传值，注意：onClick中一定要写成 箭头函数*/}
		{/*3.1组件渲染时，立即执行了；按钮也就失去了控制*/}
		{/*<button onClick={clickHandler2("Jack")}>点击按钮时，传递参数</button>*/}
		{/*3.2组件渲染时，不会执行；按钮点击后，才会执行*/}
		<button onClick={() => clickHandler2("Jack")}>点击按钮时，传递参数</button>
		<br/>
		{/*3.3 既要保持点击按钮时，执行事件；然后，还要拿到点击事件的【事件参数e】,就需要在箭头函数的参数中添加个e,然后定义函数时，按照clickHandler3参数*/}
		<button onClick={(e) => clickHandler3(e, "Jack")}>点击按钮时，传递实际参数name,并获取【事件参数】e</button>
		<br/>
		{flag && <span>loading……加载中</span>}
	</div>)

}

export default BindingEvent;