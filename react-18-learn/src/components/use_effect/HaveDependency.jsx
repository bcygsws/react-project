/**
 *
 * @description:useEffect有依赖项时,
 * 验证：初始渲染+组件依赖项变化时执行
 *
 * */
import {useEffect, useState} from "react";

export default function HaveDependency() {
	const [name, setName] = useState(1);
	useEffect(() => {
		console.log("有依赖项时，我的执行时机？")
	}, [name]);
	return (<div>
		<h3>useEffect有依赖项</h3>
		<button onClick={() => setName(name + 1)}>点击按钮，更新数据，数据驱动更新组件{name}</button>
	</div>)
}