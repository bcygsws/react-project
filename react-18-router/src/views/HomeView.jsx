import {NavLink, Outlet, useNavigate} from "react-router-dom";

export default function HomeView() {
	const navigate = useNavigate();
	// 跳到关于页面事件处理
	const toAbout = () => {
		navigate("/about", {
			state: {
				id: 1,
				name: "张三"
			}
		});
	}
	return (<div>
		<h3>这是HomeView组件</h3>
		<hr/>
		<button onClick={toAbout}>转到关于页面</button>
		<hr/>
		<div className="news">
			{/*只有路由参数的有无，会影响匹配的组件；而state隐式传参和查询参数，不影响组件的匹配*/}
			<NavLink to="/detail/1?age=15" state={{name: "魏无忌"}}>新闻一</NavLink>
			<NavLink to="">新闻二</NavLink>
			<NavLink to="">新闻三</NavLink>
		</div>
		<hr/>
		{/*	声明式导航至details的两个子路由*/}
		<div style={{display: "flex", flexFlow: "column nowrap"}}>
			{/*可以写路由全名，也可以以直接写子级路由字符串，react-router内部会做拼接*/}
			<NavLink to="">去往welcome欢迎页</NavLink>
			<NavLink to="user">去往User主页</NavLink>
			<NavLink to="/home">去往welcome欢迎页</NavLink>
			<NavLink to="/home/user">去往User主页</NavLink>
			{/*welcome和user组件是由父路由渲染的，需要添加一个路由出口，作为占位符*/}
			<Outlet/>
		</div>
	</div>)
}