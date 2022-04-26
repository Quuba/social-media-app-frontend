import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter, useRoutes} from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import LoginPage from "./pages/login-register/LoginPage";
import RegisterPage from "./pages/login-register/RegisterPage";
import {Provider} from "react-redux";
import store from "./store/store";

//useful: https://blog.logrocket.com/how-react-hooks-can-replace-react-router/


const App = () => {

    let route = useRoutes([
        {path: '/', element: <HomePage/>},
        {path: '/home', element: localStorage.getItem('logged')=='true' ? <FeedPage/> : <HomePage/>},
        {path: '/login', element: <LoginPage/>},
        {path: '/register', element: <RegisterPage/>},
        {path: '/account', element: <AccountPage/>}

    ])

    return (
        <div className={'App'}>
            {/*<Header/>*/}
            {route}
        </div>
    )
}

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}
export default AppWrapper;
