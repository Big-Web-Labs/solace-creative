import React from 'react'

const CreativePortfolio = ({projects}) => {

    return (
        <div className="section flex justify-center font-roboto font-normal">
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-16">
                {projects.map((project, idx) => (
                    <a href={`/projects/${project.slug}`} key={idx} className="flex flex-col cursor-pointer">
                        <img src={project.image} alt={project.title} className="mb-5" />
                        <h1 className ="text-[1.125rem] md:text-[1.75rem]">{project.title}</h1>
                        <h2 className="ml-8 font-light">{project.artist}</h2>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CreativePortfolio