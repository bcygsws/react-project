import GrandFat from "../../components/communicate_with_context/GrandFat";
import UsingEffect from "../../components/use_effect/UsingEffect";
import {Link, Outlet, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";

export default function AboutView() {
	// navigate有两种形态：1.navigate() 2. <Route path="/:id" element={<Navigate to="/home" replace={false}/>} />
	const navigate = useNavigate();
	// 接收路由参数，并显示在页面中：
	//注：params和setParams可以自定义名称，类似useState的解构
	const [params, setParams] = useSearchParams();
	const location = useLocation();
	console.log(location);

	return (<div>
		{/*声明式导航和编程式导航*/}
		<Link to="/">跳转至/home页面</Link>
		<hr/>
		<button onClick={() => {
			navigate("/")
		}}>跳转至/home页面
		</button>
		<hr/>
		{/*1.路由参数-获取查询参数*/}
		<ul style={{listStyle: "none"}}>
			<li>name:{params.get('name')}</li>
			<li>id:{params.get('id')}
			</li>
		</ul>
		{/*setParams更改查询参数后，以前显示的查询参数值，会跟随这种变化；这是因为useSearchParams()也具备了useState的功能*/}
		<button onClick={() => {
			setParams("?name=小红&id=88")
		}}>更改查询参数
		</button><br/>
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
	</div>)
}