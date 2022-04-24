
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
                if (res.ok) {
                    const token = res.headers.get('authorization');
                    if (token != null) {
                        localStorage.setItem('jwt', token);
                        console.log(token)
                    }
                    res.json().then(
                        data => {
                            console.log('logged in successfully')
                            // console.log(data)
                            localStorage.setItem('logged', 'true');
                            navigate('/HomePage')
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
}
const RegisterService = {


    register: function (formData: ILoginFormData, onFail: Function, navigate:any) {

        const postData = {
            username: formData.username,
            password: formData.password
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