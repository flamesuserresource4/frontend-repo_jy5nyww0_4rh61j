import React from 'react';
import { motion } from 'framer-motion';

const providers = [
  {
    name: 'OpenAI',
    href: 'https://platform.openai.com/docs/overview',
    color: 'from-sky-500 to-indigo-500',
    desc: 'GPT‑4o and o3 for concise, high‑impact bullets.'
  },
  {
    name: 'Anthropic',
    href: 'https://docs.anthropic.com/',
    color: 'from-amber-500 to-rose-500',
    desc: 'Claude excels at structure, tone, and long‑form revisions.'
  },
  {
    name: 'Google Gemini',
    href: 'https://ai.google.dev/gemini-api/docs',
    color: 'from-emerald-500 to-teal-500',
    desc: 'Great for speedy ideation and cross‑checking phrasing.'
  },
];

export default function ProviderGuide() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Works with your favorite models
          </h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Bring your own key and switch providers anytime.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {providers.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color}`} />
              <h4 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{p.name}</h4>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
