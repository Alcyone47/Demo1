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
         
            <Footer/>
    
    
   
</div>
    )
}

export default Home