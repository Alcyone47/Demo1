import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <div class="footer-container">
    <footer class="footer">

        <div class="footer-top">

            <div class="comp-logo">
                <a class="logo-link" href="#">
                    {/* <img class="logo-svg" src="./images/StudySyn.svg"/> */}
                    {/* StudySync */}
                </a>
            </div>
            {/* <p class="filler-text">Seamless Learning for Brighter Futures.</p> */}
            <div class="social">
                    <a class="social-link" href="#">
                        {/* <img src="./images/instagram.svg" class="social-icon" /> */}
                    </a>
                    <a class="social-link">
                        {/* <img src="./images/linkedin.svg" class="social-icon" /> */}
                    </a>
                    <a class="social-link">
                        {/* <img src="./images/Microsoft.svg" class="social-icon" /> */}
                    </a>
                    <a class="social-link">
                        {/* <img src="./images/twitter.svg" class="social-icon" /> */}
                    </a>
            </div>
        </div>

        <div class="footer-grid">
                  
            <div class="footer-grid-column">
                        <div class="footer-grid-heading">
                            Products
                        </div>
                        <ul class="footer-links-list">
                            <li>
                                <a href="#overview" class="footer-link">Overview</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Solutions</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Pricing</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Customers</a>
                            </li>
                        </ul>
            </div>
                  
            <div class="footer-grid-column">
                        <div class="footer-grid-heading">
                            Company
                        </div>
                        <ul class="footer-links-list">
                            <li>
                                <a href="#overview" class="footer-link">About</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Investors</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Jobs</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Press</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Blog</a>
                            </li>
                        </ul>
            </div>
                    
            <div class="footer-grid-column">
                        <div class="footer-grid-heading">
                            Support
                        </div>
                        <ul class="footer-links-list">
                            <li>
                                <a href="#overview" class="footer-link">Contact</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Documentation</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Chat</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">FAQ</a>
                            </li>
                        </ul>
            </div>
                   
            <div class="footer-grid-column">
                        <div class="footer-grid-heading">
                            Legal
                        </div>
                        <ul class="footer-links-list">
                            <li>
                                <a href="#overview" class="footer-link">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#overview" class="footer-link">Cookie Settings</a>
                            </li>
                            
                        </ul>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer