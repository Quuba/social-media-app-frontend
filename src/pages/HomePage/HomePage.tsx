import React from 'react';
import {Link} from "react-router-dom";
import './HomePageStyle.css'

const HomePage = () => {

    return (
        <>
        <div className={'HomePage'}>
            <div id={'left'}>
                <p>{"<BitSpace/>"}</p>
            </div>
            <div id={'right'}>
                <h3>Join the growing community of our users</h3>
                <div id={'sign-box'}>
                    <h2><Link to={'/login'}>Sign in</Link></h2>
                    <h4>or</h4>
                    <h2><Link className={'Link'} to={'/register'}>Create an account!</Link></h2>
                </div>

            </div>

        </div>

        </>
    );
};

export default HomePage;