import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * 1.用到了@reduxjs/toolkit+react-redux,来集中管理状态
 * 2.其中，react-redux提供了一个Provider,将store注入应用，链接正式建立
 * 3.Provider有一个必选属性，store,然后把store/index.js中连接号的reducer创建的store仓库引入
 *
 * */

import {Provider} from 'react-redux';
import store from './store/index';

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
