import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../../../store/store";
import {ChangeUserDataService} from "../../../services/ChangeUserDataService";

const UsernameField = () => {
    const [canEdit, setCanEdit] = useState<boolean>(false)
    const [inputData, setInputData] = useState<string>("")

    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()

    function switchEdit() {
        if (canEdit && inputData != '') {
            ChangeUserDataService.changeUsername(inputData, dispatch);
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