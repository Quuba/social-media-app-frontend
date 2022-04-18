import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import profilePlaceholder from '../../profile-image-placeholder.png'
import './AccountPageStyle.css'

const AccountPage = () => {
    const navigate = useNavigate();

    const handleSignOut = (event:any) =>{
        event.preventDefault();

        localStorage.setItem('logged', 'false');

        navigate('/home')
    }

    return (
        <div className={'AccountPage'}>

            <div className={'container'}>
                <img src={profilePlaceholder}/>
                <span>{localStorage.getItem('username')}</span>
            </div>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
};

export default AccountPage;