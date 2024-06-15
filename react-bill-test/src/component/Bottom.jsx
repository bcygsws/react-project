import {useLocation, useNavigate} from "react-router-dom";
import {
	BillOutline,
	CalculatorOutline,
	AddCircleOutline
} from "antd-mobile-icons";
import {TabBar} from "antd-mobile";

export default function Bottom() {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location);
	const {pathname} = location;
	const setRouteActive = (value) => {
		console.log(value);
		navigate(value);
	}

	const tabs = [
		{
			key: '/',
			title: '月账单',
			icon: <BillOutline/>,
		},
		{
			key: '/new',
			title: '添加',
			icon: <AddCircleOutline/>,
		},
		{
			key: '/year',
			title: '年账单',
			icon: <CalculatorOutline/>,
		}
	];

	return (
		<TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
			{tabs.map(item => (
				<TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
			))}
		</TabBar>
	)
}

