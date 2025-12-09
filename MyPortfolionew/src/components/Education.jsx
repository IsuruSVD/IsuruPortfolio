import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const education = [
    {
        degree: 'BSc (Hons) Computer Networks',
        institution: 'University of Wolverhampton (CINEC Campus)',
        date: '2024 – Present',
        icon: <FaUniversity />,
    },
    {
        degree: 'National Diploma in Engineering Sciences (NDES), Electronics & Communication',
        institution: 'Institute of Engineering Technology',
        date: '2020 – 2024',
        icon: <FaGraduationCap />,
    },
    {
        degree: 'Diploma in Information Technology',
        institution: 'SIKSIL Institute of Business & Technology',
        date: '2019',
        icon: <FaSchool />,
    },
    {
        degree: 'GCE Advanced Level — Physical Science Stream',
        institution: 'Pinnawala Central College',
        date: '2017',
        icon: <FaSchool />,
    },
];

const Education = () => {
    return (
        <section id="education" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '1.5rem',
                                borderLeft: '4px solid var(--primary-color)',
                            }}
                        >
                            <div
                                style={{
                                    background: 'var(--bg-color)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    color: 'var(--primary-color)',
                                    fontSize: '1.5rem',
                                    boxShadow: 'var(--shadow)',
                                    minWidth: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.degree}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{item.institution}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', fontWeight: 500 }}>{item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
