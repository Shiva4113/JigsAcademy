import React from 'react'
import './Home.css' 
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () =>{
    navigate("/login")
  }

  const handleSignupClick = () =>{
    navigate("/signup")
  }
  return (
    <div className='container'>

      <div className='log-div'>
          <div className='text'><strong>Already have an account?</strong></div>
          <div className='login'>
            <button className='login_button' onClick={handleLoginClick}>Proceed to sign in</button>
          </div>
      </div>
      <div className='break'><h1>OR</h1></div>
      <div className='sign-div'>
        <div className='text'><strong>New to the website?</strong></div>
        <div className='signup'>
          <button className='signup_button' onClick = {handleSignupClick}>Proceed to sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Home