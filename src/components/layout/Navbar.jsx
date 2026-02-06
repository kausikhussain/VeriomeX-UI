import React from 'react';
import { Dna } from 'lucide-react';

const Navbar = ({ scrolled }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-medical-200 py-3' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <div className="relative p-2 bg-brand-50 rounded-lg group-hover:bg-brand-100 transition-colors">
                            <Dna size={22} className="text-brand-600" />
                        </div>
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-medical-900">Variomex</span>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-medical-600">
                    <a href="#vault" className="hover:text-brand-600 transition-colors">The Vault</a>
                    <a href="#pipeline" className="hover:text-brand-600 transition-colors">ZK-Pipeline</a>
                    <a href="#query" className="hover:text-brand-600 transition-colors">Researcher Portal</a>
                </div>

                <button className="px-6 py-2.5 bg-brand-600 text-white rounded-lg font-semibold text-sm hover:bg-brand-700 transition-all shadow-sm hover:shadow-md">
                    Connect Identity
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
