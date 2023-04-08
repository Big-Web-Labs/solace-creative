import React from 'react'
import logo_spinning from '../assets/logo_spinning.mp4'

const Lock = () => {
    return (
        <div className="bg-[#2323F2] text-[#F3F3F3] flex flex-col justify-center items-center h-[100vh] min-h-[600px] max-h-[1000px] gap-y-5 overflow-hidden">
            <video autoPlay loop muted className="object-cover w-[60vh] h-[60vh] max-w-[800px] max-h-[800px] min-w-[400px] min-h-[400px] overflow-hidden">
                <source src={logo_spinning} type="video/mp4" />
            </video>
            <h1 className="font-roboto text-[2rem] sm:text-[4rem]">Coming Soon!</h1>
        </div>
    )
}

export default Lock