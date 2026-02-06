import React from 'react';
import { Activity, Wallet, Trash2 } from 'lucide-react';

const Vault = () => {
    return (
        <section id="vault" className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-medical-900 tracking-tight">Your Genome. Your Sovereignty.</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl border border-medical-100 bg-white shadow-soft group hover:border-brand-200 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Activity size={24} />
                        </div>
                        <div className="text-3xl font-bold text-medical-900 mb-1">98.4</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Reputation Score</div>
                    </div>

                    <div className="p-8 rounded-2xl border border-brand-100 bg-brand-50/30 shadow-sm relative overflow-hidden">
                        <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Wallet size={24} />
                        </div>
                        <div className="text-3xl font-bold text-medical-900 mb-1">1,240 <span className="text-xs text-medical-400 font-normal">GMX</span></div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Yield Generated</div>
                    </div>

                    <div className="p-8 rounded-2xl border border-red-100 bg-white shadow-soft group hover:bg-red-50/50 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                            <Trash2 size={24} />
                        </div>
                        <div className="text-xl font-bold text-medical-900 mb-1">Kill Switch</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400 group-hover:text-red-500 transition-colors">Revoke All Access</div>
                    </div>
                </div>
                <div className="mt-16 p-8 rounded-2xl bg-medical-50 border border-medical-100 text-medical-500 italic font-medium text-sm max-w-2xl mx-auto">
                    "Variomex enforces the 'Right to be Forgotten' via smart contract key deletion.
                    We never store your DNA; we only index your sovereignty."
                </div>
            </div>
        </section>
    );
};

export default Vault;
