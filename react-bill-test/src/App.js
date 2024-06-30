import {Outlet} from "react-router-dom";
// 导入定制主题样式文件
import "./css/theme.css";
import "./css/layout.scss";
import NavFooter from "./components/NavFooter";

function App() {

	return (<div className="container">
		<div className="main">
			<div className="scroll">
			<Outlet/>
			</div>
		</div>
		<NavFooter/>
	</div>);
}

{/*<div className="container">*/
}
{/*	<div className="header">头部</div>*/
}
{/*	<div className="main">*/
}
{/*		<Outlet/>*/
}
{/*	</div>*/
}
{/*	<NavFooter/>*/
}
{/*</div>*/
}
{/*测试全局生效样式*/
}
{/*<Button color="primary">这是Button组件，主题样式全局生效</Button>*/
}
{/*测试主题样式局部生效*/
}
{/*<div className="primary-color">*/
}
{/*	<Button color="primary">主题样式局部生效</Button>*/
}
{/*</div>*/
}

export default App;
