import React, { useState, useEffect } from 'react'
import crowd from '../assets/crowd.png'
import graph from '../assets/graph.png'
import ddg from '../assets/ddg.jpg'
import elevatedgoods from '../assets/elevatedgoods.jpg'
import rightArrow from '../assets/rightArrow.png'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

const Carousel = () => {

    const { open } = useSelector((state) => state.menu)

    const [data, setData] = useState([
        {
            idx: 1,
            pos: 1,
            title: '9 Lives - DDG',
            image: ddg,
            slug: 'read-more',
            active: true
        },
        {
            idx: 2,
            pos: 2,
            title: 'Elevated Goods - ZOE LA',
            image: elevatedgoods,
            slug: 'read-more',
            active: true
        },
        {
            idx: 3,
            pos: 3,
            title: 'Our Workforce Data 2022 - Q3',
            image: crowd,
            slug: 'read-more',
            active: false
        },
        {
            idx: 4,
            pos: 4,
            title: 'Our Workforce Data 2022 - Q4',
            image: graph,
            slug: 'read-more',
            active: false
        },
        {
            idx: 5,
            pos: 5,
            title: 'Our Workforce Data 2022 - Q5',
            image: crowd,
            slug: 'read-more',
            active: false
        },
        {
            idx: 6,
            pos: 6,
            title: 'Our Workforce Data 2022 - Q6',
            image: graph,
            slug: 'read-more',
            active: false
        },
    ])

    return (
        <div className="section grid place-items-center">
            <div className="slider">
                <div className="slide-track">
                    {data.map((item, index) => (
                        <div className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} />
                            <p className="text-[1.25rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                        </div>
                    ))}
                    {data.map((item, index) => (
                        <div className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} />
                            <p className="text-[1.25rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel