import React from 'react'
import logo from '../assets/solace_spinning.mp4'
import logo_spinning from '../assets/logo_spinning.mp4'
import { Navbar } from './'
import '../App.css'

const HomeBanner = () => {
    return (
        <div className="h-[100vh] max-h-[1000px] min-h-[600px] section">
            <div className="relative">
                <Navbar />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <video autoPlay loop muted className="object-cover w-[60vh] h-[60vh] max-w-[800px] max-h-[800px] min-w-[400px] min-h-[400px]">
                    <source src={logo_spinning} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default HomeBanner