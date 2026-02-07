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
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-100/20 blur-[120px] rounded-full animate-float"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

            <motion.div style={{ opacity: heroOpacity, y: yRange }} className="max-w-4xl text-center z-10 pt-24 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50/50 border border-brand-100/50 text-brand-700 text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-sm"
                >
                    <ShieldCheck size={14} className="text-brand-600" /> Decentralized Science (DeSci)
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1] tracking-tighter text-medical-950">
                    Insights, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                        Not the DNA.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-medical-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    Unlock the 97% of siloed clinical-genomic data.
                    Verify traits using <span className="font-semibold text-medical-900 border-b-2 border-brand-200">Zero-Knowledge Proofs</span> without moving
                    a single byte of raw VCF data.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300">
                        Secure My Genome
                    </button>
                    <button className="group px-8 py-4 bg-white/50 backdrop-blur-sm border border-medical-200 text-medical-700 rounded-xl font-bold text-sm hover:bg-white hover:border-brand-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                        Request Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
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
