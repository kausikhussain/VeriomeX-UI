import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, ArrowRight, Zap, FlaskConical, Globe, Database, Dna } from 'lucide-react';
import StatCard from '../ui/StatCard';
import { Canvas } from '@react-three/fiber';
import DNAHelix from './DNAHelix';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const yRange = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">

            {/* 3D Background - DNA Helix */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.7} />
                    <DNAHelix />
                </Canvas>
            </div>

            {/* Background Visuals - Subtle & Clinical */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(2,132,199,0.03),transparent_50%)]"></div>
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-200/20 blur-[120px] rounded-full animate-blob"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-medical-200/30 blur-[100px] rounded-full animate-blob [animation-delay:2s]"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200/20 blur-[120px] rounded-full animate-blob" style={{ animationDelay: '4s' }}></div>

            <motion.div style={{ opacity: heroOpacity, y: yRange }} className="max-w-4xl text-center z-10 pt-24 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm text-brand-700 text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-md"
                >
                    <ShieldCheck size={16} className="text-brand-600" /> Decentralized Science <span className="text-medical-400 mx-2">|</span> Protocol v0.4
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tighter text-medical-950"
                >
                    Insights, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-500 to-brand-400 relative">
                        Not the DNA.
                        <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-brand-200 to-transparent blur-md opacity-50"></div>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-medical-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Unlock the 97% of siloed clinical-genomic data.
                    Verify traits using <span className="font-semibold text-medical-900 border-b-2 border-brand-200 hover:border-brand-400 transition-colors cursor-pointer">Zero-Knowledge Proofs</span> without moving
                    a single byte of raw VCF data.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <button className="relative overflow-hidden group px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1 transition-all duration-300">
                        <span className="relative z-10 flex items-center justify-center gap-2">Secure My Genome</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </button>
                    <button className="group px-8 py-4 bg-white/70 backdrop-blur-md border border-medical-200 text-medical-700 rounded-xl font-bold text-sm hover:bg-white hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Request Access <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                </motion.div>
            </motion.div>

            {/* PERFORMANCE METRICS - Glass Cards */}
            <div className="mt-24 w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-12">
                <StatCard icon={Zap} label="Query Latency" value="5.83ms" subtext="90.0% Accuracy" />
                <StatCard icon={FlaskConical} label="Clinical ROI" value="2.6x" subtext="Trial Success Uplift" />
                <StatCard icon={Globe} label="Resilience" value="100%" subtext="High-Fault Tolerance" />
                <StatCard icon={Database} label="Indexed Variants" value="35M+" subtext="Filter Optimized" />
            </div>
        </section>
    );
};

export default Hero;
