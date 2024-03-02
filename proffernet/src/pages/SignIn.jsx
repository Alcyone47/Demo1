import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/SignIn.css'

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>SignIn</div>
            <div className='card'>
                <div className='card__left'>
                    <div className='card__info'>
                    <div id='logo'>
                            X
                        </div>
                        <div id='top_text'>
                            <h2>Welcome back!</h2>
                            <p id='message'>Sign in into your account.</p>
                        </div>
                    </div>
                        
                    <div className='input'>
                        <div className='input__field' id='user__name'>
                            Username
                            <input className='input__area' type="text" />
                        </div>
                        <div className='input__field' id='user__pass'>
                            Password
                            <input className='input__area' type="text" name="" id="" />
                        </div>
                        <div className='btn__container'>
                            <button>Log In</button>
                        </div>
                        
                    </div>
                </div>
                <div className='card__right'>
                    
                </div>
            </div>
        </>
        
    )
}

export default SignIn