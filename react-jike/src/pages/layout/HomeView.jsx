import React from 'react';
import {
	HomeOutlined,
	DiffOutlined,
	EditOutlined,
	LogoutOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import "./index.scss";
import {useNavigate} from "react-router-dom";

const {Header, Content, Sider} = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}));
const items2 = [
	{key: "1", icon: React.createElement(HomeOutlined), label: "首页"},
	{key: "2", icon: React.createElement(DiffOutlined), label: "文章管理"},
	{key: "3", icon: React.createElement(EditOutlined), label: "创建文章"}
];

const HomeView = () => {
	const navigate = useNavigate();
	const {
		token: {colorBgContainer, borderRadiusLG},
	} = theme.useToken();
	return (<Layout className="layout-container">
		<Header
			style={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div className="header-container">
				<div className="demo-logo"/>
				<div className="admin">
					<span>江湖夜雨</span>
					{/*点击退出，退出登录*/}
					<span onClick={() => {
						navigate("/")
					}
					}><LogoutOutlined/><span className="logout">退出</span></span>
				</div>
			</div>
		</Header>
		<Layout>
			<Sider
				width={150}
				style={{
					background: colorBgContainer
				}}
			>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					items={items2}
					style={{
						height: '100%',
						borderRight: 0,
					}}
				/>
			</Sider>
			<Layout
				style={{
					padding: '0 24px 24px',
				}}
			>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}
				>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					Content
				</Content>
			</Layout>
		</Layout>
	</Layout>);

}
export default HomeView;