import UseReducer from "../../components/use_reducer/UseReducer";
import UsingRedux from "../../components/redux/UsingRedux";
import UseMemo from "../../components/use_memo/UseMemo";

const MainView = () => {
	return (<div>
		{/*十一：独立使用Redux的过程演示，运行这个html文件*/}
		<UsingRedux/>
		{/*十二、钩子useReducer的使用*/}
		<UseReducer/>
		{/*	十三、useMemo计算钩子的使用*/}
		<UseMemo/>
	</div>);
}
export default MainView;