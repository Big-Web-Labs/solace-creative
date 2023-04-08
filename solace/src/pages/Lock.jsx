import React from 'react'
import logo_spinning from '../assets/logo_spinning.mp4'

const Lock = () => {
    return (
        <div className="bg-[#2323F2] text-[#F3F3F3] flex flex-col items-center h-[100vh] min-h-[600px] gap-y-5 pt-40 overflow-hidden">
            <video autoPlay loop muted className="object-cover w-[40vh] h-[40vh] max-w-[400px] max-h-[400px] min-w-[200px] min-h-[200px] overflow-hidden">
                <source src={logo_spinning} type="video/mp4" />
            </video>
            <h1 className="font-roboto">Coming Soon!</h1>
        </div>
    )
}

export default Lock