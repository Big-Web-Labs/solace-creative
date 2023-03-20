import React, { useState } from 'react'
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import { useSelector, useDispatch } from 'react-redux'
import { turnOn, turnOff } from '../redux/menuState'
import { searchOn, searchOff } from '../redux/searchState'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import menu_black from '../assets/menu_black.png'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    const { open } = useSelector((state) => state.menu)
    const { searchOpen } = useSelector((state) => state.searchR)
    const dispatch = useDispatch()
    const location = useLocation();

    return (
        <div className="relative">
            <div className="absolute right-0 flex items-center gap-x-10 z-10">
                {!open && !searchOpen && <AiOutlineSearch className={(location.pathname == "/creative-agency" || location.pathname == "/internal-projects") ? "text-[#181818] cursor-pointer" : "text-[#F3F3F3] cursor-pointer"} size={27} onClick={() => dispatch(searchOn())} />}
                {!open && !searchOpen && (location.pathname == "/" || location.pathname == "/for-the-like-minded" || location.pathname == "/contact") && <img src={menu} alt="menu" className="cursor-pointer" onClick={() => dispatch(turnOn())} />}
                {!open && !searchOpen && (location.pathname == "/creative-agency" || location.pathname == "/internal-projects") && <img src={menu_black} alt="menu" className="cursor-pointer" onClick={() => dispatch(turnOn())} />}
            </div>
            <div className="fixed right-8 flex items-center gap-x-10 z-10">
                {(open && !searchOpen) && <AiOutlineSearch className="text-[#F3F3F3] cursor-pointer" size={27} onClick={() => {dispatch(searchOn()); dispatch(turnOn())}} />}
                {(open || searchOpen) && <AiOutlineClose className="cursor-pointer text-[#F3F3F3]/80" size={30} onClick={() => {dispatch(turnOff()); dispatch(searchOff())}} />}
            </div>
        </div>

    )
}

export default Navbar