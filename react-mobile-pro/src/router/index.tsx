import {createBrowserRouter} from "react-router-dom";
import HomeView from "@/pages/home";
import Detail from "@/pages/detail";

const routes = [
    {
        path: "/",
        element: <HomeView/>
    },
    {
        path: "/detail",
        element: <Detail/>
    }];
const router = createBrowserRouter(routes);
export default router;