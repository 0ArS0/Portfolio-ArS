import React from 'react'

import { SkillCategory } from './SkillCategory';

// External Libraries Imports
import ScrollTrigger from 'react-scroll-trigger';
import { useReadLocalStorage } from 'usehooks-ts';

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

const databaseDark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2Xu2tVQRDGTySKib2agAqJnfgPaCMExMIHFnaGWNiI0UJNYWFnVNCATVqNSSEiCiamSaJgbQwoqXyFYIwWPiqjsfnJ5n5LhsOePRu9RxQycLj3zn4z893d2Zk5WbYq/5MAbcBFYBx4DywA3/V9Auh1mCoJdFIuR6sk0KcgV4F2oBlo0s5c82v1CtYOjAL7gK3AKeAn8ANoCeBbgUU93cAW2Y6u+FiAFuBNwRafjdj1FNi8BjanBl8DPJHhK+A28BR4AOxPsD8AjACTwB1gWr4eO98pBLpl8A3YmcQ67s8dzQf5PFEGbjLg438a3Pg9JJ/uuq6PAbsEnE7arnQCDcBz+e6MAYcFOpfTNwKf9DQaPeafXQbWWX3Ox3mph2MEpgR6C2w0+g4TrCNAwMulEAHdqlmpp2IE1gIDAt40+n4TpD9AYJffiQICQ1LdcDEKCThx91Xgz+Zazptg8z4/jG63Puesfslh7fdXqTZlZUJtuywB7/ylnqWAOQJeegsIfEkiQO0IBgW+lav/VvpyBObUCYNJaHwORI+A5SSc9aUTmAkQmAkFMn5+OwlHBDqTd6a73GCdpxLIXcP7MQLHBJrM6ii5QnQ4BmwGPgp4sIJS/M7nSQx8WmDXE1r/ajMKtGPXE+4Cz4CHrtVmJQIcAcaAF8A9044fJfcX4gNJT8TuQmQgKS9CBSPZXmCbGckWQ0ejEcyvn3QBgT0u6+s2KbNclNwAul1JuwHYAVzX2pW6BPtXx/I2vZhMmBeTBZXica1V92KyKlkF8gsR4QfkXQZ3xAAAAABJRU5ErkJggg==';

const databaseLight = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACNElEQVR4nO2XzUsWURTGf0ZG2t58BQ20nfgP2EYQxEUmLdwVtWgTfixMFy3aqQn5ghu39VYLiSgoc5MWtPYDCld+JKJpi9KVlm6MC8/AYZg7M+U7geIDh5k597nnnJl77j1n4BTHDLXAADAFfAP2gF+6nwYGxckMN4HDBLmRZQB5OXkE1AHlQJneesSMFQV1wCTQCtQA3cAB8BvIRfCrgH1JF1CtuZP/siw5YMXzie/FzOv3zFkGKtM6PwN80sQlYByYAd4AV1PMbwMmgFngBbAgWx9lOxFdmrALNHB0uKXZks27SeQyQ75D8dAum267no8j3hJxIe3nSokS4LNsu63sxVuR+kL6s8APibsPcGje7CFwLqS3uC+d8+HFvEhfgQqjbzZGmyMCCGTIE4DbVWvSOR9elAIFEZ8Y/ZgxOhYRQKP5ElEBPNfzY/mIRaXIP/XscmHTGN00+RHorui64QlgR88XSYFcKIDA+KIkcGgdBTLoCWA7bQClwDORn4bOfyv5kKMNOfclYWCzkLQE8yKumaNzNSKAVY8jjpqEEyL1RhgrkVjjaQOw2/B1XAC3RXLnOBkdRNfjiOXAdxGvZXAUr5s88aJH5C0Vkv9ajMLl2NWEl8Ac8E6lNgkdwHvgC/DKlOMPf1NfcjENiWs6fHgQ05CkOoSiWrIW4JJpyfY9S1NtxjvlsElZX7ROOa83cg3oZSXtBaAeGNXYMCe5La/Vj8m0+THZ01E8pbFMf0xOQbHxB1xL7rZRh2M/AAAAAElFTkSuQmCC';

export const SkillSection = ({ counterOn, setCounterOn }) => {

    const theme = useReadLocalStorage('dark');

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className='scroll-trigger'>

            {/* Front-End Skills */}
            {SkillCategory({
                icon: <MdDesignServices size={35} className='icon-skill' />,
                title: 'Front-End',
                skills: [
                    { icon: <FaHtml5 size={20} className='skill-check' />, label: 'HTML', percentage: 70 },
                    { icon: <FaCss3 size={18} className='skill-check' />, label: 'CSS', percentage: 60 },
                    { icon: <FaReact size={20} className='skill-check' />, label: 'React', percentage: 50 },
                    { icon: <IoLogoJavascript size={20} className='skill-check' />, label: 'JavaScript', percentage: 40 },
                    { icon: <FaNodeJs size={20} className='skill-check' />, label: 'NodeJS', percentage: 30 },
                ],
                counterOn
            })}

            {/* Back-End Skills */}
            {SkillCategory({
                icon: <GoDatabase size={35} className='icon-skill' />,
                title: 'Back-End',
                skills: [
                    { icon: <FaJava size={20} className='skill-check' />, label: 'Java', percentage: 50 },
                    { icon: <img src={theme === 'dark' ?  databaseDark : databaseLight } className='img-icon' />, label: "API's Rest", percentage: 45 },
                    { icon: <SiSpring size={20} className='skill-check' />, label: 'Spring', percentage: 40 },
                    { icon: <BiLogoPostgresql size={20} className='skill-check' />, label: 'Postgresql', percentage: 30 },
                ],
                counterOn
            })}

            {/* Other Skills */}
            {SkillCategory({
                icon: <FaTools size={35} className='icon-skill' />,
                title: 'Outros',
                skills: [
                    { icon: <FaGitAlt size={20} className='skill-check' />, label: 'Git', percentage: 68 },
                    { icon: <TbBrandVscode size={20} className='skill-check' />, label: 'VsCode', percentage: 64 },
                    { icon: <FiGithub size={20} className='skill-check' />, label: 'GitHub', percentage: 50 },
                ],
                counterOn
            })}
        </ScrollTrigger>
    )
}
