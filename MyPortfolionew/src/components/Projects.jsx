import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Intelligent Climate Control Greenhouse',
        description: 'IoT + AI + Firebase-based intelligent greenhouse with real-time temperature/humidity control, cloud dashboard, plant health monitoring, and energy-efficient automation.',
        tags: ['IoT', 'AI', 'Firebase', 'Automation'],
    },
    {
        title: 'EmoCare Emotional Healing App',
        description: 'AI-powered mobile app that uses facial expression detection to suggest personalized emotional-healing content.',
        tags: ['AI', 'Mobile App', 'Facial Detection'],
    },
    {
        title: '12V Relay Controller with I2C Interface',
        description: 'Custom-designed home automation hardware module for controlling electrical devices via I2C and wall switches.',
        tags: ['Hardware', 'Home Automation', 'I2C', 'PCB'],
    },
    {
        title: 'Garment Factory Production & Salary Tracking App',
        description: 'React Native mobile solution for tracking daily production, part assignments, and automatic weekly salary calculations.',
        tags: ['React Native', 'Mobile App', 'Database'],
    },
    {
        title: 'Real-Time Weather Monitoring System',
        description: 'IoT-based real-time weather monitoring concept with cloud reports and environmental analytics.',
        tags: ['IoT', 'Cloud', 'Analytics', 'Proposal'],
        isProposal: true,
    },
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, borderColor: 'var(--primary-color)' }}
                            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    {project.title}
                                    {project.isProposal && <span style={{ fontSize: '0.8rem', background: 'var(--accent-color)', color: '#000', padding: '0.2rem 0.5rem', borderRadius: '4px', marginLeft: '0.5rem', verticalAlign: 'middle' }}>Proposal</span>}
                                </h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.8rem', background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary-color)', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}
                >
                    * These projects also appear in my professional experience.
                </motion.p>
            </div>
        </section>
    );
};

export default Projects;
