/**
 *
 * @description:useEffect空依赖时，
 * 验证：初始渲染时执行一次
 *
 * */
import {useEffect, useState} from "react";

export default function EmptyDependency() {
	const [count, setCount] = useState(1);
	useEffect(() => {
		console.log("空依赖项时，我的执行时机？")
	}, []);
	return (<div>
		<h3>useEffect空依赖项</h3>
		<button onClick={() => setCount(count + 1)}>点击按钮，更新数据，数据驱动更新组件：{count}</button>
	</div>)
}