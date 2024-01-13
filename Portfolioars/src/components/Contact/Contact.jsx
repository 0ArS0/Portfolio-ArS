import React, { useRef } from 'react'
import './contact.css'
import { motion, useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Contact() {

    const ref = useRef(null)
    const [t, i18n] = useTranslation("global")

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.7 1"]
    })

    return (
        <>
            <motion.div
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
                className='contact'>
                <h4>{t('contact.title')}</h4>
                <div></div>


            </motion.div>
        </>
    )
}
