import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='inputs'>
                <div className='input'>
                    <input type='text'/>
                </div>

                <div className='input'>
                    <input type='password'/>
                </div>
            </div>

            <div className='ForgotPassword'><span href = "#">Forgot Password?</span></div>

            <div className='submit-container'>
                <div className='submit'>
                    <button type='submit' name='Submit'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login