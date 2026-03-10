import React from 'react';
import { Dna } from 'lucide-react';

import { motion } from 'framer-motion';

const Navbar = ({ scrolled }) => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-white/70 backdrop-blur-xl border-medical-200 shadow-soft py-3'
                    : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative p-2.5 rounded-xl bg-white/50 border border-white/80 shadow-sm group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:border-brand-300 group-hover:bg-white transition-all duration-300">
                        <Dna size={22} className="text-brand-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-tighter text-medical-950 group-hover:text-brand-700 transition-colors">
                        Variome<span className="text-brand-500">X</span>
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-medical-600 uppercase tracking-widest">
                    {['Pipeline', 'Query Portal', 'Vault'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="relative py-2 text-medical-500 hover:text-brand-600 transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-medical-500 hover:text-medical-900 transition-colors">
                        Documentation
                    </button>
                    <button className="relative overflow-hidden group px-6 py-2.5 bg-medical-950 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">Connect <span className="hidden sm:inline">Identity</span></span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
