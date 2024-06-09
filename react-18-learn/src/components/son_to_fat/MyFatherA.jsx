import Son from "./Son";

/**
 * @一、description:父子组件通信
 * 1.1.父组件绑定 name={name}
 * 1.2.子组件使用props属性接收
 *
 * function Son(props){
 *     console.log(props);// {name:"this is an app name"}
 * }
 *
 * @二、父子组件通信两点说明：
 * 2.1 props可以传递变量、字符串、数字、布尔值、数组、对象、函数和jsx模板
 * 其他都好理解，jsx模板例如：
 * child={<span>我是child子组件</span>}
 * 数组：arr={["vue","react","javascript"]}
 * 对象：obj={{name:"张华",age:22}}
 *
 * 2.2 子组件只能读props中的值，但是不能修改props,父组件的数据只能有父组件修改
 * 2.3 特殊的children属性
 * 在子组件这一对标签中，写入jsx；它也是能被子组件的props接收到的
 * <Son>
 *     <span>会当凌绝顶，一览众山小。</span>
 * </Son>
 *
 *
 * @三、子组件向父组件传值
 * 1.父组件传递一个函数给子组件，子组件将传递给父组件的值绑定到props接收到的函数上，并执行
 * 相当于还是父组件中的函数执行了，这样就实现了子组件向父组件传值
 *
 *
 *
 *
 * */
import {useState} from "react";

export default function MyFatherA() {
	// 无效方式；
	// let str = "";

	// 正确方式：
	const [str, setStr] = useState("");
	const changeFatData = (data) => {
		console.log("Son子组件传递给父组件的数据：", data);
		// str改变了，但是父组件界面没有更新

		// console.log(str);
		// // 这种赋值，str的值确实改变了，但不会引起父组件界面更新；必须使用useState
		// str = data;
		// console.log(str);// 我是son子组件数据
		setStr(data);
	}
	return (<div>
		<h2>六、子组件向父组件传值</h2>
		<p>{str}</p>
		<hr/>
		<Son onChangeFatData={changeFatData}></Son>

	</div>)
}