/**
 *
 * @description:useEffect没有依赖项时，
 * 验证：初始渲染+组件更新时执行
 *
 * */
import {useEffect, useState} from "react";

export default function NoDependency() {
	const [count, setCount] = useState(1);
	useEffect(() => {
		console.log("没有依赖项时，我的执行时机？")
	});
	return (<div>
		<h3>useEffect没有依赖项</h3>
		<button onClick={() => setCount(count + 1)}>点击按钮，更新数据，数据驱动更新组件：{count}</button>
	</div>)
}