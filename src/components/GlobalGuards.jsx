import { useEffect } from 'react';

export default function GlobalGuards() {
  useEffect(() => {
    const handler = (e) => {
      const msg = String(e?.message || '').toLowerCase();
      if (msg.includes('extension context invalidated')) {
        e.preventDefault();
      }
    };
    window.addEventListener('error', handler);
    return () => window.removeEventListener('error', handler);
  }, []);
  return null;
}
