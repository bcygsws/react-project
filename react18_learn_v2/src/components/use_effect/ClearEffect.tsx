import {useEffect, useState} from "react";

/**
 * @desc:清除副作用
 * 场景：子组件中，useEffect监视钩子内，有一个定时器执行某个操作；我们想象，当子组件被卸载了，那么useEffect钩子
 * 里的代码，就不应该再执行了；但是，在【1.没有清除副作用】的实例中，虽然子组件被卸载了，但是定时器还在执行
 *
 *
 * 解决：这时，就需要使用闭包,闭包返回函数的形式，return() => {}，清除副作用，在useEffect里，返回一个函数，这个函数会在组件卸载时执行
 *
 * */

const ClearEffect = () => {
    const [flag, setFlag] = useState(true);
    return <div>
        <h6>清除副作用</h6>
        <button onClick={() => setFlag(false)}>卸载子组件</button>
        {flag && <Son/>}
    </div>
}
export default ClearEffect;

const Son = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // 1.没有清除副作用
        // setInterval(() => {
        //     console.log('useEffect执行了');
        //     setCount(count + 1);
        // }, 1000);

        // 2.清除副作用
        const timer = setInterval(() => {
            // setCount(count + 1);
            console.log("清除副作用");
        }, 1000);
        // 闭包，清除副作用
        return () => {
            clearInterval(timer);
        }
    }, [count])
    return (<div>
        <h6>Son子组件</h6>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>)

}