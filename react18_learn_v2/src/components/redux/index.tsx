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

const store = Redux.legacy_createStore(reducer, 0);
export {
    store
};