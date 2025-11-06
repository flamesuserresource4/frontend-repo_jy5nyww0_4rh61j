import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProviderGuide from './components/ProviderGuide';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalGuards from './components/GlobalGuards';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200">
      <GlobalGuards />
      <Navbar />
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <Features />
        <ProviderGuide />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
