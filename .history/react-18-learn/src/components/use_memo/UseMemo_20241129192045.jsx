/**
 *
 * @name:
 * @description:useMemo的作用
 * useMemo类似vue中的计算属性computed
 * 当依赖变化时，才重新渲染，否则就使用缓存值
 *
 * 作用：useMemo更加有效地控制了react页面不必要的代码执行，提升性能
 * 参考dom的回流和重绘
 * https://blog.csdn.net/qq_34202873/article/details/135233645
 *
 * */
import {useMemo, useState} from "react";

// 定义斐波拉切函数
const f = (n) => {
	// 斐波拉切函数执行
	console.log("斐波拉切函数执行了")
	if (n === 0) return 1;
	if (n === 1) return 1;
	if (n === 2) return 2;
	if (n > 2) {
		return f(n - 2) + f(n - 1);
	}

}
const UseMemo = () => {
	// 定义两个状态量，count1和count2
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	/**
	 *
	 * @description:
	 * 在使用useMemo之前，count1改变时，f(count1)函数执行;是数据驱动视图变化的
	 * 然后，count2改变时，发现f函数仍然执行了，和count1相关而与count2无关的业务代码执行了，
	 * 会加大内存开销，如何解决？
	 *
	 * 解决：使用useMemo计算钩子，将count1和函数执行，直接关联起来
	 * 使用useMemo计算钩子，接收变量result时,再分别改变count1和count2?
	 * 结果：
	 * count1改变时，f(count1)函数执行了，且组件渲染
	 * 当count2改变时，f函数就不执行了，只有组件渲染了
	 *
	 * */
		const result = f(count1);
	const result = useMemo(() => {
			return f(count1);
		}, [count1]);

	console.log('重新渲染了');
	return (<div className="memo-container">
		<h2>十三、useMomo钩子的使用</h2>
		<button onClick={() => setCount1(count1 + 1)}>count1值：{count1}</button>
		<button onClick={() => setCount2(count2 + 1)}>count2值：{count2}</button>
		{/*当使用useMemo后，count2变化时，result直接从缓存中拿到值，而不是组件更新后得到*/}
		{result}
	</div>);
}
export default UseMemo;