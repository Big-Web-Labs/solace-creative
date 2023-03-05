import React from 'react'
import logo from '../assets/solace_logo.png'
import downArrow from '../assets/down_arrow.png'
import { Navbar } from './'
import '../App.css'

const HomeBanner = () => {
    return (
        <div className="shoe_background section relative">
            <div className="relative flex">
                <img src={logo} alt="Solace logo" className="max-w-[50%]"/>
                <Navbar />
            </div>
            <div className="absolute bottom-0 left-0 px-10 py-3 sm:py-6 flex justify-between w-full items-center">
                <h1 className="text-white text-[1.125rem] sm:text-[2.25rem] lg:text-[3.78rem] font-light font-roboto">Nike: Virgil Abloh "CODES"</h1>
                <a href="#data1"><img src={downArrow} alt="down arrow" className="cursor-pointer w-[50px] sm:w-auto"/></a>
            </div>
        </div>
    )
}

export default HomeBanner