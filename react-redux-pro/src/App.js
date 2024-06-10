import './App.css';
import Counter from "./components/Counter";
import ChannelList from "./components/ChannelList";

function App() {
	return (
		<div className="App">
			<Counter/>
			<ChannelList/>
		</div>
	);
}

export default App;
/**
 * @Redux的使用
 * 1.redux是集中状态管理器，类似vue中的vuex和pinia；可独立于框架react运行
 * 独立于框架运行,参考：redux/88-redux独立于框架使用.html
 *
 * 2.redux独立使用，具体分五步：
 * 2.1.定义reducer函数，分支下匹配action和state状态变化的规则
 *
 * 2.2.创建store仓库，管理多个state的
 * const store=Redux.createStore(reducer)
 * 或者 const store=Redux.legacy_createStore(reducer)
 *
 * 2.3.发布订阅内容,每当state中变量变化时，subscribe方法的callback函数就会执行
 * store.subscribe(callback)
 *
 * 2.4.提交action，store.dispatch({type:""})
 * 每个{type:""}都是一个action
 *
 * 2.5.将最新的视图，渲染在页面中
 *
 * 3.Redux三个核心概念：
 * a).state:管理转态的变量
 * b).action:描述怎样改数据
 * c).reducer:一个函数，本质是根据不同的action,实时生成新的state
 *
 * @React中使用redux
 * 两个包：redux toolkit + react-redux
 * redux toolkit,简称RTK:
 * a.简化store的书写方式
 * b.自带immer,支持可变式状态修改
 * c.自带thunk，更好的异步创建
 *
 * Redux---（获取状态）--->react组件
 *       react-redux中间件
 * Redux<---(更新状态)---react组件
 *
 *
 *
 * */
