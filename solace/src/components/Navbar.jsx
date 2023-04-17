import React, { useState } from 'react'
import menu from '../assets/menu.png'
import { useSelector, useDispatch } from 'react-redux'
import { turnOn, turnOff } from '../redux/menuState'
import { AiOutlineClose } from 'react-icons/ai'
import menu_black from '../assets/menu_black.png'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

    const { open } = useSelector((state) => state.menu)
    const dispatch = useDispatch()
    const location = useLocation();

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const [hover, setHover] = useState(0)

    return (
        <div className="relative z-20">
            {location.pathname == "/" &&
                <motion.ul className="absolute hidden md:flex md:flex-row items-center md:items-start justify-center gap-y-5 md:justify-between h-screen w-full text-[#F3F3F3] text-[1.5rem] md:text-[1rem] lg:text-[1.25rem] lg:px-20">
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.10 }}>
                        <a href="/creative-agency" onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} className={hover == 1 ? "text-[#F3F3F3]/80" : ""}>CREATIVE AGENCY</a>
                        {hover == 1 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[135px] text-[#F3F3F3]/80">Every project that we take on becomes woven into our DNA. Here's a selection of our works:</motion.p>}
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }}>
                        <a href="/for-the-like-minded" onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} className={hover == 2 ? "text-[#F3F3F3]/80" : ""}>FOR THE LIKE-MINDED</a>
                        {hover == 2 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[160px] text-[#F3F3F3]/80">Creatively, we have no focus - our focus resides in our purpose. Here's our ethos:</motion.p>}
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }}>
                        <a href="/internal-projects" onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} className={hover == 3 ? "text-[#F3F3F3]/80" : ""}>INTERNAL PROJECTS</a>
                        {hover == 3 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[150px] text-[#F3F3F3]/80">No parameters. All play. We believe strongly in stoking childlike curiosity with work that is purely for ourselves:</motion.p>}
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.40 }}>
                        <a href="/contact" onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} className={hover == 4 ? "text-[#F3F3F3]/80" : ""}>CONTACT</a>
                        {hover == 4 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[70px] text-[#F3F3F3]/80">Few things get us as excited as a new project and a new partnership. Hit us up:</motion.p>}
                    </motion.li>
                </motion.ul>
            }
            <div className="absolute right-0 flex items-center gap-x-10 z-10">
                {!open && (location.pathname == "/" || location.pathname == "/for-the-like-minded" || location.pathname == "/contact") && <img src={menu} alt="menu" className={location.pathname == "/" ? "block md:hidden cursor-pointer" : "cursor-pointer"} onClick={() => dispatch(turnOn())} />}
                {!open && (location.pathname == "/creative-agency" || location.pathname == "/internal-projects") && <img src={menu_black} alt="menu" className="cursor-pointer" onClick={() => dispatch(turnOn())} />}
            </div>
            <div className="fixed right-8 flex items-center gap-x-10 z-10">
                {open && <AiOutlineClose className="cursor-pointer text-[#F3F3F3]/80" size={30} onClick={() => dispatch(turnOff())} />}
            </div>
        </div>

    )
}

export default Navbar