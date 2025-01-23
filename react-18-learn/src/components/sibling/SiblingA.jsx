/**
 * @兄弟组件之间通信
 * SiblingA--->传数据给SiblingB
 *
 *
 * */
function SiblingA({onToFat}) {
	const toB = "我是组件SiblingA，传数据给我的兄弟SiblingB";
	return (<div>
		<h3>我是SiblingA组件</h3>
		<button onClick={() => onToFat(toB)}>向兄弟组件SiblingB传递数据
		</button>
	</div>)
}

export default SiblingA;