/**
 * @desc:单独使用redux
 * 一、单独使用redux步骤
 * 1. 创建reducer函数，接收state和action，返回新的state（类似映射关系，旧状态在该函数中映射为新状态）
 * 2. 创建store，createStore接收reducer，返回store
 * 3. 在组件中导入store，使用store.dispatch(action)发送action
 *   在组件中导入store，使用store.getState()获取store中的state
 *   在组件中导入store，使用store.subscribe(() => {})监听store中的state变化
 *   在组件中导入store，使用store.unsubscribe(() => {})取消监听store中的state变化
 *
 * */
import {store} from './index';
import {useState} from "react";
import Son from "./Son.tsx";

const UseSingleRedux = () => {
    const [count, setCount] = useState(0);
    store.subscribe(() => {
        console.log('store中的state变化了', store.getState());
        setCount(store.getState());
    });
    return (
        <div className="redux-container">
            <h6>十一、单独使用redux,UseSingleRedux</h6>
            <button onClick={() => {
                store.dispatch({type: 'INC'})
            }}>+
            </button>
            <button onClick={() => {
                store.dispatch({type: 'DEC'})
            }}>-
            </button>
            <button onClick={() => {
                store.dispatch({type: 'CHANGE', payload: 100})
            }}>更新
            </button>
            <div>count值：{count}</div>
            <Son/>
        </div>
    )
}
export default UseSingleRedux;