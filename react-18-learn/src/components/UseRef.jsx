import {useRef, useState} from "react";

/**
 * @name: React中获取dom
 * 在vue和react框架中，一般不操作dom,来实现功能；但有些场景，需要获取dom对象
 * a. ref 在html标签中声明属性
 * b. useRef() 在返回模板之前定义
 *
 * inputRef.current 就可以在dom可用阶段，拿到dom对象（生命周期钩子）
 * console.log(inputRef.current);
 *
 * */
export default function UseRef() {
	const [inputVal, setInputValue] = useState("");

	const inputRef = useRef(null);
	// 一旦往文本框中输入内容，就可以打印dom对象
	const inputHandler = (e) => {
		console.log(e.target);
		setInputValue(e.target.value);
		console.log(inputRef.current);// <input type="text" value>
	}

	return (<div><h2>四、这是UseRef组件</h2>
			<input type="text" ref={inputRef} value={inputVal} onChange={inputHandler}/>
		</div>
	)
}