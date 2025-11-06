import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full overflow-hidden flex items-center" id="home">
      {/* Spline full-bleed cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Top gradient for readability; doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white/10" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-white/70 backdrop-blur rounded-full px-3 py-1 mb-4 border border-indigo-100">
            AI Resume Builder • Multi‑Model
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 drop-shadow-sm">
            Build job‑winning resumes with GPT, Claude, and Gemini.
          </h1>
          <p className="text-lg text-neutral-700 mb-8 max-w-prose">
            Craft tailored resumes from your profile, uploads, and prompts. Choose your AI provider, paste your API key with guidance, and export to PDF or DOCX.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
            >
              Get started free <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-lg border border-neutral-200 bg-white/70 backdrop-blur hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200"
            >
              View templates
            </motion.a>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
            <li>• Secure, local API key usage</li>
            <li>• Upload old resumes and job descriptions</li>
            <li>• Real‑time preview and export</li>
            <li>• Organize multiple projects</li>
          </ul>
        </motion.div>
        {/* Spacer to balance layout on large screens */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
