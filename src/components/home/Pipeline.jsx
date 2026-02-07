import React from 'react';
import { Database, Lock, CheckCircle2 } from 'lucide-react';

const Pipeline = () => {
    const pipelineSteps = [
        { icon: Database, color: "bg-blue-50 text-blue-600", title: "Data Ingestion", desc: "Securely ingest VCF files via IPFS with automatic indexing." },
        { icon: Lock, color: "bg-indigo-50 text-indigo-600", title: "ZK-Commitment", desc: "Generate cryptographic commitments without exposing raw genomics." },
        { icon: CheckCircle2, color: "bg-teal-50 text-teal-600", title: "Query Verification", desc: "Execute trait queries via succinct zero-knowledge proofs." }
    ];

    return (
        <section id="pipeline" className="py-24 px-6 relative bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-medical-50 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-medical-900 tracking-tight">The Architecture of Trust</h2>
                    <p className="text-medical-500 uppercase tracking-widest text-xs font-bold mb-4">Hybrid Storage + ZK-Verification Pipeline</p>
                    <p className="text-medical-600">
                        A seamless integration of privacy-preserving technologies ensuring your data remains yours, while contributing to global science.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {pipelineSteps.map((step, i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                            <div className={`mb-6 w-14 h-14 flex items-center justify-center rounded-2xl ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                                <step.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-medical-900 leading-tight">{step.title}</h3>
                            <p className="text-medical-600 text-sm leading-relaxed mb-6">{step.desc}</p>
                            <div className="text-[10px] font-mono text-medical-300 absolute bottom-6 right-8 opacity-50">0{i + 1}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
