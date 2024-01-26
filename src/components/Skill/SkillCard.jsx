import React from 'react'

export const SkillCard = ({ icon, title, skills }) => {
    return (
        <div className='skill-container'>
            <div className='icon-skill-container'>
                {icon}
            </div>
            <h2 className='title'>{title}</h2>
            <div className='skillList-container'>
                <ul>
                    {skills.map((skill, index) => (
                        <li className='skill' key={index}>
                            {skill.icon}
                            {skill.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
