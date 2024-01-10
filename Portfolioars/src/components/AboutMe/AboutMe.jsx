import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import './AboutMe.css';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import { api } from '../../services/api';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const AboutMe = () => {
    const [eixoX, setEixoX] = useState(0);
    const [eixoY, setEixoY] = useState(0);
    const [me, setMe] = useState([])
    const [counterOn, setCounterOn] = useState(false)
    const { t } = useTranslation("global")



    const getMe = async () => {
        try {
            const response = await api.get("/me")
            setMe(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getMe()
    }, [])

    // const btnRef = useRef();
    // useEffect(() => {
    //     getMe()
    //     const handleMouseMove = (e) => {
    //         const x = e.pageX - btnRef.current.offsetLeft;
    //         const y = e.pageY - btnRef.current.offsetTop;

    //         setEixoX(x);
    //         setEixoY(y);
    //     };

    //     const btn = btnRef.current;

    //     btn.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         btn.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

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
                <div className='aboutme-container-left'>
                    <h2 className='title title-aboutme'>{t("aboutme.title")}</h2>

                    <div className='text-aboutme-container'>
                        <p className='text text-aboutme'>
                            {t('aboutme.text-aboutme1')}
                        </p>
                        <p className='text text-aboutme'>
                            {t('aboutme.text-aboutme2')}
                        </p>
                        {me.map((eu) => (
                            <ScrollTrigger className="card-aboutme-container" onEnter={() => { setCounterOn(true); getMe() }} onExit={() => setCounterOn(false)} key={eu.id}>

                                <div className="card-aboutme">
                                    {counterOn ? (
                                        <CountUp className="title count" start={0} end={eu.exp >= 12 ? (eu.exp / 12) : eu.exp} duration={5} delay={0} />
                                    ) : (
                                        0
                                    )}
                                    <h3 className='title title-aboutme-card'>{eu.exp >= 12 ? t('aboutme.text-years') : t('aboutme.text-months')}{t('aboutme.text-experience')}</h3>
                                </div>
                                <div className="card-aboutme">
                                    {counterOn &&
                                        <CountUp className="title count" start={0} end={eu.projects} duration={5} delay={0} />
                                    }
                                    <h3 className='title title-aboutme-card'>{t("aboutme.text-projects")}</h3>
                                </div>

                            </ScrollTrigger>
                        ))}
                        {/* <button className='button-aboutme' style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef}>
                            <span className='text'>{t('aboutme.button-download-text')}</span>
                        </button> */}
                    </div>
                </div>
                <div className='aboutme-container-right' >
                    <motion.img
                        animate={{
                            y: [-5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5],
                            borderRadius: ["20%", "21%", "22%", "23%", "24%", "25%", "26%", "27%", "28%", "29%", "30%", "29%", "28%", "27%", "26%", "25%", "24%", "23%", "22%", "21%", "20%"]
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            repeat: Infinity
                        }}
                        className="dog-photo" src='src/assets/img/DogProfile.jpeg' />
                </div>
            </motion.section>
        </div>
    )
}
