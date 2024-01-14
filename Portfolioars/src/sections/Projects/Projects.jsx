import React, { useEffect, useRef, useState } from 'react'
import './projects.css'

import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { api } from '../../services/api'
import { motion, useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'


export const Projects = () => {

    const [projects, setProjects] = useState([])
    const [t, i18n] = useTranslation("global")
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

    useEffect(() => {
        projectsGet()
    }, [])

    return (
        <motion.section
            className="projects-container">
            <h3 className='title title-projects'>{t('projects.title')}</h3>
            <span className="showall-anchor" onClick={() => toggleShowAll()}>{t("projects.text-button")}</span>
            <div className="projects">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            {showAll && (
                <>
                    <div className="projects">
                        {projects.slice(3, 20).map((project) => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                    {/* <div className="projects">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="projects">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="projects">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="projects">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div> */}
                </>
            )}
        </motion.section >
    )
}
