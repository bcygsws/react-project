import ReactDOM from 'react-dom/client';
import './index.scss';
import {RouterProvider} from 'react-router-dom';
import router from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
);
/**
 *
 * @移动端框架：antd-mobile
 * 1.直接引入组件即可，antd-mobile库会自动加载css样式
 * 2.建议在项目中增加下面的 babel 配置，这样可以达到最大兼容性，为 iOS Safari >= 10 和 Chrome >= 49
 * 参考: .babelrc
 *
 *
 *
 * */