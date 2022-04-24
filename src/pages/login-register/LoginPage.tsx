import React, {useState} from 'react';
import './login-register.css'
import {Link, useNavigate} from "react-router-dom";
import {ILoginFormData, LoginService} from "../../services/LoginRegisterService";

const LoginPage = () => {
    const [formData, setFormData] = useState<ILoginFormData>({username: "", password: ""});

    const [loginError, setLoginError] = useState<string>("")


    const handleInputChange = (event: any) => {
        setFormData(data => ({...data, [event.target.name]: event.target.value}));
    }
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        LoginService.login(formData, (status: number) => {
            switch (status) {
                case 404:
                    setLoginError('user not found')
                    break;
                default:
                    setLoginError('unknown error')
                    break;
            }
            event.target.reset();
        }, navigate)

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