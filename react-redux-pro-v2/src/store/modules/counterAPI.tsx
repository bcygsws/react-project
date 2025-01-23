/**
 * @desc：在slice文件以外的其他地方，定义的一个异步函数，返回一个promise对象
 *
 * */
const fetchCount = (amount: number) => {
    return new Promise<{ data: number }>((resolve) => {
        setTimeout(() => {
            resolve({data: amount})
        }, 500)
    })
}
export default fetchCount;