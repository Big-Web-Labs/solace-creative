import React from 'react'
import {HomeBanner, Carousel, Meaning, Footer, NavOverlay, SearchOverlay} from '../components'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

  const { open } = useSelector((state) => state.menu) 
  const { searchOpen } = useSelector((state) => state.searchR)
  console.log(searchOpen)

  return (
    <div className="bg-[#2323F2]">
        {open && <NavOverlay/>}
        {searchOpen && <SearchOverlay/>}
        <HomeBanner />
        <Carousel />
        <Meaning />
        <div className="p-8"></div>
        <Footer />
    </div>
  )
}

export default Home