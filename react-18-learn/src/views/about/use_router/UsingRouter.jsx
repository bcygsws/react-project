import {useParams} from "react-router-dom";

/**
 *
 * @name：usingRouter.jsx
 * @description:react框架中路由的使用
 *
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
