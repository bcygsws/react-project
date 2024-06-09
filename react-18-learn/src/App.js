// import logo from './logo.svg';
import './App.css';

// 引入子组件
import MyApp from './components/MyApp';
import BindingEvent from './components/BindingEvent';
import MyComponent from './components/MyComponent';
import UseRef from "./components/UseRef";
import MyFather from "./components/fat_to_son/MyFather";
import MyFatherA from "./components/son_to_fat/MyFatherA";
import Fat from "./components/sibling/Fat";
import GrandFat from "./components/communicate_with_context/GrandFat";
import UsingEffect from "./components/use_effect/UsingEffect";
import UsingRedux from './components/redux/UsingRedux';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/*<img src={logo} className="App-logo" alt="logo" />*/}
				{/*一、MyApp react模板jsx的基本用法*/}
				<MyApp></MyApp>
				{/*	二、react事件绑定的方式*/}
				<BindingEvent></BindingEvent>
				{/*	三、react中的组件*/}
				<MyComponent></MyComponent>
				{/*	四、react中获取dom对象*/}
				<UseRef></UseRef>
				{/*五、父子组件之间的通信*/}
				<MyFather></MyFather>
				{/*	六、子组件向父组件传值*/}
				<MyFatherA></MyFatherA>
				{/*	七、兄弟组件之间的通信*/}
				<Fat></Fat>
				{/*八、使用context实现跨层组件之间的通信*/}
				<GrandFat></GrandFat>
				{/*十、React的useEffect的用法 */}
				<UsingEffect></UsingEffect>
				{/*	十一、使用redux集中状态管理器*/}
				<UsingRedux></UsingRedux>

			</header>
		</div>
	);
}

export default App;
