import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import { Image } from 'react-bootstrap'
import { motion, useScroll } from 'framer-motion'
import { Start } from './Sections/Start';
import { AboutMe } from './Sections/AboutMe';
import { Projects } from './Sections/Projects';
import useLocalStorage from 'use-local-storage';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <motion.header
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <a href='#start'>
            <Image src='src/assets/logo.png' className='header-logo' fluid />
          </a>
        </div>
        <div className='options-header'>
          <a href='#aboutme'>About me</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
          <div className='extras-header'>
            <div className='darkmode-container'>
              <i onClick={toggleTheme} className='fas fa-toggle-on'></i>
            </div>
            <div className='flag-button-container'>
              <button className='flag-button'>
                <Image className='flag-icon' src='../src/assets/br.png' fluid />
              </button>
              <button className='flag-button'>
                <Image className='flag-icon' src='../src/assets/usa.png' fluid />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <main id='main-home'>

        <Start />

        <AboutMe />

        <Projects />

      </main>
    </div>
  )
}
