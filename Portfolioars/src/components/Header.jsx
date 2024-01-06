import React from 'react'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

export const Header = () => {
    return (
        <motion.header
            initial={{ width: "200%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6 }}
        >
            <div>
                <Image src='src/assets/logo.png' className='header-logo' fluid />
            </div>
            <div className='options-header'>
                <a href="#aboutme">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <p>Languages</p>
                <p>darkmode</p>
            </div>
        </motion.header>
    )
}
