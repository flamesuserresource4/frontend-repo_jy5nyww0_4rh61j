import { Rocket, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur border-b border-white/20 bg-white/60 dark:bg-neutral-900/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 grid place-items-center text-white shadow">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
            ResumeForge
          </span>
        </a>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex px-3 py-2 text-sm rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            Pricing
          </a>
          <a href="#features" className="hidden sm:inline-flex px-3 py-2 text-sm rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            Templates
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition">
            <User size={16} /> Sign in
          </a>
        </div>
      </nav>
    </header>
  );
}
