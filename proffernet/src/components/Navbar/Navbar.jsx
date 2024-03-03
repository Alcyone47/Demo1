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
               
                <a href="#event" class="nav-link">Event</a>
                <a href="#volunters" class="nav-link">Volunters</a>
                <a href="#organisers" class="nav-link">Organisers</a>
                
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