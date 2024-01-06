import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import { Image } from 'react-bootstrap'
import { motion, useScroll } from 'framer-motion'
import { Start } from './Sections/Start';
import { AboutMe } from './Sections/AboutMe';
import { Projects } from './Sections/Projects';

export default function App() {

  return (
    <>
      <motion.header
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <a href="#start">
            <Image src='src/assets/logo.png' className='header-logo' fluid />
          </a>
        </div>
        <div className='options-header'>
          <a href="#aboutme">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <div className="extras-header">
            <p>darkmode</p>
            <p>languages</p>
          </div>
        </div>
      </motion.header>

      <main id="main-home">

        <Start />

        <AboutMe />

        <Projects />

      </main>
    </>
  )
}
