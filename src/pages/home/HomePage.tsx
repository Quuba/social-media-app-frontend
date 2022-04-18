import React from 'react';
import {Link} from "react-router-dom";
import './HomePageStyle.css'

const HomePage = () => {

    return (
        <div className={'HomePage'}>
            <h2>New user?</h2>
            <h3><Link to={'/register'}>Create an account!</Link></h3>
        </div>

    );
};

export default HomePage;