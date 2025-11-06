import React from 'react';
import { KeyRound } from 'lucide-react';

export default function AuthHero() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
          <KeyRound className="h-5 w-5" />
          <span className="text-xs uppercase tracking-wide font-semibold">Access</span>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">Sign in or create an account</h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">Your workspace for AI‑powered resumes. Secure, fast, and designed for control.</p>
      </div>
    </section>
  );
}
