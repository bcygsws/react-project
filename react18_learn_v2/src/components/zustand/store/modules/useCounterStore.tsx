export interface ICount {
    count: number
}

const useCounterStore = (set: any) => {
    return {
        count: 0,
        increment: () => set((state: ICount) => ({count: state.count + 1})),// 在当前state中累加count值
        modify: () => set({count: 100}) // 直接修改state状态中的count值
    }
}
export default useCounterStore;