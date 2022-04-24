import React, {useState} from 'react';
import './login-register.css'
import {Link, useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [formData, setFormData] = useState<IRegisterForm>({username: "", email: "", password: ""});

    const [signupError, setSignupError] = useState<string>("")

    interface IRegisterForm {
        username: string;
        email: string;
        password: string;
    }

    const handleInputChange = (event: any) => {
        setFormData(data => ({...data, [event.target.name]: event.target.value}));
    }

    let navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);

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
                    switch (res.status) {
                        case 409:
                            setSignupError('user already exists')
                            break;
                        default:
                            setSignupError('unknown error')
                            break;
                    }
                    console.log('error while trying to register')
                    event.target.reset();
                }
            }
        ).catch(error => console.log('Error: ', error))
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