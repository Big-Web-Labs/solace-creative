import React from 'react'
import logo from '../assets/solace_blue.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'
import roseCover from '../assets/rose-cover.jpg'
import whiteHat from '../assets/white-hat.png'
import solaceStudio from '../assets/solace-studio-cover.jpg'

const InternalProjects = () => {

    const { open } = useSelector((state) => state.menu)

    const projects = [
        {
            title: "\"MALIBU SOUVENIR HAT\"",
            artist: "SOLACE",
            image: whiteHat,
            description: "Solace is, by definition, an immaterial “place”. It’s somewhere you arrive mentally, but isn’t necessarily dependent upon location. With that being said, Malibu has always been a place that we’ve found consistent refuge in. During peak pandemic, we would often drive the PCH and land along the oceanside - it’s been our consistent source of peace and calmness. We came up with a simple design, inspired by standard souvenir hats. It caught quick attention in our immediate circle and we’ve kept it as a friends & family staple.",
            slug: "malibu-souvenir-hat",
            link: "",
            background: "#4571C8"
        },
        {
            title: "\"FIRE TO FLOWER\"",
            artist: "SOLACE",
            image: roseCover,
            description: "Our friend, Tayla, needed some new images. We like to compliment our subject when it comes to overall creative - the idea to light a rose on fire was really just a way to capture Tayla’s energy. It turns out, you actually can’t just light a rose with an open flame from a lighter or match. We audibled and used whatever we had laying around our office - the result was still pretty fire.",
            slug: "fire-to-flower",
            link: "",
            background: "#F5D5BC"
        },
        {
            title: "\"SOLACE STUDIO\"",
            artist: "SOLACE",
            image: solaceStudio,
            description: "Admittedly, we aren’t the best at consistently documenting our projects and work - it comes and goes in waves. This is our ongoing attempt to capture moments that matter... the stuff behind the scenes. We’ve always found a lot of value to doing this, we’re holding ourselves accountable.",
            slug: "solace-studio",
            link: "",
            background: "#181818"
        },
    ]

    return (
        <div className="bg-[#F3F3F3]">
            {open && <NavOverlay/>}
            <CreativeBanner logo={logo}/>
            <CreativePortfolio projects={projects}  />
            <Footer />
        </div>
    )
}

export default InternalProjects