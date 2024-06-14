import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./router/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);
root.render(
	// 前已验证，严格模式会导致useEffect中回调执行两次，可暂时关闭"严格模式"
	<RouterProvider router={router}>
		<App/>
	</RouterProvider>
	// <React.StrictMode>
	//   <App />
	// </React.StrictMode>
);

