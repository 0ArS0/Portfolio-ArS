import React from 'react'
import CountUp from 'react-countup'

export const SkillCard = ({ icon, title, skills, counterOn }) => {
    return (
        <>
            <div className="icon-skill-container">
                {icon}
            </div>
            <h2 className='title'>{title}</h2>
            <div className="skill-stats">
                <ul>
                    {skills.map((skill, index) => (
                        <li className='skill' key={index}>
                            <div>
                                <span className='skill-name'>
                                    {skill.icon}
                                    <span>{skill.label}</span>
                                </span>
                                {counterOn && (
                                    <span className='skill-percentage-text'>
                                        <CountUp start={0} end={skill.percentage} duration={4} delay={0} />%
                                    </span>
                                )}
                            </div>
                            {counterOn && (
                                <span className='barras'>
                                    <span style={{ '--per': `${skill.percentage}%`, '--anim': `skillbar 3s` }}></span>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
