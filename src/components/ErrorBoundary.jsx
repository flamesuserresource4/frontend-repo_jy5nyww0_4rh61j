import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optionally log errors to a monitoring service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full bg-red-50 text-red-700 border border-red-200 rounded-md p-4 max-w-3xl mx-auto my-6">
          <p className="font-semibold mb-1">Something went wrong.</p>
          <p className="text-sm">Please refresh the page and try again. If the issue persists, contact support.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
