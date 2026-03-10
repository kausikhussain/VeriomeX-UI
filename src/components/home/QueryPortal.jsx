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
                    <div className="bg-white/60 backdrop-blur-md rounded-[1.5rem] p-8 md:p-10 border border-white/80 shadow-inner relative overflow-hidden">
                        {/* Decorative internal glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-50"></div>

                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            </div>
                            <div className="text-[10px] font-mono text-medical-500 uppercase tracking-widest bg-white/90 px-3 py-1.5 rounded-md border border-medical-200 shadow-sm flex items-center gap-2">
                                Env: <span className="text-green-600 font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>PROD</span>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="space-y-3">
                                <label className="text-[11px] uppercase font-extrabold tracking-widest text-medical-500">Target Cohort</label>
                                <div className="flex flex-wrap gap-2">
                                    {cohorts.map(c => (
                                        <button key={c} className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-medical-200 text-[11px] font-bold text-medical-600 hover:border-brand-400 hover:text-brand-600 hover:shadow-md hover:-translate-y-0.5 transition-all uppercase shadow-sm whitespace-nowrap">{c}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2 group">
                                    <label className="text-[11px] uppercase font-extrabold tracking-widest text-medical-500 group-focus-within:text-brand-600 transition-colors">Gene</label>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-white border border-medical-200 p-3.5 rounded-xl outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 font-bold text-sm text-medical-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                                            <option>BRCA1</option>
                                            <option>JAK2</option>
                                            <option>CFTR</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-500">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[11px] uppercase font-extrabold tracking-widest text-medical-500 group-focus-within:text-brand-600 transition-colors">Variant</label>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-white border border-medical-200 p-3.5 rounded-xl outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 font-bold text-sm text-brand-700 shadow-sm hover:shadow-md transition-all cursor-pointer">
                                            <option>SNP (rs6025_AG)</option>
                                            <option>INDEL (c.5266dupC)</option>
                                            <option>CNV</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-500">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setQueryStatus('processing');
                                    setTimeout(() => setQueryStatus('success'), 2000);
                                }}
                                className={`w-full py-4 text-white font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${queryStatus === 'processing'
                                    ? 'bg-medical-800 opacity-90 cursor-wait'
                                    : 'bg-medical-950 hover:bg-brand-600 hover:shadow-brand-500/30 hover:-translate-y-1'
                                    }`}
                            >
                                {queryStatus === 'processing' ? (
                                    <>
                                        <Activity className="animate-spin text-brand-400" size={20} />
                                        <span className="animate-pulse">Generating ZK Proof...</span>
                                    </>
                                ) : (
                                    <>
                                        <Search size={20} className="group-hover:scale-110 transition-transform" />
                                        Run Clinical Verification
                                    </>
                                )}

                                {queryStatus === 'processing' && (
                                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                                        <div className="w-full h-full animate-shimmer opacity-20"></div>
                                    </div>
                                )}
                            </button>

                            <AnimatePresence>
                                {queryStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                                        className="p-5 border border-green-300 bg-gradient-to-br from-green-50 to-green-100/50 backdrop-blur-md rounded-xl space-y-3 shadow-lg shadow-green-200/50 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
                                        <div className="flex items-center gap-2 text-green-700 font-extrabold text-sm relative z-10">
                                            <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-600" /></div>
                                            VERIFICATION_SUCCESSFUL
                                        </div>
                                        <div className="font-mono text-[11px] text-green-800/80 leading-relaxed pl-9 relative z-10 font-medium">
                                            Proof ID: <span className="text-green-900 font-bold">0x8f2a...3e1c</span> (Succinct ZKP)<br />
                                            Latency: 5.8ms <span className="text-green-600/50 mx-1">|</span> Match Found
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
            </div>
        </section>
    );
};
export default QueryPortal;
