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
                <div className="projects-container">
                    <div className="project-card">
                        <div className="left-side side">
                            <p>Title</p>
                            <Image className="dog-photo2" src='src/assets/img/DogProfile.jpeg' />
                        </div>
                        <div className="right-side side">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum omnis ipsa a, quis hic, corrupti dolorem tenetur, ex eligendi atque voluptatibus doloribus iusto eum pariatur reiciendis illo repudiandae ea inventore! Earum commodi delectus ut. Qui quo placeat quibusdam impedit.</p>
                            <div className='tec-project-container'>
                                <p>React</p>
                                <p>React</p>
                                <p>React</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="left-side side">
                            <p>Title</p>
                            <Image className="dog-photo2" src='src/assets/img/DogProfile.jpeg' />
                        </div>
                        <div className="right-side side">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum omnis ipsa a, quis hic, corrupti dolorem tenetur, ex eligendi atque voluptatibus doloribus iusto eum pariatur reiciendis illo repudiandae ea inventore! Earum commodi delectus ut. Qui quo placeat quibusdam impedit.</p>
                            <div className='tec-project-container'>
                                <p>React</p>
                                <p>React</p>
                                <p>React</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="left-side side">
                            <p>Title</p>
                            <Image className="dog-photo2" src='src/assets/img/DogProfile.jpeg' />
                        </div>
                        <div className="right-side side">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum omnis ipsa a, quis hic, corrupti dolorem tenetur, ex eligendi atque voluptatibus doloribus iusto eum pariatur reiciendis illo repudiandae ea inventore! Earum commodi delectus ut. Qui quo placeat quibusdam impedit.</p>
                            <div className='tec-project-container'>
                                <p>React</p>
                                <p>React</p>
                                <p>React</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section >
        </div>
    )
}
