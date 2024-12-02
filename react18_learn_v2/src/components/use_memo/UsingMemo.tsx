import {useMemo, useState} from "react";

/**
 * @desc:useMemo的使用
 * 场景：
 * 1.result变量 ---是f(count1)的返回值；换句话说它依赖的只是count1;我们点击修改count2的按钮，只需要组件更新就行了，而不需要调用
 * f(count1)函数；但是，改变count2的按钮点击时，组件更新了，斐波拉切函数执行了
 *
 * 2.解决：使用useMemo
 * const result=useMemo(()=>{
 *     return f(count1)
 * },[count1])
 *
 * 验证：此时，在点击count2按钮，修改count2,只会有组件更新；而斐波拉切函数就不执行了，这样就节省了内存消耗，提升性能
 *
 * */
// 斐波拉契函数
function f(n: number): number {
    console.log('斐波拉切函数执行了');
    if (n === 0) return 1;
    else if (n === 1) return 1;
    else if (n === 2) return 2;
    else {
        return f(n - 1) + f(n - 2);
    }
}

const UsingMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // 不节省性能
    // const result = f(count1);

    // 节省性能
    const result = useMemo(() => {
        return f(count1);
    }, [count1]);
    // 指示组件更新了
    console.log('组件更新了');
    return (
        <div>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <div>count1的值：{count1}</div>
            <button onClick={() => setCount2(count2 + 1)}>+</button>
            <div>count2的值：{count2}</div>
            <div>result的值：{result}</div>
        </div>
    )
}
export default UsingMemo;