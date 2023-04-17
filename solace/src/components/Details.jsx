import React from 'react'

const Details = ({ projects}) => {
    return (
        <div>
            {projects.map((project, idx) => (
                <div className="section" key={idx}>
                    <img src={project.image} alt={project.title} className="mb-5" />
                    <h1 className="text-[1.125rem] sm:text-[1.75rem]">{project.title}</h1>
                    <h2 className="ml-8 font-light">{project.artist}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Details