import React from 'react'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './Start.css';
import { useTranslation } from 'react-i18next';

export const Start = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div className="start-container" id="start">
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="start"
            >
                <div className='profile-pic-container'>
                    <Image src='src/assets/img/ProfilePic.png' className='profile-pic' roundedCircle fluid />
                </div>
                <div className="initial-text-container">
                    <div className="title-container">
                        <h1 className='title initial-title'>{t("start.text-name")}<span className='dot-style'>.</span></h1>
                        <p className='text fullstack-text'>&lt;<span className='fullstack-text-color'>{t("start.text-dev2")}</span>/&gt;</p>
                    </div>
                    <p className='text initial-text'>{t("start.text-description")}<span className='blink'>|</span></p>
                </div>

            </motion.section>
        </div>
    )
}
