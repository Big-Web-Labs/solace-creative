import React from 'react'
import logo from '../assets/logo_light.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'

const Contact = () => {

    const { open } = useSelector((state) => state.menu)

    return (
        <div className="bg-[#2323F2] text-white">
            {open && <NavOverlay/>}
            <CreativeBanner logo={logo}/>
            <CreativePortfolio />
            <Footer />
        </div>
    )
}

export default Contact