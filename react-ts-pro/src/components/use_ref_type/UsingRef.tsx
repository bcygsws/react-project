import {useEffect, useRef} from "react";

/**
 * @name:UsingRef
 * @description:useRef钩子和ts
 * useRef的作用：
 * 1.获取dom，如input文本框获取焦点
 * 2.作为一个稳定的存储器，例如可以使用联合类型，定义定时器对象
 *
 * 实现：组件渲染完成时，文本框就获得焦点
 *
 *
 * */
const UsingRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    // 方式一：此种联合类型的方式，定义的timer，功能不受影响；但是useEffect中timer.current会报错
    // const timer = useRef<number|undefined>(undefined);

    // 方式二：timer泛型限制为ReturnType获取的函数setInterval函数的类型
    // 因为js是一门弱类型语言，使用typeof运算符可以明确类型
    const timer = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
        // 1.获取dom
        // ?.可选链
        // 获取焦点，做一个类型守卫，因为dom完全挂载之前，inputRef.current是null
        inputRef.current?.focus();
        // 2.存储定时器对象
        timer.current = setInterval(() => {
            console.log('123……');
        }, 1000);
        // 清除副作用，UsingRef销毁时，定时器也清除
        return () => {
            clearInterval(timer.current);
        }


    }, [])
    return (<div>
        <h2>六、useRef泛型和ts</h2>
        <input ref={inputRef}/>
    </div>)
};
export default UsingRef;