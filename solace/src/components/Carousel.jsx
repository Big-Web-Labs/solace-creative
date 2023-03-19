import React, { useState, useEffect } from 'react'
import crowd from '../assets/crowd.png'
import graph from '../assets/graph.png'
import rightArrow from '../assets/rightArrow.png'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

const Carousel = () => {

    const { open } = useSelector((state) => state.menu)

    const moveLeft = () => {
        const prevState = [...data]
        const nextCardIdx = prevState.filter((ft) => ft.active === true).sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx
        prevState.find((f) => f.active === false).active = true
        prevState.find((f) => f.idx === nextCardIdx).active = false
        prevState.find((f) => f.idx === nextCardIdx).pos = Math.max.apply(null, prevState.map(function (o) { return o.pos; })) + 1
        setData(prevState)
    }

    const moveRight = () => {
        const prevState = [...data];
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .pop(1).idx;
        prevState.find((f) => f.active === false).pos =
            Math.min.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) - 1;
        prevState.find((f) => f.active === false).active = true;
        prevState.find((f) => f.idx === nextCardIdx).active = false;
        setData(prevState);
    }

    const [data, setData] = useState([
        {
            idx: 1,
            pos: 1,
            title: 'Our Workforce Data 2022 - Q1',
            image: crowd,
            slug: 'read-more',
            active: true
        },
        {
            idx: 2,
            pos: 2,
            title: 'Our Workforce Data 2022 - Q2',
            image: graph,
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

    useEffect(() => {
        setTimeout(() => {
            moveLeft()
        }, "4000");
    }, [data])

    return (
        <motion.div layout className="py-16 flex flex-col sm:flex-row justify-between gap-10 text-[#F3F3F3] section overflow-hidden scroll-smooth z-0">
            {data.filter((f) => f.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0)) 
            .map((item) => (
                <motion.div key={item.title} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className="flex-[0_0_48%]">
                    {!open && <img src={item.image} alt="crowd" />}
                    {!open && <p className="text-[1.25rem] sm:text-[2rem] font-light font-roboto mt-10">{item.title}</p>}
                    {!open && <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>}
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Carousel