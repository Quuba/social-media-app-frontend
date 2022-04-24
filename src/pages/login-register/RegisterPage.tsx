import React, {useState} from 'react';
import './login-register.css'
import {Link, useNavigate} from "react-router-dom";
import {IRegisterFormData, RegisterService} from "../../services/LoginRegisterService";

const RegisterPage = () => {
    const [formData, setFormData] = useState<IRegisterFormData>({username: "", email: "", password: ""});

    const [signupError, setSignupError] = useState<string>("")

    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        setFormData(data => ({...data, [event.target.name]: event.target.value}));
    }


    const handleSubmit = (event: any) => {
        event.preventDefault();
        RegisterService.register(formData, (status:number)=>{
            switch (status) {
                case 409:
                    setSignupError('user already exists')
                    break;
                default:
                    setSignupError('unknown error')
                    break;
            }
            event.target.reset();
        }, navigate)

    }

    return (
        <div className={'RegisterPage'}>
            <form method={'post'} onSubmit={handleSubmit}>
                <label>Name<span> *</span></label>
                <input type={'text'} onChange={handleInputChange} name={'username'}/>

                <label>Email</label>
                <input type={'email'} onChange={handleInputChange} name={'email'}/>

                <label>Password <span> *</span></label>
                <input type={'password'} onChange={handleInputChange} name={'password'}/>

                <label>Repeat password</label>
                <input type={'password'} onChange={handleInputChange} name={'password-repeat'}/>

                <input type={"submit"} value={'Sign up'}/>

                {signupError !== "" && <span className={'signup-error'}>{signupError}</span>}

            </form>
            <h3>Have an account?</h3>
            <h4><Link to={'/login'}>Sign in</Link></h4>
        </div>
    );
};

export default RegisterPage;