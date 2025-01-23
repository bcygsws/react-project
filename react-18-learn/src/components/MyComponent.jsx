/**
 * @React组件
 * 在react中组件，就是一个函数名大写的函数，里面包含【组件逻辑】和【视图UI】；在父组件中，使用</>或者一对<></>引入后，就可以使用了
 * 开发项目时，就像搭积木一样，把组件构建出来，再填充到相应的位置
 *
 * useState---状态不可变
 * 我们通常是替换它，而不是修改它，这就是状态不可变
 * a.数据改变，界面没有更新
 * b.数据改变，界面同步更新
 *
 * 1.对于基本类型，直接number,string,boolean类型，直接在setCount传入新值即可
 * 2.然而，对于复杂类型，比如：对象，同样不能使用obj.name="傅红雪"；直接修改obj本身，而是我setObj传入一个新构建的对象
 *
 * let [obj,setObj]=useState({name:"张无忌"});
 * setObj({...obj,name:"傅红雪"})
 * 对于对象，键名相同时，后面键名相同的键值，会覆盖之前的；这也就事实上，完成了name键值的修改
 *
 * @React样式
 * 1.行内样式
 * style={{color:red,fontSize:20px}}
 * 注意：行内样式中，有多单词的，例如：font-size，需要使用驼峰命名法，写成一个整体
 *
 * 2.类样式
 * 2.1 属性名是className，而不能用class,因为class关键字在定义类组件时，已经使用了
 * 2.2 配合样式文件
 *
 *
 *
 * */
import {useState} from "react";
// 引入样式文件
import myStyle from "../css/base.module.less";

export default function MyComponent() {
	// 1.基本类型
	// 初始值为0
	// let [count] = useState(0);
	let [count, setCount] = useState(0);
	const clickHandler = () => {
		// a.我们不是直接修改count；而是为setState()传入一个新值，这就是【状态不可变】
		// 结果：count值改变了，但界面没有同步更新
		// count++;
		// console.log(count);

		// b.不去直接改变count,而是为setCount传入一个新的参数：count+1
		// 结果：count值改变了，界面也同步更新
		setCount(count + 1);
		console.log(count);// 点击一下，count还是0；下一次，count变成1了
	}
	// 2.复杂类型
	let [obj, setObj] = useState({name: "张无忌"});
	const clickHandler1 = () => {
		setObj({...obj, name: "傅红雪"});
	}
	return (<div className={myStyle.container}>
		<h2>三、我是MyComponent组件，useState在基本类型和复杂类型变量的用法</h2>
		<button onClick={clickHandler}>{count}</button>
		<br/>
		{/*特别注意：在react框架中，不能在一对标签页中渲染对象，例如：{obj};否则，报错：Objects are not valid as a React child */}
		<div className={myStyle.myDiv}>name值：{obj.name}</div>
		<button onClick={clickHandler1}>点击按钮，更改对象name属性值</button>
	</div>);
}