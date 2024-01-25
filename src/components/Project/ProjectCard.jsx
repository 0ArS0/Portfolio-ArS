import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const ProjectCard = ({ title, content, image, deploy, repo, tecs }) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return (
        <div className='project-card'>
            <h4 className='title title-project'>
                {title}
            </h4>
            <div className='flip-image' onClick={handleFlip}>
                <motion.div
                    className='flip-image-inner'
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: 'normal' }}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <div className='flip-image-front'>
                        <img src={image !== 'Indefinido' ? image : ''} className='img-project' />
                    </div>
                    <div className='flip-image-back'>
                        Tecnologias Utilizadas:
                        <div className='tec-container'>
                            {tecs.map((tec, index) => (
                                <img key={index} src={tec} className='tec-img' />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            <p className='text text-project'>
                {content}
            </p>
            <div className='options-project'>
                {deploy ? (
                    <a className='link' href={deploy}>Demo</a>
                ) : (
                    <a className='link-disabled'>Demo</a>
                )}

                <a className={'link'} href={repo} target='_blank'>Repositório</a>
            </div>
        </div >
    )
}
