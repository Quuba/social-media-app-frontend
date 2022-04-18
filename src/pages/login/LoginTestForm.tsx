import React, {useState} from 'react';
import {BrowserRouter, Link, Navigate, useNavigate} from "react-router-dom";

const LoginTestForm = () => {

    const navigate = useNavigate();

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
        ).then(
            res => res.json()
        ).then(
            data => {
                console.log('logged in successfully')
                localStorage.setItem('username', data.username);
                localStorage.setItem('logged', 'true');

                navigate('/home')
            }
        ).catch(error => console.log('Error: ', error))
    }

    return (
        <div className={'TestForm'}>
            <form method={'post'} onSubmit={handleSubmit}>
                <h2>Sign in</h2>

                <label>Name:</label>
                <input type={'text'} onChange={handleInputChange} name={'username'}/>

                <hr/>

                <label>Password:</label>
                <input type={'password'} onChange={handleInputChange} name={'password'}/>

                <hr/>

                <input type={'submit'} value={'Sign in'}/>
            </form>
        </div>


    );
};

export default LoginTestForm;