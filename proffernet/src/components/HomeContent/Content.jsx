import React from 'react';
import { useNavigate } from 'react-router-dom';
import landing_img from '../../assets/landing_img.svg';
import './Content.css';

const Content = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/SignIn');
    }
    const handleSignUp = () => {
        navigate('/SignUp');
    }
    
    return (
    <>
        <div className="content">
            <section className="main-section">
                <div className="content-left">
                    <p className="section-label">Very proud to introduce</p>
                    <h1 className="section-title">Proffernet</h1>
                    <p className="section-description">
                        Our innovative platform offers an effortless and seamless approach to learning, empowering volunteers and organizers to match up their skills to achieve their goal project. Join us on a transformative journey to unlock your full potential.
                    </p>
                    <div className="button-group">
                        <a onClick={handleSignUp} className="start-button">Sign Up</a>
                        <a onClick={handleSignIn} className="tour-button">Sign In</a>
                    </div>
                </div>
                
                <div className="content-right">
                    <div className="image-container">
                        <img src={landing_img} alt="sectionImage" className="section-image" />
                    </div>
                </div>
            </section>
        </div>
</>
    );
}

export default Content;
//waht is the path of landing_img.svg
