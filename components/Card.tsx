import React from 'react';
import { MessageCardData } from '../types';
import { Icon } from './Icon';

interface CardProps {
    data: MessageCardData;
}

export const Card: React.FC<CardProps> = ({ data }) => {
    const isFuture = data.year === '2026';

    return (
        <div className={`
      group relative p-8 rounded-2xl border transition-all duration-500 ease-out
      hover:-translate-y-1 hover:shadow-xl
      ${isFuture
                ? 'bg-white border-slate-100 hover:border-slate-200'
                : 'bg-slate-50/50 border-slate-100/50 hover:bg-white text-slate-500 hover:text-slate-800'
            }
    `}>
            <div className={`
        mb-4 inline-flex items-center justify-center p-3 rounded-full
        transition-colors duration-300
        ${isFuture ? 'bg-slate-50 text-slate-900 group-hover:bg-slate-100' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'}
      `}>
                <Icon type={data.iconType} className="w-5 h-5" />
            </div>

            <div className="flex items-baseline gap-2 mb-2 opacity-50 text-xs font-bold tracking-widest uppercase">
                {data.year}
            </div>

            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">
                {data.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 whitespace-pre-line">
                {data.message}
            </p>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-100/0 via-slate-100/0 to-slate-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};
