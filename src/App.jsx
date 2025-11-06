import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalGuards from './components/GlobalGuards';
import Landing from './components/Landing';
import AuthSection from './components/AuthSection';
import SmoothAnchorProvider from './components/SmoothAnchorProvider';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200">
      <GlobalGuards />
      <SmoothAnchorProvider>
        <Navbar />
        <main>
          <Landing />
          <AuthSection />
        </main>
        <Footer />
      </SmoothAnchorProvider>
    </div>
  );
}
