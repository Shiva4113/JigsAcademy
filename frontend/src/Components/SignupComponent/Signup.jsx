import React, { useState, useCallback } from 'react';
import './Signup.css'; // You can create a separate CSS file for styling
import axios from 'axios';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = useCallback(async (e) => {
        e.preventDefault();
        try {
            // Add validation for password match here
            if (password !== confirmPassword) {
                console.log("Passwords do not match");
                return;
            }

            const res = await axios.post('http://localhost:2000/api/signup', {
                username: username,
                password: password,
            });

            if (res.data) {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                // Redirect or perform other actions upon successful signup
            }
        } catch (err) {
            console.log(err);
        }
    }, [username, password, confirmPassword]);

    return (
        <Container>
            <div className='signup-div'>
                <div className='text'>
                    <strong>Sign Up</strong>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <input
                            type='text'
                            id='username'
                            className='username'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input'>
                        <input
                            type='password'
                            id='password'
                            className='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input'>
                        <input
                            type='password'
                            id='confirmPassword'
                            className='confirm-password'
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className='submit-div'>
                    <form onSubmit={handleSignup}>
                        <button className='submit' type='submit'>
                            Sign Up
                        </button>
                    </form>
                </div>

                <div className='login-link'>
                    {/* <a className='link' href='/login'>Already have an account?</a> */}
                    <Link className='link' to = "/login">Already have an account?</Link>
                </div>
            </div>
        </Container>
    );
};

export default Signup;
