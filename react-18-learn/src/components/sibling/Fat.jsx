import SiblingA from "./SiblingA";
import SiblingB from "./SiblingB";
import {useState} from "react";

/**
 * @使用 状态提升 来实现兄弟组件之间的通信
 * 状态提升：兄弟组件都有父组件Fat
 * SiblingA--->传数据给Fat--->Fat父组件再将数据下发给SiblingB
 * 兄弟组件之间的通信，转化为 子组件--父组件，父组件---子组件两种通信方式
 *
 *
 * */

function Fat() {
	const [val, setVal] = useState("");
	const toFat = (data) => {
		// 当前父组件负责将SiblingA数据收集起来，然后下发给子组件SiblingB
		setVal(data);
	}
	return (<div>
		<h2>七、兄弟组件通信，我是Fat组件</h2>
		<SiblingA onToFat={toFat}></SiblingA>
		<SiblingB toB={val}></SiblingB>
	</div>)
}

export default Fat;