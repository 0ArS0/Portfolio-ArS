import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './Start.css';

export const Start = () => {
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
                <Image src='src/assets/ProfilePic.png' className='profile-pic' roundedCircle />
                <div className="initial-text-container">
                    <h1 className='title initial-title'>Hey, I'm Arthur<span className='dot-style'>.</span></h1>
                    <p className='text initial-text'>I'm a <span>Full Stack Developer</span></p>
                    <p className='text second-text'>Over the past months, I have immersed myself in diverse courses and projects, culminating in the creation of my first portfolio. I hope you find it indicative of my dedication to continuous improvement. <span className='blink'>|</span></p>
                </div>

            </motion.section>
        </div>
    )
}
