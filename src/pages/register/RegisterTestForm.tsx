import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const RegisterTestForm = () => {

    const [formData, setFormData] = useState({});

    const handleInputChange = (event: any) => {
        setFormData(data => ({...data, [event.target.name]: event.target.value}));
    }
    let navigate = useNavigate();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
        fetch(
            'http://localhost:8080/user/register',
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
                    console.log('registered successfully')
                    navigate('/login')
                } else {
                    console.log('error while trying to register')
                }
            }
        ).catch(error => console.log('Error: ', error))
    }

    return (
        <div className={'TestForm'}>
            <form method={'post'} onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <label>Name:</label>
                <input type={'text'} onChange={handleInputChange} name={'username'}/>

                <hr/>

                <label>Password:</label>
                <input type={'password'} onChange={handleInputChange} name={'password'}/>

                <hr/>

                <input type={'submit'} value={'Sign up'}/>
            </form>
            <span>Already an user? <Link to={'/login'}><br/> Sign in</Link></span>
        </div>

    );
};

export default RegisterTestForm;