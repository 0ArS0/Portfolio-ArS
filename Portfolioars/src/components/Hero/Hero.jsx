import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import { motion, useScroll, useTransform } from 'framer-motion'
import './hero.css';
import { useTranslation } from 'react-i18next';
import { useReadLocalStorage } from 'usehooks-ts';
import { RxExternalLink } from "react-icons/rx";

export const Hero = () => {
    const [t, i18n] = useTranslation("global")
    const theme = useReadLocalStorage('dark')
    const [eixoX, setEixoX] = useState(0);
    const [eixoY, setEixoY] = useState(0);

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

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["hero hero", "end hero"]
    })
    const opacityY = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
    const textX = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);

    return (
        <div ref={ref} id="hero">
            <motion.section
                style={{
                    x: textX,
                    opacity: opacityY,
                }}
                className="hero">
                <motion.div

                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.25 }}
                    className='profile-pic-container'>

                    <Image src={theme === 'light' ? 'src/assets/img/ProfilePicDark.png' : 'src/assets/img/ProfilePicDark.png'} className='profile-pic' roundedCircle fluid />

                    <a className='button-curriculum' style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef} href='https://drive.google.com/file/d/18V65-2EczAn9usCFvDxVB460FN9kEo7i/view?usp=sharing' target='_blank'>
                        <span className='text'>{t('hero.button-download-text')}<RxExternalLink /></span>
                    </a>

                </motion.div>
                <motion.div
                    className="initial-text-container">
                    <div className="title-container">
                        <motion.h1
                            variants={startText}
                            initial="initial"
                            animate="animate"
                            className='title initial-title'>
                            {t("hero.text-name").split(" ").map((word, index) =>
                                <motion.span
                                    className='span-text fullstack-text-color'
                                    variants={startWords}
                                    key={word + '-' + index}>
                                    {word}&nbsp;
                                </motion.span>
                            )}
                        </motion.h1>

                    </div>
                    <motion.p
                        variants={startText}
                        initial="initial"
                        animate="animate"
                        className='text initial-text'>

                        {t("hero.text-description").split(" ").map((word, index) => <>
                            <motion.span
                                className='span-text'
                                variants={startWords}
                                key={word + '-' + index}>
                                {word}&nbsp;
                            </motion.span>
                        </>
                        )}<motion.span variants={startWords} className='blink'>|</motion.span>

                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 80 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 3 }} className='social'>
                        <motion.a
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://github.com/0ArS0' target='_blank'>
                            <img
                                src={theme === 'light' ? 'src/assets/img/githubDark.svg' : 'src/assets/img/githubLight.svg'} width={40} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://www.linkedin.com/in/arthurmonteiro-ars/' target='_blank'>
                            <img
                                src={theme === 'light' ? 'src/assets/img/linkedInDark.svg' : 'src/assets/img/linkedInLight.svg'} width={45} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    )
}