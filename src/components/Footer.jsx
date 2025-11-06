import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} ResumePilot. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#cta" className="hover:text-neutral-900 dark:hover:text-white transition">Get started</a>
        </div>
      </div>
    </footer>
  );
}
