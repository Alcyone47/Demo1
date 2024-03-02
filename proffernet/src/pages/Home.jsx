import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
           
            <Navbar/>
            {/* <Footer/> */}
     <div class="content">
        <section class="main-section">

            <div class="content-left">
                <p class="section-label">Very proud to introduce</p>
                <h1 class="section-title">Seamless Learning for Brighter Futures</h1>
                <p class="section-description">
                    Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve brighter futures. Join us on a transformative journey to simplify education and unlock your full potential.
                </p>
                <div class="button-group">
                    <a href="#start" class="start-button">Start Now</a>
                    <a href="#tour" class="tour-button">Take Tour</a>
                </div>
            </div>
            
            <div class="content-right">

                <div class="image-container">
                    <img src="./images/usgs-hoS3dzgpHzw-unsplash.jpg" alt="sectionImage" class="section-image" />
                </div>

            </div>
        </section>
    </div>
   
</div>
    )
}

export default Home