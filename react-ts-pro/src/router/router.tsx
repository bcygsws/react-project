import HomeView from "@/pages/home/HomeView.tsx";
import MainView from "@/pages/main/MainView.tsx";


const routes = [
    {
        path: '/',
        children: [
            {
                // path: "/home",
                index: true,
                element: <HomeView/>
            },
            {
                path: '/main',
                element: <MainView/>
            }
        ]
    }


];
export default routes;