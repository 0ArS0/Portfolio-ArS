import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import { Image } from 'react-bootstrap'


export default function App() {

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

  return (
    <>
      <header>
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
      </header>
      <main id="main-home">

        <section className="start" id="start">
          <div className="initial-text-container">
            <h1 className='title initial-title'>Hey, I'm Arthur<span className='dot-style'>.</span></h1>
            <p className='text initial-text'>I'm a <span>Full Stack Developer</span></p>
            <p>Over the past year, I have immersed myself in diverse courses and projects, culminating in the creation of my first portfolio. I hope you find it indicative of my dedication to continuous improvement. <span className='blink'>|</span></p>
          </div>
          <Image src='src/assets/ProfilePic.png' className='profile-pic' roundedCircle />
        </section>

        <section className="aboutme" id="aboutme">
          <div className='text-aboutme'>
            <h2 className='title title-aboutme'>About me</h2>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione molestias
              voluptatem! Incidunt enim praesentium accusantium optio quas dolores adipisci
              distinctio animi tempore aliquid natus libero, debitis, nobis autem assumenda et
              ipsum accusamus asperiores unde repudiandae? Illo mollitia explicabo voluptatem?
            </p>
          </div>
          <button className={'button-aboutme'} style={{ '--eixoX': `${eixoX}px`, '--eixoY': `${eixoY}px` }} ref={btnRef}>
            <span className='text'>Download CV</span>
          </button>
        </section>

        <section className="projects" id="projects">
          <h3 className='title'>Projects</h3>
          <p className='text'>Main Projects</p>
          <button>
            See all
          </button>
          <div className="carrousel-projects">

          </div>
        </section>

        <section className="tecnologies" id="tecnologies">
          <div className="placeholder">

          </div>

          <div className="placeholder">

          </div>
          <p className='text'>hover to see skill bar</p>
        </section>

        <section className="contact" id="contact">
          <h4 className='title'>Contact</h4>
        </section>

      </main>
    </>
  )
}
