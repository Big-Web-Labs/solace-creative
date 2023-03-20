import React from 'react'
import logo from '../assets/logo_blue.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'

const InternalProjects = () => {

    const { open } = useSelector((state) => state.menu)

    return (
        <div className="bg-[#F3F3F3]">
            {open && <NavOverlay/>}
            <CreativeBanner logo={logo}/>
            <CreativePortfolio />
            <Footer />
        </div>
    )
}

export default InternalProjects