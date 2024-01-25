import React from 'react'

import { SkillCategory } from './SkillCategory';

// External Libraries Imports
import { useReadLocalStorage } from 'usehooks-ts';

// Icon Imports
import { GoDatabase } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3, FaReact, FaJava, FaTools } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandVscode } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

export const SkillSection = () => {

    const theme = useReadLocalStorage('dark');

    return (
        <div>
            {/* Front-End Skills */}
            {SkillCategory({
                icon: <MdDesignServices size={35}   className='icon-skill' />,
                title: 'Front-End',
                skills: [
                    { icon: <FaHtml5 size={25} className='skill-check' />, label: 'HTML'},
                    { icon: <FaCss3 size={25} className='skill-check' />, label: 'CSS'},
                    { icon: <IoLogoJavascript size={25} className='skill-check' />, label: 'JavaScript'},
                    { icon: <FaReact size={25} className='skill-check' />, label: 'React'},
                ],
            })}

            {/* Back-End Skills */}
            {SkillCategory({
                icon: <GoDatabase size={35} className='icon-skill' />,
                title: 'Back-End',
                skills: [
                    { icon: <FaJava size={25} className='skill-check' />, label: 'Java'},
                    { icon: <SiSpring size={25} className='skill-check' />, label: 'Spring'},
                    { icon: <BiLogoPostgresql size={25} className='skill-check' />, label: 'Postgresql'},
                ],
            })}

            {/* Other Skills */}
            {SkillCategory({
                icon: <FaTools size={35} className='icon-skill' />,
                title: 'Outros',
                skills: [
                    { icon: <FaGitAlt size={25} className='skill-check' />, label: 'Git'},
                    { icon: <TbBrandVscode size={25} className='skill-check' />, label: 'VsCode'},
                    { icon: <FiGithub size={25} className='skill-check' />, label: 'GitHub'},
                ],
            })}
        </div>
    )
}
