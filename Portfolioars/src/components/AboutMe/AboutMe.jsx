import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import './AboutMe.css';
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
    const [eixoX, setEixoX] = useState(0);
    const [eixoY, setEixoY] = useState(0);

    const { t } = useTranslation("global")

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
        offset: ["0 1", "0.7 1"]
    })

    return (
        <div id="aboutme">
            <motion.section
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
                className="aboutme">
                <h2 className='title title-aboutme'>{t("aboutme.title")}</h2>
                <div className='aboutme-container'>

                    <div className='text-aboutme-container'>
                        <p className='text text-aboutme'>
                            {t('aboutme.text-aboutme1')}
                        </p>
                        <p className='text text-aboutme'>
                            {t('aboutme.text-aboutme2')}
                        </p>
                        <button className='button-aboutme' style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef}>
                            <span className='text'>{t('aboutme.button-download-text')}</span>
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}
