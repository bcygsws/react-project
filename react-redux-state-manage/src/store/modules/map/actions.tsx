import axios from 'axios';

export const increment = () => ({type: 'INCREMENT'})
export const decrement = () => ({type: 'DECREMENT'})
export const list = (val: any) => ({type: 'LIST', payload: val})

const URL = "http://geek.itheima.net/v1_0/channels";
export const asyncGetChannel = () => {
    return async (dispatch: any) => {
        const res = await axios.get(URL);
        dispatch(list(res.data.data.channels))
    }
}