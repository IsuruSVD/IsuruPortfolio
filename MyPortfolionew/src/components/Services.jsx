import React from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaMicrochip, FaIndustry, FaCode, FaCloud, FaNetworkWired, FaDraftingCompass, FaTools, FaBrain, FaLightbulb, FaCogs } from 'react-icons/fa';

const services = [
    { icon: <FaWifi />, title: 'IoT System Development', description: 'Building smart, connected devices for real-time monitoring and control.' },
    { icon: <FaMicrochip />, title: 'Embedded Electronics Design', description: 'Custom PCB design and firmware development for embedded systems.' },
    { icon: <FaIndustry />, title: 'Industrial Automation', description: 'Automating industrial processes to improve efficiency and reduce costs.' },
    { icon: <FaCode />, title: 'Software Development', description: 'Full-stack web and mobile application development using modern tech stacks.' },
    { icon: <FaCloud />, title: 'Cloud Integrations', description: 'Seamless integration with cloud platforms like Firebase and AWS IoT.' },
    { icon: <FaNetworkWired />, title: 'Networking Solutions', description: 'Designing and implementing robust network infrastructures.' },
    { icon: <FaDraftingCompass />, title: 'CAD / Enclosure Design', description: '3D modeling and enclosure design for electronic products.' },
    { icon: <FaCogs />, title: 'Electronic Engineering', description: 'Comprehensive electronic circuit design and analysis.' },
    { icon: <FaTools />, title: 'Hardware Repairing', description: 'Expert troubleshooting and repair of complex electronic hardware.' },
    { icon: <FaBrain />, title: 'AI-based Smart Systems', description: 'Integrating AI/ML to create intelligent and adaptive systems.' },
    { icon: <FaLightbulb />, title: 'Tech Consultation & R&D', description: 'Providing expert advice and research for innovative tech projects.' },
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My Services
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, borderColor: 'var(--primary-color)' }}
                            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                        >
                            <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
