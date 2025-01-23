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
 *
 * */

export default function MyFather() {
	const name = "this is an app name";
	return (<div>
		<h2>五、父子组件之间的通信</h2>
		<p>父组件要传递的值：{name}</p>
		<Son name={name} child={<span>这是一个span</span>}>
			<span>会当凌绝顶，一览众山小。</span>
		</Son>

	</div>)
}