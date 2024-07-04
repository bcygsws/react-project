import React from 'react';
import "./index.scss";
import {
	Breadcrumb,
	Button,
	Form,
	Input,
	Select,
} from 'antd';

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
			span: 18,
		},
	},
};
const Publish = () => {
	return (<div>
		<Breadcrumb
			items={[
				{
					title: '首页',
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
					<Input.TextArea/>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 6,
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