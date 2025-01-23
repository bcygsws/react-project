export default function Son(props) {
	console.log(props);
	return (<div>
		<h3>我是Son子组件</h3>
		<p>子组件接收值：{props.name}</p>
		{/*child是父组件传递过来的一个jsx模板，在当前子组件中按照原义渲染出来*/}
		<p>子组件接收值（传递过来的jsx模板按照原义渲染）：{props.child}</p>
		{/*	渲染子组件Son中包裹的内容：*/}
		<p>渲染子组件中包裹的内容：{props.children}</p>
	</div>)
}