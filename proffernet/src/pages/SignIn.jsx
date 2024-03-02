import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/SignIn.css';



const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic if needed
    // After successful login, navigate to the desired route
    navigate('/'); // Navigate to the home page
  };

  const handleSignup = () => {
    navigate('/SignUp')
  }

  return (
    <>
      <div></div>
      <div className='card'>
        <div className='card__left'>
          <div className='card__info'>
            <div id='logo'></div>
            <div id='top_text'>
              <h2>Welcome back!</h2>
              <p id='message'></p>
            </div>
          </div>

          <div className='input'>
            <div className='input__field' id='user__name'>
              Username
              <input className='input__area' type="text" />
            </div>
            <div className='input__field' id='user__pass'>
              Password
              <input className='input__area' type="password" />
            </div>
            <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div className='btn__container'>
              <button onClick={handleLogin}>Log In</button>
              
            </div>
          </div>
        </div>
        <div className='card__right'>
          <div className='card__info'>
            <div id='logo'></div>
              <img src="../../assets/signin.svg" alt="SignInlogo" className="si" />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default SignIn;
