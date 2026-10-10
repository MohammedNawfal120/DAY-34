import React, { useState } from 'react';

const links = ['Home', 'Features', 'Buttons', 'About'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const selectLink = (link) => { setActive(link); setOpen(false); };
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-black tracking-tight text-indigo-700">Tailwind<span className="text-slate-900">Lab.</span></a>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg border p-2 text-slate-700 md:hidden">☰</button>
        <div className={`${open ? 'flex' : 'hidden'} w-full flex-col gap-2 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:pt-0`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => selectLink(link)} className={`rounded-lg px-2 py-2 text-sm font-medium transition hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${active === link ? 'text-indigo-700' : 'text-slate-600'}`}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
