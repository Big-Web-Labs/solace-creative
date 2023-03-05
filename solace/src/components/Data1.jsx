import React from 'react'
import crowd from '../assets/crowd.png'
import graph from '../assets/graph.png'
import rightArrow from '../assets/rightArrow.png'

const Data1 = () => {

    const data = [ 
        {
            title: 'Our Workforce Data 2022 - Q3',
            image: crowd,
            slug: 'read-more',
        },
        {
            title: 'Our Workforce Data 2022 - Q4',
            image: graph,
            slug: 'read-more',
        },
    ]

    return (
        <div className="py-16 flex flex-col sm:flex-row justify-between gap-10 text-white section" id="data1">
            {data.map((item) => (
                <div key={item.title}>
                    <img src={item.image} alt="crowd" />
                    <p className="text-[1.25rem] sm:text-[2rem] font-light font-roboto mt-10">{item.title}</p>
                    <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                </div>
            ))}
        </div>
    )
}

export default Data1