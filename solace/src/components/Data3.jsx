import React from 'react'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import rightArrow from '../assets/rightArrow.png'

const Data3 = () => {

    const data = [ 
        {
            title: 'Here I am by Shani Storey',
            subtitle: "A tribute to the Black community",
            image: instagram,
            slug: 'read-more',
            city: 'PDX',
        },
        {
            title: 'Frozen In Time with Briah Michel',
            subtitle: "A Q&A about the Juneteenth & Pride month photo wall gallery",
            image: youtube,
            slug: 'read-more',
            city: 'PDX',
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
                </div>
            ))}
        </div>
    )
}

export default Data3