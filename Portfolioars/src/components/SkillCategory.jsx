import React from 'react'
import { SkillCard } from './SkillCard'

export const SkillCategory = ({ icon, title, skills, counterOn }) => {
    return (
        <div className='skill-container'>
            {SkillCard({ icon, title, skills, counterOn })}
        </div>
    )
}
