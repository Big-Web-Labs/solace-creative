import React, { useState, useEffect } from 'react'
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
import rightArrow from '../assets/rightArrow.png'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

const Carousel = () => {

    const { open } = useSelector((state) => state.menu)

    const [data, setData] = useState([
        {
            idx: 1,
            pos: 1,
            title: "9 Lives - DDG",
            image: ddg,
            slug: "read-more",
            active: true
        },
        {
            idx: 2,
            pos: 2,
            title: "Baby Tate - Saweetie Short-Form",
            image: mickeyCover,
            slug: "read-more",
            active: true
        },
        {
            idx: 3,
            pos: 3,
            title: "Babyface Ray - It Ain't My Fault",
            image: aintmyfault,
            slug: 'read-more',
            active: false
        },
        {
            idx: 4,
            pos: 4,
            title: "Elevated Goods - ZOE LA",
            image: elevatedgoods,
            slug: "read-more",
            active: false
        },
        {
            idx: 5,
            pos: 5,
            title: "Hayd - Head in the Clouds",
            image: haydCover,
            slug: "read-more",
            active: false
        },
        {
            idx: 6,
            pos: 6,
            title: "iann dior - Holding On",
            image: holdingon,
            slug: "read-more",
            active: false
        },
        {
            idx: 7,
            pos: 7,
            title: "Jake Paul - 23",
            image: jakepaul,
            slug: "read-more",
            active: false
        },
        {
            idx: 8,
            pos: 8,
            title: "Kai Cenat MAFIATHON",
            image: kaicenat,
            slug: "read-more",
            active: false
        },
        {
            idx: 9,
            pos: 9,
            title: "Micro-visualizers - The Aces",
            image: acesCover,
            slug: "read-more",
            active: false
        },
        {
            idx: 10,
            pos: 10,
            title: "Spotify - The Kid LAROI",
            image: kidlaroi,
            slug: "read-more",
            active: false
        },
        {
            idx: 11,
            pos: 11,
            title: "Strick - Nelly Furtado",
            image: strickCover,
            slug: "read-more",
            active: false
        },
        {
            idx: 12,
            pos: 12,
            title: "The Aces Vignettes",
            image: vignettesCover,
            slug: "read-more",
            active: false
        },
    ])

    return (
        <div className="section grid place-items-center">
            <div className="slider">
                <div className="slide-track">
                    {data.map((item, index) => (
                        <div className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} className="h-[100px] sm:h-[275px]" />
                            <p className="text-[1.125rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                        </div>
                    ))}
                    {data.map((item, index) => (
                        <div className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} className="h-[100px] sm:h-[275px]" />
                            <p className="text-[1.125rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel