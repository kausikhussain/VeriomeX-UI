import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, ArrowRight, Zap, FlaskConical, Globe, Database, Dna } from 'lucide-react';
import StatCard from '../ui/StatCard';
import { Canvas } from '@react-three/fiber';
import DNAHelix from './DNAHelix';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-white to-medical-50">

            {/* 3D Background - DNA Helix */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <DNAHelix />
                </Canvas>
            </div>

            {/* Background Visuals - Subtle & Clinical */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-100/30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full"></div>

            <motion.div style={{ opacity: heroOpacity }} className="max-w-4xl text-center z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-8 tracking-wide uppercase"
                >
                    <ShieldCheck size={14} /> Decentralized Science (DeSci)
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-medical-900">
                    Insights, <br />
                    <span className="text-brand-600">
                        Not the DNA.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-medical-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Unlock the 97% of siloed clinical-genomic data.
                    Verify traits using <span className="font-semibold text-medical-900">Zero-Knowledge Proofs</span> without moving
                    a single byte of raw VCF data.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-brand-600 text-white rounded-lg font-semibold text-sm hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 transition-all">
                        Secure My Genome
                    </button>
                    <button className="px-8 py-4 bg-white border border-medical-200 text-medical-700 rounded-lg font-semibold text-sm hover:bg-medical-50 hover:border-medical-300 transition-all flex items-center justify-center gap-2">
                        Request Access <ArrowRight size={16} />
                    </button>
                </div>
            </motion.div>

            {/* PERFORMANCE METRICS - Clean & Minimal */}
            <div className="mt-20 w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <StatCard icon={Zap} label="Query Latency" value="5.83ms" subtext="90.0% Accuracy" />
                <StatCard icon={FlaskConical} label="Clinical ROI" value="2.6x" subtext="Trial Success Uplift" />
                <StatCard icon={Globe} label="Resilience" value="100%" subtext="High-Fault Tolerance" />
                <StatCard icon={Database} label="Indexed Variants" value="35M+" subtext="Filter Optimized" />
            </div>
        </section>
    );
};

export default Hero;
