import {store} from './index';
import {useState} from "react";

const Son = () => {
    const [count, setCount] = useState(0);
        store.subscribe(() => {
            setCount(store.getState());
        })
    return <div>
        <h6>redux这是son子组件</h6>
        <button onClick={() => {
            store.dispatch({type: 'INC'})
        }}>+
        </button>
        <button onClick={() => {
            store.dispatch({type: 'DEC'})
        }}>-
        </button>
        <div>son中count值：{count}</div>
    </div>;
};
export default Son;