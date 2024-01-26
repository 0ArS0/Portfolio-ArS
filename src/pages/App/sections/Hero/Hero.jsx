import React, { useEffect, useRef, useState } from 'react'
import './hero.css';
import { motion } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt';
import useLocalStorage from 'use-local-storage';
import { RxExternalLink } from "react-icons/rx";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

const options = {
    speed: 1000,
    max: 10,
    glare: true,
    reverse: true,
};

export const Hero = () => {
    const [isDark, _] = useLocalStorage('isDark', false)

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
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.25 }}
            className="hero"
        >
            {/* Div para imagem de perfil */}
            <div className='leftSide-container' >
                <Tilt options={options} />
                <a
                    className='button-curriculum'
                    style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }}
                    ref={btnRef}
                    href='https://drive.google.com/file/d/17g93zLLpD4edoW7lhjlVthMAjjMlC_OD/view?usp=sharing'
                    target='_blank'
                >
                    <span className='text' >
                        Curriculo<RxExternalLink />
                    </span>
                </a>
            </div>

            {/* Conteudo ao lado da imagem */}
            <div className="rightSide-container">

                <h1 className=' title section-title'>Arthur da Silva Monteiro</h1>

                <p className='text hero-text' >
                    <span>Desenvolvedor Full Stack em formação, com aproximadamente 7 meses de experiência. Estou imerso em um contínuo processo de aprendizado, explorando diversos projetos que possam agregar meu conhecimento.<span className='blink'>|</span></span>
                </p>
                <div className='social' >
                    <motion.a
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://github.com/0ArS0' target='_blank'>
                        <img
                            src={!isDark ? '/img/githubDark.svg' : '/img/githubLight.svg'} width={40} />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://www.linkedin.com/in/arthurmonteiro-ars/' target='_blank'>
                        <img
                            src={!isDark ? '/img/linkedInDark.svg' : '/img/linkedInLight.svg'} width={45} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}
