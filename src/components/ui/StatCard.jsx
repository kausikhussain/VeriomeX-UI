import React from 'react';

const StatCard = ({ icon: Icon, label, value, subtext }) => {
    return (
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <div className="p-3 bg-brand-50 border border-brand-100/50 shadow-sm rounded-2xl mb-5 group-hover:scale-110 group-hover:bg-brand-100 group-hover:shadow-brand-300/30 transition-all duration-300">
                <Icon size={26} className="text-brand-600 group-hover:text-brand-700 transition-colors" />
            </div>
            <div className="text-4xl font-extrabold text-medical-950 mb-1.5 tracking-tighter group-hover:text-brand-700 transition-colors">{value}</div>
            <div className="text-[11px] uppercase tracking-widest font-black text-medical-500 mb-2.5">{label}</div>
            <div className="text-[10px] font-bold text-green-700 bg-green-50/80 px-3 py-1.5 rounded-full border border-green-100 shadow-sm">{subtext}</div>
        </div>
    );
};

export default StatCard;
