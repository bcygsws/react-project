import {useLocation, useNavigate} from "react-router-dom";

export default function AboutView() {
	// 获取隐式state参数
	const location = useLocation();
	const navigator = useNavigate();
	return (<div>
		<h3>这是AboutView组件</h3>
		{/*	编程式导航，回到/home*/}
		<button onClick={() => {
			navigator(-1)
		}}>编程式导航的方式，回到/home
		</button>
		<ul>
			<li>id值：{location.state?.id}</li>
			<li>name值：{location.state?.name}</li>
		</ul>
	</div>)
}