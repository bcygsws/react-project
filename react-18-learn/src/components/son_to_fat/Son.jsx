// export default function Son(props) {
// 	console.log(props);
// 	 const child="我是son子组件数据";
// 	return (<div>
// 		<h3>我是Son子组件</h3>
// 		<button onClick={()=>props.onChangeFatData(child)}>点击按钮，向父组件传递数据</button>
//
// 	</div>)
// }

// 更简洁的方式，使用解构的方式
export default function Son({onChangeFatData}) {
	const child = "我是son子组件数据";
	return (<div>
		<h3>我是Son子组件</h3>
		<button onClick={() => onChangeFatData(child)}>点击按钮，向父组件传递数据</button>

	</div>)
}