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
                    Me chamo Arthur, tenho 20 anos e sou apaixonado por tecnologia desde muito cedo. Além disso, tenho dois lindos cachorros que fazem parte da minha vida. Minha jornada na programação começou na faculdade FAETERJ em 2022, onde em apenas três meses, adquiri os fundamentos da lógica de programação.
                </p>
                <p className='text text-aboutme'>
                    Foi nessa época que uma amiga me apresentou ao SERRATEC, onde participei de uma <a href='https://drive.google.com/file/d/1N0Vza6jqU2ZnKu-z53V3zqRUmxYRcTg9/view?usp=sharing' target='_blank'>intensa imersão de 770 horas.</a> Durante essa experiência, dediquei-me a aprimorar meus conhecimentos, trabalhando em projetos do zero com diferentes equipes. Essa imersão foi fundamental para o meu desenvolvimento, sendo responsável por 85% do meu conhecimento atual na área.
                </p>
                <p className='text text-aboutme'>
                    Atualmente, trabalho como desenvolvedor back-end na <a href='https://www.linkedin.com/company/best2bee/mycompany/' target='_blank'>Best2Bee</a>, focando principalmente em Node.js e TypeScript. Continuo a expandir meus conhecimentos diariamente, tanto no trabalho quanto na faculdade, onde estou cursando Engenharia de Software. Esse curso tem me permitido explorar diversas áreas e aprofundar ainda mais minhas habilidades no campo da tecnologia.
                </p>


                <ScrollTrigger className="card-aboutme-container" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >

                    <div className="card-aboutme">
                        {counterOn ? (
                            <CountUp className="title count" start={0} end={10} duration={5} delay={0} />
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
