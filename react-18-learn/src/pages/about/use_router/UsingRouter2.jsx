import {useParams} from "react-router-dom";

/**
 *
 * @name：usingRouter2.jsx
 * @description:react框架中路由的使用
 * 在router.js文件中，配置了
 *
 *
 * */
export default function UsingRouter2() {
	const pathParams = useParams();
	return (<div>
		<h3>我是AboutView二级路由组件UsingRouter2</h3>
		{/*获取路径参数*/}
		<ul style={{listStyle: "none"}}>
			<li>路径参数id:{pathParams.id}</li>
		</ul>
	</div>);
}
