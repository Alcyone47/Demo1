import React from 'react'
import './Navbar.css'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home'

const Navbar = () => {
    return (
        <div class="header">

        <header class="header-content">

            <a href="#logo" class="logo">
                {/* <img src="./images/StudySyn.svg" alt="logoImage" class="logo-icon" /> */}
                <span class="logo-text">ProfferNet</span>
            </a>

            <nav class="nav">
                <a href="#home" class="nav-link">Home</a>
                <a href="#features" class="nav-link">Features</a>
                <a href="#pricing" class="nav-link">Pricing</a>
                <a href="#blog" class="nav-link">Blog</a>
                <a href="#about" class="nav-link">About</a>
            </nav>

            <a href="#contact" class="contact-button">
                Contact Us
            </a>

            <button type="button" class="menu-button">
                {/* <img src="./images/Hamburger.svg" alt="menuButton" class="menu-icon" /> */}
            </button>

        </header>
        

    </div>
    )
}

export default Navbar