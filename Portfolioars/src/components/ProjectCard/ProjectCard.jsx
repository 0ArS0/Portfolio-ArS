import React from 'react'
import './projectCard.css'

export const ProjectCard = ({ project }) => {

    return (
        <div className='project-card'>
            <div className='project-ilustration'>
                {project.status === 'Indefinido' ? (
                    <div className='in-progress'>
                        <div className='line line-not'>
                            <p className='text-line'>
                                Em Progresso
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className='project'>
                        <img src={project.img} className='img-project' />
                        <div className='line line-completed'>
                            <p className='text-line in-progress'>
                                {project.status}
                            </p>
                        </div>
                    </div>
                )}
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
