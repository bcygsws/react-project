import "../css/base.scss";
import {increment, decrement, addToNum} from "../store/modules/counterStore";
// 引进useSelector和useDispatch
import {useSelector, useDispatch} from "react-redux";

export default function Counter() {
	// 1.钩子useSelector作用：将store中的数据映射到组件中
	// 2.counter来自store/index文件夹中，创建store时，reducer:{counter:counterReducer}
	const {count} = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	console.log(increment());// {type: 'counter/increment', payload: undefined}
	console.log(addToNum(10));// {type: 'counter/addToNum', payload: 10}
	const plus = () => {
		// increment()一定要调用一下，才能拿到action
		dispatch(increment());
	}
	const minus = () => {
		dispatch(decrement());
	}
	const addNum = () => {
		dispatch(addToNum(10));// payload就是10
	}

	return (
		<div className="container">
			<div className="title">计数器演示react中redux的使用</div>
			<div className="main">
				<button className="btn" onClick={plus}>+</button>
				<span>{count}</span>
				<button className="btn" onClick={minus}>-</button>
				<button className="btn" onClick={addNum}>+10</button>
			</div>
		</div>
	)
}