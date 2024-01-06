import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import { Carousel, Image } from 'react-bootstrap'
import { api } from '../services/api'
import { motion, useScroll } from 'framer-motion'


export const Projects = () => {

    const [projects, setProjects] = useState([])
    const [eixoX, setEixoX] = useState(0);
    const [eixoY, setEixoY] = useState(0);

    const btnRef = useRef();
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

        const handleMouseMove = (e) => {
            const x = e.pageX - btnRef.current.offsetLeft;
            const y = e.pageY - btnRef.current.offsetTop;

            setEixoX(x);
            setEixoY(y);
        };

        const btn = btnRef.current;

        btn.addEventListener('mousemove', handleMouseMove);

        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
        };
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
                <h3 className='title title-projects'>Projects</h3>
                <div className='projects-conteudo-container'>
                    <h4 className='text initial-text-projects'>Main Projects</h4>
                    <button className='button-projects' style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef}>
                        <span className='text'>Show All</span>
                    </button>
                </div>
                <div className="carrousel-projects-container">
                    <Carousel
                        indicators={false} className='projects-carrousel'>
                        {projects.map((project) => (
                            <Carousel.Item key={project.id}>
                                <div className="projects-card">
                                    <h5 className='title '>{project.name}</h5>
                                    <Image className="projects-card-image" src={project.image} />
                                    <p className='projects-card-description'>{project.description}</p>
                                    <a href={project.link} target='_blank'>
                                        <button className='button-projects'>
                                            Github Repository
                                        </button>
                                    </a>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </motion.section >
        </div>
    )
}
