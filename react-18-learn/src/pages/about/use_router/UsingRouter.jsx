import {useParams} from "react-router-dom";

/**
 *
 * @name:usingRouter.jsx
 * @des:react框架中路由的使用
 *
 * 参考文档：https://blog.csdn.net/weixin_45605541/article/details/127354810
 *
 * 路径参数：about/:id useParams()
 * 查询参数：?name=xxx&id=xxx const [params] =useSearchParams();
 * 隐式参数：state={{id:1}}   const location=useLocation(); location.state
 *
 * */
export default function UsingRouter() {
	const pathParams = useParams();
	return (<div>
		<h3>我是AboutView二级路由组件UsingRouter</h3>
		{/*获取路径参数*/}
		<ul style={{listStyle: "none"}}>
			<li>路径参数id:{pathParams.id}</li>
		</ul>
	</div>);
}
