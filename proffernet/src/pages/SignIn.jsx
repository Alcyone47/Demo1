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
                    
                </div>
                <div className='card__right'>
                    <div className='card__right__img'>
                        <img src='' alt="" />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default SignIn