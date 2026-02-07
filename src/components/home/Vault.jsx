import React from 'react';
import { Activity, Wallet, Trash2 } from 'lucide-react';

const Vault = () => {
    return (
        <section id="vault" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-medical-900 tracking-tight">
                    Your Genome. <span className="text-brand-600">Your Sovereignty.</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center cursor-pointer group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <Activity size={28} />
                        </div>
                        <div className="text-4xl font-bold text-medical-900 mb-1 tracking-tight">98.4</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Reputation Score</div>
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 shadow-sm relative overflow-hidden flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform">
                        <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <Wallet size={28} />
                        </div>
                        <div className="text-4xl font-bold text-medical-900 mb-1 tracking-tight">1,240 <span className="text-sm text-medical-500 font-medium">GMX</span></div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Yield Generated</div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center cursor-pointer group hover:-translate-y-1 hover:border-red-200">
                        <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                            <Trash2 size={28} />
                        </div>
                        <div className="text-2xl font-bold text-medical-900 mb-1 tracking-tight">Kill Switch</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400 group-hover:text-red-500 transition-colors">Revoke All Access</div>
                    </div>
                </div>

                <div className="inline-block p-6 rounded-2xl bg-medical-50 border border-medical-100 text-medical-600 italic font-medium text-sm max-w-2xl mx-auto leading-relaxed relative">
                    <span className="text-4xl text-brand-200 absolute -top-4 -left-2 font-serif">"</span>
                    Variomex enforces the 'Right to be Forgotten' via smart contract key deletion.
                    We never store your DNA; we only index your sovereignty.
                    <span className="text-4xl text-brand-200 absolute -bottom-8 -right-2 font-serif">"</span>
                </div>
            </div>
        </section>
    );
};

export default Vault;
