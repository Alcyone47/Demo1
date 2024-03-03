import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/SignIn.css';
import { createClient } from '@supabase/supabase-js';

import signin from '../assets/signin.svg';

const supabaseUrl = 'https://swvvgzzinqsawjmzqdhe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dnZnenppbnFzYXdqbXpxZGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNDc3MTUsImV4cCI6MjAyNDkyMzcxNX0.crgwM73Ce0J8ok9bqbdsZMRbEnBwT-Gz5cYFZvBV7FQ';

export const supabase = createClient(supabaseUrl, supabaseKey);


const SignIn = () => {

  const navigate = useNavigate();
  const [userName,setUserName] = useState();
  const [userPass,setUserPass] = useState();


  const handleUNchange = (event) => {
    setUserName(event.target.value);
  }

  const handlePWchange = (event)  => {
    setUserPass(event.target.value);
  }
  

  const handleLogin = async () => {
    try {
      const username = userName;
      const password = userPass;

      if (!username || !password) {
        // Add input validation, ensure both username and password are provided
        alert('Username and password are required');
        return;
      }

      const { user, error } = await supabase.auth.signInWithPassword({
        email: username,
        password,
      });

      if (error) {
        alert('Sign in error:', error.message);
      } else {
        console.log('Signed in successfully:', user);
        navigate('/');
      }
    } catch (error) {
      alert('Sign in error:', error.message);
    }
  };

  /* const handleSignup = () => {
    navigate('/SignUp');
  }; */

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
              <input onChange={handleUNchange} className='input__area' type="text" name='user__name'/>
            </div>
            <div className='input__field' id='user__pass'>
              Password
              <input onChange={handlePWchange} className='input__area' type="password" name='user__pass' />
            </div>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className='btn__container'>
              <button onClick={handleLogin}>Log In</button>
            </div>
          </div>
        </div>
        <div className='card__right'>
          <div className='card__info'>
            <div id='logo'></div>
            <img src={signin} alt="SignInlogo" className="si" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
