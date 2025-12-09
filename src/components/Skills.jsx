import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: 'Embedded & Hardware', items: ['Arduino', 'ESP32 / ESP8266', 'Raspberry Pi', 'PCB Design (EasyEDA / KiCad)', 'Electronics Circuit Design', 'AutoCAD'] },
    { category: 'Software & App Dev', items: ['React Native (Expo)', 'Embedded C / C++', 'Python', 'SQLite', 'AI/ML Basics'] },
    { category: 'Cloud & Networking', items: ['Firebase (Auth, Firestore)', 'Cloud IoT Platforms', 'Networking & Routing', 'Linux Server Management'] },
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--secondary-color)', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>
                                {category.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {category.items.map((item, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-color)', color: '#000' }}
                                        style={{
                                            background: 'var(--card-bg)',
                                            padding: '0.8rem 1.5rem',
                                            borderRadius: '50px',
                                            border: '1px solid var(--border-color)',
                                            cursor: 'default',
                                            fontWeight: 500,
                                            transition: 'all 0.3s',
                                            boxShadow: 'var(--shadow)',
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
