import {Breadcrumb, Card, Radio, Space, Table, Tag} from "antd";
import {NavLink} from "react-router-dom";
import {
	Button,
	DatePicker,
	Form,
	Select,
} from 'antd';
import {useEffect, useMemo, useState} from "react";
import {getArticleListAPI} from "../../apis/article";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import img404 from '@/assets/error.png';
import useChannels from "../../hooks/useChannels";

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
		render: (status) => {
			// console.log(status);
			const color = status === 2 ? "success" : "warning";
			const txt = status === 2 ? "审核通过" : "待审核";
			return (<Tag color={color}>{txt}</Tag>);
		}
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
// 测试数据：准备表格body数据，搭建静态结构时使用
// const data = [
// 	{
// 		id: '8218',
// 		comment_count: 0,
// 		cover: {
// 			images: [],
// 		},
// 		like_count: 0,
// 		pubdate: '2019-03-11 09:00:00',
// 		read_count: 2,
// 		status: 2,
// 		title: 'wkwebview离线化加载h5资源解决方案xxxx'
// 	}
// ];
const Article = () => {
	// radVal：表示单选框组的默认值，设为0；会默认选中全部
	const [radVal, setRadVal] = useState(0);
	// 获取文章列表
	const [articleList, setArticleList] = useState([]);
	// 获取列表数据记录数量
	const [count, setCount] = useState(0);
	// 渲染频道列表
	const channelList = useChannels();
	// 定义对象，维护分页功能的变量
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		per_page: 4,
		total_count: 0
	})
	/**
	 * @name:
	 * @description:准备表单参数
	 * 使用useState维护
	 *
	 * */
	const [formData, setFormData] = useState({
		begin_pubdate: "",
		channel_id: "",
		end_pubdate: "",
		page: 1,
		per_page: 4,
		status: ""
	});
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
	 * rangePicker是一个时间选择器，onFinish收集表单数据后，起始时间被收集
	 * 在一个moment封装的数组中，每一项可以直接调用format()方法进行格式化
	 * rangePicker[0].format("YYYY-MM-DD")
	 *
	 * */
	const onFinish = async (val) => {// val表单提交的对象
		console.log(val);
		const {channel_id, status, rangePicker} = val;
		setFormData({
			begin_pubdate: rangePicker[0].format("YYYY-MM-DD"),
			channel_id,
			end_pubdate: rangePicker[1].format("YYYY-MM-DD"),
			page: 1,
			per_page: 4,
			status
		});
		console.log(formData);
		/**
		 * @优化
		 * 1.这里又请求了一次articleList；对于当前组件初始渲染，和筛选后，不同的是formData这个参数：
		 * 有默认空值---变成了筛选时组织好的一个表单对象
		 * 2.只需以formData作为依赖项，复用useEffect就可以了
		 *
		 * */
		// 拿到的formData作为参数，重新调用文章列表请求接口,获取articleList数组数据
		// const res = await getArticleListAPI(formData);
		// setArticleList(res.data.results);

	}
	/**
	 * @name:
	 * @description:获取文章列表
	 * 依然是使用useEffect模拟生命周期
	 *
	 * */
	useEffect(() => {
		async function getArticleList() {
			// const res = await getArticleListAPI();
			const res = await getArticleListAPI(formData);
			console.log(res.data);
			const {page, per_page, total_count} = res.data;
			// 存储"文章列表"在状态变量中
			setArticleList(res.data.results);
			// 存储分页数据
			setPageInfo({
				page,
				per_page,
				total_count
			})
		}

		getArticleList();
	}, [formData]);
	/**
	 * @name:
	 * @description:监听筛选后的数组articleList
	 *
	 * */
	const total = useMemo(() => {
		return articleList.length;
	}, [articleList]);
	/**
	 * @name:pageChange
	 * @description:切换页面事件
	 *
	 * */
	const pageChange = (page, pageSize) => {
		console.log(page);
		console.log(pageSize);
		// 更改pageInfo状态量，进而更改当前页码和当前每页的容量
		setPageInfo({...pageInfo, page, per_page: pageSize});
		// 更改formData的值，进而重新，使用当前表单参数，向服务端发起请求
		setFormData({...formData, page, per_page: pageSize});
	}
	/**
	 * @name:
	 * @description:监听当前页码和每页容量的变化
	 * useMemo
	 *
	 * */
	const curPageInfo = useMemo(() => {
		return {
			page: pageInfo['page'],
			per_page: pageInfo['per_page']
		};
	}, [pageInfo]);
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
						name="status"
						rules={[
							{
								required: true,
								message: '请选择一种状态!',
							},
						]}
					>
						<Radio.Group onChange={radioChange} value={radVal} defaultValue={0}>
							<Radio value={0}>全部</Radio>
							<Radio value={1}>待审核</Radio>
							<Radio value={2}>审核通过</Radio>
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
						name="rangePicker"
						rules={[
							{
								required: true,
								message: '请选择日期范围！',
							},
						]}
					>
						<RangePicker/>
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
			{/*如果没有配置dataSource[i].key，可以使用rowKey作为主键，以规避一些错误*/}
			<Card title={`根据上述条件筛选了${total}条结果`}>
				<Table
					dataSource={articleList}
					columns={columns}
					rowKey={record => record.id}
					pagination={{
						position: ['none', 'bottomCenter'],
						current: curPageInfo['page'],
						pageSize: curPageInfo['per_page'],
						total: pageInfo['total_count'],
						onChange: pageChange
					}}/>
			</Card>
		</div>


	);
}
export default Article;