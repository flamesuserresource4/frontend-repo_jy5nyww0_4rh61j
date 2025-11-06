import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, Settings, Share2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI drafting',
    desc: 'Generate tailored bullet points using OpenAI, Anthropic, or Gemini with one click.',
  },
  {
    icon: FileText,
    title: 'Templates',
    desc: 'Pick from clean, hiring‑manager‑approved layouts optimized for ATS.',
  },
  {
    icon: Settings,
    title: 'Fine control',
    desc: 'Tweak tone, quantify impact, and reorder sections with smart suggestions.',
  },
  {
    icon: Share2,
    title: 'One‑click export',
    desc: 'Export to PDF or DOCX with perfect spacing and crisp typography.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Everything you need to land the interview
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Powerful features that stay out of your way and help you present your best work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white flex items-center justify-center">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
