import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        quote: "Isuru is a brilliant engineer who consistently delivers innovative solutions. His expertise in IoT is unmatched.",
        author: "Client A",
        role: "CEO, Tech Corp"
    },
    {
        quote: "TechknowLK delivered exactly what we needed for our automation project. Highly recommended!",
        author: "Client B",
        role: "Manager, Factory Inc"
    },
    {
        quote: "Professional, skilled, and easy to work with. Isuru brought our vision to life.",
        author: "Client C",
        role: "Founder, Startup X"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Testimonials
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', position: 'relative' }}
                        >
                            <div style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '1rem' }}>
                                <FaQuoteLeft />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{item.quote}"</p>
                            <h4 style={{ fontWeight: 600, color: 'var(--text-color)' }}>{item.author}</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
