export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const change = (num: number) => ({type: 'CHANGE', payload: num});
// 异步操作，二次封装成dispatch函数的闭包
export const asyncChange = (val: number) => {
    return (dispatch: any) => {
        // 异步操作
        setTimeout(() => {
            dispatch(change(val));
        }, 500)
    }
}

