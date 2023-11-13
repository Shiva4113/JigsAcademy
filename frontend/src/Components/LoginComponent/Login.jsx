import React from 'react'
import './Login.css'
//import { Box } from '@mui/system'
import {Container} from '@mui/system'


const Login = () => {
  return (
    <Container>
        <div className='login-div'>

            <div className='text'><strong>Login</strong></div>
            <div className='inputs'>
                <div className='input'>
                    <input type='text' className='username' placeholder='Username'/>
                </div>

                <div className='input'>
                    <input type='password' className='password' placeholder='Password'/>
                </div>
            </div>
            
            <div className='submit-div'>
                <button className='submit' type='submit'>Submit</button>
            </div>

            <div className='forgotpassword'><a href = "#">Forgot Password?</a></div>

        </div>
    </Container>
  )
}

export default Login