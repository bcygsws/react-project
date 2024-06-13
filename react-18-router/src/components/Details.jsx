import {useLocation, useParams, useSearchParams} from "react-router-dom";

export default function Details() {
	// 1.动态路由参数
	const params = useParams();
	// 2.state参数
	const location = useLocation();
	// 3.查询字符串参数
	const [search, setSearch] = useSearchParams();

	return (<div>
		<h3>详情页面</h3>
		<div>动态路由参数：{params.id}</div>
		<div>state隐式传参：{location.state?.name}</div>
		<div>search字符串中的age：{search.get("age")}</div>
		<hr/>
		<button onClick={() => {
			setSearch("?age=168")
		}}>点击按钮，更改查询参数
		</button>

	</div>);
}