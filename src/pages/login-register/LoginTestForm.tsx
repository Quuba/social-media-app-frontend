import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";


const LoginTestForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [loginError, setLoginError] = useState<string>("")

    const handleInputChange = (event: any) => {
        setFormData(data => ({...data, [event.target.name]: event.target.value}));
    }


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
                            // localStorage.setItem('logged', 'true');
                            //
                            // navigate('/HomePage')
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
        <div className={'TestForm'} id={'login-register-form'}>
            <form method={'post'} onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className={'Inputs'}>
                    <label>Name:</label>
                    <input type={'text'} onChange={handleInputChange} name={'username'}/>

                    <label>Password:</label>
                    <input type={'password'} onChange={handleInputChange} name={'password'}/>
                </div>

                {loginError!=="" && <span style={{backgroundColor:"darkred", fontWeight:"bold", padding:"5px"}}>{loginError}</span>}

                <input type={'submit'} value={'Sign in'}/>
            </form>
            <span>Don't have an account? <Link to={'/register'}><br/> Sign up</Link></span>

        </div>


    );
};

export default LoginTestForm;