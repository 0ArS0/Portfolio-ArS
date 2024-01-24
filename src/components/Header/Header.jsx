import React, { useEffect, useState } from 'react'
import './header.css'

// External Libraries Imports
import { Image } from 'react-bootstrap'
import useLocalStorage from 'use-local-storage';

// Icon Imports
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

export const Header = () => {

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
        <nav className="nav-bar text">
            <div>
                <div className='logo'>
                    <a href='#' onClick={() => setMenuOpen(false)}>
                        <Image src={theme === 'dark' ? '/img/logoDark.png' : '/img/logoLight.png'} fluid />
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
                <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <AiOutlineClose size={40} />
                    ) : (
                        <AiOutlineBars size={40} />
                    )}
                </div>
            </div>
        </nav>
    )
}
