import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const RegisterTestForm = () => {

    const [formData, setFormData] = useState({});
    const [signupError, setSignupError] = useState<string>("")

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
                    setSignupError('bad credentials')
                    event.target.reset();
                }
            }
        ).catch(error => console.log('Error: ', error))
    }

    return (
        <div className={'TestForm'}>
            <form method={'post'} onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <div className={'Inputs'}>
                    <label>Name:</label>
                    <input type={'text'} onChange={handleInputChange} name={'username'}/>


                    <label>Password:</label>
                    <input type={'password'} onChange={handleInputChange} name={'password'}/>
                </div>

                {signupError!="" && <span style={{backgroundColor:"darkred", fontWeight:"bold", padding:"5px"}}>{signupError}</span>}

                <input type={'submit'} value={'Sign up'}/>
            </form>
            <span>Already an user? <Link to={'/login'}><br/> Sign in</Link></span>
        </div>

    );
};

export default RegisterTestForm;