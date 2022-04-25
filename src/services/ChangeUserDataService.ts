import {LocalStorageHelper} from "../utils/LocalStorageHelper";

const ChangeUserDataService = {
    changeUsername: function (newUsername: string) {
        const patchData = {
            oldUsername: LocalStorageHelper.getFromStorage('username'),
            newUsername: newUsername
        }

        const token:string = LocalStorageHelper.getFromStorage('jwt');
        fetch('http://localhost:8080/api/user/update-username',
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(patchData)
            })
            .then(res => {
                if(res.ok){
                    console.log('changed username successfully')
                }
            })

        localStorage.setItem('username', newUsername)
        return newUsername
    }
}

export {ChangeUserDataService}