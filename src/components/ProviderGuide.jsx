import { KeyRound, ExternalLink, Bot, Sparkles } from "lucide-react";

const providers = [
  {
    name: "OpenAI",
    models: ["GPT‑4o", "GPT‑4o mini", "GPT‑5 (when available)"],
    docs: "https://platform.openai.com/api-keys",
    note: "Create a key in the OpenAI dashboard and keep it private.",
  },
  {
    name: "Anthropic",
    models: ["Claude 3.5 Sonnet", "Claude 3.5 Haiku", "Claude Sonnet 4.5 (preview)"],
    docs: "https://console.anthropic.com/",
    note: "Enable API access and generate a Claude API key.",
  },
  {
    name: "Google Gemini",
    models: ["Gemini 2.5 Pro", "Gemini 2.5 Flash"],
    docs: "https://aistudio.google.com/app/apikey",
    note: "Use Google AI Studio to create a key for Gemini.",
  },
];

export default function ProviderGuide() {
  return (
    <section className="py-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mb-3">
              <Bot size={16} /> Providers & Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Choose your AI and add an API key
            </h2>
            <p className="text-neutral-600 mt-2 max-w-2xl">
              Bring your own key. Keys are stored locally in your browser while building resumes.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600">
            <KeyRound size={16} /> Secure by design
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {providers.map((p) => (
            <div key={p.name} className="rounded-xl border p-5 bg-neutral-50/60 hover:bg-neutral-50 transition">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-neutral-900">{p.name}</h3>
                <Sparkles className="h-4 w-4 text-indigo-500" />
              </div>
              <ul className="text-sm text-neutral-700 space-y-1 mb-4 list-disc pl-5">
                {p.models.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <a
                  href={p.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  How to get an API key <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-xs text-neutral-500 mt-3">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
