import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [disable3D, setDisable3D] = useState(false);

  return (
    <section className="relative min-h-[72vh] grid lg:grid-cols-2 items-center overflow-hidden">
      {/* Decorative animated background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <div className="order-2 lg:order-1 px-6 py-16 max-w-6xl mx-auto w-full">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mb-4">
            AI Resume Builder • Multi‑Model
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4">
            Build job‑winning resumes with GPT, Claude, and Gemini.
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Craft tailored resumes from your profile, uploads, and prompts. Choose your AI provider, paste your API key with guidance, and export to PDF or DOCX.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
            >
              Get started free <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200"
            >
              View templates
            </motion.button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="text-xs text-neutral-600 hover:text-neutral-900 underline"
              onClick={() => setDisable3D((v) => !v)}
            >
              {disable3D ? "Enable 3D preview" : "Disable 3D preview"}
            </button>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-600">
            <li>• Secure, local API key usage</li>
            <li>• Upload old resumes and job descriptions</li>
            <li>• Real‑time preview and export</li>
            <li>• Organize multiple projects</li>
          </ul>
        </motion.div>
      </div>

      <div className="order-1 lg:order-2 h-[44vh] lg:h-full relative">
        {!disable3D ? (
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200" />
        )}
        {/* Light gradient at top so text remains legible; does not block clicks */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>
    </section>
  );
}
