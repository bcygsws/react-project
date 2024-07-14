import MyApp from "../../components/MyApp";
import BindingEvent from "../../components/BindingEvent";
import MyComponent from "../../components/MyComponent";
import UseRef from "../../components/UseRef";
import MyFather from "../../components/fat_to_son/MyFather";
import MyFatherA from "../../components/son_to_fat/MyFatherA";
import Fat from "../../components/sibling/Fat";
import {Link, useNavigate} from "react-router-dom";

export default function HomeView() {
	const navigator = useNavigate();
	return (<div>
		{/*react导航的两种方式：声明式导航和编程式导航*/}
		{/*1.声明式导航*/}
		<Link to="/about">跳转至/about页面</Link>
		<hr/>
		{/*编程式导航，useNavigator*/}
		<button onClick={() => {
			navigator('/about');
		}}>跳转至/about页面
		</button>
		<hr/>
		{/*导航路由携带参数*/}
		<Link to="/about?name=Jack&id=1">导航至/about页面，并携带查询参数</Link>
		<hr/>
		{/*导航携带隐式state参数*/}
		{/*<Link to="/about" state={{tag: 1, name: 2}}>导航至/about页面，携带隐式参数state</Link>*/}
		<hr/>
		{/*一、MyApp react模板jsx的基本用法*/}
		<MyApp></MyApp>
		{/*	二、react事件绑定的方式*/}
		<BindingEvent></BindingEvent>
		{/*	三、react中的组件*/}
		<MyComponent></MyComponent>
		{/*	四、react中获取dom对象*/}
		<UseRef></UseRef>
		{/*五、父子组件之间的通信*/}
		<MyFather></MyFather>
		{/*	六、子组件向父组件传值*/}
		<MyFatherA></MyFatherA>
		{/*	七、兄弟组件之间的通信*/}
		<Fat></Fat>

	</div>);
}