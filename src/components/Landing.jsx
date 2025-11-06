import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';
import Features from './Features';
import ProviderGuide from './ProviderGuide';
import CTA from './CTA';

export default function Landing() {
  return (
    <section>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <Features />
      <ProviderGuide />
      <CTA />
    </section>
  );
}
