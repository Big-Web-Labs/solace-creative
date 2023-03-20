import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

const SearchOverlay = () => {

    const { searchOpen } = useSelector((state) => state.searchR)
    const dispatch = useDispatch()

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const [hover, setHover] = useState(0)

    return (
        <motion.div animate={{ opacity: [0, 1] }} className="z-10 h-[100vh] max-h-[1000px] fixed w-screen bg-[#181818] text-[#F3F3F3] text-[1.5rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[2rem]">
            <div className="section h-full flex items-center">
                <input className="bg-transparent text-[#f3f3f3] focus:outline-none" placeholder="Type your search here..." />
            </div>
        </motion.div>

    )
}

export default SearchOverlay