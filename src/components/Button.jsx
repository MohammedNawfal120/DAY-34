import React from 'react';

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800',
  secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 active:bg-slate-200',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
};

export default function Button({ children, variant = 'primary', onClick }) {
  return (
    <button onClick={onClick} className={`rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition duration-150 focus:outline-none focus:ring-4 focus:ring-indigo-200 active:scale-95 ${variants[variant]}`}>
      {children}
    </button>
  );
}
