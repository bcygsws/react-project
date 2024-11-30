/**
 * @desc:单独使用redux
 * redux三个重要概念：state,action,reducer
 * 1. state：状态，保存着当前组件的状态，类似数据库中的表，例如：{count:0}
 * 2. action：行为，指示我们应该怎样修改数据；类似数据库中的操作，例如：{type:'INC'}
 * 3.reducer：reducer，一个函数，根据dispatch的action的描述，生成新的状态；
 * 类似数据库中的查询，例如：(state,action) => {return state}
 *
 * 注：dispatch：分发，类似数据库中的插入，例如：store.dispatch({type:'INC'})
 *
 * 一、单独使用redux步骤
 * 1. 创建reducer函数，接收state和action，返回新的state（类似映射关系，旧状态在该函数中映射为新状态）
 * 2. 创建store，createStore接收reducer，返回store
 * 3. 在组件中导入store，使用store.dispatch(action)提交action对象
 * 注：action对象类似 {type:'',payload:100}
 *
 * 4. 在组件中导入store，使用store.subscribe(() => {})监听store中的state变化
 *   在组件中导入store，使用store.getState()获取store中的state
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