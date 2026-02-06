import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Activity, CheckCircle2, Zap, ShieldCheck, Database } from 'lucide-react';

const QueryPortal = () => {
    const [queryStatus, setQueryStatus] = useState('idle');
    const cohorts = ["Type-2 Diabetes", "Hypertension", "Alzheimer's"];

    return (
        <section id="query" className="py-32 px-6 bg-medical-50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                {/* Left: Interactive Dashboard */}
                <div className="bg-white p-2 rounded-3xl shadow-soft border border-medical-200">
                    <div className="bg-medical-50/50 rounded-[1.5rem] p-8 md:p-10 border border-medical-100">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-medical-200"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-medical-200"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-medical-200"></div>
                            </div>
                            <div className="text-[10px] font-mono text-medical-400 uppercase tracking-widest bg-white px-2 py-1 rounded-md border border-medical-100">Environment: PROD</div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Target Cohort</label>
                                <div className="flex gap-2">
                                    {cohorts.map(c => (
                                        <button key={c} className="flex-1 py-2.5 px-3 rounded-lg bg-white border border-medical-200 text-[10px] font-bold text-medical-600 hover:border-brand-400 hover:text-brand-600 transition-colors uppercase shadow-sm">{c}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Gene</label>
                                    <select className="w-full bg-white border border-medical-200 p-3 rounded-lg outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 font-medium text-sm text-medical-700 shadow-sm transition-all">
                                        <option>BRCA1</option>
                                        <option>JAK2</option>
                                        <option>CFTR</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Variant</label>
                                    <select className="w-full bg-white border border-medical-200 p-3 rounded-lg outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 font-medium text-sm text-brand-600 shadow-sm transition-all">
                                        <option>SNP (rs6025_AG)</option>
                                        <option>INDEL (c.5266dupC)</option>
                                        <option>CNV</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setQueryStatus('processing');
                                    setTimeout(() => setQueryStatus('success'), 2000);
                                }}
                                className="w-full py-4 bg-medical-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/20 transition-all flex items-center justify-center gap-2"
                            >
                                {queryStatus === 'processing' ? <Activity className="animate-spin text-brand-400" size={16} /> : <Search size={16} />}
                                {queryStatus === 'processing' ? 'Verifying Compliance...' : 'Run Clinical Verification'}
                            </button>

                            <AnimatePresence>
                                {queryStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                        className="p-4 border border-green-200 bg-green-50 rounded-xl space-y-2"
                                    >
                                        <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                                            <CheckCircle2 size={16} /> Verification Successful
                                        </div>
                                        <div className="font-mono text-[10px] text-green-600/80 leading-relaxed">
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
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6 leading-tight tracking-tight">
                        Accelerate Discovery. <br />
                        <span className="text-medical-400">Mitigate Risk.</span>
                    </h2>
                    <p className="text-lg text-medical-600 mb-8 leading-relaxed">
                        Pharmaceutical partners can now query massive, diverse cohorts in seconds.
                        By leveraging our ZK-Layer, you gain the genetic evidence required without the legal risk of bulk data transfer.
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-medical-200 pt-8">
                        <div>
                            <div className="text-brand-600 font-bold mb-1 uppercase text-[10px] tracking-widest">Compliance</div>
                            <div className="text-sm font-semibold text-medical-800">DOJ Bulk Data Rule 2025 Ready</div>
                        </div>
                        <div>
                            <div className="text-brand-600 font-bold mb-1 uppercase text-[10px] tracking-widest">Efficiency</div>
                            <div className="text-sm font-semibold text-medical-800">70% Clinical Cost Reduction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QueryPortal;
