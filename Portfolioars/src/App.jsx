import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import { Image } from 'react-bootstrap'
import ReactSwitch from 'react-switch';
import useLocalStorage from 'use-local-storage';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';
import { motion, useScroll } from 'framer-motion'

import { Start } from './components/Start/Start';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { useTranslation } from 'react-i18next';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [t, i18n] = useTranslation("global")

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className='app' data-theme={theme} data-bs-theme={theme === 'light' ? 'dark' : 'light'}>
      <motion.header
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <a href='#start'>
            <Image src={theme === 'dark' ? 'src/assets/img/logoDark.png' : 'src/assets/img/logoLight.png'} className='header-logo' fluid />
          </a>
        </div>
        <div className='options-header'>
          <a href='#aboutme'>{t('header.text-aboutme')}</a>
          <a href='#projects'>{t('header.text-projects')}</a>
          <a href='#contact'>{t('header.text-contact')}</a>
          <div className='extras-header'>
            <div className='flag-button-container'>
              <button onClick={() => handleChangeLanguage('br')} className='flag-button'>
                <Image className='flag-icon' src='../src/assets/img/br.png' fluid />
              </button>
              <button onClick={() => handleChangeLanguage('en')} className='flag-button'>
                <Image className='flag-icon' src='../src/assets/img/usa.png' fluid />
              </button>
            </div>
            <div className='darkmode-container'>
              <IoMoonOutline />
              <ReactSwitch checkedIcon={false} onColor={'#f67828'} uncheckedIcon={false} onChange={toggleTheme} checked={theme === 'light'} className='darkmode-switch' />
              <MdOutlineWbSunny />
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
