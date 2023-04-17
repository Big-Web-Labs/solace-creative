import React, { useState } from 'react'
import logo from '../assets/solace_white.png'
import { NavOverlay, CreativeBanner, Footer, Ethos} from '../components'
import { useSelector, useDispatch } from 'react-redux'

import {motion, AnimatePresence} from 'framer-motion'

const ForTheLikeMinded = () => {

  const { open } = useSelector((state) => state.menu)

  return (
    <div className="bg-[#11117E] text-[#F3F3F3]">
      {open && <NavOverlay />}
      <CreativeBanner logo={logo}/>
      <div className="section flex flex-col items-center gap-8">
        <p className="place-self-start text-xl sm:text-3xl">By definition SOLACE means "comfort or consolation in a time of distress."</p>
        <p className="place-self-start text-xl sm:text-3xl">As a creative agency, our scope of work remains unfocused. Our clientele and services range free of any 'boxes'; however, our purpose is very much focused. Our operation is anchored by three pillars:</p>
        <Ethos/>
      </div>
      <Footer />
    </div>
  )
}

export default ForTheLikeMinded