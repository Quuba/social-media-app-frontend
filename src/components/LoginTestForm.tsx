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
            data=>{
                console.log('logged in successfully')
                navigate(`/user/${data.username}`)
            }
        ).catch(error => console.log('Error: ',error))
    }

    return (
        <div className={'TestForm'}>
            <form  method={'post'} onSubmit={handleSubmit}>
                <h2>Sign in</h2>

                <label>Name:</label>
                <input type={'text'} onChange={handleInputChange} name={'username'}/>
                <label>Password:</label>
                <input type={'password'} onChange={handleInputChange} name={'password'}/>

                <input type={'submit'} value={'Log in'}/>
            </form>
            <div className={'LinkBox'}>
                <Link className={'Link'} to={'/home'}>Home</Link>
                <Link className={'Link'} to={'/register'}>Register</Link>
            </div>
        </div>



    );
};

export default LoginTestForm;