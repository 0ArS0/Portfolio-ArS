import React, { useState } from 'react'
import '../sections/Projects/projects.css'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MAX_VISIBILITY = 2;

export const ProjectCarousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className='carousel'>

            {React.Children.map(children, (child, i) => (
                <div className='project-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointerEvents': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><FaChevronLeft /></button>}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><FaChevronRight /></button>}
        </div>
    );
};