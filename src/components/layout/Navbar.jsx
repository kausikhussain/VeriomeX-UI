import React from 'react';
import { Dna } from 'lucide-react';

const Navbar = ({ scrolled }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-white/70 backdrop-blur-xl border-medical-200 shadow-soft py-3'
                : 'bg-transparent border-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative p-2 rounded-xl bg-white/50 border border-white/50 shadow-sm group-hover:shadow-glow group-hover:border-brand-200 transition-all duration-300">
                        <Dna size={22} className="text-brand-600" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-medical-900 group-hover:text-brand-700 transition-colors">
                        VariomeX
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-medical-600">
                    {['Pipeline', 'Query Portal', 'Vault'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="relative px-2 py-1 hover:text-brand-600 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button className="px-5 py-2.5 bg-brand-600 text-white rounded-lg font-semibold text-sm hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 active:scale-95">
                    Connect Identity
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
