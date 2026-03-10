import React from 'react';
import { Database, Lock, CheckCircle2 } from 'lucide-react';

const Pipeline = () => {
    const pipelineSteps = [
        { icon: Database, color: "bg-blue-50 text-blue-600", title: "Data Ingestion", desc: "Securely ingest VCF files via IPFS with automatic indexing." },
        { icon: Lock, color: "bg-indigo-50 text-indigo-600", title: "ZK-Commitment", desc: "Generate cryptographic commitments without exposing raw genomics." },
        { icon: CheckCircle2, color: "bg-teal-50 text-teal-600", title: "Query Verification", desc: "Execute trait queries via succinct zero-knowledge proofs." }
    ];

    <section id="pipeline" className="py-24 px-6 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(240,249,255,0.8),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-medical-950 tracking-tight">
                    The Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-brand-500">Trust</span>
                </h2>
                <p className="text-brand-600 uppercase tracking-widest text-xs font-black mb-6 flex items-center justify-center gap-2">
                    <span className="w-8 h-[2px] bg-brand-200"></span> Hybrid Storage + ZK-Verification Pipeline <span className="w-8 h-[2px] bg-brand-200"></span>
                </p>
                <p className="text-lg text-medical-600 font-medium leading-relaxed">
                    A seamless integration of privacy-preserving technologies ensuring your data remains yours, while contributing to global science.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {pipelineSteps.map((step, i) => (
                    <div key={i} className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                        {/* Decorative background circle on hover */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out z-0"></div>

                        <div className={`relative z-10 mb-8 w-16 h-16 flex items-center justify-center rounded-2xl ${step.color} shadow-sm border border-white/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                            <step.icon size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="relative z-10 text-2xl font-bold mb-4 text-medical-950 leading-tight group-hover:text-brand-700 transition-colors">{step.title}</h3>
                        <p className="relative z-10 text-medical-600 text-sm font-medium leading-relaxed mb-8 group-hover:text-medical-700/80 transition-colors">{step.desc}</p>

                        <div className="relative z-10 flex items-center justify-between">
                            <div className="w-12 h-1 bg-medical-200 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-400 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                            <div className="text-[11px] font-mono font-bold text-medical-400 opacity-50 group-hover:opacity-100 group-hover:text-brand-500 transition-colors">STAGE_0{i + 1}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Pipeline;
