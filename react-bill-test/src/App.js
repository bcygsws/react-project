import './App.css';
import {Button} from 'antd-mobile';
import {Outlet} from "react-router-dom";
// 导入定制主题样式文件
import "./css/theme.css";

function App() {
	return (
		<div className="App">
			<h3>这是App组件</h3>
			{/*测试全局生效样式*/}
			<Button color="primary">这是Button组件，主题样式全局生效</Button>
			{/*测试主题样式局部生效*/}
			{/*<div className="primary-color">*/}
			{/*	<Button color="primary">主题样式局部生效</Button>*/}
			{/*</div>*/}
			<Outlet/>
		</div>
	);
}

export default App;
