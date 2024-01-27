import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './aboutMe.css';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import { Link, useNavigation } from 'react-router-dom'

export const AboutMe = () => {

    const navigate = useNavigation()

    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className="aboutme">
            <div className='aboutme-container-left '>
                <h2 className='title title-aboutme section-title'>Sobre Mim</h2>
                <p className='text text-aboutme'>
                    Me chamo Arthur, tenho 19 anos e dois lindos cachorros, faço parte do universo tecnologico desde muito cedo. No entanto, minha jornada em programação teve início na faculdade FAETERJ em 2022, onde, em três meses, absorvi os fundamentos da lógica de programação. Foi lá que uma amiga me indicou o SERRATEC, onde participei de <a href='https://drive.google.com/file/d/1N0Vza6jqU2ZnKu-z53V3zqRUmxYRcTg9/view?usp=sharing' target='_blank'>uma imersão de 770 horas</a>. Durante essa experiência, concentrei-me em aprimorar meus conhecimentos, trabalhando em projetos do zero com diferentes equipes. E atualmente, ela é responsável por 90% do meu conhecimento na área. Hoje, busco praticar e expandir meus conhecimentos como desenvolvedor Full stack.
                </p>


                <ScrollTrigger className="card-aboutme-container" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >

                    <div className="card-aboutme">
                        {counterOn ? (
                            <CountUp className="title count" start={0} end={7} duration={5} delay={0} />
                        ) : (
                            0
                        )}
                        <h3 className='title title-aboutme-card'>Meses de experiencia</h3>
                    </div>
                    <div className="card-aboutme">
                        {counterOn ? (
                            <CountUp className="title count" start={0} end={2} duration={5} delay={0} />
                        ) : (
                            0
                        )}
                        <h3 className='title title-aboutme-card'>Projetos Completos</h3>
                    </div>
                </ScrollTrigger>
                {/* <span className='title'>
                    <Link to='/LinhaDoTempo'>
                        Linha do Tempo
                    </Link>
                </span> */}
            </div>

            <div className='aboutme-container-right' >
                <motion.img
                    animate={{
                        y: [-5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5],
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}
                    src='/img/ProfilePic.jpeg'
                />
            </div>
        </div>
    )
}
