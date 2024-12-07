import {useDispatch, useSelector} from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd, selectCount
} from "@/store/modules/counterSlice.tsx";
import {useState} from "react";
import '../styles/counter.scss';

const Counter = () => {
    const [step, setStep] = useState<number | undefined>(2);
    const dispatch = useDispatch();
    const count = useSelector(selectCount) as any;
    return (
        <div className={'counter-container'}>
            <h3>Counter计数器</h3>
            <div className="first">
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className="second">
                <input type={"text"} value={step} onChange={(e) => {
                    // e.target.value 是string类型，需要转化为number类型
                    // console.log(e.target.value);
                    const step = e.target.value ? parseInt(e.target.value) : undefined;
                    setStep(step);
                }}/>
                <button onClick={() => dispatch(incrementByAmount(step))}>Add Amount</button>
                {/*异步增加，需要在slice中将incrementByAmount二次封装*/}
                <button onClick={() => dispatch(incrementAsync(step))}>Add Async</button>
                {/*满足条件增加，例如当前count值为奇数，点击按钮，增加才会生效*/}
                <button onClick={() => dispatch(incrementIfOdd(step))}>Add if count odd</button>
            </div>
        </div>
    )
}
export default Counter;