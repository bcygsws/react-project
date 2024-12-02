const initialState = 0;
const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'CHANGE':
            return state + action.payload;
        default:
            return state;
    }
}
export default reducer;