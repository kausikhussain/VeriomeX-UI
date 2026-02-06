import React from 'react';
import { Database, Lock, CheckCircle2 } from 'lucide-react';

const Pipeline = () => {
    const pipelineSteps = [
        { icon: Database, color: "bg-blue-50 text-blue-600", title: "Data Ingestion", desc: "Securely ingest VCF files via IPFS with automatic indexing." },
        { icon: Lock, color: "bg-indigo-50 text-indigo-600", title: "ZK-Commitment", desc: "Generate cryptographic commitments without exposing raw genomics." },
        { icon: CheckCircle2, color: "bg-teal-50 text-teal-600", title: "Query Verification", desc: "Execute trait queries via succinct zero-knowledge proofs." }
    ];

    return (
        <section id="pipeline" className="py-32 px-6 bg-white border-y border-medical-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-medical-900">The Architecture of Trust</h2>
                    <p className="text-medical-500 uppercase tracking-widest text-xs font-bold">Hybrid Storage + ZK-Verification Pipeline</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {pipelineSteps.map((step, i) => (
                        <div key={i} className="bg-white p-10 rounded-2xl border border-medical-100 shadow-soft relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <div className={`mb-6 w-14 h-14 flex items-center justify-center rounded-xl ${step.color}`}>
                                <step.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-medical-900 leading-tight">{step.title}</h3>
                            <p className="text-medical-500 text-sm leading-relaxed mb-8">{step.desc}</p>
                            <div className="text-[10px] font-mono text-medical-300 absolute bottom-6 right-8">STEP_0{i + 1}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
