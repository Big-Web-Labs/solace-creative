import React from 'react'
import manwoman from '../assets/manwoman.png'
import car from '../assets/car.png'
import rightArrow from '../assets/rightArrow.png'

const Data2 = () => {

    const data = [ 
        {
            title: 'Our Workforce Data 2022 - Q3',
            subtitle: "A Q&A with W+K NY's New Leadership Team",
            image: manwoman,
            slug: 'read-more',
            city: 'NYC',
            cta: 'Read the story'
        },
        {
            title: 'Our Workforce Data 2022 - Q4',
            subtitle: "We talk to W+K Portland Creative Director Becca Wadlinger about her newly published book of poetry.",
            image: car,
            slug: 'read-more',
            city: 'PDX',
            cta: 'View more'
        },
    ]

    return (
        <div className="py-16 flex flex-col sm:flex-row justify-between gap-10 text-white section">
            {data.map((item) => (
                <div key={item.title}>
                    <img src={item.image} alt="crowd" />
                    <p className="font-light font-roboto text-[0.875rem] mt-8">+{item.city}</p>
                    <p className="text-[1.25rem] sm:text-[2rem] font-light font-roboto mt-4">{item.title}</p>
                    <p className="font-roboto font-light">{item.subtitle}</p>
                    <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer mt-3">{item.cta} <span><img src={rightArrow} /></span></p>
                </div>
            ))}
        </div>
    )
}

export default Data2