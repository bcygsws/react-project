
export interface ICount {
    count: number
}

const useCounterStore = (set: any) => {
    return {
        count: 0,
        increment: () => set((state: ICount) => ({count: state.count + 1})),
        modify: () => set({count: 100})
    }
}
export default useCounterStore;