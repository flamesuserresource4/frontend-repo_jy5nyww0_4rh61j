import { FileDown, FileText, Loader2 } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border p-6 sm:p-8 bg-white shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2">Start your first resume in minutes</h3>
              <p className="text-neutral-600">Upload your old resume or job description and generate a tailored, ATS‑friendly resume with real‑time preview. Export as PDF or DOCX.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLoading(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />} New project
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition">
                <FileDown className="h-4 w-4" /> Try export
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
