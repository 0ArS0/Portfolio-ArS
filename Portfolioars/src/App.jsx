import React, { useEffect, useState } from 'react'
import './App.css';
import './responsive.css'
// Components Imports
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';

// External Libraries Imports
import { Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';

// Icon Imports
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

export default function App() {

  const [t, i18n] = useTranslation("global")
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      const openNav = document.querySelector('.open');
      if (window.scrollY) {
        navBar.classList.add('sticky');
        openNav.classList.add('sticky');
      } else {
        navBar.classList.remove('sticky');
        openNav.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <nav class="nav-bar text">
          <div class="max-width">

            <div className='logo'>
              <a href='#'>
                {i18n === 'br' ? (
                  <Image src={theme === 'dark' ? '/img/logoDark.png' : '/img/logoLight.png'} className='header-logo' fluid />
                ) : (
                  <Image src={theme === 'dark' ? '/img/logoDark.png' : '/img/logoLight.png'} className='header-logo' fluid />
                )}
              </a>
            </div>

            <ul className={menuOpen ? "open" : ""}>
              <li>
                <a href='#aboutme' className='underline-a'>{t('header.text-aboutme')}</a>
              </li>
              <li>
                <a href='#skills' className='underline-a'>{t('header.text-skills')}</a>
              </li>
              <li>
                <a href='#projects' className='underline-a'>{t('header.text-projects')}</a>
              </li>
              <li>
                <a href='#contact' className='underline-a'>{t('header.text-contact')}</a>
              </li>
              <li>
                <a>
                  {theme === 'light' ? (
                    <MdOutlineWbSunny className='darkmode-item' onClick={() => toggleTheme()} />
                  ) : (
                    <IoMoonOutline className='darkmode-item' onClick={() => toggleTheme()} />
                  )}
                </a>
              </li>
              <li>
                <a>
                  {i18n.language === 'br' ? (
                    <img src='/img/br.png' onClick={() => handleChangeLanguage('en')} />
                  ) : 'en' ? (
                    <img src='/img/usa.png' onClick={() => handleChangeLanguage('br')} />
                  ) : ''}
                </a>
              </li>
            </ul>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <AiOutlineClose size={40} />
              ) : (
                <AiOutlineBars size={40} />
              )}
            </div>

          </div>
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
