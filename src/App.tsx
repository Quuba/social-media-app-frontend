import React, {useState} from 'react';
import './App.css';
import RegisterTestForm from "./components/RegisterTestForm";
import LoginTestForm from "./components/LoginTestForm";
import HomePage from "./components/HomePage";
import {useRoutes, Routes, Route, Link, HashRouter} from "react-router-dom";

//useful: https://blog.logrocket.com/how-react-hooks-can-replace-react-router/


const App = () => {

    let route = useRoutes([
        {path:'/', element:<HomePage/>},
        {path:'login', element:<LoginTestForm/>},
        {path:'register', element: <RegisterTestForm/>}
    ])

    return route
}

const AppWrapper = () =>{
    return(
        <HashRouter>
            <App/>
        </HashRouter>
    )
}
export default AppWrapper;
