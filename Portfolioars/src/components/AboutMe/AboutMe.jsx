import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import './AboutMe.css';
import { GiEnlightenment } from "react-icons/gi";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
    const [eixoX, setEixoX] = useState(0);
    const [eixoY, setEixoY] = useState(0);

    const {t} = useTranslation("global")

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
        <div className="aboutme-container" id="aboutme">
            <motion.section
                ref={ref}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
                className="aboutme">
                <h2 className='title title-aboutme'>{t("aboutme.title")}</h2>
                <div className='cards-aboutme-container'>
                    <div className="card-aboutme">
                        <IoFileTrayFullSharp size={40} className='card-aboutme-icon' />
                        <h4>{t("aboutme.title-projects")}</h4>
                        <p>10+ {t("aboutme.text-projects")}</p>
                    </div>
                    <div className="card-aboutme">
                        <GiEnlightenment size={40} className='card-aboutme-icon' />
                        <h4>{t("aboutme.title-experience")}</h4>
                        <p>{t("aboutme.text-experience")}</p>
                    </div>
                </div>
                <div className='text-aboutme-container'>
                    <p className='text text-aboutme'>
                        {t('aboutme.text-aboutme1')}
                    </p>
                    <p className='text text-aboutme'>
                        {t('aboutme.text-aboutme2')}
                    </p>
                </div>
                <button className='button-aboutme' style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef}>
                    <span className='text'>Download CV</span>
                </button>
            </motion.section>
        </div>
    )
}
