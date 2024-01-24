import React from 'react'

export const ProjectCard = ({ title, content, image, deploy, repo }) => (
    <div className='project-card'>
        <h4 className='title title-project'>
            {title}
        </h4>
        <img src={image !== 'Indefinido' ? image : ''} className='img-project' />
        <p className='text text-project'>
            {content}
        </p>
        <div className='options-project'>
            {deploy ? (
                <a className='link' href={deploy}>Demo</a>
            ) : (
                <a className='link-disabled'>Demo</a>
            )}

            <a className={'link'} href={repo} target='_blank'>Repositório</a>
        </div>
    </div >
)
