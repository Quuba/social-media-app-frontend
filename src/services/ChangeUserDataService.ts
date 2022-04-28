import {LocalStorageHelper} from "../utils/LocalStorageHelper";
import store, {IPublicUserData, IUserData, setDescription, setUsername} from "../store/store";


const ChangeUserDataService = {
    getUserData: () => {
        ChangeUserDataService.fetchGetWithToken('GET', 'http://localhost:8080/api/user/update-username').then(
            data => console.log(data)
        )
    },
    changeUsername: (newUsername: string, dispatch: any) => {
        const userdata = store.getState().userData;

        const patchData = {
            oldUsername: userdata.username,
            newUsername: newUsername
        }

        ChangeUserDataService.fetchWithToken('PATCH', 'http://localhost:8080/api/user/update-username', patchData, (data:IUserData)=>{
            store.dispatch(setUsername(data.username))
        })


        return newUsername
    },
    changeDescription: (newDescription: string, dispatch: any) => {
        const userdata = store.getState().userData;
        console.log(userdata)

        const patchData = {
            username: userdata.username,
            description: newDescription
        }
        ChangeUserDataService.fetchWithToken('PATCH', 'http://localhost:8080/api/user/update-description', patchData, (data:IUserData)=>{
            store.dispatch(setDescription(data.description != null ? data.description : ''))
        })
    },
    fetchWithToken: (method: string, uri: string, data: object, onSucceed?:any, onFail?:any) => {
        console.log('fetching')
        //TODO: use cookies
        const token: string = LocalStorageHelper.getFromStorage('jwt');
        return fetch(uri,
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
                        res.json().then(
                            data => {
                                onSucceed(data)
                                return data;
                            }
                        )
                    } else {
                        console.log('error while changing username')
                        onFail()
                        return null
                    }
                }
            ).catch(error => console.log)
    },
    fetchGetWithToken: (method: string, uri: string) => {
        console.log('fetching get')
        //TODO: use cookies
        const token: string = LocalStorageHelper.getFromStorage('jwt');
        return fetch(uri,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            })
            .then(res => res.json()).then(data => {
                if (data.ok) {
                    console.log('changed username successfully')
                    return data;
                } else {
                    console.log('error while changing username')
                }
            })
    }
}


export {ChangeUserDataService}