import {forwardRef, useRef, useImperativeHandle} from "react";
import "./index.less";

/**
 *
 * @name:UseImperativeHandle
 * @description:使用该该钩子，暴露子组件的函数给父组件
 *
 * @参数说明，该钩子有两个参数：
 * 第一个参数：ref,是父组件通过forwardRef，然后再传给useImperativeHandle钩子的ref
 * 第二个参数：是一个回调，返回要暴露给父组件的函数名
 *
 * useImperative(ref,()=>{
 *     return {
 *         f // 要暴露给父组件的函数
 *     }
 * }
 *
 * @useRef获取元素或组件dom对象的方法
 *
 * 1.const x=useRef(null)
 * 2.ref={x} 绑定在标签或者组件上
 * 3.x.current 就是绑定ref属性的那个元素或者组件的dom对象
 *
 *
 * */

const Son = forwardRef((props, ref) => {
	const inputRef = useRef(null);
	// 在son子组件中，定义获取焦点的逻辑，最后通过useImperativeHandle钩子
	// 暴露给父组件调用
	const focusHandler = () => {
		inputRef.current.focus();
	}
	// 钩子里的ref接收父组件传递过来的sonRef
	useImperativeHandle(ref, () => {
		return {
			focusHandler
		}
	});
	return (<input ref={inputRef}/>);

})
const UseImperativeHandle = () => {
	const sonRef = useRef(null);
	const refHandler = () => {
		console.log(sonRef);
		// useImperativeHandle钩子已经将获取焦点的函数focusHandler暴露给当前父组件
		// sonRef.current.focusHandler();
		sonRef.current.focusHandler();
	}
	return <div className="imperative-container">
		<h2>十七、使用useImperativeHandle钩子，将子组件函数暴露给父组件</h2>
		<Son ref={sonRef}></Son>
		<button onClick={refHandler}>focus</button>
	</div>
}
export default UseImperativeHandle;