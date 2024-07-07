import {Breadcrumb, Card, Radio, Space, Table, Tag} from "antd";
import {NavLink} from "react-router-dom";
import {
	Button,
	DatePicker,
	Form,
	Select,
} from 'antd';
import {useEffect, useState} from "react";
// 国际化配置-时间选择器的汉化，需要引入;语法：在需要国家化的组件上添加locale={locale}
import locale from "antd/es/date-picker/locale/zh_CN";
import {getChannelAPI} from "../../apis/article";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import img404 from '@/assets/error.png'

const {RangePicker} = DatePicker;
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 2,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 20,
		},
	},
};
const dataSource = [
	{
		id: '8218',
		comment_count: 0,
		cover: {
			images: [],
		},
		like_count: 0,
		pubdate: '2019-03-11 09:00:00',
		read_count: 2,
		status: 2,
		title: 'wkwebview离线化加载h5资源解决方案'
	}
];

const columns = [
	{
		title: '封面',
		dataIndex: 'cover',
		width: 120,
		render: cover => {
			return <img src={cover.images[0] || img404} width={80} height={60} alt=""/>
		}
	},
	{
		title: '标题',
		dataIndex: 'title',
		width: 220
	},
	{
		title: '状态',
		dataIndex: 'status',
		render: data => <Tag color="green">审核通过</Tag>
	},
	{
		title: '发布时间',
		dataIndex: 'pubdate'
	},
	{
		title: '阅读数',
		dataIndex: 'read_count'
	},
	{
		title: '评论数',
		dataIndex: 'comment_count'
	},
	{
		title: '点赞数',
		dataIndex: 'like_count'
	},
	{
		title: '操作',
		render: data => {
			return (
				<Space size="middle">
					<Button type="primary" shape="circle" icon={<EditOutlined/>}/>
					<Button
						type="primary"
						danger
						shape="circle"
						icon={<DeleteOutlined/>}
					/>
				</Space>
			)
		}
	}
]
// 准备表格body数据
const data = [
	{
		id: '8218',
		comment_count: 0,
		cover: {
			images: [],
		},
		like_count: 0,
		pubdate: '2019-03-11 09:00:00',
		read_count: 2,
		status: 2,
		title: 'wkwebview离线化加载h5资源解决方案'
	}
];
const Article = () => {
	const [radVal, setRadVal] = useState(1);
	// 渲染频道列表
	const [channelList, setChannelList] = useState([]);
	useEffect(() => {
		async function getChannelList() {
			const result = await getChannelAPI();
			// console.log(result.data);
			setChannelList(result.data.channels);
		}

		getChannelList();

	}, [])
	/**
	 * @name:radioChange
	 * @description:处理radio组的选择事件
	 *
	 * */
	const radioChange = (val) => {
		console.log(val);
	}
	/**
	 * @name:onFinish
	 * @description:表单提交
	 * 会以各自的Form.Item的name属性为字段，打印一个对象val
	 *
	 * */
	const onFinish = (val) => {// val表单提交的对象
		console.log(val);
	}
	return (
		<div>
			<Card
				title={<Breadcrumb
					items={[
						{
							title: <NavLink to="/layout">首页</NavLink>,
						},
						{
							title: '文章管理',
						},
					]}
				/>}
				style={{
					marginBottom: 20
				}}>
				<Form
					{...formItemLayout}
					variant="filled"
					style={{
						maxWidth: 600,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						label="状态"
						name="state"
						rules={[
							{
								required: true,
								message: '请选择一种状态!',
							},
						]}
					>
						<Radio.Group onChange={radioChange} value={radVal} defaultValue={1}>
							<Radio value={1}>全部</Radio>
							<Radio value={2}>草稿</Radio>
							<Radio value={3}>审核通过</Radio>
						</Radio.Group>
					</Form.Item>


					<Form.Item
						label="频道"
						name="channel_id"
						rules={[
							{
								required: true,
								message: '请选择一个频道!',
							},
						]}
					>
						<Select
							defaultValue={0}
							options={channelList.map(item => ({value: item.id, label: item.name}))}
						/>
					</Form.Item>
					{/* 配置locale属性，控制时间选择器为中文*/}
					<Form.Item
						label="日期"
						name="RangePicker"
						rules={[
							{
								required: true,
								message: '请选择日期范围！',
							},
						]}
					>
						<RangePicker locale={locale}/>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 6,
							span: 16,
						}}
					>
						<Button type="primary" htmlType="submit">
							筛选
						</Button>
					</Form.Item>
				</Form>
			</Card>
			{/*	根据上面条件筛选的结果 */}
				{/*table表格，不带页码*/}
			<Card title={"根据上述条件筛选了4条结果"}>
				<Table
					dataSource={dataSource}
					columns={columns}
					pagination={{position: ['none', 'none']}}/>
			</Card>
		</div>


	);
}
export default Article;