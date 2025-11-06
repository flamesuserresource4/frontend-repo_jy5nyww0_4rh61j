import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You could log to monitoring here
    console.error('App error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Something went wrong.</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Please refresh the page and try again.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
