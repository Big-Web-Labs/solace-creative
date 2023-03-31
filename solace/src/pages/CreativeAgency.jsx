import React from 'react'
import logo from '../assets/solace_blue.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'

const CreativeAgency = () => {

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

export default CreativeAgency