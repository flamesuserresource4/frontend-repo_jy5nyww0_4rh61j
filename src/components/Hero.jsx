import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] sm:min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/30 dark:to-neutral-950/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 backdrop-blur">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Multi‑model Resume Builder
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Craft standout resumes with AI
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Build, iterate, and export beautiful resumes powered by OpenAI, Anthropic, and Gemini — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 font-medium shadow-sm hover:opacity-90 transition">
              <Rocket className="w-4 h-4" /> Explore features
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-white/10 px-4 py-2 font-medium text-neutral-700 dark:text-neutral-200 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:bg-white hover:dark:bg-neutral-900 transition">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
