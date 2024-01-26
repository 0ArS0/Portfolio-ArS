import React from 'react'
import './App.css';

// Components Imports
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';

// External Libraries Imports
import useLocalStorage from 'use-local-storage';
import { Header } from '../../components/Header/Header';

export default function App() {

  const [isDark, _] = useLocalStorage('isDark', false)

  return (
    <div className='app' data-theme={isDark ? 'dark' : ''}>
      <header>
        <Header />
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
      <footer className='text'>
        Desenvolvido por Arthur Monteiro | &copy; Copyright 2024.
      </footer>
    </div>
  )
}