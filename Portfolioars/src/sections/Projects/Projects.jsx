import React, { useEffect, useState } from 'react'
import './projects.css'

import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { api } from '../../services/api'

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import ScrollTrigger from 'react-scroll-trigger'

export const Projects = () => {

    const [projects, setProjects] = useState([])
    const [showAll, setShowAll] = useState(false)

    const projectsGet = async () => {
        try {
            const response = await api.get("/projects")
            setProjects(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    const toggleShowAll = () => {
        setShowAll(!showAll)
    }

    return (
        <ScrollTrigger onEnter={() => projectsGet()} className="projects">
            <h3 className='title title-projects'>Projetos</h3>
            <div className="projects-container">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <span className="showall-anchor" onClick={() => toggleShowAll()}>
                Mostrar Todos
                {showAll === true ? (
                    <FaAngleUp size={18} />
                ) : (
                    <FaAngleDown size={18} />
                )}
            </span>
            {showAll && (
                <>
                    <div className="projects-container">
                        {projects.slice(3, 20).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </>
            )}
        </ScrollTrigger>
    )
}
