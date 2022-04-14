import React from 'react';
import {HashRouter, Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={'Home'}>
            <h2>Hello</h2>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>register</Link>

        </div>

    );
};

export default HomePage;