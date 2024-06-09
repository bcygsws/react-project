function SiblingB({toB}) {
	return (<div>
		<h3>我是SiblingB组件</h3>
		{/*	渲染从兄弟组件接收的数据*/}
		<p>组件SiblingA传递给兄弟组件SiblingB的数据：{toB}</p>
	</div>)
}

export default SiblingB;