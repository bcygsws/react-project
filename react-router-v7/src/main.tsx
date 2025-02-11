import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    //   <App />
    // </StrictMode>,
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
/**
 * @desc:react-router v7使用
 * 参考文档：https://juejin.cn/post/7460163795564331043
 *
 * */