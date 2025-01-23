const initialState = {
    num: 1
}
const reducer1 = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD':
            return {num: state.num + 1}
        case 'MINUS':
            return {num: state.num - 1}
        case 'MOD':
            return {num: state.num + action.payload}
        default:
            return state;
    }
}
export default reducer1;