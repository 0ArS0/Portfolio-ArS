import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import './AboutMe.css';
import { GiEnlightenment } from "react-icons/gi";
import { IoFileTrayFullSharp } from "react-icons/io5";

export const AboutMe = () => {
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
                <h2 className='title title-aboutme'>About me</h2>
                <div className='cards-aboutme-container'>
                    <div className="card-aboutme">
                        <IoFileTrayFullSharp size={40} color='#03b8ff' className='card-aboutme-icon' />
                        <h4>Projects</h4>
                        <p>10+ Completed Projects</p>
                    </div>
                    <div className="card-aboutme">
                        <GiEnlightenment size={40} color='#03b8ff' className='card-aboutme-icon' />
                        <h4>Experience</h4>
                        <p>5 Months</p>
                    </div>
                </div>
                <div className='text-aboutme-container'>
                    <p className='text text-aboutme'>
                        voluptatem! Incidunt enim praesentium accusantium optio quas dolores adipisci
                        distinctio animi tempore aliquid natus libero, debitis, nobis autem assumenda et
                        ipsum accusamus asperiores unde repudiandae? Illo mollitia explicabo voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione molestias
                        voluptatem! Incidunt enim praesentium accusantium optio quas dolores adipisci
                        distinctio animi tempore aliquid natus libero, debitis, nobis autem assumenda et
                        ipsum accusamus asperiores unde repudiandae? Illo mollitia explicabo voluptatem?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione molestias
                        voluptatem! Incidunt enim praesentium accusantium optio quas dolores adipisci
                        distinctio animi tempore aliquid natus libero, debitis, nobis autem assumenda et
                        ipsum accusamus asperiores unde repudiandae? Illo mollitia explicabo voluptatem?
                    </p>
                </div>
                <button className='button-aboutme' style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef}>
                    <span className='text'>Download CV</span>
                </button>
            </motion.section>
        </div>
    )
}
