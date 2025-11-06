import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
          ResumePilot
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Home</a>
          <a href="#features" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Features</a>
          <a href="#cta" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Get started</a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#signin"
            className="inline-flex items-center rounded-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/5 transition"
          >
            Sign in
          </a>
          <a
            href="#signup"
            className="inline-flex items-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3.5 py-1.5 text-sm font-medium hover:opacity-90 transition"
          >
            New project
          </a>
        </div>
      </nav>
    </header>
  );
}
