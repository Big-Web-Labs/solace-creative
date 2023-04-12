import React from 'react'
import logo from '../assets/solace_blue.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'
import ddg from '../assets/ddg.jpg'
import mickeyCover from '../assets/mickey-cover.jpg'
import aintmyfault from '../assets/aintmyfault.jpg'
import elevatedgoods from '../assets/elevatedgoods.png'
import haydCover from '../assets/hayd-cover.jpg'
import holdingon from '../assets/holdingon.jpg'
import jakepaul from '../assets/jakepaul.jpg'
import kaicenat from '../assets/kaicenat.jpg'
import acesCover from '../assets/aces-cover.jpg'
import kidlaroi from '../assets/kidlaroi.jpg'
import strickCover from '../assets/strick-cover.jpg'
import vignettesCover from '../assets/vignettes-cover.jpg'

const InternalProjects = () => {

    const { open } = useSelector((state) => state.menu)

    const projects = [
        {
            title: "9 Lives - DDG",
            image: ddg,
            slug: ""
        },
        {
            title: "Baby Tate - Saweetie Short-Form",
            image: mickeyCover,
            slug: ""
        },
        {
            title: "Babyface Ray - It Ain't My Fault",
            image: aintmyfault,
            slug: ""
        },
        {
            title: "Elevated Goods - ZOE LA",
            image: elevatedgoods,
            slug: ""
        },
        {
            title: "Hayd - Head in the Clouds",
            image: haydCover,
            slug: ""
        },
        {
            title: "iann dior - Holding On",
            image: holdingon,
            slug: ""
        },
        {
            title: "Jake Paul - 23",
            image: jakepaul,
            slug: ""
        },
        {
            title: "Kai Cenat MAFIATHON",
            image: kaicenat,
            slug: ""
        },
        {
            title: "Micro-visualizers - The Aces",
            image: acesCover,
            slug: ""
        },
        {
            title: "Spotify - The Kid LAROI",
            image: kidlaroi,
            slug: ""
        },
        {
            title: "Strick - Nelly Furtado",
            image: strickCover,
            slug: ""
        },
        {
            title: "The Aces Vignettes",
            image: vignettesCover,
            slug: ""
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