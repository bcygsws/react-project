/**
 * @desc:创建store仓库对象
 *
 * */
import * as Redux from 'redux';

export interface IAction {
    type: string;
    payload?: number;

}

function reducer(state: any, action: IAction) {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'CHANGE':
            return state + action?.['payload']!;
        default:
            return state;
    }
}
// 参数：reducer函数，return new state
// 参数：preloadedState,initial state，reducer函数的初始化状态
const store = Redux.legacy_createStore(reducer, 0);
export {
    store
};