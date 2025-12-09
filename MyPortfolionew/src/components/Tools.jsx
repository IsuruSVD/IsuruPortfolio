import React from 'react';
import { motion } from 'framer-motion';

const tools = [
    { category: 'Hardware', items: ['Oscilloscope', 'Soldering Station', 'Multimeter', '3D Printer', 'Logic Analyzer'] },
    { category: 'Software', items: ['VS Code', 'Altium Designer', 'Fusion 360', 'PlatformIO', 'Postman'] },
];

const Tools = () => {
    return (
        <section id="tools" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My Tools & Workbench
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {tools.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--secondary-color)' }}>{category.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            background: 'var(--bg-color)',
                                            padding: '0.8rem 1.5rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-color)',
                                            boxShadow: 'var(--shadow)',
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
