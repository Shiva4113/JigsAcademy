import React from 'react'
import './Login.css'
import { Box } from '@mui/system'
import {Container} from '@mui/system'


const Login = () => {
  return (
    <Container>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='inputs'>
                <div className='input'>
                    <input type='text'placeholder='Username'/>
                </div>

                <div className='input'>
                    <input type='password'placeholder='Password'/>
                </div>
            </div>

            <div className='ForgotPassword'><span href = "#">Forgot Password?</span></div>

            <div className='submit-container'>
                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Login