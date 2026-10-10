import React from 'react';

const accents = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
};

export default function Card({ icon, title, description, tag, accent = 'indigo' }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border text-2xl ${accents[accent]}`}>{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mb-5 min-h-16 text-sm leading-6 text-slate-500">{description}</p>
      <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${accents[accent]}`}>{tag}</span>
    </article>
  );
}
