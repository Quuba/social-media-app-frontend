import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import profilePlaceholder from '../../assets/profile-image-placeholder.png'
import './AccountPageStyle.css'
import Header from "../../components/Header";
import {LocalStorageHelper} from "../../utils/LocalStorageHelper";
import UsernameField from "./components/UsernameField";
import DescriptionField from "./components/DescriptionField";
import LogoutService from "../../services/LogoutService";
import store, {IPublicUserData, selectUserData} from "../../store/store";
import {useSelector} from "react-redux";


const AccountPage = () => {
    const navigate = useNavigate();

    const handleSignOut = (event: any) => {
        event.preventDefault();

        //TODO: use cookies
        // localStorage.setItem('logged', 'false');
        LogoutService.logout(navigate)
    }
    const handleVerify = () => {
        const mailData = {
            username: store.getState().userData.username,
            title: 'title',
            content: '',
            directionMail: store.getState().userData.email
        }
        //show loading circle
        fetch(
            'http://localhost:8080/api/user/send-verification-mail',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': LocalStorageHelper.getFromStorage('jwt')
                },
                body: JSON.stringify(mailData)
            }
        ).then(res => navigate('/email-sent'))
    }

    const userData = useSelector(selectUserData)

    return (
        <>
            <Header/>
            <div className={'AccountPage'}>

                <div className={'container'}>

                    <img src={userData.image != null ? userData.image : profilePlaceholder}
                         alt={'profile image'}/>
                    <div className={'block'}>
                        <h5>Username</h5>
                        <UsernameField/>
                    </div>
                    <div className={'block'}>
                        <h5>Description</h5>
                        <DescriptionField/>
                    </div>

                    <h5>Account Status</h5>
                    {userData.verified ?
                        <span className={'Verified'}>{userData.verified ? 'verified' : 'not verified'}</span>
                        :
                        <button onClick={handleVerify}>Verify your account</button>
                    }
                </div>

                <button onClick={handleSignOut}>Sign out</button>
            </div>
        </>
    );
};

export default AccountPage;