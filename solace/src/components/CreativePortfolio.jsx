import React from 'react'

const CreativePortfolio = () => {

    const projects = [
        {
            title: "Project 1",
            image: "",
            slug: ""
        },
        {
            title: "Project 2",
            image: "",
            slug: ""
        },
        {
            title: "Project 3",
            image: "",
            slug: ""
        },
        {
            title: "Project 4",
            image: "",
            slug: ""
        },
    ]

    return (
        <div className="section flex justify-center">
            <div className="grid grid-flow-row grid-cols-2 gap-10">
                {projects.map((project, idx) => (
                    <div key={idx}>
                        <h1>{project.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreativePortfolio