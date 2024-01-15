import React from 'react'
import './projectCard.css'
import { Image } from 'react-bootstrap'


export const ProjectCard = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='project-ilustration'>
                {project.completed === true ? (
                    <a href={project.link} target='_blank' className='project'>
                        <Image src={project.img} className='img-project' />
                        <div className='line line-completed'>
                            <p className='text-line in-progress'>Completed</p>
                        </div>
                    </a>
                ) : (
                    <div className='in-progress'>
                        <div className='line line-not'>
                            <p className='text-line'>in progress</p>
                        </div>
                    </div>
                )}
            </div>
            <h4 className='title title-project'>{project.name}</h4>
            <p className='text'>{project.descricao}</p>
        </div>
    )
}
