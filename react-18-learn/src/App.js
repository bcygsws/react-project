import './App.css';

// 引入子组件
import {NavLink, Outlet, useLocation} from "react-router-dom";
// 引入类样式包
import classNames from "classnames";
import {useEffect, useState} from "react";

function App() {
	// flag状态变量，维护导航按钮选中时的样式,type:0，主页 type:1,关于 type:2,布局
	const location = useLocation();
	const [flag, setFlag] = useState({type: '/'});
	// 刷新页面时，App组件，重新完成渲染；useEffect就会执行；将useState中flag值的丢失，重新找回
	useEffect(() => {
		setFlag({...flag, type: location.pathname})
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{/*路由导航组件名，声明式导航*/}
				<NavLink to="/" className={classNames(flag.type === '/' && 'selected')}
				         onClick={() => setFlag({...flag, type: '/'})}>主页</NavLink>
				<NavLink to="/about" className={classNames(flag.type === '/about' && 'selected')}
				         onClick={() => setFlag({...flag, type: '/about'})}>关于</NavLink>
				<NavLink to="/main" className={classNames(flag.type === '/main' && 'selected')}
				         onClick={() => setFlag({...flag, type: '/main'})}>布局</NavLink>
			</header>
			<div className="content">
				<Outlet/>
			</div>
		</div>
	);
}

export default App;
