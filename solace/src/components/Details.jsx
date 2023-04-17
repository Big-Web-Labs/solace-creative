import React from 'react'

const Details = ({ projects}) => {
    return (
        <div>
            {projects.map((project, idx) => (
                <a href={`/projects/${project.slug}`} key={idx} className="flex flex-col cursor-pointer">
                    <img src={project.image} alt={project.title} className="mb-5" />
                    <h1 className="text-[1.125rem] sm:text-[1.75rem]">{project.title}</h1>
                    <h2 className="ml-8 font-light">{project.artist}</h2>
                </a>
            ))}
        </div>
    )
}

export default Details