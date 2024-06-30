import "./App.css";
import {Button} from "antd";
import {Outlet} from "react-router-dom";

function App() {
	return (
		<div className="App">
			这是App组件
			{/*	测试antd框架引入*/}
			<Button type="primary" className="">antd的按钮</Button>
			<Outlet/>
		</div>
	);
}

export default App;
