import React, {useEffect, useMemo, useState} from 'react';
import "./index.scss";
import {
	Breadcrumb,
	Button,
	Form,
	Input, message, Radio,
	Select, Upload,
} from 'antd';
import {NavLink} from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {createArticleAPI, getChannelAPI} from "../../apis/article";
import {
	PlusOutlined
} from '@ant-design/icons';

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
const Publish = () => {
	const [value, setValue] = useState("");
	// 控制上传图片的数量，维护单选框radVal
	const [radVal, setRadVal] = useState(0);
	// 下拉框频道的选项组成的数组
	const [channelList, setChannelList] = useState([])
	// 上传图片时，onChange事件处理函数，返回的的数据对象{file:"",fileList:[]}
	const [imageList, setImageList] = useState([]);
	useEffect(() => {
		// 处理后端请求时，通常要封装成函数，随后调用它
		// a.封装函数
		async function getList() {
			const result = await getChannelAPI();
			console.log(result.data);
			const {channels} = result.data;
			setChannelList(channels);

		}

		// b.调用函数
		getList();
	}, []);
	const handlerChange = (val) => {
		// 注：val值，是options中的value,是item.id
		console.log(val);
	}
	/**
	 * @name:handlerClick
	 * @description:【发布文章】按钮，onFinish事件处理函数
	 * 注：收集表单数据，一定要确保，Form.Item中name字段，和后端请求参数名称一致
	 *
	 * cover:{
	 *     type:0,
	 *     images:[]
	 * }
	 * 在开发上传图片功能前，置空
	 * 参考后端文档：type参数直接使用radVal就可以，而images数组，需要imageList数组改造获得
	 * images:["图片url地址1""图片url地址2"，"图片url地址3"]
	 *
	 *
	 * */
	const handlerSubmit = async (val) => {
		console.log(val);// val就直接收集到了表单对象
		// 解构val,拿到channel_id,title和content
		const {channel_id, title, content} = val;
		// 表单数据对象匹配
		const formData = {
			channel_id: channel_id,
			title: title,
			content: content,
			cover: {// 封面对象
				type: radVal,
				images: imageList.map(item => item.response.data.url)
			}
		}
		console.log(formData);
		// 做一个校验当imageList的数组长度（表示上传图片的数量）和cover.type相等时，才发出请求
		if (imageList.length !== radVal) {
			message.warning("封面类型和图片数量不匹配");
		} else {
			const res = await createArticleAPI(formData);
			console.log(res);// {data:{id:""},message:"OK"}

		}
	}
	/**
	 * @name: radioChange
	 * @description: 选择上面图片的数量
	 * 单图、三图和无图
	 *
	 * */

	const radioChange = (val) => {
		console.log(val.target.value);
		setRadVal(val.target.value);

	}
	/**
	 * @name:uploadChangeHandler
	 * @description:上传文件改变时的回调
	 *
	 * */
	const uploadChangeHandler = (imgInfo) => {
		// console.log("正在上传中……");
		// 打印一下，图片上传过程中，返回的对象参数imgInfo
		// {file:当前正在上传的图片信息，fileList:[{之前已经上传的图片信息},{当前图片信息}]
		console.log(imgInfo);
		setImageList(imgInfo.fileList);

	}
	return (<div>
		<Breadcrumb
			items={[
				{
					title: <NavLink to="/layout">首页</NavLink>,
				},
				{
					title: '发布文章',
				},
			]}
		/>
		<div className="form-container">
			<Form
				{...formItemLayout}
				variant="filled"
				style={{
					maxWidth: 800,
				}}
				onFinish={handlerSubmit}
			>
				<Form.Item
					label="标题"
					name="title"
					rules={[
						{
							required: true,
							message: '请输入标题！',
						},
					]}
				>
					<Input/>
				</Form.Item>


				<Form.Item
					label="频道"
					name="channel_id"
					rules={[
						{
							required: true,
							message: '请选择一个频道！',
						},
					]}
				>
					<Select defaultValue={0} onChange={handlerChange} options={channelList.map((item) => ({
						value: item.id,
						label: item.name
					}))}/>
				</Form.Item>
				{/* 上传封面 */}
				<Form.Item label="封面">
					<Form.Item name="type">
						<Radio.Group defaultValue={0} onChange={radioChange} value={radVal}>
							<Radio value={1}>单图</Radio>
							<Radio value={3}>三图</Radio>
							<Radio value={0}>无图</Radio>
						</Radio.Group>
					</Form.Item>
					{/*listType：上传列表的内建样式，picture-card是方形的，picture-circle是圆形*/}
					{/*showUploadList: true表示显示上传列表,一般设置为true;以方便观察此前的上传图片*/}
					{/*action：上传的地址，注意：此处的请求地址：要写全名；在utils中为axios统一配置
					的baseURL已经不再生效*/}
					{/*name: 发到后台的文件参数名*/}
					{/*onChange： 上传文件改变时的回调*/}
					{/*maxCount: 上传图片的数量*/}
					{
						(radVal !== 0) && <Upload
							listType="picture-card"
							showUploadList
							action="http://geek.itheima.net/v1_0/upload"
							name="image"
							onChange={uploadChangeHandler}
							maxCount={radVal}
						>
							<div style={{marginTop: 8}}>
								<PlusOutlined/>
							</div>
						</Upload>
					}


				</Form.Item>
				<Form.Item
					label="内容"
					name="content"
					rules={[
						{
							required: true,
							message: '请输入内容!',
						},
					]}
				>
					{/*富文本编辑器*/}
					<ReactQuill
						theme="snow"
						value={value}
						onChange={setValue}
						placeholder="请输入文本内容"
						className="publish-quill"
					/>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 10,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						发布文章
					</Button>
				</Form.Item>
			</Form>

		</div>

	</div>);
}
export default Publish;