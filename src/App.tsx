import React, {useEffect, useState} from 'react';
import './App.css';
import RegisterTestForm from "./pages/login-register/RegisterTestForm";
import LoginTestForm from "./pages/login-register/LoginTestForm";
import HomePage from "./pages/home/HomePage";
import {useRoutes, Routes, Route, Link, HashRouter} from "react-router-dom";
import UserPage from "./pages/UserPage";
import Header from "./common/Header";
import FeedPage from "./pages/feed/FeedPage";
import AccountPage from "./pages/account/AccountPage";
import LoginPage from "./pages/login-register/LoginPage";
import RegisterPage from "./pages/login-register/RegisterPage";

//useful: https://blog.logrocket.com/how-react-hooks-can-replace-react-router/


const App = () => {

    let route = useRoutes([
        {path: '/', element: <HomePage/>},
        {path: '/home', element: localStorage.getItem('logged')=='true' ? <FeedPage/> : <HomePage/>},
        {path: '/login', element: <LoginPage/>},
        {path: '/register', element: <RegisterPage/>},
        {path: '/user', element: <UserPage/>},
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
        <HashRouter>
            <App/>
        </HashRouter>
    )
}
export default AppWrapper;
