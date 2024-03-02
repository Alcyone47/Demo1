import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Content from '../components/HomeContent/Content'

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar/>
            <Content/>
            <Footer/>
        </>
    )
}

export default Home