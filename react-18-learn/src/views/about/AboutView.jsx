import GrandFat from "../../components/communicate_with_context/GrandFat";
import UsingEffect from "../../components/use_effect/UsingEffect";
import UsingRedux from "../../components/redux/UsingRedux";
import {Link, Outlet, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";

export default function AboutView() {
	const navigator = useNavigate();
	// 接收路由参数，并显示在页面中：
	const [params] = useSearchParams();
	const location = useLocation();
	console.log(location);

	return (<div>1
		{/*声明式导航和编程式导航*/}
		<Link to="/home">跳转至/home页面</Link>
		<hr/>
		<button onClick={() => {
			navigator("/home")
		}}>跳转至/home页面
		</button>
		<hr/>
		{/*1.路由参数-获取查询参数*/}
		<ul style={{listStyle: "none"}}>
			<li>name:{params.get('name')}</li>
			<li>id:{params.get('id')}
			</li>
		</ul>
		{/*获取state隐式参数*/}
		{/*<ul style={{listStyle: "none"}}>*/}
		{/*	<li>tag:{location.state.tag}</li>*/}
		{/*	<li>name:{location.state.name}</li>*/}
		{/*</ul>*/}
		<Link to="1">二级路由，去往UsingRouter组件</Link><br/>
		{/*不需要点击二级路由，直接显示二级路由的内容：实现方式：在routes路由规则中，使用index:true；代替path:":id"*/}
		<Link to="2">二级路由，去往UsingRouter2组件；进入About后，不需要点击二级路由，直接显示二级路由内容</Link>
		{/*这个Outlet组件，用以声明二级路由的出口，必须写*/}
		<Outlet/>

		{/*九、context实现跨组件通信*/
		}
		<GrandFat></GrandFat>
		{/*十、React的useEffect的用法 */
		}
		<UsingEffect></UsingEffect>
		{/*	十一、使用redux集中状态管理器*/
		}
		<UsingRedux></UsingRedux>
	</div>)
		;
}