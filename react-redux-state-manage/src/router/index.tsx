import {FunctionComponent, lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import HomeView from "@/pages/HomeView.tsx";
import UsingReactRedux from "@/components/react_redux/UsingReactRedux.tsx";

const AboutView = lazy(() => import('@/pages/AboutView.tsx'));

const lazyLoad = (Com: FunctionComponent) => {
    return <>
        <Suspense fallback={<div>正在加载……</div>}>
            <Com/>
        </Suspense>
    </>
}

const routes = [
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/home',
        element: <HomeView/>,
        children: [
            {
                path: 'react_redux',
                element: <UsingReactRedux/>
            }
        ]

    },
    {
        path: '/about',
        element: lazyLoad(AboutView)
    }
];
export {
    routes
}