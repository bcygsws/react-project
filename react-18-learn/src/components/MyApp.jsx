import {useState} from 'react';

/**
 * @name:MyApp
 * @description:实现一个自增计数器
 *
 * 使用jsx的好处：
 * jsx是js和html（xml的一种）的缩写
 *
 * 设计jsx的初衷：
 * 1.既可以使用html声明式模板
 * 2.又可以保留js的 【可编程能力】
 *
 * jsx的本质；
 * jsx不是js的标准写法，浏览器直接不能识别，需要使用特殊的解析工具（例如:babel，被波尔）解析成js之后，才能在浏览器中运行
 *
 * {}语法：
 * 解析 字符串
 * 解析 变量
 * 解析 函数的调用
 * 解析 方法
 *
 * list数组的遍历：
 * 1.使用数组的map方法，callback函数体部分，不写大括号；如果函数体部分写了大括号，就要使用return 关键字
 * 2.需要给每个遍历对象，加上一个key属性，key={item.id}
 * 注：key的作用是：react内部使用的，用以提示渲染性能的
 *
 * &&和三元表达式?: 实现基本条渲染
 * 复杂条件渲染：使用定义的函数，返回不同的jsx模板；然后，在使用的时候，使用{}语法调用这个函数
 * 伪代码：
 * if(){
 *     return <div></div>
 * }else if(){
 *     return <div></div>
 * }else{
 *     return <div></div>
 * }
 *
 * */
const showLog = () => {
	return "Jack";
}
// 定义一个list列表，渲染在组件中
const list = [
	{id: 1, name: "张无忌"},
	{id: 2, name: "萧峰"},
	{id: 3, name: "杨过"},
	{id: 4, name: "令狐冲"}
];
// 分支控制
let flag = true;
// react复杂条件渲染
let articleType = 3; // 0 1 3，分别表示文章中无图、单图和3张图片
const getArticleContent = () => {
	if (articleType === 0) {
		return <div>文章内容中 无图</div>
	} else if (articleType === 1) {
		return <div>文章内容中 单图</div>
	} else {
		return <div>文章内容中 三张图</div>
	}
}
export default function MyApp() {
	const [count, setCount] = useState(0);
	const [form, setForm] = useState({name: '张红'});
	const incCount = () => {
		setCount(count + 1);
		setForm({...form, name: "李小红"});
	}
	return (<div className="my-app">
		{/*解析字符串*/}
		{"this is a good idea!"}
		{/*解析变量*/}
		<p>{count}</p>
		<p>{form.name}</p>
		{/*调用函数*/}
		{showLog()}
		<br/>
		{/*调用方法,获取时间戳的五种方法(后端常用)：https://www.jb51.net/javascript/320462a25.htm*/}
		{new Date().getTime()}<br/>
		{new Date().valueOf()}<br/>
		{Date.now()}<br/>
		{Date.parse(new Date())}<br/>
		{Number(new Date())}<br/>
		{new Date().toLocaleString()}<br/>
		{/*使用js对象，控制内联样式*/}
		<div style={{color: "red"}}>this is a red div</div>
		{/*	循环渲染list列表*/}
		{/*map中数组遍历时，return关键字不能缺少，或者map回调函数体不写大括号，这是箭头后面内容，默认作为整体返回*/}
		{/*方式一：写return*/}
		{/*<ul>*/}
		{/*	{list.map(item => {*/}
		{/*			return <li key={item.id}>{item.id}---{item.name}</li>*/}
		{/*		}*/}
		{/*	)}*/}
		{/*</ul>*/}

		{/*方式二：不写return*/}
		<ul>
			{list.map(item =>
				<li key={item.id}>{item.id}---{item.name}</li>
			)}
		</ul>
		{/*分支选择，使用&& 与符号和 ?:三元表达式 来控制分支选择*/}
		{flag && <span>我需要显示吗？</span>}
		<br/>
		{/*分支选择，三元表达式控制显示不同的内容*/}
		{flag ? <span>loading……</span> : <span>渲染数据完成</span>}
		<br/>
		{/*复杂分支渲染，使用if多分支，返回不同的jsx模板，然后使用大括号语法；来调用这个函数*/}
		{getArticleContent()}
		<br/>
		<button onClick={incCount}>+1</button>
	</div>)


}