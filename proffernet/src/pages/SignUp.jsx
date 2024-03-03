import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/SignUp.css';

import signin from '../assets/signin.svg';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform authentication logic if needed
    // After successful login, navigate to the desired route
    navigate('/SignUp'); // Navigate to the home page
  };

  

  return (
    <>
      <div></div>
      <div className='card'>
        <div className='card__left'>
          <div className='card__info'>
            <div id='logo'></div>
            <div id='top_text'>
              <h2>Welcome </h2>
              <p id='message'></p>
            </div>
          </div>

          <div className='input'>
            <div className='input__field' id='user__name'>
              Email
              <input className='input__area' type="text" />
            </div>
            <div className='input__field' id='user__pass'>
              Password
              <input className='input__area' type="password" />
            </div>
            {/* <div className='input__field' id='user__pass'>
              Confirm Password
              <input className='input__area' type="password" />
            </div> */}
            <div className='btn__container'>
              <button onClick={handleSignup}>Sign Up</button>
              
            </div>
          </div>
        </div>
        <div className='card__right'>
          <div className='card__info'>
            <div id='logo'>
                <img src={signin} alt="SignInlogo" className="si" />  
            </div>
              
          </div>
         
        </div>
      </div>
    </>
  );
};

export default SignUp;
