import React, { useEffect, useState } from 'react'
import './App.css';

// Components Imports
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';

// External Libraries Imports
import { Image } from 'react-bootstrap'
import useLocalStorage from 'use-local-storage';

// Icon Imports
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

export default function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      const openNav = document.querySelector("ul");

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

  return (
    <div className='app' data-theme={theme} data-bs-theme={theme === 'light' ? 'dark' : 'light'}>
      <header>
        <nav className="nav-bar text">
          <div className="max-width">

            <div className='logo'>
              <a href='#' onClick={() => setMenuOpen(false)}>
                <Image src={theme === 'dark' ? '/img/logoDark.png' : '/img/logoLight.png'} className='header-logo' fluid />
              </a>
            </div>

            <ul className={menuOpen ? "open" : ""}>
              <li>
                <a href='#aboutme'
                  onClick={() => setMenuOpen(false)} className='underline-a'>Sobre Mim</a>
              </li>
              <li>
                <a href='#skills'
                  onClick={() => setMenuOpen(false)} className='underline-a'>Habilidades</a>
              </li>
              <li>
                <a href='#projects'
                  onClick={() => setMenuOpen(false)} className='underline-a'>Projetos</a>
              </li>
              <li>
                <a href='#contact'
                  onClick={() => setMenuOpen(false)} className='underline-a'>Contato</a>
              </li>
              <li>
                <a onClick={() => toggleTheme()} >
                  {theme === 'light' ? (
                    <MdOutlineWbSunny className='darkmode-item' />
                  ) : (
                    <IoMoonOutline className='darkmode-item' />
                  )}
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