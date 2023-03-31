import React, { useState } from 'react'
import logo from '../assets/solace_white.png'
import { NavOverlay, CreativeBanner, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'
import {AiOutlineLeft} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'
import {motion} from 'framer-motion'

const ForTheLikeMinded = () => {

  const { open } = useSelector((state) => state.menu)

  const [accordion, setAccordion] = useState(
    [
      {
        name: 'COMFORT IN CHAOS',
        details: [
          "Our ultimate goal is to create a reality in which this world is an exciting place to exist in.",
          "We believe that it's possible to design things that make people feel happier to be alive."
        ],
        active: false
      },
      {
        name: 'COLLABORATION',
        details: [
          "Change is driven by the force and will of passionate people.",
          "We create environments for people to thrive in their purest form."
        ],
        active: false
      },
      {
        name: 'CREATION WITH INTENTION',
        details: [
          "We never do things for the sake of getting it done.  The intention and the process is equally as important as the final product."
        ],
        active: false
      },
    ]
  )

  return (
    <div className="bg-[#11117E] text-[#F3F3F3]">
      {open && <NavOverlay />}
      <CreativeBanner logo={logo}/>
      <div className="section flex flex-col items-center gap-8">
        <p className="place-self-start text-3xl">By definition SOLACE means "comfort or consolation in a time of distress."</p>
        <p className="place-self-start text-3xl">As a creative agency, our scope of work remains unfocused. Our clientele and services range free of any 'boxes'; however, our purpose is very much focused. Our operation is anchored by three pillars:</p>
        <div className="flex flex-col gap-y-4 mt-10">
          {accordion.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4 w-full md:w-[600px] max-w-[600px]">
              <div className="flex gap-x-2 items-center">
                <GoPrimitiveDot />
                <h3 className="text-3xl">{item.name}</h3>
                <button onClick={() => setAccordion(accordion.map((item, i) => i === index ? { ...item, active: !item.active } : item))} className={item.active ? "text-2xl font-bold -rotate-90" : "text-2xl font-bold"}><AiOutlineLeft/></button>
              </div>
              {item.active && (
                <div className="flex flex-col gap-y-4">
                  {item.details.map((detail, i) => (
                    <p className="pl-10" key={i}>{detail}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForTheLikeMinded