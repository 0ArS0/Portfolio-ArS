import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const ProjectCard = ({ title, content, image, deploy, repo, tecs, completed }) => {

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
            <h4 className='title'>
                {completed ? title : 'Em Breve' }
            </h4>
            <div className='flip-image' onClick={handleFlip}>
                <motion.div
                    className='flip-image-inner'
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: 'normal' }}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <div className={completed ? 'flip-image-front' : 'flip-image-front disabled'}>
                        <img src={image} className='img-project' />
                    </div>
                    <div className='flip-image-back'>
                        Tecnologias:
                        <div className='tec-container'>
                            {tecs.map((tec, index) => (
                                <img key={index} src={tec} />
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

                <a className='link' href={repo} target='_blank'>Repositório</a>
            </div>
        </div >
    )
}
