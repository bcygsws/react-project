import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// 前已验证，严格模式会导致useEffect中回调执行两次，可暂时关闭"严格模式"
	<App/>
	// <React.StrictMode>
	//   <App />
	// </React.StrictMode>
);

