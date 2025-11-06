import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[68vh] grid lg:grid-cols-2 items-center overflow-hidden">
      <div className="order-2 lg:order-1 px-6 py-16 max-w-6xl mx-auto w-full">
        <div className="max-w-xl">
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
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition shadow">
              Get started free <ArrowRight size={16} />
            </button>
            <button className="px-5 py-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition">
              View templates
            </button>
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-600">
            <li>• Secure, local API key usage</li>
            <li>• Upload old resumes and job descriptions</li>
            <li>• Real‑time preview and export</li>
            <li>• Organize multiple projects</li>
          </ul>
        </div>
      </div>
      <div className="order-1 lg:order-2 h-[44vh] lg:h-full">
        <Spline scene="https://prod.spline.design/5O0y0r0mW3s4/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>
    </section>
  );
}
