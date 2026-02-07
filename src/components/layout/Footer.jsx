import React from 'react';

const Footer = () => {
    const regulations = ["GDPR Compliant", "HIPAA Ready", "SOC2 Type II", "FDA 21 CFR Part 11"];

    return (
        <footer className="py-20 px-6 border-t border-medical-200/50 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-200 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold text-medical-900 mb-4 tracking-tight">VariomeX Protocol</h3>
                    <p className="text-medical-600 max-w-sm text-sm leading-relaxed mb-8">
                        The first decentralized exchange for genomic data. Zero-knowledge proofs ensure patient privacy while unlocking global scientific collaboration.
                    </p>
                    <div className="flex gap-4">
                        {['Twitter', 'GitHub', 'Discord'].map(social => (
                            <a key={social} href="#" className="text-medical-400 hover:text-brand-600 transition-colors text-sm font-semibold">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-medical-900 mb-6 text-sm uppercase tracking-wider">Platform</h4>
                    <ul className="space-y-4 text-sm text-medical-600">
                        {['Data Vault', 'Compute Pipeline', 'Researcher Portal', 'Tokenomics'].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-brand-600 transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-medical-900 mb-6 text-sm uppercase tracking-wider">Compliance</h4>
                    <ul className="space-y-3">
                        {regulations.map(law => (
                            <li key={law} className="flex items-center gap-2 text-xs font-medium text-medical-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                {law}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-medical-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-medical-400 font-medium">
                <p>&copy; 2025 VariomeX Protocol. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-medical-600 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-medical-600 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
