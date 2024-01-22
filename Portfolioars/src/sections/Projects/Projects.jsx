import React, { useState } from 'react'
import './projects.css'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { ProjectCard } from '../../components/ProjectCard/ProjectCard'


const MAX_VISIBILITY = 2;

const Card = ({ title, content, image, deploy, repo }) => (
    <div className='project-card'>
        <h4 className='title title-project'>
            {title}
        </h4>
        <img src={image !== 'Indefinido' ? image : ''} className='img-project' />
        <p className='text text-project'>
            {content}
        </p>
        <div className='options-project'>
            {deploy && (
                <a className={'link'} href={deploy}>Ver agora</a>
            )}
            <a className={'link'} href={repo} target='_blank'>Repositório</a>
        </div>
    </div>
);

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className='carousel'>

            {React.Children.map(children, (child, i) => (
                <div className='project-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointerEvents': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><FaChevronLeft /></button>}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><FaChevronRight /></button>}
        </div>
    );
};

export const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='title'>Projetos</h2>
            <Carousel>

                <Card title='Ecommerce Aurora' content='Um Ecommerce de roupas, desenvolvido para prática e revisão em React, Java e API' image='/img/projetos/AuroraStore.jpg' deploy='' repo='https://github.com/0ArS0/API-ArS' />

                <Card title='CrunchyRoll App' content='O projeto consiste em um clone do aplicativo CrunchyRoll, no qual a tela de cadastro foi replicada.' image='/img/projetos/CloneReactNative.jpg' deploy='' repo='https://github.com/0ArS0/ReactNative-ArS' />

                <Card title='API Rest Func/Depart' content='Este sistema foi desenvolvido para facilitar o gerenciamento entre departamentos e seus funcionários.' image='/img/projetos/ProjetoAPIGrupo.jpg' deploy='' repo='https://github.com/0ArS0/API-ArS' />

            </Carousel>
        </div>
    )
}