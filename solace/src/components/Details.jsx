import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const Details = ({ projects}) => {

    const { bgColor } = useSelector((state) => state.bg)

    const [style, setStyle] = useState("")
    

    useEffect(() => {
        if(bgColor < "#7F7F7F") {
            setStyle("#F3F3F3")
        } else if(bgColor >= "#7F7F7F"){
            setStyle("#171717")
        }
    }, [bgColor])

    return (
        <div style={{color: style}}>
            {projects.map((project, idx) => (
                <div className="section" key={idx}>
                    <img src={project.image} alt={project.title} className="mb-5 w-full" />
                    <h1 className="text-[1.125rem] sm:text-[1.75rem]">{project.title}</h1>
                    <h2 className="ml-8 font-light">{project.artist}</h2>
                    <p className="mt-10">{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Details