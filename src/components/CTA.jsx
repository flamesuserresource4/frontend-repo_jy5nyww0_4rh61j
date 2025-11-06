import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, FileDown } from 'lucide-react';

export default function CTA() {
  const [loading, setLoading] = React.useState(false);

  const handleStart = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      const el = document.getElementById('home');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
    return () => clearTimeout(timeout);
  };

  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-white to-white/60 dark:from-neutral-900 dark:to-neutral-900/60 p-8 sm:p-10 shadow-sm"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Ready to build your next resume?
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Start a project in seconds. Import your LinkedIn, pick a template, and generate bullet points with AI.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 font-medium hover:opacity-90 transition disabled:opacity-60"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? 'Starting…' : 'New project'}
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-white/10 px-4 py-2 font-medium text-neutral-700 dark:text-neutral-200 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:bg-white hover:dark:bg-neutral-900 transition">
                <FileDown className="w-4 h-4" /> Try export
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
