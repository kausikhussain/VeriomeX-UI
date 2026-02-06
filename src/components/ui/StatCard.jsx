import React from 'react';

const StatCard = ({ icon: Icon, label, value, subtext }) => (
    <div className="bg-white p-6 rounded-2xl border border-medical-100 shadow-soft flex flex-col items-center text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
        <div className="p-3 rounded-xl bg-brand-50 mb-4 group-hover:bg-brand-100 transition-colors">
            <Icon className="text-brand-600" size={24} />
        </div>
        <div className="text-3xl font-bold tracking-tight text-medical-900 mb-1">{value}</div>
        <div className="text-[11px] uppercase tracking-wider text-medical-500 font-semibold">{label}</div>
        {subtext && <div className="text-[10px] mt-2 text-brand-600 font-medium bg-brand-50 px-2 py-1 rounded-full">{subtext}</div>}
    </div>
);

export default StatCard;
