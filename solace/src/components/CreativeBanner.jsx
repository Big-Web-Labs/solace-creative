import React from 'react'
import { Navbar } from './'

const CreativeBanner = ({logo}) => {
    return (
        <div className="section">
            <div className="relative">
                <Navbar />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <a href="/"><img src={logo} alt="Solace Creative" className="w-20"/></a>
            </div>
        </div>
    )
}

export default CreativeBanner