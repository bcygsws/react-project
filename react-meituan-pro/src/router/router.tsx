import {FunctionComponent, lazy, Suspense} from "react";

const Home = lazy(() => import('@/pages/home/index.tsx'));
const Main = lazy(() => import('@/pages/main/index.tsx'));

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
        element: lazyLoad(Home)
    },
    {
        path: '/main',
        element: lazyLoad(Main)
    }
];
export default routes;