import {forwardRef, useRef} from "react";

/**
 * @warning：
 * Warning: Function components cannot be given refs. Attempts to access this
 * ref will fail. Did you mean to use React.forwardRef()?
 *
 * */
// const Son = ({ref}) => {
// 	return (<input ref={ref}/>);
//
// }
// const ForwardRef = () => {
// 	const showRef = useRef(null);
// 	const refHandler = () => {
// 		console.log(showRef);
//
// 	}
// 	return <>
// 		<h2>十六、使用forwardRef在父组件中，获取子组件的dom</h2>
// 		<Son ref={showRef}></Son>
// 		<button onClick={refHandler}>focus</button>
// 	</>
// }

/**
 * @使用forwardRef(cb)创建组件时，上述警告消失；且点击按钮，获取到了子组件的dom对象
 * props,ref
 * ref是单独的参数，就是父组件绑定的ref={showRef},此处无需再解构了
 *
 * */
const Son = forwardRef((props, ref) => {
	return (<input ref={ref}/>);

})
const ForwardRef = () => {
	const showRef = useRef(null);
	const refHandler = () => {
		console.log(showRef);// {current:input}
		// 当前父组件中，点击按钮，获取子组件dom对象后，dom对象.focus()方法获取文本框焦点
		showRef.current.focus();

	}
	return <>
		<h2>十六、使用forwardRef在父组件中，获取子组件的dom</h2>
		<Son ref={showRef}></Son>
		<button onClick={refHandler}>focus</button>
	</>
}
export default ForwardRef;