import {useCallback, useState, memo} from "react";
import "./index.less";

/**
 *
 * @name:
 * @description:使用useCallback钩子，在(父)组件多次渲染时，缓存函数
 *
 * */
// 1.使用useCallback钩子前

// const Input = memo(({onChange}) => {
// 	console.log('子组件Input重新渲染了');
// 	return <input onChange={(e) => onChange(e.target.value)}/>
// });
// const UseCallback = () => {
// 	const [count, setCount] = useState(0);
// 	const changeHandler = (val) => {
// 		console.log(val);
// 	}
// 	return (<div className="callback-container">
// 		<Input onChange={changeHandler}/>
// 		<div>{count}</div>
// 		<button onClick={() => setCount(count + 1)}>change count</button>
// 	</div>)
// };

// 2.使用useCallback钩子后
const Input = memo(({onChange}) => {
	console.log('子组件Input重新渲染了');
	return <input onChange={(e) => onChange(e.target.value)}/>
})
const UseCallback = () => {
	const [count, setCount] = useState(0);
	// 1.使用useCallback钩子缓存前，changeHandler函数（js中函数也是对象），因此父组件
	// 渲染子组件Input就会跟随父组件渲染

	// const changeHandler = (val) => {
	// 	console.log(val);
	// }
	const changeHandler = useCallback((val) => {
		console.log(val);
	}, []);
	return (<div className="callback-container">
		<Input onChange={changeHandler}/>
		<button onClick={() => setCount(count + 1)}>change count</button>
		<div>{count}</div>
	</div>)
};
export default UseCallback;