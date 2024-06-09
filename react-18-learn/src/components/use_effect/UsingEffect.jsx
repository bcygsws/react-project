/**
 * @name:UsingEffect
 * @description:使用另外一个hook,useEffect,实现监听
 * 含义：
 * useEffect：表示 组件的创建【不是由事件】引起而是由【渲染本身】引起的操作，例如：更改dom、发送ajax请求等等
 *
 * 表格：useEffect依赖项不同时，副作用函数cb 的执行时机：
 *        没有依赖项（可选参数）        组件初始渲染 + 组件更新时执行
 *        []空数组                     初始化时执行一次
 *        [list]                      组件初始渲染 + 依赖项list变化时执行
 *  注意：第1或者第3种情况是有本质区别
 *  第一种，任何的组件更新，就会执行；而第三种，指明了依赖项，只有该依赖项变化时才执行
 *
 *
 *
 * useEffect里面的语句，执行两次的原因？
 * 1.这是 React18 才新增的特性。
 * 2.仅在开发模式("development")下，且使用了严格模式("Strict Mode")下会触发。
 *   生产环境("production")模式下和原来一样，仅执行一次。
 * 3.之所以执行两次，是为了模拟立即卸载组件和重新挂载组件。
 *   为了帮助开发者提前发现重复挂载造成的 Bug 的代码。
 *   同时，也是为了以后 React的新功能做铺垫。
 *   未来会给 React 增加一个特性，允许 React 在保留状态的同时，能够做到仅仅对UI部分的添加和删除。
 *   让开发者能够提前习惯和适应，做到组件的卸载和重新挂载之后， 重复执行 useEffect的时候不会影响应用正常运行。
 *
 *
 * */
import {useEffect, useState} from 'react';
import NoDependency from "./NoDependency";
import EmptyDependency from "./EmptyDependency";
import HaveDependency from "./HaveDependency";
import ClearEffect from "./ClearEffect";

const URL = "http://geek.itheima.net/v1_0/channels";


// 总结：渲染完成，就要从服务器要数据，叫由渲染本身引起的
export default function UsingEffect() {
	const [list, setList] = useState([]);
	//第一个参数，cb,根据依赖项，要做的事情；第二个参数，可选的，是依赖项，如果为空，则只在渲染时执行一次
	useEffect(() => {
		async function getList() {
			// 额外的操作，获取列表数据
			const res = await fetch(URL);
			const list = await res.json();
			// console.log(list);// {data:{channels:[]}}
			const {channels} = list.data;
			console.log(channels);
			setList(channels);
		}

		// 调用getList()函数
		getList();


	}, [])
	return (<div>
		<h2>十、useEffect的用法</h2>
		<NoDependency></NoDependency>
		<hr/>
		<EmptyDependency></EmptyDependency>
		<hr/>
		<HaveDependency></HaveDependency>
		<hr/>
		<ClearEffect></ClearEffect>
		<ul>
			{
				list.map((item) =>
					<li style={{listStyle: "none"}} key={item.id}>{item.name}</li>
				)
			}
		</ul>

	</div>)
}