import "./App.css";
import {Outlet} from "react-router-dom";
function App() {
	return (
		<div className="App">
			{/*	测试antd框架引入*/}
			{/*<Button type="primary" className="">antd的按钮</Button>*/}
			<Outlet/>
		</div>
	);
}

export default App;
