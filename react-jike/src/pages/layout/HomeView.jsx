import React, {useEffect, useMemo} from 'react';
import {
	HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Popconfirm, theme} from 'antd';
import "./index.scss";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {clearUserInfo, fetchUserInfo} from "../../store/modules/user";
import {useDispatch, useSelector} from "react-redux";

const {Header, Content, Sider} = Layout;
const items = [
	{key: "", icon: <HomeOutlined/>, label: "首页"},
	{key: "article", icon: <DiffOutlined/>, label: "文章管理"},
	{key: "publish", icon: <EditOutlined/>, label: "创建文章"}];

const HomeView = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		token: {colorBgContainer, borderRadiusLG},
	} = theme.useToken();
	const location = useLocation();
	console.log(location);// {pathname: '/layout/', search: '', hash: '', state: null, key: 'hbmx9iwa'}
	/**
	 * 定义一个状态量，维护"选中"路由
	 *
	 * */

	/**
	 * @name:
	 * @description:
	 * 方案一；
	 * 方案一：使用routeSelect状态量维护，可以实现路径和选中的实时匹配；
	 * 但是有个缺陷，每当刷新页面，状态量routeSelect就回到初始值，然后
	 * 通过useEffect的监听，重定向到了首页(/layout)
	 *
	 * 1.为Menu绑定事件后，val可以打印出，当前选中项的对象
	 * {key: '1', keyPath: Array(1), domEvent: SyntheticBaseEvent}
	 *
	 * 2.将key值，用路径代替，存储在routeSelect变量中
	 * 3.使用useEffect监听函数，观察RouteSelect值的变化；
	 * 在使用navigate编程式导航就可以实现选中项和
	 *
	 * 方案二：推荐
	 * 方案二：刷新页面后，location值不变，将其关联到选中项上，选中项也不会改变
	 * 使用useLocation() API，获取当前路径
	 * 然后，将useLocation()的值与defaultSelectedKeys关联
	 *
	 *
	 * */
	const MenuClickHandler = (val) => {
		console.log(val);
		// 方案一：
		// setRouteSelect(val.key);

		// 方案二：
		navigate(`/layout/${val.key}`);

	}

	// 方案一
	// useEffect(() => {
	// 	switch (routeSelect) {
	// 		case "article":
	// 			navigate(`/layout/${routeSelect}`);
	// 			break;
	// 		case "publish":
	// 			navigate(`/layout/${routeSelect}`);
	// 			break;
	// 		default:
	// 			navigate(`/layout/${routeSelect}`);
	// 	}
	// }, [routeSelect]);

	/**
	 * @name:
	 * @description:用户信息在多处使用，使用redux维护
	 *
	 * */

	useEffect(() => {
		dispatch(fetchUserInfo());
	}, [dispatch]);
	const {userInfo} = useSelector(state => state.user);
	// console.log("testx", userInfo);
	/**
	 *
	 * @name:
	 * @description:退出登录
	 * 退出时，
	 * 1.跳转至登录页
	 * 2.清除redux token以及localStorage中的token
	 * 并清除用户信息userInfo,userInfo={}
	 * 3.将其在store中抽象成一种action： clearUserInfo
	 *
	 * */
	const confirm = () => {
		// 1.清空token和用户信息
		dispatch(clearUserInfo());
		// 2.跳转至登录页
		navigate("/");

	}
	/**
	 * @name:
	 * @description:
	 * Article导航到Publish时，只是局部更新了；所以HomeView中的侧边栏里的最新值，
	 * 还没有渲染到模板时，导致编辑时，侧边栏背景没有相应的更新
	 *
	 *
	 * */
	// const x = useMemo(() => {
	// 	return location.pathname.substring(8);
	// }, [location]);
	// console.log("testx", x);
	return (<Layout className="layout-container">
		<Header
			style={{
				display: 'flex', alignItems: 'center'
			}}
		>
			<div className="header-container">
				<div className="demo-logo"/>
				<div className="admin">
					<span>{userInfo['mobile']}</span>
					{/*点击退出，退出登录*/}
					<span>
						 <Popconfirm
							 title="是否确认退出？"
							 description=""
							 onConfirm={confirm}
							 onCancel={() => {
							 }}
							 okText="确认"
							 cancelText="取消"
						 >
							 <LogoutOutlined/>
							 <span className="logout">退出</span>
						 </Popconfirm>
					</span>
				</div>
			</div>
		</Header>
		<Layout>
			<Sider
				width={200}
				style={{
					backgroundColor: colorBgContainer
				}}
			>
				<Menu
					mode="inline"
					defaultSelectedKeys={[location.pathname.substring(8)]}
					items={items}
					theme="dark"
					style={{
						height: '100%', borderRight: 0,
					}}
					onClick={MenuClickHandler}
				/>
			</Sider>
			<Layout
				style={{
					padding: '0 24px 24px',
				}}
			>
				<Content
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet/>
				</Content>
			</Layout>
		</Layout>
	</Layout>);

}
export default HomeView;