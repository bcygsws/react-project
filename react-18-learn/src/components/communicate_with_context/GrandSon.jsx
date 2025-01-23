import {useContext} from "react";
import {GrandContext} from "./GrandFat";

export default function GrandSon() {
	const {theme, setTheme} = useContext(GrandContext);
	return (<div>
		<h2>跨层组件通信，GrandSon组件</h2>
		<p style={{color: theme}}>渲染祖父组件的传值{theme}</p>
		<button onClick={() => setTheme("green")}>孙子组件点击按钮，theme切换成绿色
		</button>
	</div>)
}
