import {LocalStorageHelper} from "../utils/LocalStorageHelper";
import store, {selectUserData} from "../store/store";
import {useSelector} from "react-redux";

const ChangeUserDataService = {

    changeUsername: function (newUsername: string) {
        const userdata= store.getState().userData;

        console.log(userdata)

        const patchData = {
            oldUsername: userdata.username,
            newUsername: newUsername
        }

        this.fetchWithToken('PATCH', 'http://localhost:8080/api/user/update-username', patchData)

        return newUsername
    },
    fetchWithToken: async function (method: string, uri: string, data: object) {

        //TODO: use cookies
        const token: string = LocalStorageHelper.getFromStorage('jwt');

        return await fetch(uri,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    console.log('changed username successfully')
                }else {
                    console.log('error while changing username')
                }
            })
    }
}


export {ChangeUserDataService}