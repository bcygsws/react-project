/**
 * @react路由配置
 * history 模式需要后端支持，使用 createBrowserRouter 函数实现
 * hash 模式无需后端支持，路由上会带 # 号，使用 createHashRouter 函数实现
 *
 * */

// 路由配置
import App from '../App';
import HomeView from '../pages/home/HomeView';
import AboutView from '../pages/about/AboutView';
import NotFound from '../pages/NotFound';
import UsingRouter from '../pages/about/use_router/UsingRouter';
import UsingRouter2 from '../pages/about/use_router/UsingRouter2';
import MainView from '../pages/main/MainView';
import LearnView from '../pages/learn/LearnView';
import { Navigate } from 'react-router-dom';
// 创建路由对象实例
// const routes = [
// 	{
// 		path: '/',
// 		element: <Navigate to="/home" />,
// 		children: [
// 			{
// 				path: '/home',
// 				element: <HomeView />
// 			},
// 			{
// 				path: '/main',
// 				element: <MainView />
// 			},
// 			{
// 				path: '/about',
// 				element: <AboutView />,
// 				children: [
// 					// 二级路由在哪里用，就使用<Outlet/>设置路由的出口
// 					// 它匹配了id=1
// 					{
// 						path: ':id',
// 						element: <UsingRouter />
// 					},
// 					// 它匹配了id=2
// 					{
// 						index: true, // index:true取代了path后，不需要点二级路由，二级路由的内容就能够立即展示
// 						element: <UsingRouter2 />
// 					}
// 				]
// 			},
// 			{
// 				path: '/learn',
// 				element: <LearnView />
// 			}
// 		]
// 	},

// 	{
// 		// 404错误页面
// 		path: '*',
// 		element: <NotFound />
// 	}
// ];

// 注：默认/就是对应App子组件的，只需要在同一级，使用Navigate组件实现重定向到/home路由即可
const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomeView />
			},
			{
				path: 'main',
				element: <MainView />
			},
			{
				path: 'about',
				element: <AboutView />,
				children: [
					// 二级路由在哪里用，就使用<Outlet/>设置路由的出口
					// 它匹配了id=1
					{
						path: ':id',
						element: <UsingRouter />
					},
					// 它匹配了id=2
					{
						index: true, // index:true取代了path后，不需要点二级路由，二级路由的内容就能够立即展示
						element: <UsingRouter2 />
					}
				]
			},
			{
				path: 'learn',
				element: <LearnView />
			},
			{
				// 404错误页面
				path: '*',
				element: <NotFound />
			}
		]
	}
];
export default routes;
