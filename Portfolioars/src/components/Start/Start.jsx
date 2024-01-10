import React from 'react'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './Start.css';
import { useTranslation } from 'react-i18next';
import { useReadLocalStorage } from 'usehooks-ts';

export const Start = () => {
    const [t, i18n] = useTranslation("global")
    const theme = useReadLocalStorage('dark')

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

    return (
        <div id="start">
            <section className="start" >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.25 }}
                    className='profile-pic-container'>
                    <Image src={theme === 'light' ? 'src/assets/img/ProfilePicLight.png' : 'src/assets/img/ProfilePicDark.png'} className='profile-pic' roundedCircle fluid />
                </motion.div>
                <div className="initial-text-container">
                    <div className="title-container">
                        <motion.h1
                            variants={startText}
                            initial="initial"
                            animate="animate"
                            className='title initial-title'>
                            {t("start.text-name").split(" ").map((word, index) =>
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

                        {t("start.text-description").split(" ").map((word, index) => <>
                            <motion.span
                                className='span-text'
                                variants={startWords}
                                key={word + '-' + index}>
                                {word}&nbsp;
                            </motion.span>
                        </>
                        )}<motion.span variants={startWords} className='blink'>|</motion.span>

                    </motion.p>
                    <div className='social'>
                        <motion.a
                            variants={startText}
                            initial="initial"
                            animate="animate"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://github.com/0ArS0' target='_blank'>
                            <motion.img
                                className='span-text'
                                variants={startWords}
                                src={theme === 'light' ? 'src/assets/img/githubDark.svg' : 'src/assets/img/githubLight.svg'} width={40} />
                        </motion.a>
                        <motion.a
                            variants={startText}
                            initial="initial"
                            animate="animate"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://www.linkedin.com/in/arthurmonteiro-ars/' target='_blank'>
                            <motion.img
                                className='span-text'
                                variants={startWords}
                                src={theme === 'light' ? 'src/assets/img/linkedInDark.svg' : 'src/assets/img/linkedInLight.svg'} width={45} />
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    )
}
