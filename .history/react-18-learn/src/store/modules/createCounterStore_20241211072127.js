const createCounterStore = (set) => {h
	return {
		count: 0,
		// 每次count值+1，依赖count,计算得到新值
		increment: () => set((state) => ({count: state.count + 1})),
		// 不依赖count,直接改变count值为100
		modify: set({count: 100})
	}
}
export default createCounterStore;