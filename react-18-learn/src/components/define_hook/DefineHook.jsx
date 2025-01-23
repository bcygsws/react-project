import {useState} from "react";

/**
 * @name:自定义hook
 * @description:将组件中业务逻辑代码封装成一个useXXX函数，以简化或复用代码
 * 案例：
 * 点击按钮，切换标签的显示和隐藏
 *
 * @react hook使用的两个规则：包括 useState、useContext、useEffect等等
 * 1.只能在一个组件当中或者一个自定义hook中使用，
 * 2.只能在组件顶层调用。不能在if……else和for循环语句以及组件函数内部的函数里使用
 *
 * */

// 封装前
// export default function DefineHook() {
// 	const [flag, setFlag] = useState(true);
// 	const changeFlag = () => {
// 		setFlag(!flag);
// 	}
// 	return (<div>
// 		{flag && <div>这是一个div,显示或隐藏？</div>}
// 		<button onClick={changeFlag}>点击按钮，显示/隐藏div</button>
// 	</div>);
// }

// 封装后

// 封装成的自定义hook
function useToggle() {
	const [flag, setFlag] = useState(true);
	const changeFlag = () => {
		setFlag(!flag);
	}
	return {flag, changeFlag};// 返回后再解构出来，否则useToggle中的局部变量，不能在当前hook之外使用
}

export default function DefineHook() {
	const {flag, changeFlag} = useToggle();
	return (<div>
		{flag && <div>这是一个div,显示或隐藏？</div>}
		<button onClick={changeFlag}>点击按钮，显示/隐藏div</button>
	</div>);
}