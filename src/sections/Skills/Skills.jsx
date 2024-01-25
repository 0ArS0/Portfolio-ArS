import React from 'react'
import './skills.css'

import { SkillSection } from '../../components/SkillSection';

export const Skills = () => {

    return (
        <div className='skills'>
            <h1 className='title section-title'>Habilidades</h1>
            {SkillSection()}
        </div>
    );
}
