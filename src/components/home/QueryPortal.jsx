import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Activity, CheckCircle2, Zap, ShieldCheck, Database } from 'lucide-react';

const QueryPortal = () => {
    const [queryStatus, setQueryStatus] = useState('idle');
    const cohorts = ["Type-2 Diabetes", "Hypertension", "Alzheimer's"];

    return (
        <section id="query" className="py-24 px-6 bg-medical-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute -left-20 top-20 w-96 h-96 bg-brand-200/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left: Interactive Dashboard */}
                <div className="glass-card p-2 rounded-3xl border border-white/50 shadow-xl">
                    <div className="bg-white/50 backdrop-blur-sm rounded-[1.5rem] p-8 md:p-10 border border-white/60">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-[10px] font-mono text-medical-500 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-md border border-medical-100 shadow-sm">
                                Environment: <span className="text-green-600 font-bold">PROD</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-[11px] uppercase font-bold tracking-widest text-medical-500">Target Cohort</label>
                                <div className="flex flex-wrap gap-2">
                                    {cohorts.map(c => (
                                        <button key={c} className="flex-1 py-2.5 px-3 rounded-lg bg-white border border-medical-200 text-[11px] font-bold text-medical-600 hover:border-brand-400 hover:text-brand-600 transition-colors uppercase shadow-sm whitespace-nowrap">{c}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[11px] uppercase font-bold tracking-widest text-medical-500">Gene</label>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-white border border-medical-200 p-3 rounded-xl outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 font-medium text-sm text-medical-800 shadow-sm transition-all">
                                            <option>BRCA1</option>
                                            <option>JAK2</option>
                                            <option>CFTR</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-medical-400">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] uppercase font-bold tracking-widest text-medical-500">Variant</label>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-white border border-medical-200 p-3 rounded-xl outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 font-medium text-sm text-brand-600 shadow-sm transition-all">
                                            <option>SNP (rs6025_AG)</option>
                                            <option>INDEL (c.5266dupC)</option>
                                            <option>CNV</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-medical-400">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setQueryStatus('processing');
                                    setTimeout(() => setQueryStatus('success'), 2000);
                                }}
                                className="w-full py-4 bg-medical-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/20 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                            >
                                {queryStatus === 'processing' ? <Activity className="animate-spin text-brand-400" size={18} /> : <Search size={18} className="group-hover:scale-110 transition-transform" />}
                                {queryStatus === 'processing' ? 'Verifying Compliance...' : 'Run Clinical Verification'}
                            </button>

                            <AnimatePresence>
                                {queryStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                        className="p-4 border border-green-200 bg-green-50/50 backdrop-blur-sm rounded-xl space-y-2"
                                    >
                                        <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                                            <CheckCircle2 size={16} /> Verification Successful
                                        </div>
                                        <div className="font-mono text-[10px] text-green-700/80 leading-relaxed pl-6">
                                            Proof ID: 0x8f2a...3e1c (ZKP)<br />
                                            Latency: 5.8ms // Mock Data
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="lg:pl-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6 leading-tight tracking-tight">
                        Accelerate Discovery. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-400 to-medical-600">Mitigate Risk.</span>
                    </h2>
                    <p className="text-lg text-medical-600 mb-10 leading-relaxed font-medium">
                        Pharmaceutical partners can now query massive, diverse cohorts in seconds.
                        By leveraging our ZK-Layer, you gain the genetic evidence required without the legal risk of bulk data transfer.
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-medical-200/60 pt-8">
                        <div>
                            <div className="text-brand-600 font-bold mb-2 uppercase text-[10px] tracking-widest flex items-center gap-2">
                                <ShieldCheck size={14} /> Compliance
                            </div>
                            <div className="text-sm font-bold text-medical-800">DOJ Bulk Data Rule 2025 Ready</div>
                        </div>
                        <div>
                            <div className="text-brand-600 font-bold mb-2 uppercase text-[10px] tracking-widest flex items-center gap-2">
                                <Zap size={14} /> Efficiency
                            </div>
                            <div className="text-sm font-bold text-medical-800">70% Clinical Cost Reduction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default QueryPortal;
