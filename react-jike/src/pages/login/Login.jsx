import "./index.scss";
import {Button, Card, Form, Input, message} from "antd";
import {fetchLogin} from "../../store/modules/user";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const {token} = useSelector(state => state.user);
	console.log(token);
	const navigate = useNavigate();

	/**
	 * @name:onFinish函数，handleSubmit
	 * @description:收集表单数据
	 * 时间函数的参数value,就能拿到表单数据对象
	 *
	 * 测试：表单输入一个正确的值： {mobile: '13800000002', code: '246810'}
	 * 就会拿到异步请求，获取的token
	 *
	 *
	 *
	 * */
	const handleSubmit = async (value) => {
		console.log("获取表单数据", value);
		// 确保拿到token,再进行路由跳转async/await
		await dispatch(fetchLogin(value));
		// 1.跳转layout页面
		navigate("/layout");
		// 2.提示登录成功
		message.success("登录成功");

	};
	return (<div className="login-container">
		<Card className="box">
			<div className="icon-title"></div>
			{/*注：设置失去焦点时校验,在Form上设置，对每个Item都有效；不统一设置，
			就在Form.Item上设置validateTrigger*/}
			<Form
				onFinish={handleSubmit}
				className="login-form"
				autoComplete="off"
				form={form}
				validateTrigger="onBlur"
			>
				{/*注：name值要跟后端接口保持一致*/}
				{/*1.rules添加后，点击 提交 按钮，不需要任何逻辑，就可以触发rules中的校验规则了*/}
				{/*2.这是 串行校验规则，第一条规则满足后，才会开始校验第二条*/}
				<Form.Item
					name="mobile"
					rules={[{required: true, message: '请输入手机号！'}, {
						pattern: /^1[3-9]\d{9}$/,
						message: "请输入正确格式的手机号"
					}]}
				>
					<Input
						type="text"
						placeholder="请输入手机号"
					/>
				</Form.Item>
				<Form.Item name="code"
				           rules={[{required: true, message: '请输入验证码!'}]}>
					<Input
						type="password"
						placeholder="请输入验证码"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						登录
					</Button>
				</Form.Item>
			</Form>
		</Card>
	</div>);
}

export default Login;