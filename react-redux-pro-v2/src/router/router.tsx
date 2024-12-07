import {Navigate} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import {FunctionComponent, lazy, Suspense} from "react";
import NoMatch from "@/components/no-match/NoMatch.tsx";

const About = lazy(() => import('@/pages/About.tsx'))

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
        element: <Navigate to={'/home'}></Navigate>
    },
    {
        path: '/home',
        element: <Home/>,
    },
    {
        path: '/about',
        element: lazyLoad(About)
    },
    {
        path: '*',
        element: <NoMatch/>
    }
]
export default routes;