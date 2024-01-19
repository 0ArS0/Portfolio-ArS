import React, { useState } from 'react'
import './skills.css'

// External Libraries Imports
import { useReadLocalStorage } from 'usehooks-ts';
import ScrollTrigger from 'react-scroll-trigger';

// Icon Imports
import { GoDatabase } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava, FaTools } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandVscode } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

export const Skills = () => {

    const [counterOn, setCounterOn] = useState(false)
    const theme = useReadLocalStorage('dark')

    return (
        <div className='skills'>
            <h1 className='title'>Habilidades</h1>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className='scroll-trigger'>

                {/* Card Skill Front-End */}
                <div className="front-end-container skill-container">

                    <div className="icon-skill-container">
                        <MdDesignServices size={35} className='icon-skill' />
                    </div>

                    <h2 className='title'>Front-End</h2>

                    <div className="skill-stats">
                        <ul>
                            <li className='skill'>
                                <div>
                                    <FaHtml5 size={20} className='skill-check' />
                                    <span>HTML</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${70}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <FaCss3 size={18} className='skill-check' />
                                    <span>CSS</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${60}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <IoLogoJavascript size={20} className='skill-check' />
                                    <span>JavaScript</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${40}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <FaReact size={20} className='skill-check' />
                                    <span>React</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${50}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <FaNodeJs size={20} className='skill-check' />
                                    <span>NodeJS</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${30}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Card Skill Back-End */}
                <div className="back-end-container skill-container">
                    <div className="icon-skill-container">
                        <GoDatabase size={35} className='icon-skill' />
                    </div>
                    <h2 className='title'>Back-End</h2>
                    <div className="skill-stats">
                        <ul>
                            <li className='skill'>
                                <div>
                                    <FaJava size={20} className='skill-check' />
                                    <span>Java</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${60}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <img src={theme === 'dark' ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2Xu2tVQRDGTySKib2agAqJnfgPaCMExMIHFnaGWNiI0UJNYWFnVNCATVqNSSEiCiamSaJgbQwoqXyFYIwWPiqjsfnJ5n5LhsOePRu9RxQycLj3zn4z893d2Zk5WbYq/5MAbcBFYBx4DywA3/V9Auh1mCoJdFIuR6sk0KcgV4F2oBlo0s5c82v1CtYOjAL7gK3AKeAn8ANoCeBbgUU93cAW2Y6u+FiAFuBNwRafjdj1FNi8BjanBl8DPJHhK+A28BR4AOxPsD8AjACTwB1gWr4eO98pBLpl8A3YmcQ67s8dzQf5PFEGbjLg438a3Pg9JJ/uuq6PAbsEnE7arnQCDcBz+e6MAYcFOpfTNwKf9DQaPeafXQbWWX3Ox3mph2MEpgR6C2w0+g4TrCNAwMulEAHdqlmpp2IE1gIDAt40+n4TpD9AYJffiQICQ1LdcDEKCThx91Xgz+Zazptg8z4/jG63Puesfslh7fdXqTZlZUJtuywB7/ylnqWAOQJeegsIfEkiQO0IBgW+lav/VvpyBObUCYNJaHwORI+A5SSc9aUTmAkQmAkFMn5+OwlHBDqTd6a73GCdpxLIXcP7MQLHBJrM6ii5QnQ4BmwGPgp4sIJS/M7nSQx8WmDXE1r/ajMKtGPXE+4Cz4CHrtVmJQIcAcaAF8A9044fJfcX4gNJT8TuQmQgKS9CBSPZXmCbGckWQ0ejEcyvn3QBgT0u6+s2KbNclNwAul1JuwHYAVzX2pW6BPtXx/I2vZhMmBeTBZXica1V92KyKlkF8gsR4QfkXQZ3xAAAAABJRU5ErkJggg==" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACNElEQVR4nO2XzUsWURTGf0ZG2t58BQ20nfgP2EYQxEUmLdwVtWgTfixMFy3aqQn5ghu39VYLiSgoc5MWtPYDCld+JKJpi9KVlm6MC8/AYZg7M+U7geIDh5k597nnnJl77j1n4BTHDLXAADAFfAP2gF+6nwYGxckMN4HDBLmRZQB5OXkE1AHlQJneesSMFQV1wCTQCtQA3cAB8BvIRfCrgH1JF1CtuZP/siw5YMXzie/FzOv3zFkGKtM6PwN80sQlYByYAd4AV1PMbwMmgFngBbAgWx9lOxFdmrALNHB0uKXZks27SeQyQ75D8dAum267no8j3hJxIe3nSokS4LNsu63sxVuR+kL6s8APibsPcGje7CFwLqS3uC+d8+HFvEhfgQqjbzZGmyMCCGTIE4DbVWvSOR9elAIFEZ8Y/ZgxOhYRQKP5ElEBPNfzY/mIRaXIP/XscmHTGN00+RHorui64QlgR88XSYFcKIDA+KIkcGgdBTLoCWA7bQClwDORn4bOfyv5kKMNOfclYWCzkLQE8yKumaNzNSKAVY8jjpqEEyL1RhgrkVjjaQOw2/B1XAC3RXLnOBkdRNfjiOXAdxGvZXAUr5s88aJH5C0Vkv9ajMLl2NWEl8Ac8E6lNgkdwHvgC/DKlOMPf1NfcjENiWs6fHgQ05CkOoSiWrIW4JJpyfY9S1NtxjvlsElZX7ROOa83cg3oZSXtBaAeGNXYMCe5La/Vj8m0+THZ01E8pbFMf0xOQbHxB1xL7rZRh2M/AAAAAElFTkSuQmCC"} className='img-icon' />
                                    <span>API's Rest</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${50}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <BiLogoPostgresql size={20} className='skill-check' />
                                    <span>Postgresql</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${30}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <SiSpring size={20} className='skill-check' />
                                    <span>Spring</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${20}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Card Skill Other */}
                <div className="others-container skill-container">
                    <div className="icon-skill-container">
                        <FaTools size={35} className='icon-skill' />
                    </div>
                    <h2 className='title'>Outros</h2>
                    <div className="skill-stats">
                        <ul>
                            <li className='skill'>
                                <div>
                                    <FaGitAlt size={20} className='skill-check' />
                                    <span>Git</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${68}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <FiGithub size={20} className='skill-check' />
                                    <span>GitHub</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${50}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                            <li className='skill'>
                                <div>
                                    <TbBrandVscode size={20} className='skill-check' />
                                    <span>VsCode</span>
                                </div>
                                {counterOn && (
                                    <span className='barras'><span style={{ '--per': `${64}%`, '--anim': `skillbar 3s` }}></span></span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

            </ScrollTrigger>
        </div>
    )
}
