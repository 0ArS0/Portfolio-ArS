import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import { Carousel, Image } from 'react-bootstrap'
import { api } from '../../services/api'
import { motion, useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'


export const Projects = () => {

    const [projects, setProjects] = useState([])
    const [t, i18n] = useTranslation("global")

    const ref = useRef(null)

    const projectsGet = async () => {
        try {
            const response = await api.get("/projects")
            setProjects(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        projectsGet()
    }, [])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.6 1"]
    })

    return (
        <div id="projects">
            <motion.section
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
                className="projects">
                <h3 className='title title-projects'>{t('projects.title')}</h3>
                <div className='projects-conteudo-container'>
                    <a className="showall-anchor" href="">{t("projects.text-button")}</a>
                </div>
                <div className="carrousel-projects-container">
                    <Carousel indicators={false} className='projects-carrousel'>
                        {projects.map((project) => (
                            <Carousel.Item key={project.id}>
                                <div className="projects-card">
                                    <h5 className='title '>{i18n.language === 'br' ? project.nameBR : project.nameUS}</h5>
                                    <a href={project.link} target='_blank' className='project-link'>
                                        {t("projects.text-repository")}
                                    </a>
                                    <Image className="projects-card-image" src={project.image} />
                                    <p className='projects-card-description'>{i18n.language === 'br' ? project.descriptionBR : project.descriptionUS}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </motion.section >
        </div>
    )
}
