import {useDispatch, useSelector} from "react-redux";
import {asyncChange, dec, inc} from "@/store/modules/counter/action.tsx";
import NumRedux from "@/components/react_redux/NumRedux.tsx";

/**
 * @desc: TODO
 * 方案一、react-redux+redux+redux-thunk实现状态管理
 * 方案二、更常用的是react-redux+RTK(reduxjs@/toolkit)实现状态管理
 *
 *
 * */
const UsingReactRedux = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter);
    console.log("count===", count);
    return (
        <>
            <h6>一、UsingReactRedux</h6>
            <div>
                <button onClick={() => dispatch(inc())}>+</button>
                <button onClick={() => dispatch(dec())}>-</button>
                {/*提交异步action*/}
                <button onClick={() => dispatch(asyncChange(5))}>异步</button>
                <span>count值：{count}</span>
                <NumRedux/>
            </div>
        </>
    )
}
export default UsingReactRedux;