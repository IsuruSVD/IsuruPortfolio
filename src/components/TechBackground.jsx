import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        // Configuration
        const config = {
            bgColor: '#050a14', // Dark blue/black
            lineColor: 'rgba(0, 242, 255, 0.15)', // Faint cyan
            nodeColor: 'rgba(0, 242, 255, 0.3)',
            signalColor: '#00f2ff', // Bright cyan
            nodeCount: 60, // Number of static nodes
            connectionDistance: 150, // Max distance to connect nodes
            signalCount: 20, // Number of moving signals
            signalSpeed: 2,
        };

        // State
        let nodes = [];
        let signals = [];

        // Resize handler
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init();
        };

        // Node class
        class Node {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.connections = [];
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = config.nodeColor;
                ctx.fill();
            }
        }

        // Signal class
        class Signal {
            constructor() {
                this.reset();
            }

            reset() {
                // Pick a random start node that has connections
                const startNode = nodes[Math.floor(Math.random() * nodes.length)];
                if (startNode && startNode.connections.length > 0) {
                    this.currentNode = startNode;
                    this.targetNode = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];
                    this.x = this.currentNode.x;
                    this.y = this.currentNode.y;
                    this.progress = 0;
                    this.speed = config.signalSpeed / Math.hypot(this.targetNode.x - this.currentNode.x, this.targetNode.y - this.currentNode.y);
                } else {
                    // Retry if bad node
                    this.reset();
                }
            }

            update() {
                if (!this.currentNode || !this.targetNode) {
                    this.reset();
                    return;
                }

                this.progress += this.speed;

                if (this.progress >= 1) {
                    this.currentNode = this.targetNode;
                    // Pick next random connection, excluding going back if possible (simple random walk for now)
                    if (this.currentNode.connections.length > 0) {
                        this.targetNode = this.currentNode.connections[Math.floor(Math.random() * this.currentNode.connections.length)];
                        this.progress = 0;
                        this.speed = config.signalSpeed / Math.hypot(this.targetNode.x - this.currentNode.x, this.targetNode.y - this.currentNode.y);
                    } else {
                        this.reset();
                    }
                }

                this.x = this.currentNode.x + (this.targetNode.x - this.currentNode.x) * this.progress;
                this.y = this.currentNode.y + (this.targetNode.y - this.currentNode.y) * this.progress;
            }

            draw() {
                if (!this.currentNode) return;

                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = config.signalColor;
                ctx.shadowBlur = 10;
                ctx.shadowColor = config.signalColor;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize
        const init = () => {
            nodes = [];
            signals = [];

            // Create nodes
            // Adjust node count based on screen size
            const adjustedNodeCount = Math.floor((width * height) / 25000);

            for (let i = 0; i < adjustedNodeCount; i++) {
                nodes.push(new Node());
            }

            // Create connections (orthogonal-ish or direct? The image has circuit traces. 
            // For simplicity and "techy" feel, direct lines with some opacity work well, 
            // but true circuit traces are orthogonal. Let's stick to direct for a network effect 
            // or try to make them orthogonal. Orthogonal is harder to generate randomly without a grid.
            // Let's do a "network" style which looks very techy too, or maybe simple grid lines.
            // The user image shows complex traces. Let's try a slightly different approach:
            // Grid-based walkers?
            // Actually, let's stick to the network graph for now as it's robust and looks good.
            // To make it look more "circuit-like", we can restrict connections to be closer and maybe draw them with 90-degree bends?
            // Let's keep it simple first: direct lines.)

            nodes.forEach(node => {
                nodes.forEach(otherNode => {
                    if (node === otherNode) return;
                    const dist = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                    if (dist < config.connectionDistance) {
                        // Limit connections per node to avoid clutter
                        if (node.connections.length < 3) {
                            node.connections.push(otherNode);
                        }
                    }
                });
            });

            // Create signals
            for (let i = 0; i < config.signalCount; i++) {
                signals.push(new Signal());
            }
        };

        // Animation Loop
        const animate = () => {
            ctx.fillStyle = config.bgColor;
            ctx.fillRect(0, 0, width, height);

            // Draw connections
            ctx.lineWidth = 1;
            ctx.strokeStyle = config.lineColor;

            // We can draw all unique connections
            // To avoid duplicates, we can just iterate nodes and their connections
            // But since we want to draw lines, we can just do it.
            // Optimization: draw lines first
            ctx.beginPath();
            nodes.forEach(node => {
                node.connections.forEach(other => {
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(other.x, other.y);
                });
            });
            ctx.stroke();

            // Draw nodes
            nodes.forEach(node => node.draw());

            // Update and draw signals
            signals.forEach(signal => {
                signal.update();
                signal.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                background: '#050a14',
            }}
        />
    );
};

export default TechBackground;
