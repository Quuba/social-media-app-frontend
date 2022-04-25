import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import profilePlaceholder from '../../assets/profile-image-placeholder.png'
import './AccountPageStyle.css'
import Header from "../../components/Header";
import {LocalStorageHelper} from "../../utils/LocalStorageHelper";
import UsernameField from "./components/UsernameField";

interface IUserPublicData {
    username: string;
    profileImageUri: string;
    description: string;
    verified: boolean;
}

const AccountPage = () => {
    const navigate = useNavigate();

    const handleSignOut = (event: any) => {
        event.preventDefault();

        //TODO: use cookies
        localStorage.setItem('logged', 'false');

        navigate('/')
    }

    const [canEdit, setCanEdit] = useState<boolean>(false)

    const [userData, setUserData] = useState<IUserPublicData>({
        username: 'null',
        profileImageUri: 'null',
        description: 'null',
        verified: false
    })

    useEffect(() => {
        const storageData: IUserPublicData = {
            username: LocalStorageHelper.getFromStorage('username'),
            description: LocalStorageHelper.getFromStorage('description'),
            profileImageUri: LocalStorageHelper.getFromStorage('profile-image-uri'),
            verified: false
        }
        if (storageData.username != null) {
            setUserData(storageData);
        }

    }, [])

    return (
        <>
            <Header/>
            <div className={'AccountPage'}>

                <div className={'container'}>

                    <img src={userData.profileImageUri != 'null' ? userData.profileImageUri : profilePlaceholder}
                         alt={'profile image'}/>
                    <h5>Username:</h5>
                    <UsernameField username={userData.username}/>
                    <h5>Description</h5>
                    <p className={'Description'}>{userData.description}</p>
                    <h5>Verified:</h5>
                    <span className={'Verified'}>{userData.verified ? 'verified' : 'not verified'}</span>
                </div>

                <button onClick={handleSignOut}>Sign out</button>
            </div>
        </>
    );
};

export default AccountPage;