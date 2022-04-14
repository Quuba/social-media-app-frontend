import React, {useState} from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const LoginTestForm = () => {

    const [formData, setFormData] = useState({});

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
        ).then(null)
    }

    return (
            <form className={'TestForm'} method={'post'} onSubmit={handleSubmit}>
                <h2>Sign in</h2>

                <label>Name:</label>
                <input type={'text'} onChange={handleInputChange} name={'username'}/>
                <label>Password:</label>
                <input type={'password'} onChange={handleInputChange} name={'password'}/>

                <input type={'submit'} value={'sign in'}/>
                <Link to={'/home'}>Home</Link>
                <Link to={'/register'}>Register</Link>
            </form>


    );
};

export default LoginTestForm;