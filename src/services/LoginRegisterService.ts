import store, {setUsername} from "../store/store";
import {useDispatch} from "react-redux";

interface ILoginFormData {
    username: string;
    password: string;

}

const LoginService = {

    login: function (formData: ILoginFormData, onFail: Function, navigate:any) {
        fetch(
            'http://localhost:8080/api/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
        ).then(
            res => {
                const dispatch = useDispatch()
                if (res.ok) {
                    const token = res.headers.get('authorization');
                    if (token != null) {
                        //TODO: use cookies
                        localStorage.setItem('jwt', token);
                    }
                    res.json().then(
                        data => {
                            console.log('logged in successfully')

                            dispatch(setUsername(data[0].username))
                            localStorage.setItem('email', data[0].email)
                            localStorage.setItem('description', data[0].description)
                            localStorage.setItem('profile-image-uri', data[0].image)
                            // console.log('image: ',localStorage.getItem('profile-image-uri') == 'null')

                            //TODO:remove
                            //instead, check if the jwt token cookie hasn't expired
                            localStorage.setItem('logged', 'true');
                            navigate('/home')
                        }
                    )
                } else {
                    onFail(res.status);
                }
            }
        ).catch(error => console.log('Error: ', error))
    }

}
interface IRegisterFormData{
    username: string;
    email: string;
    password: string;
    description:string;
}
const RegisterService = {


    register: function (formData: IRegisterFormData, onFail: Function, navigate:any) {

        const postData = {
            username: formData.username,
            password: formData.password,
            email: formData.email,
            description: formData.description,
        }
        fetch(
            'http://localhost:8080/api/user/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            }
        ).then(
            res => {
                if (res.ok) {
                    console.log('registered successfully')
                    navigate('/login')
                } else {
                    onFail(res.status);
                }
            }
        ).catch(error => console.log('Error: ', error))
    }
}
export type {ILoginFormData, IRegisterFormData}
export {LoginService, RegisterService}