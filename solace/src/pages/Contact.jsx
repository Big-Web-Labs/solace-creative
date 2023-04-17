import React from 'react'
import logo from '../assets/solace_white.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer, ContactForm} from '../components'
import { useSelector, useDispatch } from 'react-redux'

const Contact = () => {

    const { open } = useSelector((state) => state.menu)

    return (
        <div className="bg-[#2323F2] text-white">
            {open && <NavOverlay/>}
            <CreativeBanner logo={logo}/>
            <ContactForm />
            <div className="section flex flex-col items-center gap-y-5 pt-5 pb-16 text-xl sm:text-2xl">
                <p className="text-center">937 E. Pico Blvd. Los Angeles, CA 90021</p>
                <p>info@solacecreative.co</p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact