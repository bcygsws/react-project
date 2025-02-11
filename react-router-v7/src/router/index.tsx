import Home from '@/pages/home/index.tsx';
import {FunctionComponent, JSX, lazy, Suspense} from "react";

const About = lazy(() => import('@/pages/main/index.tsx'));

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
        element: <Home/>
    },
    {
        path: 'about',
        element: lazyLoad(About)
    }
];
export default routes;