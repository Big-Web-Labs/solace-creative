import React from 'react'
import logo from '../assets/solace_spinning.mp4'
import { Navbar } from './'
import '../App.css'

const HomeBanner = () => {
    return (
        <div className="h-[100vh] max-h-[1000px] section">
            <div className="relative">
                <Navbar />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <video autoPlay loop muted className="object-cover w-[80vh] h-[80vh] max-w-[800px] max-h-[800px]">
                    <source src={logo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default HomeBanner