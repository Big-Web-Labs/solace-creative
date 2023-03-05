import React from 'react'
import {Navbar} from '../components'
import sc from '../assets/sc.png'

const PortfolioBanner = () => {
  return (
    <div className="section relative">
        <div className="flex justify-center relative">
            <img src={sc} alt="Solace logo"/>
            <Navbar/>
        </div>
    </div>
  )
}

export default PortfolioBanner