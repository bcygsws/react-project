import {useRef, useState} from "react";
import React from 'react';

/**
 * @desc:useRef钩子获取dom元素对象
 * 使用步骤：
 * 1.是由useRef钩子顶一个对象，例如：inputRef
 * 2.在需要获取dom元素对象时，在标签上添加ref属性，例如：ref={inputRef}
 * 3.则可以通过inputRef.current（等价于e.target）获取到dom元素对象，例如：inputRef.current.value
 * 注：inputRef.current.value自然也能拿到实时的value值
 *
 * 注：两组等式：根据需要灵活选用
 * e.target=myRef.current
 * e.target.value=myRef.current.value
 *git
 * */

function UsingRef() {
    const [inputVal, setInputVal] = useState("");
    const inputRef = useRef(null);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("e.target===", e.target);
        console.log("e.target.value===", e.target.value);
        console.log("inputRef.current===", inputRef.current);
        console.log("inputRef.current.value===", inputRef.current?.value);
        // setInputVal(e.target.value);
        setInputVal(inputRef.current?.value);
    }
    return (
        <div>
            <h6>四、useRef获取dom对象</h6>
            <input type="text" value={inputVal} onChange={inputHandler} ref={inputRef}/>
        </div>
    )
}

export default UsingRef;