import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/SignIn.css'

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>SignIn</div>
            <div className='card'>
                <div className='top-switch'>
                    <div className=''></div>
                </div>
            </div>
        </>
        
    )
}

export default SignIn