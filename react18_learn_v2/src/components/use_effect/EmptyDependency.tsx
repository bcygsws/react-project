import {useEffect, useState} from "react";

/**
 * @DESC:空依赖的情况
 *
 * */
const EmptyDependency = () => {
    const [count, setCount] = useState(0);
    // 点击按钮，count值改变，useEffect里的内容，还是在组件初始渲染时执行了一次
    useEffect(() => {
        console.log('useEffect执行了---空依赖');
    }, []);
    return (<div>
        <h6>情形二、useEffect使用空依赖时，执行的时机？</h6>
        <button onClick={() => {
            setCount(count + 1)
        }}>点击观看useEffect函数体中输出内容：{count}
        </button>
    </div>)
}
export default EmptyDependency;