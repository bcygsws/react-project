import './App.scss'
import {useRoutes} from "react-router-dom";
import routes from "@/router/router.tsx";

function App() {

    return (
        <>
            {
                useRoutes(routes)
            }
        </>
    )
}

export default App;
