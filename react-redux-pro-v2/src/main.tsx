// import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import {BrowserRouter} from "react-router-dom";
import store from "@/store";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    //   <App />
    // </StrictMode>,
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
