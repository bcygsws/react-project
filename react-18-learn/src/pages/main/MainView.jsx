import UseReducer from "../../components/use_reducer/UseReducer";
import UsingRedux from "../../components/redux/UsingRedux";
import UseMemo from "../../components/use_memo/UseMemo";
import MemoPromote from "../../components/memo/MemoPromote";
import UseCallback from "../../components/use_callback/UseCallback";

const MainView = () => {
	return (<div>
		{/*十一：独立使用Redux的过程演示，运行这个html文件*/}
		<UsingRedux/>
		{/*十二、钩子useReducer的使用*/}
		<UseReducer/>
		{/*	十三、useMemo计算钩子的使用*/}
		<UseMemo/>
		{/*	十四、使用memo方法，节省子组件不必要的跟随渲染*/}
		<MemoPromote/>
		{/*	十五、使用useCallback钩子，在组件多次渲染时，缓存函数*/}
		<UseCallback/>
	</div>);
}
export default MainView;