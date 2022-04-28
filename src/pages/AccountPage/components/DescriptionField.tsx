import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../../../store/store";
import {ChangeUserDataService} from "../../../services/ChangeUserDataService";

const DescriptionField = () => {
    const [canEdit, setCanEdit] = useState<boolean>(false)
    const [inputData, setInputData] = useState<string>("")

    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()

    let focusElement = useRef<any>(null)
    function switchEdit() {
        // focusElement.current?.focus();

        if (canEdit && inputData != '') {
            ChangeUserDataService.changeDescription(inputData, dispatch);
        } else if (!canEdit || inputData == '') {
            setInputData('')
        }

        setCanEdit(!canEdit)
    }

    function handleInputChange(event: any) {
        setInputData(event.target.value)
    }

    return (

        <div className={'Description'}>
            {
                canEdit ?
                    <textarea placeholder={userData.description != null ? userData.description : 'your description'} onChange={handleInputChange} autoFocus={true}/>
                    :
                    <p>{userData.description}</p>
            }
            <button onClick={switchEdit}>edit</button>
        </div>

    );
};

export default DescriptionField;