import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserTie, FaBuilding, FaNetworkWired, FaMicrochip, FaCogs } from 'react-icons/fa';

const employeeExperience = [
    {
        title: 'Network & Electronics Engineer',
        company: 'XdotO Concepts (Pvt) Ltd',
        date: 'Feb 2024 – Present',
        description: 'Specializing in network infrastructure and electronic systems.',
        responsibilities: ['Network optimization', 'IoT system maintenance', 'Electronics troubleshooting'],
    },
    {
        title: 'Associate Engineer',
        company: 'XdotO Concepts (Pvt) Ltd',
        date: 'Mar 2025 – Present',
        description: 'Advanced engineering role focusing on system integration.',
        responsibilities: ['System integration', 'Hardware testing', 'Automation workflows'],
    },
    {
        title: 'Engineering Intern (On-the-Job Trainee)',
        company: 'XdotO Concepts (Pvt) Ltd',
        date: 'Sep 2022 – Mar 2023',
        description: 'Gained hands-on experience in industrial engineering tasks.',
        responsibilities: ['Assisting senior engineers', 'Documentation', 'Basic repairs'],
    },
    {
        title: 'Engineering Intern',
        company: 'Browns Engineering & Constructions Pvt Ltd',
        date: 'Feb 2022 – Sep 2022',
        description: 'Contributed to construction and engineering projects.',
        responsibilities: ['Site supervision', 'Equipment maintenance', 'Safety compliance'],
    },
    {
        title: 'Engineering Intern',
        company: 'Communication Engineers Lanka (Pvt) Ltd',
        date: 'Jul 2020 – Apr 2021',
        description: 'Focused on telecommunication and networking systems.',
        responsibilities: ['Cabling', 'Router configuration', 'Signal testing'],
    },
    {
        title: 'Engineering Intern',
        company: 'SKY Technologies Pvt Ltd',
        date: 'Oct 2019 – Jul 2020',
        description: 'Early exposure to technology and engineering practices.',
        responsibilities: ['Hardware assembly', 'Software installation', 'Technical support'],
    },
];

const founderExperience = [
    {
        title: 'Founder & Tech Entrepreneur',
        company: 'Techknow Lanka Engineers (Pvt) Ltd',
        date: '2020 – Present',
        description: 'Leading the vision and execution of innovative tech solutions.',
        responsibilities: [
            'Leading IoT, automation, electronics, and software solution projects',
            'Delivering industrial automation and custom hardware',
            'Managing R&D, product design, prototyping, and client solutions',
            'Guiding remote CAD and engineering teams',
            'Expanding the brand TechknowLK',
        ],
    },
];

const ExperienceCard = ({ item, index, align }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="card"
        style={{
            marginBottom: '2rem',
            position: 'relative',
            borderLeft: `4px solid ${align === 'left' ? 'var(--primary-color)' : 'var(--secondary-color)'}`,
        }}
    >
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: align === 'left' ? 'var(--primary-color)' : 'var(--secondary-color)' }}>{item.title}</h3>
        <h4 style={{ fontSize: '1rem', color: 'var(--text-color)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaBuilding style={{ fontSize: '0.8rem', opacity: 0.7 }} /> {item.company}
        </h4>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem', fontStyle: 'italic' }}>{item.date}</span>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{item.description}</p>
        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {item.responsibilities.map((resp, i) => (
                <li key={i} style={{ marginBottom: '0.3rem', listStyleType: 'disc' }}>{resp}</li>
            ))}
        </ul>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Professional Journey
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                    {/* Employee Path */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '1rem' }}
                        >
                            <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                                <FaUserTie size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-color)' }}>Employee Journey</h3>
                        </motion.div>

                        <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid var(--border-color)' }}>
                            {employeeExperience.map((item, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '-26px', top: '20px', width: '12px', height: '12px', background: 'var(--primary-color)', borderRadius: '50%' }}></div>
                                    <ExperienceCard item={item} index={index} align="left" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Founder Path */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '1rem' }}
                        >
                            <div style={{ background: 'rgba(189, 0, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--secondary-color)' }}>
                                <FaBriefcase size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-color)' }}>Founder Journey</h3>
                        </motion.div>

                        <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid var(--border-color)' }}>
                            {founderExperience.map((item, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '-26px', top: '20px', width: '12px', height: '12px', background: 'var(--secondary-color)', borderRadius: '50%' }}></div>
                                    <ExperienceCard item={item} index={index} align="right" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
