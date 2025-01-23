export const add = () => ({type: 'ADD'})
export const minus = () => ({type: 'MINUS'})
export const change = (val: number) => ({type: 'MOD', payload: val})
export const asyncAdd = (val: number) => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(change(val))
        }, 500)
    }
}