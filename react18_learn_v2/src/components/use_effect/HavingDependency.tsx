import {useEffect, useState} from "react";

/**
 * @desc:useEffect有依赖
 *
 *
 * */
const HavingDependency = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('李红');
    useEffect(() => {
        console.log('useEffect执行了---有依赖');
    }, [count]);
    return (
        <div>
            <h6>情形三、useEffect有依赖时</h6>
            <div>useEffect依赖count值：{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <div>useEffect不依赖name值：{name}</div>
            <button onClick={() => setName(name + '*')}>name</button>
        </div>
    )
}
export default HavingDependency;