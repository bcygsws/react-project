import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
);
/**
 *
 * @bug:
 * 创建项目报错后，依照下述文档解决：
 * https://blog.csdn.net/qq_45862085/article/details/135263134?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-3-135263134-blog-136801441.235%5Ev43%5Econtrol&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-3-135263134-blog-136801441.235%5Ev43%5Econtrol&utm_relevant_index=4
 *
 * bug1: 当前文件中，React和ReactDOM报红时，
 * 解决：在tsconfig.node.json和tsconfig.app.json中都添加以下配置，就可以解决
 * "allowSyntheticDefaultImports": true
 *
 * */
