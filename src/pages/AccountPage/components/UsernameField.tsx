import React, {FC, useEffect, useState} from 'react';
import {LocalStorageHelper} from "../../../utils/LocalStorageHelper";
import {useDispatch, useSelector} from "react-redux";
import store, {changeUsername, selectUserData} from "../../../store/store";

interface IUsernameField {
    username: string;
}

const UsernameField: FC<IUsernameField> = ({username}) => {
    const [canEdit, setCanEdit] = useState<boolean>(false)
    const [inputData, setInputData] = useState<string>("")

    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()

    function switchEdit() {
        if (canEdit && inputData != '') {
            console.log('test1')
            dispatch(changeUsername(inputData))
        } else if (!canEdit || inputData == '') {
            setInputData('')
        }

        setCanEdit(!canEdit)
    }

    function handleInputChange(event: any) {
        setInputData(event.target.value)
    }

    return (
        <div className={'Username'}>
            {
                canEdit ?
                    <input type={'text'} placeholder={userData.username}
                           onChange={handleInputChange}/>
                    :
                    <span>{userData.username}</span>
            }
            <button onClick={switchEdit}>edit</button>
        </div>

    );
};

export default UsernameField;