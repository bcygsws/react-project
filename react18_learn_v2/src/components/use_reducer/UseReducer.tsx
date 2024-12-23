/**
 * @desc：十二、useReducer钩子，react自带，实现状态管理
 * 参考文档：https://blog.csdn.net/DogEgg_001/article/details/139044721
 *
 * 步骤：
 * 1. 定义reducer函数，接收两个参数，state和action
 * 2.在函数组件中，解构出state和dispatch，并初始化state
 * 3.在组件中，调用dispatch，传入action，action是一个对象，包含type和payload
 *
 * useReducer用于某些场合下，useState的替代钩子
 * An alternative to useState.
 * useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values.
 * It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down
 * instead of callbacks.
 * Version:
 * 16.8.0
 *
 * 重点：
 * 使用场景：useReducer是useState的替代钩子，useState只能用于简单的状态管理，而useReducer可以处理逻辑复杂或包含多个子值，或者下一个
 * state依赖前一个state的值
 *
 * useReducer返回值：
 * 即使的状态state，和提交action的dispatch方法；dispatch方法，就可以避免使用callback
 *
 * */
import {useReducer} from "react";
import {IAction} from "@/components/use_reducer/type";

const reducer = (state: any, action: IAction) => {
    switch (action.type) {

        case 'INC': {
            return {
                ...state,
                num: state.num + 1
            }
        }
        case 'DEC': {
            return {
                ...state,
                num: state.num - 1
            }
        }
        case 'CHANGE': {
            return {
                ...state,
                num: state.num + action.payload!
            }
        }
        default:
            return state;
    }
}


const UseReducer = () => {
    const initialState = {num: 1};
    /**
     * @params:useReducer三个参数
     * reducer,函数
     * initialState,初始化状态
     * init可选参数
     * 参考文档1：https://react.fenxianglu.cn/docs/hooks/useReducer/
     *
     *
     * 例如：state初始值是对象{num:1}
     *
     * 二、惰性初始化
     * 第二个参数传入initialCount,第三个参数传入init;为state传入的初始值，将会是init(initialCount)
     *
     * 当前组件，传递一个参数对象，默认值为1
     * function UseReducer ({initialCount=1}) {
     *
     * const reducer = (state, action) => {
     * }
     * const init = (initCount) => {
     *  return {num: initialCount}
     * }
     * // 好处是：initialCount传入一个简单类型就可以
     * const [state, dispatch] = useReducer(reducer, initialCount, init);
     *
     * }
     *
     * 注:bug---将useReducer单独抽离成一个文件后，dispatch的参数，出现提示：应该为0个参数
     * 书签：https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=2806005ba784a40cae4906d632a64bd6&p=39
     *
     * */
        // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, initialState);

    return <div>
        <h6>十二、useReducer自带钩子实现状态管理</h6>
        <button onClick={() => dispatch({type: "INC"})}>+</button>
        <span>{state['num']}</span>
        <button onClick={() => dispatch({type: "DEC"})}>-</button>
        <button onClick={() => dispatch({type: "CHANGE", payload: 10})}>+10</button>
    </div>
}
export default UseReducer;