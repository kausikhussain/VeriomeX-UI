import React from 'react';

const Footer = () => {
    const regulations = ["GDPR", "HIPAA", "SOC2", "FDA 21 CFR Part 11"];

    return (
        <footer className="py-16 px-6 border-t border-medical-200 bg-medical-50 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {regulations.map(law => (
                    <div key={law} className="px-4 py-2 bg-white border border-medical-200 rounded text-[10px] font-bold text-medical-400 tracking-widest uppercase shadow-sm">{law}</div>
                ))}
            </div>
            <div className="text-[10px] font-mono text-medical-400 uppercase tracking-widest">
                &copy; 2025 Variomex Protocol &bull; Privacy-First Genomics
            </div>
        </footer>
    );
};

export default Footer;
