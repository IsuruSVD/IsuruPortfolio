import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaShieldAlt, FaDraftingCompass, FaVideo, FaLanguage } from 'react-icons/fa';

const certifications = [
    {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        description: 'Fundamental understanding of cybersecurity principles and practices.',
        icon: <FaShieldAlt />,
    },
    {
        title: 'Diploma in Computer Aided Designing (CAD)',
        issuer: 'Autodesk',
        description: 'Proficiency in 2D and 3D computer-aided design tools.',
        icon: <FaDraftingCompass />,
    },
    {
        title: 'Certificate in Computer Science & Online Video Producing',
        issuer: 'TCASL',
        description: 'Skills in computer science basics and digital media production.',
        icon: <FaVideo />,
    },
    {
        title: 'Certificate in English',
        issuer: 'Saegis Campus',
        description: 'Advanced proficiency in English language communication.',
        icon: <FaLanguage />,
    },
];

const Certifications = () => {
    return (
        <section id="certifications" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {certifications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--secondary-color)' }}
                            className="card"
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                borderTop: '4px solid var(--secondary-color)',
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{item.title}</h3>
                            <h4 style={{ fontSize: '1rem', color: 'var(--primary-color)', fontWeight: 500 }}>{item.issuer}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
