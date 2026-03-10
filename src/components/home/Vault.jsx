import React from 'react';
import { Activity, Wallet, Trash2 } from 'lucide-react';

const Vault = () => {
    return (
        <section id="vault" className="py-24 px-6 bg-medical-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-green-400/5 via-transparent to-brand-400/5 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-medical-950 tracking-tight">
                    Your Genome. <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-brand-500">Your Sovereignty.</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-16 h-16 bg-white shadow-sm border border-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-green-200/50 transition-all duration-300 relative z-10">
                            <Activity size={32} />
                        </div>
                        <div className="text-5xl font-extrabold text-medical-950 mb-2 tracking-tighter relative z-10 group-hover:text-green-700 transition-colors">98.4</div>
                        <div className="text-[11px] uppercase font-black tracking-widest text-medical-400 relative z-10">Reputation Score</div>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-gradient-to-br from-brand-600 to-medical-900 border border-brand-400/30 shadow-2xl shadow-brand-900/40 relative overflow-hidden flex flex-col items-center justify-center group hover:-translate-y-2 transition-all duration-500 text-white">
                        {/* Decorative glowing background */}
                        <div className="absolute -inset-1/2 bg-gradient-to-r from-brand-400/0 via-brand-400/20 to-brand-400/0 rotate-45 group-hover:animate-shimmer pointer-events-none"></div>

                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <Wallet size={32} />
                        </div>
                        <div className="flex items-baseline gap-2 mb-2 relative z-10">
                            <span className="text-5xl font-extrabold tracking-tighter">1,240</span>
                            <span className="text-sm text-brand-200 font-black tracking-widest uppercase">GMX</span>
                        </div>
                        <div className="text-[11px] uppercase font-black tracking-widest text-brand-200/80 relative z-10">Yield Generated</div>
                    </div>

                    <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer group hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-16 h-16 bg-white shadow-sm border border-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 relative z-10">
                            <Trash2 size={32} />
                        </div>
                        <div className="text-3xl font-extrabold text-medical-950 mb-2 relative z-10 group-hover:text-red-600 transition-colors">Kill Switch</div>
                        <div className="text-[11px] uppercase font-black tracking-widest text-medical-400 group-hover:text-red-500 transition-colors relative z-10">Revoke All Access</div>
                    </div>
                </div>

                <div className="relative inline-block p-8 rounded-[2rem] bg-white border border-medical-100 shadow-sm max-w-2xl mx-auto group hover:shadow-md transition-shadow">
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-brand-100 to-white rounded-full flex items-center justify-center shadow-sm border border-medical-50 group-hover:scale-110 transition-transform">
                        <span className="text-4xl text-brand-400 font-serif leading-none h-6 flex items-center">"</span>
                    </div>
                    <p className="text-medical-600 italic font-medium text-[15px] leading-relaxed relative z-10">
                        Variomex enforces the <strong className="text-medical-900 font-bold">'Right to be Forgotten'</strong> via smart contract key deletion.
                        We never store your DNA; we only index your sovereignty.
                    </p>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-tl from-brand-100 to-white rounded-full flex items-center justify-center shadow-sm border border-medical-50 group-hover:scale-110 transition-transform">
                        <span className="text-4xl text-brand-400 font-serif leading-none h-6 flex items-center rotate-180">"</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vault;
