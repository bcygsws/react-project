import React, {useEffect, useState} from 'react';
import "./index.scss";
import {
	Breadcrumb,
	Button,
	Form,
	Input,
	Select,
} from 'antd';
import {NavLink} from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {getChannelAPI} from "../../apis/article";

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
	const [channelList, setChannelList] = useState([]);
	useEffect(() => {
		async function getList() {
			const result = await getChannelAPI();
			console.log(result.data);
			const {channels} = result.data;
			setChannelList(channels);

		}

		getList();
	}, []);
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
			>
				<Form.Item
					label="标题"
					name="Input"
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
					name="Select"
					rules={[
						{
							required: true,
							message: '请选择一个频道！',
						},
					]}
				>
					<Select/>
				</Form.Item>
				<Form.Item
					label="内容"
					name="TextArea"
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