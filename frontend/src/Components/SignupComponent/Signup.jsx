import React, { useState, useCallback } from 'react';
import './Signup.css'; 
import axios from 'axios';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [section, setSection] = useState('');
    const navigate = useNavigate();

    const handleSignup = useCallback(async (e) => {
        e.preventDefault();

        try {
            
            if (password !== confirmPassword) {
                console.log("Passwords do not match");
                return;
            }

            // Set the section state inside the callback
            const alphabets = 'ABCDEFG';
            const randomIndex = Math.floor(Math.random() * alphabets.length);
            setSection(alphabets[randomIndex]);

            const res = await axios.post('http://localhost:2000/api/signup', {
                username: username,
                password: password,
                mail: email,
                name: name,
                section: section
            });

            if (res.data) {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }, [email, name, username, password, confirmPassword, section, navigate]);

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
                            id='email'
                            className='email'
                            placeholder='Email-ID'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input'>
                        <input
                            type='text'
                            id='name'
                            className='name'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className='input'>
                        <input
                            type = 'hidden'
                            id='section'
                            className='section'
                            placeholder='Section'
                            value={section}
                            readOnly
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
                    <Link className='link' to='/login'>
                        Already have an account?
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Signup;
