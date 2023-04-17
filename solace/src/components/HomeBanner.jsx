import React, { useState, useEffect } from 'react'
import logo from '../assets/solace_spinning.mp4'
import logo_spinning from '../assets/logo_spinning.mp4'
import { Navbar } from './'
import '../App.css'
import { motion } from 'framer-motion'
import { getRandomQuote } from '../utils'

const HomeBanner = () => {
    const [quote, setQuote] = useState('')

    useEffect(() => {
        const randomQuote = getRandomQuote();
        setQuote(randomQuote)
    }, [])

    return (
        <div className="h-[100vh] max-h-[1000px] min-h-[600px] section relative font-roboto text-[#F3F3F3]">
            <div className="relative">
                <Navbar />
            </div>
            <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 1, delay: 2 }} className="absolute left-[50%] top-[50%] mt-[-30vh] ml-[-30vh] z-0">
                <video autoPlay loop muted className="object-cover w-[60vh] h-[60vh] max-w-[800px] max-h-[800px] min-w-[400px] min-h-[400px]">
                    <source src={logo_spinning} type="video/mp4" />
                </video>
            </motion.div>
            <div className="flex justify-center items-center h-full">
                <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 3, delay: 2 }} className="text-center text-[1.5rem] sm:text-[2.5rem] w-[60%]">{quote}</motion.p>
            </div>
        </div>
    )
}

export default HomeBanner