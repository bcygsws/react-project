import UseReducer from "../../components/use_reducer/UseReducer";
import UsingRedux from "../../components/redux/UsingRedux";
import UseMemo from "../../components/use_memo/UseMemo";
import MemoPromote from "../../components/memo/MemoPromote";
import UseCallback from "../../components/use_callback/UseCallback";
import ForwardRef from "../../components/forward_ref/ForwardRef";
import UseImperativeHandle from "../../components/ues_inperative_handle/UseImperativeHandle";
import ClassComponent from "../../components/class_component/ClassComponent";
import UsingHook from "../../components/react_hook/UsingHook";

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
		{/*	十六、在父组件中获取子组件的dom*/}
		<ForwardRef/>
		{/*	十七、子组件的获取焦点的方法 暴露给父组件调用*/}
		<UseImperativeHandle/>
		{/*	十八、类组件定义 */}
		<ClassComponent/>
		{/* 十九、生命周期钩子*/}
		<UsingHook/>
	</div>);
}
export default MainView;