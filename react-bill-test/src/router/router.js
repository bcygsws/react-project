import NewAdd from "../views/new/NewAdd";
import MonthBill from "../views/layout/month/MonthBill";
import App from "../App";
import YearBill from "../views/layout/year/YearBill";

/**
 *@路由配置文件
 *
 *
 * */
const routes = [
	{
		path: "/",
		element: <App/>,
		children: [
			{
				index: true,
				element: <MonthBill/>
			},
			{
				path: "year",
				element: <YearBill/>
			}
		]
	},
	{
		path: "/new",
		element: <NewAdd/>
	}
];
export default routes;
