import React, {useEffect, useState} from 'react';
import './App.css';
import RegisterTestForm from "./pages/login-register/RegisterTestForm";
import LoginTestForm from "./pages/login-register/LoginTestForm";
import HomePage from "./pages/HomePage/HomePage";
import {useRoutes, Routes, Route, Link, HashRouter, BrowserRouter} from "react-router-dom";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import FeedPage from "./pages/FeedPage/FeedPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import LoginPage from "./pages/login-register/LoginPage";
import RegisterPage from "./pages/login-register/RegisterPage";
import Cookies from 'universal-cookie'

//useful: https://blog.logrocket.com/how-react-hooks-can-replace-react-router/


const App = () => {

    const cookies = new Cookies();

    let route = useRoutes([
        {path: '/', element: <HomePage/>},
        {path: '/HomePage', element: localStorage.getItem('logged')=='true' ? <FeedPage/> : <HomePage/>},
        {path: '/login', element: <LoginPage/>},
        {path: '/register', element: <RegisterPage/>},
        {path: '/user', element: <UserPage/>},
        {path: '/AccountPage', element: <AccountPage/>}

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
            <App/>
        </BrowserRouter>
    )
}
export default AppWrapper;
