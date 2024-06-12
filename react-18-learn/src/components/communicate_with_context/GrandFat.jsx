/**
 * @使用context机制：实现跨层级组件通信
 *
 * */
import {createContext, useState} from "react";
import Son from "./Son";
export const GrandContext = createContext(null);
export default function GrandFat() {
	const [theme, setTheme] = useState("red");
	/**
	 * @name:changeTheme
	 * @description:点击按钮，更改theme的值
	 * 1.在孙子组件中，更改theme值，同样使用【谁的数据谁维护】的原则，将theme和setTheme都传递给孙子组件
	 * 2.在祖父组件中，更改theme值，孙子组件中theme的值会同步更新吗？会的，单向数据流；当在组件中更改theme值，这种更新也会下发到孙子组件
	 *
	 *
	 * */

	return (<GrandContext.Provider value={{theme, setTheme}}>
		<h2>九、跨层级组件通信，GrandFat组件</h2>
		<button onClick={() => setTheme("orange")}>祖父组件中，更改theme值</button>
		<Son></Son>
	</GrandContext.Provider>)
}
