import React from 'react'

const CreativePortfolio = ({projects}) => {

    return (
        <div className="section flex justify-center font-roboto">
            <div className="grid grid-flow-row grid-cols-2 gap-5 sm:gap-16">
                {projects.map((project, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        <img src={project.image} alt={project.title} />
                        <h1 className ="text-[1.125rem] sm:text-[2rem]">{project.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreativePortfolio