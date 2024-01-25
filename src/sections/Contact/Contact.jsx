import React, { useRef } from 'react'
import { Svg } from '../../components/Svg';
import './contact.css'
import 'react-toastify/dist/ReactToastify.css';
import './custom-toast.css';

import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

export const Contact = () => {

    const ref = useRef()
    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a3xt9wl', 'template_u13rxqn', formRef.current, 'QPee5wEPhESgM2uLR')
            .then((result) => {
                toast.success('Mensagem enviada com sucesso!', { className: 'custom-toast', autoClose: 2000, toastId: 'uniqueId' });
                const inputs = formRef.current.querySelectorAll('input, textarea');
                inputs.forEach((input) => {
                    input.value = '';
                });
            }, (error) => {
                toast.error('Error ao enviar mensagem!', { className: 'custom-toast-error', autoClose: 1500, toastId: 'uniqueId' });
            });
    };

    return (
        <>
            <ToastContainer />
            <motion.div
                ref={ref}
                variants={variants}
                initial='initial'
                whileInView='animate'
                className='contact'>

                <motion.div
                    variants={variants}
                    className='text-container-contact'>
                    <motion.h1
                        className='title section-title'
                        variants={variants}>
                        Contato
                    </motion.h1>

                    <motion.div
                        className='item'
                        variants={variants}
                        whileHover={{ scale: 1.05, originX: 0 }}
                        transition={{ type: `spring`, stiffness: 300 }}
                    >
                        <MdOutlineAlternateEmail size={40} />
                        <span className='text'>
                            arthurmonteiro20172018@gmail.com
                        </span>
                    </motion.div>
                    <motion.div
                        className='item'
                        variants={variants}
                        whileHover={{ scale: 1.05, originX: 0 }}
                        transition={{ type: `spring`, stiffness: 300 }}>
                        <FaPhone size={40} />
                        <span className='text'>
                            &#40;24&#41; *****-1005
                        </span>
                    </motion.div>
                    <motion.div
                        className='item'
                        variants={variants}
                        whileHover={{ scale: 1.05, originX: 0 }}
                        transition={{ type: `spring`, stiffness: 300 }}>

                        <FaMapMarkerAlt size={40} />
                        <span className='text'>
                            Petrópolis - RJ, Brasil
                        </span>
                    </motion.div>
                </motion.div>

                <div className='formContainer'>
                    {Svg(ref)}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}>

                        <input
                            type='text'
                            required
                            placeholder="Assunto"
                            name='subject'
                            autoComplete="off" />
                        <div>
                            <input
                                type='text'
                                required
                                placeholder='Nome'
                                name='name'
                                autoComplete="off" />
                            <input
                                type='email'
                                required
                                placeholder='Email'
                                name='email'
                                autoComplete="off" />
                        </div>

                        <textarea
                            rows={4}
                            placeholder='Mensagem'
                            name='message'
                            autoComplete="off"
                        />
                        <button>
                            Enviar
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </>
    )
}
