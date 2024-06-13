import './App.scss';
import {Routes, Route, NavLink, Navigate} from 'react-router-dom';
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import Details from "./components/Details";
import Welcome from "./components/Welcome";
import User from "./components/User";

/**
 * 1.对于这里的路由配置也可以使用
 * export default [
 *
 * ];
 * 抽象成router.js文件，然后在App中，使用useRoutes钩子，以{}语法放在App组件中
 *
 * 2.例如：
 * import {useRoutes} from "react-router-dom";
 * const App=()=>{
 *     const routesElement=useRoutes();
 *     return (<div>
 *
 *
 *         {routesElement}
 *     </div>);
 *
 * }
 *
 *
 * */

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavLink to="/">首页</NavLink>
				<NavLink to="/about">关于</NavLink>
			</header>
			<hr/>
			<Routes>
				<Route path="/home" element={<HomeView/>}>
					<Route index element={<Welcome/>}/>
					<Route path="user" element={<User/>}/>
				</Route>

				{/*HomeView下面还有嵌套子级路由，将Route由 单标签 改造成 双标签*/}
				<Route path="/about" element={<AboutView/>}/>
				{/*重定向*/}
				<Route path="/" element={<Navigate to="/home" replace={false}/>}/>
				{/*<Route path="/detail/:id" element={<Details/>}/>*/}
				<Route path="/detail/:id" element={<Details/>}>

				</Route>
				{/*	404后备组件*/}
				<Route path="*" element={<div>404，不存在此页面</div>}/>
			</Routes>
		</div>
	);
}

export default App;
