import {createBrowserRouter} from 'react-router-dom';
import Home from "@/pages/home/index.tsx";
import Detail from "@/pages/detail/index.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/detail',
        element: <Detail/>
    }
]);
export default router;