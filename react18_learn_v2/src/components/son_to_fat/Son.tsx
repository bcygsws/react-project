import {useEffect, useState} from "react";

const Son = ({getValue}: { getValue: (value: number) => void }) => {
    const [count, setCount] = useState(0);
    const sendToFat = () => {
        getValue(count);
    }
    useEffect(() => {
        console.log('son useEffect');
        getValue(count);
    }, [count])
    return (
        <div className="son-to-fat">
            <h6>我是子组件</h6>
            <button onClick={sendToFat}>向父组件Fat传值</button>
            <button onClick={() => setCount(count + 1)}>改变子组件的count值：{count}</button>

        </div>
    )
}
export default Son;