import React from 'react'
import './projectCard.css'
import '../../responsive.css'

import { Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const ProjectCard = ({ project }) => {
    const [t, i18n] = useTranslation('global')

    return (
        <div className='project-card'>
            <div className='project-ilustration'>
                {project.status === 'Indefinido' ? (
                    <div className='in-progress'>
                        <div className='line line-not'>
                            <p className='text-line'>
                                {i18n.language === 'br' ? (
                                    'Em progresso'
                                ) : (
                                    'in progress'
                                )}
                            </p>
                        </div>
                    </div>
                ) : (
                    <a href={project.link} target='_blank' className='project'>
                        <Image src={project.img} className='img-project' />
                        <div className='line line-completed'>
                            <p className='text-line in-progress'>
                                {i18n.language === 'br' ? (
                                    project.status
                                ) : (
                                    project.statusUs
                                )}
                            </p>
                        </div>
                    </a>
                )}
            </div>
            <h4 className='title title-project'>
                {i18n.language === 'br' ? (
                    project.name
                ) : (
                    project.nameUs
                )}
            </h4>
            <p className='text text-project'>
                {i18n.language === 'br' ? (
                    project.descricao
                ) : (
                    project.descricaoUs
                )}

            </p>
        </div>
    )
}
