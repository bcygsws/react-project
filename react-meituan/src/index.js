import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
// 引进/store/index中连接而成的store
import store from './store/index';
import {Provider} from 'react-redux';


const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App/>
	</Provider>
)
