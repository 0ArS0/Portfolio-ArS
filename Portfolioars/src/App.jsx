import React, { useState } from 'react'
import './App.css';

// Components Imports
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';

// External Libraries Imports
import { Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'
import useLocalStorage from 'use-local-storage';

// Icon Imports
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

export default function App() {

  const [t, i18n] = useTranslation("global")
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)


  // Theme Switcher
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Language Switcher
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    console.log(i18n.language);
  }

  return (
    <div className='app' data-theme={theme} data-bs-theme={theme === 'light' ? 'dark' : 'light'}>
      <header>
        <a href='#hero'>
          {i18n === 'br' ? (
            <Image src={theme === 'dark' ? '/img/logoDark.png' : '/img/logoLight.png'} className='header-logo' fluid />
          ) : (
            <Image src={theme === 'dark' ? '/img/logoDark.png' : '/img/logoLight.png'} className='header-logo' fluid />
          )}
        </a>
        <nav>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={40} />
            ) : (
              <AiOutlineBars size={40} />
            )}
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a href='#aboutme'>{t('header.text-aboutme')}</a>
            </li>
            <li>
              <a href='#skills'>{t('header.text-skills')}</a>
            </li>
            <li>
              <a href='#projects'>{t('header.text-projects')}</a>
            </li>
            <li>
              <a href='#contact'>{t('header.text-contact')}</a>
            </li>
            <li>
              <motion.div className='darkmode-container'>
                {theme === 'light' ? (
                  <MdOutlineWbSunny className='darkmode-item' onClick={() => toggleTheme()} />
                ) : (
                  <IoMoonOutline className='darkmode-item' onClick={() => toggleTheme()} />
                )}
              </motion.div>
            </li>
            <li className='languages'>
              <div onClick={() => setLanguageOpen(!languageOpen)} >
                {languageOpen ? (
                  <div>
                    <GrLanguage size={20} />
                    <IoMdArrowDropup size={20} />
                  </div>
                ) : (
                  <div>
                    <GrLanguage size={20} />
                    <IoMdArrowDropdown size={20} />
                  </div>
                )}
              </div>
              <ul className={languageOpen ? "open" : "closed"}>
                <li>
                  <p className={i18n.language === 'br' ? "portuguese" : ""} onClick={() => handleChangeLanguage('br')} >{t("name-lang.portuguese")}</p>
                </li>
                <li>
                  <p className={i18n.language === 'en' ? "usa" : ""} onClick={() => handleChangeLanguage('en')}>{t("name-lang.english")}</p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

      </header>

      <main id='main-home'>

        <section id="hero">
          <Hero />
        </section>

        <section id="aboutme">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </div>
  )
}
