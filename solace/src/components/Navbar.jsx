import React, { useState } from 'react'
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import { useSelector, useDispatch } from 'react-redux'
import {turnOn, turnOff} from '../redux/menuState'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const { open } = useSelector((state) => state.menu) 
    const dispatch = useDispatch()

    return (
        <div className="relative">
            <div className="absolute right-0 flex items-center gap-x-10 z-10">
                {!open && <img src={search} alt="search" className="cursor-pointer" />}
                {!open && <img src={menu} alt="menu" className="cursor-pointer" onClick={() => dispatch(turnOn())} />}
            </div>
            <div className="fixed right-8 flex items-center gap-x-10 z-10">
                {open && <img src={search} alt="search" className="cursor-pointer" />}
                {open && <AiOutlineClose className="cursor-pointer text-[#F3F3F3]/80" size={30} onClick={() => dispatch(turnOff())} />}
            </div>
        </div>

    )
}

export default Navbar