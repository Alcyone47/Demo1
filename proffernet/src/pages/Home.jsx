import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            Home
            <Navbar/>
        </div>
    )
}

export default Home