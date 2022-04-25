import React, {FC, useEffect, useState} from 'react';
import {LocalStorageHelper} from "../../../utils/LocalStorageHelper";
import {ChangeUserDataService} from "../../../services/ChangeUserDataService";

interface IUsernameField {
    username: string;
}

const UsernameField: FC<IUsernameField> = ({username}) => {
    const [canEdit, setCanEdit] = useState<boolean>(false)
    const [inputData, setInputData] = useState<string>("")
    const [_username, _setUsername] = useState<string>(LocalStorageHelper.getFromStorage('username'))
    function switchEdit() {
        if(canEdit && inputData != ''){
            ChangeUserDataService.changeUsername(inputData)
            _setUsername(inputData)
        }else if(!canEdit || inputData == ''){
            setInputData('')
        }

        setCanEdit(!canEdit)
    }
    function handleInputChange(event:any){
        setInputData(event.target.value)
    }

    useEffect(()=>{
        _setUsername(username);
    },[])
    return (
        <div className={'Username'}>
            {
                canEdit ?
                    <input type={'text'} placeholder={LocalStorageHelper.getFromStorage('username')} onChange={handleInputChange}/>
                    :
                    <span>{LocalStorageHelper.getFromStorage('username')}</span>
            }
            <button onClick={switchEdit}>edit</button>
        </div>

    );
};

export default UsernameField;