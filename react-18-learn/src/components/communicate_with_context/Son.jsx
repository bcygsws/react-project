/**
 * @使用 状态提升 来实现兄弟组件之间的通信
 * 状态提升：兄弟组件都有父组件Fat
 * SiblingA--->传数据给Fat--->Fat父组件再将数据下发给SiblingB
 * 兄弟组件之间的通信，转化为 子组件--父组件，父组件---子组件两种通信方式
 *
 *
 * */
import GrandSon from './GrandSon';

export default function Son() {
	return (<div>
		<h2>Son子组件</h2>
		<hr/>
		<GrandSon></GrandSon>
	</div>)
}
