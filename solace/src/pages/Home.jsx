import React from 'react'
import {HomeBanner, Data1, Data2, Data3, Meaning, Awards, Nike, Kennedy, Footer} from '../components'

const Home = () => {
  return (
    <div>
        <HomeBanner />
        <Data1 />
        <Meaning />
        <Awards />
        <Data2 />
        <Nike />
        <Data3 />
        <Kennedy />
        <div className="p-8"></div>
        <Footer />
    </div>
  )
}

export default Home