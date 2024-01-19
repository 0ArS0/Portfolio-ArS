import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './aboutMe.css';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const AboutMe = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <motion.div
            className="aboutme">
            <div className='aboutme-container-left '>
                <h2 className='title title-aboutme'>Sobre Mim</h2>

                <p className='text text-aboutme'>
                    Me chamo Arthur da Silva Monteiro, tenho 19 anos, tenho 2 cachorros e faço parte do universo tecnológico desde muito cedo. No entanto, minha jornada em programação teve início na faculdade FAETERJ em 2022, onde, em três meses, absorvi os fundamentos da lógica de programação. Foi lá que uma amiga me indicou o SERRATEC, onde participei de um bootcamp intensivo, dedicando cinco meses intensos que representaram cerca de 90% do meu conhecimento na área.
                </p>
                <p className='text text-aboutme'>
                    Atualmente, estou concentrado em praticar e expandir meu conhecimento, buscando realizar diversos projetos do zero e em diferentes linguagens, tanto no back-end quanto no front-end. E com a minha dedicação à área, busco um crescimento contínuo neste campo.
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
                            <CountUp className="title count" start={0} end={1} duration={5} delay={0} />
                        ) : (
                            0
                        )}
                        <h3 className='title title-aboutme-card'>Projetos Completos</h3>
                    </div>
                </ScrollTrigger>
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
                    src='/img/ProfilePicDark.png' />
            </div>
        </motion.div>
    )
}
