const initialState = {
    init: 0,
    list: []
}

function reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                init: state.init + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                init: state.init - 1,
            };
        case 'LIST':
            return {
                ...state,
                list: action.payload
            }

        default:
            return state;
    }
}

export default reducer;