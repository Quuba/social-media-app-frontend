import React, {useEffect} from 'react';
import {HashRouter, Link, useParams} from "react-router-dom";

const HomePage = () => {


    let {username} = useParams()


    return (
        <div className={'Home'}>
            <h2>Home Page</h2>
            {username != null ? <h3>Hello {username}</h3> : <></>}
            <div className={'LinkBox'}>
                <Link className={'Link'} to={'/login'}>Log in</Link>
                <Link className={'Link'} to={'/register'}>Register</Link>
            </div>

        </div>

    );
};

export default HomePage;