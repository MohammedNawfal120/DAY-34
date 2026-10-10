import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';

const features = [
  { icon: '🎨', title: 'Utility Styling', description: 'Build cards with padding, borders, typography and shadow utilities.', tag: 'Spacing + Typography', accent: 'indigo' },
  { icon: '📱', title: 'Responsive Layout', description: 'Resize the window to see the navigation and grid adapt.', tag: 'Flexbox + Breakpoints', accent: 'emerald' },
  { icon: '✨', title: 'Interactive States', description: 'Hover, focus or click buttons to see Tailwind state utilities.', tag: 'Hover + Focus + Active', accent: 'amber' },
];

export default function App() {
  const [message, setMessage] = useState('Choose a button to try its action.');
  return (
    <div id="home" className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-5 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">Day 34 · Tailwind CSS</span>
            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">Style faster with <span className="text-indigo-600">Tailwind</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">A responsive React page built using reusable components and Tailwind utility classes.</p>
            <a href="#features" className="mt-8 inline-block rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 active:scale-95">Explore Features ↓</a>
          </div>
        </section>
        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <div className="mb-9"><p className="text-sm font-bold uppercase tracking-widest text-indigo-600">The essentials</p><h2 className="mt-2 text-3xl font-bold">Reusable Tailwind Cards</h2><p className="mt-2 text-slate-500">Each card uses the same component with different props.</p></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => <Card key={item.title} {...item} />)}
          </div>
        </section>
        <section id="buttons" className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl"><p className="text-sm font-bold uppercase tracking-widest text-indigo-600">Interactive playground</p><h2 className="mt-2 text-3xl font-bold">Button States</h2><p className="mt-3 text-slate-500">Try hovering, clicking or pressing Tab to focus each button.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="primary" onClick={() => setMessage('Primary button clicked!')}>Primary Action</Button>
              <Button variant="secondary" onClick={() => setMessage('Secondary button clicked!')}>Secondary Action</Button>
              <Button variant="success" onClick={() => setMessage('Success button clicked!')}>Success Action</Button>
            </div>
            <p role="status" className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-sm font-medium text-indigo-800">{message}</p>
          </div>
        </section>
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12"><h2 className="text-2xl font-bold">About this project</h2><p className="mt-2 max-w-2xl leading-7 text-slate-600">Created for Day 34: Tailwind configuration, responsive navbar, styled cards, interactive button states and reusable variant props.</p></section>
      </main>
      <footer className="border-t border-slate-200 bg-white p-6 text-center text-sm text-slate-500">Day 34 React + Tailwind Task · 2026</footer>
    </div>
  );
}
