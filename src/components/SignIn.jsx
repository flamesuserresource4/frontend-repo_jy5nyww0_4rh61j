import React, { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setLoading(true);
    // Fake delay to showcase loading state
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    alert('Signed in! (stub)');
  };

  return (
    <section id="signin" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Welcome back</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">Sign in to access your projects, generate resumes, and export in one click.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300 list-disc list-inside">
              <li>Continue where you left off</li>
              <li>Sync API keys across models securely</li>
              <li>Version history and quick exports</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-red-50 dark:bg-red-500/10 border border-red-200/60 dark:border-red-500/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>
              )}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Email</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/50 pl-10 pr-3 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Password</label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/50 pl-10 pr-10 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-1.5 p-1 rounded hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                  <input type="checkbox" className="rounded border-neutral-300 dark:border-white/10 text-indigo-600 focus:ring-indigo-500/40" />
                  Remember me
                </label>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Forgot password?</a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2.5 font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                <LogIn className="h-4 w-4" /> {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
            <div className="mt-4 text-sm text-center text-neutral-600 dark:text-neutral-300">
              New here? <a href="#signup" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
