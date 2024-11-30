/**
 * @name:组件UseReducer
 * @description:使用useReducer实现计数器功能
 *
 * */
import './index.less';
import {useReducer} from "react";
// 定义reducer函数
const reducer = (state, action) => {
	switch (action.type) {
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		case "UP":
			return state + action.payload;
		default:
			return state;
	}
}

const UseReducer = () => {
	// state是统一管理的状态量，useReducer第二个参数是其初始值
	const [state, dispatch] = useReducer(reducer, 0);
	return (<div className="reducer-container">
		<h2>十二、useReducer的使用步骤，简化了store的ch</h2>
		<div className="btn-group">
			{/*数值+1*/}
			<button onClick={() => dispatch({type: "INC"})}>+</button>
			{/*数值-1*/}
			<button onClick={() => dispatch({type: "DEC"})}>-</button>
			{/*为action传参，和type一样，是action中的一个属性payload*/}
			<button onClick={() => dispatch({type: "UP", payload: 100})}>更新</button>
			{/*展示当前计数值*/}
			<div>{state}</div>

		</div>
	</div>)
};
export default UseReducer;