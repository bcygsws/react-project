import NewAdd from "../pages/new/NewAdd";
import MonthBill from "../pages/layout/month/MonthBill";
import App from "../App";
import YearBill from "../pages/layout/year/YearBill";

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
