import {create} from 'zustand';
import createCounterStore from "./modules/createCounterStore";
import createChannelStore from "./modules/createChannelStore";

/**
 * @name:useStore
 * @description:
 * 注意:
 * 1.最终useStore才是引入各个组件的钩子
 * 2.在react中不成为的规定，钩子必须以useXXX开头
 * 3.create从zustand库中引入后，create(带剩余参数的回调函数)
 *
 *
 * */


// 组合各个切片，创建useStore钩子
const useStore = create((...a) => {
	return {
		...createCounterStore(...a), ...createChannelStore(...a)
	}
});
export default useStore;