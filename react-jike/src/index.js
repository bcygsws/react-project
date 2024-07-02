import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './router/router';
import {RouterProvider} from "react-router-dom";
import {store} from "./store/index";
// import {persistor, store} from "./store/index";
import {Provider} from "react-redux";
// 导入redux-persist提供PersistGate组件

// import {PersistGate} from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
				<RouterProvider router={router}>
					<App/>
				</RouterProvider>
			{/*<PersistGate load={null} persistor={persistor}>*/}
			{/*	<RouterProvider router={router}>*/}
			{/*		<App/>*/}
			{/*	</RouterProvider>*/}
			{/*</PersistGate>*/}
		</Provider>

	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
