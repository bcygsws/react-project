// import logo from './logo.svg';
import './App.css';

// 引入子组件
import {NavLink} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/*路由导航组件名，声明式导航*/}
				<NavLink to="/home">主页</NavLink>
				<NavLink to="/about">关于</NavLink>
			</header>
		</div>
	);
}

export default App;
