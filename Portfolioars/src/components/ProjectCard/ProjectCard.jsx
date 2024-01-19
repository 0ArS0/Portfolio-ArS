import React from 'react'
import './projectCard.css'

export const ProjectCard = ({ project }) => {

    return (
        <div className='project-card'>
            <div className='project-ilustration'>
                <a href={project.link}
                    target='_blank'
                    className='project'>
                    <img src={project.img} className='img-project' />
                </a>
                <div>
                    <a>Ver</a>
                    <a>Repositorio</a>
                </div>
            </div>
            <h4 className='title title-project'>
                {project.name}
            </h4>
            <p className='text text-project'>
                {project.descricao}
            </p>
        </div>
    )
}
