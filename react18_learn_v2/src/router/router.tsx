import {Navigate} from "react-router-dom";
import HomeView from "@/pages/home/HomeView.tsx";
import AboutView from "@/pages/about/AboutView.tsx";
import {FunctionComponent, lazy, Suspense} from "react";

// const BaseGrammar = lazy(() => import("@/components/primary_grammar/BaseGrammar.tsx"));
// import BaseGrammar from "@/components/primary_grammar/BaseGrammar.tsx";
// import BindEvent from "@/components/event/BindEvent.tsx";
const BaseGrammar = lazy(() => import("@/components/primary_grammar/BaseGrammar.tsx"));
const BindEvent = lazy(() => import("@/components/event/BindEvent.tsx"));
const UsingState = lazy(() => import("@/components/use_state/UsingState.tsx"));
const UsingRef = lazy(() => import("@/components/use_ref/UsingRef.tsx"));
const MyFat = lazy(() => import("@/components/fat_to_son/MyFat.tsx"));
const Fat = lazy(() => import("@/components/son_to_fat/Fat.tsx"));
const SiblingFat = lazy(() => import("@/components/sibling/MyFat.tsx"));
const ContextCommu = lazy(() => import("@/components/commu_context/ContextCommu.tsx"));
const RouterParams = lazy(() => import("@/components/router_params/RouterParams.tsx"));
const MySonRouter = lazy(() => import("@/components/router_params/SonRouter.tsx"));
const UsingEffect = lazy(() => import("@/components/use_effect/UsingEffect.tsx"));
const UseSingleRedux = lazy(() => import("@/components/redux/UseSingleRedux.tsx"));
const UseReducer = lazy(() => import("@/components/use_reducer/UseReducer.tsx"));
const ReactRedux = lazy(() => import("@/components/react_redux/ReactRedux.tsx"));
const UsingMemo = lazy(() => import("@/components/use_memo/UsingMemo.tsx"));
const MyMemo = lazy(() => import("@/components/memo/Memo.tsx"));
const UseZustand = lazy(() => import("@/components/zustand/UseZustand.tsx"));
const UsingCallback = lazy(() => import("@/components/use_callback/UsingCallback.tsx"));
const Forward = lazy(() => import("@/components/forward_ref/Forward.tsx"));
const UsingImperativeHandle = lazy(() => import("@/components/use_imperative_handle/UsingImperativeHandle.tsx"));


/**
 * @desc:路由配置
 * ts文件都进必须写成tsx后缀，否则在路由配置过程中，报错：
 *  can use namespace HomeView as a type
 *
 *  参考：https://blog.csdn.net/jiang7701037/article/details/131505912?spm=1001.2101.3001.6650.13&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-13-131505912-blog-131836926.235%5Ev43%5Econtrol&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-13-131505912-blog-131836926.235%5Ev43%5Econtrol&utm_relevant_index=22
 *  参考1：https://blog.csdn.net/YYTX_YS/article/details/130889302?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-130889302-blog-133648124.235%5Ev43%5Econtrol&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-130889302-blog-133648124.235%5Ev43%5Econtrol&utm_relevant_index=13
 *
 * */
const lazyLoad = (Com: FunctionComponent) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Com/>
    </Suspense>
}
const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <HomeView/>,
        children: [
            {
                path: "grammar",
                // element: <BaseGrammar/>
                element: lazyLoad(BaseGrammar)
            },
            {
                path: "bind",
                // element: <BindEvent/>
                element: lazyLoad(BindEvent)
            },
            {
                path: "state",
                element: lazyLoad(UsingState)
            },
            {
                path: "use_ref",
                element: lazyLoad(UsingRef)
            },
            {
                path: "fat_to_son",
                element: lazyLoad(MyFat)
            },
            {
                path: "son_to_fat",
                element: lazyLoad(Fat)
            },
            {
                path: "sibling",
                element: lazyLoad(SiblingFat)
            },
            {
                path: "context",
                element: lazyLoad(ContextCommu)
            },
            {
                path: "path_params",
                element: lazyLoad(RouterParams),
                children: [
                    {
                        path: ":id",
                        element: lazyLoad(MySonRouter)
                    }
                ]
            },
            {
                path: 'use_effect',
                element: lazyLoad(UsingEffect)
            },
            {
                path: 'redux',
                element: lazyLoad(UseSingleRedux)
            },
            {
                path: 'use_reducer',
                element: lazyLoad(UseReducer)
            },
            {
                path: 'react_redux',
                element: lazyLoad(ReactRedux)
            },
            {
                path: 'use_memo',
                element: lazyLoad(UsingMemo)
            },
            {
                path: 'memo',
                element: lazyLoad(MyMemo)
            },
            {
                path: 'zustand',
                element: lazyLoad(UseZustand)
            },
            {
                path: 'using_callback',
                element: lazyLoad(UsingCallback)
            },
            {
                path: 'use_ref_forward_ref',
                element: lazyLoad(Forward)
            },
            {
                path: 'use_imperative_handle',
                element: lazyLoad(UsingImperativeHandle)
            }

        ]

    },
    {
        path: "/about",
        element: <AboutView/>,
    }

];


export {
    routes
};