import React, { useState } from 'react'
import logo from '../assets/logo_dark.png'
import { NavOverlay, CreativeBanner, Footer } from '../components'
import { useSelector, useDispatch } from 'react-redux'

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
          "Our ultimate goal is to create a reality in which this world is an exciting place to exist in.",
          "We believe that it's possible to design things that make people feel happier to be alive."
        ],
        active: false
      },
      {
        name: 'CREATION WITH INTENTION',
        details: [
          "Our ultimate goal is to create a reality in which this world is an exciting place to exist in.",
          "We believe that it's possible to design things that make people feel happier to be alive."
        ],
        active: false
      },
    ]
  )

  return (
    <div className="bg-[#11117E] text-white">
      {open && <NavOverlay />}
      <CreativeBanner logo={logo} />
      <div className="section">
        <p>By definition SOLACE means "comfort or consolation in a time of distress."</p>
        <p>As a creative agency, our scope of work remains unfocused. Our clientele and services range free of any 'boxes'; however, our purpose is very much focused. Our operation is anchored by three pillars:</p>
        <div className="flex flex-col gap-y-4">
          {accordion.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <div className="flex gap-x-2 items-center">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <button onClick={() => setAccordion(accordion.map((item, i) => i === index ? { ...item, active: !item.active } : item))} className="text-2xl font-bold">{item.active ? '-' : '+'}</button>
              </div>
              {item.active && (
                <div className="flex flex-col gap-y-4">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
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