import {useDispatch, useSelector} from "react-redux";
import {add, minus, asyncAdd} from "@/store/modules/counter1/action1.tsx";

const NumRedux = () => {
    const dispatch = useDispatch();
    const {num} = useSelector((state: any) => state.num);
    return (<div>
        <h6>二、子组件，num变量</h6>
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(minus())}>-</button>
        <button onClick={() => dispatch(asyncAdd(12))}>异步</button>
        <span>{num}</span>
    </div>)
}
export default NumRedux;