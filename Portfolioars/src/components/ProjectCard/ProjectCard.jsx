import React from 'react'
import './projectCard.css'
import { Image } from 'react-bootstrap'


export const ProjectCard = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='project-ilustration'>
                {project.completed === true ? (
                    <div>
                        <Image src={project.img} className='img-project' />
                        <div className='line-completed'>
                            <p className='text-line in-progress'>Completed</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='line-not'>
                            <p className='text-line in-progress'>in progress</p>
                        </div>
                    </div>
                )}
            </div>
            <h4 className='title title-project'>{project.name}</h4>
        </div>
    )
}
