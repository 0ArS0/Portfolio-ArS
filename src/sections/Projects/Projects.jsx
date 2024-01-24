import React from 'react'
import './projects.css'

import { ProjectCard } from '../../components/ProjectCard';
import { ProjectCarousel } from '../../components/ProjectCarousel';
// import { ProjectCard } from '../../components/ProjectCard/ProjectCard'

export const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='title'>Projetos</h2>
            <ProjectCarousel>

                <ProjectCard title='Ecommerce Aurora' content='Um Ecommerce de roupas, desenvolvido para prática e revisão em React, Java e API' image='/img/projetos/AuroraStore.jpg' deploy='' repo='https://github.com/0ArS0/API-ArS' />

                <ProjectCard title='CrunchyRoll App' content='Clone do aplicativo CrunchyRoll, no qual a tela de cadastro foi replicada.' image='/img/projetos/CloneReactNative.jpg' deploy='' repo='https://github.com/0ArS0/ReactNative-ArS' />

                <ProjectCard title='API Rest Func/Depart' content='Sistema desenvolvido para facilitar o gerenciamento de departamentos' image='/img/projetos/ProjetoAPIGrupo.jpg' deploy='' repo='https://github.com/0ArS0/API-ArS' />

            </ProjectCarousel>
        </div>
    )
}