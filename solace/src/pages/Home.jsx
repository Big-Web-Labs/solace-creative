import React from 'react'
import {HomeBanner, Data1, Meaning, Footer} from '../components'

const Home = () => {
  return (
    <div>
        <HomeBanner />
        <Data1 />
        <Meaning />
        <div className="p-8"></div>
        <Footer />
    </div>
  )
}

export default Home