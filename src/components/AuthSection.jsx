import React from 'react';
import AuthHero from './AuthHero';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AuthSection() {
  return (
    <section id="auth" className="relative">
      <AuthHero />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </section>
  );
}
