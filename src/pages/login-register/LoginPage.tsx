import React, {useState} from 'react';
import './login-register.css'
import {Link, useNavigate} from "react-router-dom";
const LoginPage = () => {
    const [formData, setFormData] = useState<ILoginForm>({username: "", password: ""});

    const [loginError, setLoginError] = useState<string>("")

    interface ILoginForm {
        username: string;
        password: string;
    }

    const handleInputChange = (event: any) => {
        setFormData(data => ({...data, [event.target.name]: event.target.value}));
    }

    let navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
        fetch(
            'http://localhost:8080/user/login',
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
                    res.json().then(
                        data => {
                            console.log('logged in successfully')

                            // console.log(data[0])
                            // localStorage.setItem('JWS', data.username);
                            localStorage.setItem('logged', 'true');
                            //
                            navigate('/home')
                        }
                    )
                } else {
                    switch (res.status){
                        case 404:
                            setLoginError('user not found')
                            break;
                        case 401:
                            setLoginError('wrong password')
                            break;
                    }
                    console.log('failed to log in')
                    event.target.reset();
                }
            }
        ).catch(error => console.log('Error: ', error))
    }

    return (
        <div className={'LoginPage'}>
            <form method={'post'} onSubmit={handleSubmit}>
                <label>Name<span> *</span></label>
                <input type={'text'} onChange={handleInputChange} name={'username'}/>
                

                <label>Password <span> *</span></label>
                <input type={'password'} onChange={handleInputChange} name={'password'}/>


                <input type={"submit"} value={'Sign up'}/>

                {loginError !== "" && <span className={'signup-error'}>{loginError}</span>}

            </form>
            <h3>Don't have an account?</h3>
            <h4><Link to={'/register'}>Sign up</Link></h4>
        </div>
    );
};

export default LoginPage;