import { Shield, FileText, Upload, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Bring your own API key",
    desc: "Use OpenAI, Anthropic, or Google Gemini securely from your device.",
  },
  {
    icon: <Upload className="h-5 w-5" />,
    title: "Smart uploads",
    desc: "Import old resumes, PDFs, DOCX, and job posts to tailor content.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Prompt + profile",
    desc: "Combine structured details with prompts for precise control.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Export anywhere",
    desc: "Preview instantly and export polished PDF and DOCX files.",
  },
];

export default function Features() {
  return (
    <section className="py-16 border-t bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
          Everything you need to build a standout resume
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="h-9 w-9 rounded-lg bg-neutral-900 text-white grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
