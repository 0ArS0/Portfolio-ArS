import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './hero.css';

import { useReadLocalStorage } from 'usehooks-ts';
import { RxExternalLink } from "react-icons/rx";

const startText = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        }
    }
}

const startWords = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export const Hero = () => {
    const theme = useReadLocalStorage('dark')

    // Lógica por trás da animação do botão do curriculo 
    const [eixoX, setEixoX] = useState(0);
    const [eixoY, setEixoY] = useState(0);

    const btnRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.pageX - btnRef.current.offsetLeft;
            const y = e.pageY - btnRef.current.offsetTop;

            setEixoX(x);
            setEixoY(y);
        };

        const btn = btnRef.current;

        btn.addEventListener('mousemove', handleMouseMove);

        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hero">

            {/* Div para imagem de perfil */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.25 }}
                className='leftSide-container'
            >
                <Image
                    src='/img/ProfileHero.jpeg'
                    className='profile-pic'
                    roundedCircle
                    fluid
                />
                <a
                    className='button-curriculum'
                    style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }}
                    ref={btnRef}
                    href='https://drive.google.com/file/d/18V65-2EczAn9usCFvDxVB460FN9kEo7i/view?usp=sharing'
                    target='_blank'
                >
                    <span className='text' >
                        Curriculo<RxExternalLink />
                    </span>
                </a>
            </motion.div>

            {/* Div para conteudo ao lado da imagem */}
            <div className="rightSide-container">
                <h1 className='hero-title title'>Desenvolvedor Full Stack.</h1>
                <motion.p
                    variants={startText}
                    initial="initial"
                    animate="animate"
                    className='text hero-text'
                >
                    <span>Programador em formação, com aproximadamente 7 meses de experiência. Estou imerso em um contínuo processo de aprendizado, explorando diversos projetos que possam agregar me meu conhecimento. <motion.span variants={startWords} className='blink'>|</motion.span></span>
                </motion.p>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }} className='social'
                >
                    <motion.a
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://github.com/0ArS0' target='_blank'>
                        <img
                            src={theme === 'light' ? '/img/githubDark.svg' : '/img/githubLight.svg'} width={40} />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://www.linkedin.com/in/arthurmonteiro-ars/' target='_blank'>
                        <img
                            src={theme === 'light' ? '/img/linkedInDark.svg' : '/img/linkedInLight.svg'} width={45} />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}
