import React from 'react'
import './Home.css' 
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () =>{
    navigate("/Login")
  }
  return (
    <div className='container'>

      <div className='login-div'>
          <div className='text'><strong>Already have an account?</strong></div>
          <div className='login'>
            <button className='login_button' onClick={handleLoginClick}>Proceed to sign in</button>
          </div>
      </div>
      <div className='break'><h2>OR</h2></div>
      <div className='signup-div'>
        <div className='text'><strong>New to the website?</strong></div>
        <div className='signup'>
          <button className='signup_button'>Proceed to sign up</button>
        </div>
      </div>
    </div>

    

  )
}

export default Home