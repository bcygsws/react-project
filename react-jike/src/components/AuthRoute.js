import {getToken} from "../utils";
// 重定向组件，to属性的 属性值为重定向路径
import {Navigate} from "react-router-dom";

/**
 * @name:AuthRoute
 * @description:路由鉴权
 * 解决：使用高阶组件HOC (Higher-Order Component)
 *
 * 规则：有token，让路由通过；没有token,应该返回登录页
 * 将组件写在<AuthRoute><HomeView/></AuthRoute>之间，就可以从当前组件的children参数中，获取它
 *
 * */
const AuthRoute = ({children}) => {
// 获取token
	const token = getToken();
	if (token) {
		return <>{children}</>;
	} else {
		// 类似vue中的redirect，重定向
		return <Navigate to={"/"} replace></Navigate>
	}
}
export default AuthRoute;