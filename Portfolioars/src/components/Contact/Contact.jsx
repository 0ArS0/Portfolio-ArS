import React, { useRef } from 'react'
import './Contact.css'
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
            <div id="contact">
                <motion.section
                    ref={ref}
                    style={{
                        scale: scrollYProgress,
                        opacity: scrollYProgress,
                    }}
                    className='contact'>
                        <h4>{t('contact.title')}</h4>
                    div*3.projects


                </motion.section>
            </div>
        </>
    )
}
