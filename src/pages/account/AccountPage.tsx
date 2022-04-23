import React from 'react';
import {useNavigate} from "react-router-dom";
import profilePlaceholder from '../../assets/profile-image-placeholder.png'
import './AccountPageStyle.css'
import Header from "../../common/Header";

const AccountPage = () => {
    const navigate = useNavigate();

    const handleSignOut = (event: any) => {
        event.preventDefault();

        localStorage.setItem('logged', 'false');

        navigate('/home')
    }

    return (
        <>
            <Header/>
            <div className={'AccountPage'}>

                <div className={'container'}>
                    <img src={profilePlaceholder} alt={'profile image'}/>
                    <span>{localStorage.getItem('username')}</span>
                </div>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        </>
    );
};

export default AccountPage;