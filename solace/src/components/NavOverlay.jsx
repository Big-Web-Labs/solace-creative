import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

const NavOverlay = () => {

    const { open } = useSelector((state) => state.menu)
    const dispatch = useDispatch()

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const [hover, setHover] = useState(0)

    return (
        <motion.div animate={{ opacity: [0, 1] }} className="z-10 h-[100vh] max-h-[1000px] fixed w-screen bg-[#2323F2] text-[#F3F3F3] text-[1.5rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[2rem]">
            <motion.ul className="section relative flex flex-col md:flex-row items-center md:items-start justify-center gap-y-5 md:justify-between md:pr-44 h-full">
                <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.10 }} >
                    <a href="/creative-agency" onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} className={hover == 1 ? "text-[#F3F3F3]/80" : ""}>CREATIVE AGENCY</a>
                    {window.innerWidth > 768 && hover == 1 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[135px] xl:w-[275px] text-[#F3F3F3]/80">Every project that we take on becomes woven into our DNA. Here's a selection of our works:</motion.p>}
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }}>
                    <a href="/for-the-like-minded" onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} className={hover == 2 ? "text-[#F3F3F3]/80" : ""}>FOR THE LIKE-MINDED</a>
                    {window.innerWidth > 768 && hover == 2 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[170px] xl:w-[325px] text-[#F3F3F3]/80">Creatively, we have no focus - our focus resides in our purpose. Here's our ethos:</motion.p>}
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }}>
                    <a href="/internal-projects" onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} className={hover == 3 ? "text-[#F3F3F3]/80" : ""}>INTERNAL PROJECTS</a>
                    {window.innerWidth > 768 && hover == 3 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[160px] xl:w-[310px] text-[#F3F3F3]/80">No parameters. All play. We believe strongly in stoking childlike curiosity with work that is purely for ourselves:</motion.p>}
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.40 }}>
                    <a href="/contact" onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} className={hover == 4 ? "text-[#F3F3F3]/80" : ""}>CONTACT</a>
                    {window.innerWidth > 768 && hover == 4 && <motion.p animate={{ opacity: [0, 1] }} className="text-[1rem] w-[70px] xl:w-[135px] text-[#F3F3F3]/80">Few things get us as excited as a new project and a new partnership. Hit us up:</motion.p>}
                </motion.li>
            </motion.ul>
        </motion.div>

    )
}

export default NavOverlay