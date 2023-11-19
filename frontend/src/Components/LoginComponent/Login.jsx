//imports
import React, { useState, useCallback } from 'react';
import './Login.css';
import axios from 'axios';

//importing essentials
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:2000/api/login', {
                username: username,
                password: password,
            });
            if (res.data) {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                window.location.href = '/login';
            }
        } catch (err) {
            console.log(err);
        }
    }, [username, password]);

    return (
        <Container>
            <div className='login-div'>
                <div className='text'>
                    <strong>Login</strong>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <input
                            type='text'
                            id='username'
                            className='username'
                            placeholder='Username'
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            required
                        />
                    </div>

                    <div className='input'>
                        <input
                            type='password'
                            id='password'
                            className='password'
                            placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                </div>

                <div className='submit-div'>
                    <form onSubmit={handleLogin}>
                        <button className='submit' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>

                <div className='forgotpassword'>
                    <Link to='#'>Forgot Password?</Link>
                </div>
                    <Link to='/Signup' className='noAcc'>Don't have an account yet?</Link>
                {/*Bound to change */}
            </div>
        </Container>
    );
};

export default Login;
