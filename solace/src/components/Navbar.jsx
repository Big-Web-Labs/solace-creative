import React from 'react'
import menu from '../assets/menu.png'
import search from '../assets/search.png'

const Navbar = () => {
    return (
        <div className="absolute right-0 flex items-center gap-x-10">
            <img src={search} alt="search" className="cursor-pointer" />
            <img src={menu} alt="menu" className="cursor-pointer"/>
        </div>
    )
}

export default Navbar