import {useEffect, useState} from "react";

/**
 * @清除副作用
 * 场景：一个定时器，当组件卸载了，卸载组件定时器还在跑
 *
 * 1.清除副作用【最常用的】执行时机是【组件卸载时】
 * 2.言外之意，清除副作用操作的 其他执行时机
 *
 *
 * 语法：
 * useEffect(()=>{
 *     fn();// 副作用函数执行
 *     return ()=>{
 *         // 清除副作用
 *     }
 * },[])
 *
 *
 * */
function Son() {
	useEffect(() => {
		// 副作用函数，定时器执行
		const timer = setInterval(() => {
			console.log("定时器在执行……")
		}, 1000);
		// 点击按钮，Son组件都已经卸载了，Son组件中这个定时器还在执行；这违背了 当依赖为空时，副作用函数应该是只在初次渲染时执行一次
		// 所以，需要清除副作用
		return () => {
			clearInterval(timer);
		}
	}, []);
	return (<div>
		这是Son子组件
	</div>)
}

export default function ClearEffect() {

	const [flag, setFlag] = useState(true);
	return (<div>
		<button onClick={() => setFlag(false)}>点击按钮，卸载Son组件</button>
		{flag && <Son></Son>}
	</div>)

}