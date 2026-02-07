import React from 'react';

const StatCard = ({ icon: Icon, label, value, subtext }) => {
    return (
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="p-3 bg-brand-50 rounded-xl mb-4 group-hover:bg-brand-100 transition-colors">
                <Icon size={24} className="text-brand-600" />
            </div>
            <div className="text-3xl font-bold text-medical-900 mb-1 tracking-tight">{value}</div>
            <div className="text-sm font-semibold text-medical-600 mb-1">{label}</div>
            <div className="text-xs text-medical-400 font-medium">{subtext}</div>
        </div>
    );
};

export default StatCard;
