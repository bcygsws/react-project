// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
// import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import HomeView from "@/pages/home/HomeView.tsx";
// import AboutView from "@/pages/about/AboutView.tsx";
// import App from "@/App.tsx";
import App from "@/App.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store, {persistor} from "@/store";
// 注：react-redux+@reduxjs/toolkit+redux+redux-persist实现持久化
import {PersistGate} from 'redux-persist/lib/integration/react';
// const BaseGrammar = lazy(() => import("@/components/primary_grammar/BaseGrammar.tsx"));
// const BindEvent = lazy(() => import("@/components/event/BindEvent.tsx"));

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>

            {/*    <Suspense>*/}
            {/*        <Routes>*/}
            {/*            <Route path="/" element={<Navigate to="/home"/>}/>*/}
            {/*            <Route path="home" element={<HomeView/>}>*/}
            {/*                <Route path="grammar" element={<BaseGrammar/>}/>*/}
            {/*                <Route path="bind" element={<BindEvent/>}/>*/}
            {/*            </Route>*/}
            {/*            <Route path="about" element={<AboutView/>}/>*/}
            {/*        </Routes>*/}
            {/*    </Suspense>*/}
        </Provider>
    </BrowserRouter>
    // </StrictMode>
)

/**
 * @desc:bug修复
 * 1.关于使用vite创建react+typescript模板时，使用vscode爆红的配置修改
 * https://blog.csdn.net/qq_46266305/article/details/131140524
 *
 * 2.路由配置两种方式：
 * https://juejin.cn/post/7246977137361289272
 * react-router v6
 * https://juejin.cn/post/7398747326091952137
 *
 * 3.react-router-dom使用指南（最新V6.0.1）
 * https://zhuanlan.zhihu.com/p/431389907
 *
 * 4.路由配置-懒加载
 * https://www.jianshu.com/p/727d836d1d47
 * 路径匹配规则
 * 当URL同时匹配到含有路径参数的路径和无参数路径时，有限匹配没有参数的”具体的“（specific）路径。
 * <Route path="teams/:teamId" element={<Team />} />
 * <Route path="teams/new" element={<NewTeamForm />} />
 * 如上的两个路径，将会匹配 teams/new 。
 * 路径的正则匹配已被移除
 *
 * 4.使用vite构建项目
 * npm版本7+以后，需要增加一个额外的 --
 * npm create vite@latest -- --template react-ts
 *
 * 或者手动以下命令，逐步完成项目创建
 * npx create-vite@latest
 *
 * 二.好用的插件
 * @desc:classnames包处理类样式
 * className={classNames(类名1，类名2，……) })}
 *
 *
 * */