import {FunctionComponent, lazy, Suspense} from "react";

import Home from '@/pages/home/index.tsx';

const Main = lazy(() => import('@/pages/main/index.tsx'));
const Order = lazy(() => import('@/components/menu/index.tsx'));
const Comment = lazy(() => import('@/components/comment/index.tsx'));
const Takeout = lazy(() => import('@/components/takeout/index.tsx'));
const Merchant = lazy(() => import('@/components/merchant/index.tsx'));

function lazyLoad(Com: FunctionComponent) {
    return <>
        <Suspense fallback={<div>loading……</div>}>
            <Com/>
        </Suspense>
    </>
}

const routes = [
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                // index: true,// index路径下，不能再写子路由
                path: 'order',
                element: lazyLoad(Order),
                children: [
                    {
                        path: ':id',
                        element: lazyLoad(Takeout)
                    }
                ]
            },

            {
                path: 'comment',
                element: lazyLoad(Comment)
            },
            {
                path: 'merchant',
                element: lazyLoad(Merchant)
            }
        ]
    },
    {
        path: '/main',
        element: lazyLoad(Main)
    }
];
export default routes;