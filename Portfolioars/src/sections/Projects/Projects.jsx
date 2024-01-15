import React, { useEffect, useRef, useState } from 'react'
import './projects.css'

import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { api } from '../../services/api'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const Projects = () => {

    const [projects, setProjects] = useState([])
    const [t] = useTranslation("global")
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
            <div className="projects">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <span className="showall-anchor" onClick={() => toggleShowAll()}>
                {t("projects.text-button")}
                {showAll === true ? (
                    <FaAngleUp size={18}/>
                ) : (
                    <FaAngleDown size={18}/>
                )}
            </span>
            {showAll && (
                <>
                    <div className="projects">
                        {projects.slice(3, 20).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </>
            )}
        </motion.section >
    )
}
