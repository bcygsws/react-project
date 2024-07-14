import './App.css';

// 引入子组件
import {NavLink, Outlet} from "react-router-dom";
// 引入类样式包
import classNames from "classnames";
import {useState} from "react";

function App() {
	// flag状态变量，维护导航按钮选中时的样式,type:0，主页 type:1,关于 type:2,布局
	const [flag, setFlag] = useState({type: 0});
	return (
		<div className="App">
			<header className="App-header">
				{/*路由导航组件名，声明式导航*/}
				<NavLink to="/" className={classNames(flag.type === 0 && 'selected')}
				         onClick={() => setFlag({...flag, type: 0})}>主页</NavLink>
				<NavLink to="/about" className={classNames(flag.type === 1 && 'selected')}
				         onClick={() => setFlag({...flag, type: 1})}>关于</NavLink>
				<NavLink to="/main" className={classNames(flag.type === 2 && 'selected')}
				         onClick={() => setFlag({...flag, type: 2})}>布局</NavLink>
			</header>
			<div className="content">
				<Outlet/>
			</div>
		</div>
	);
}

export default App;
