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
    // You can log error details to an error reporting service here
    // console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full bg-red-50 text-red-700 border border-red-200 rounded-md p-4 max-w-3xl mx-auto my-6">
          <p className="font-semibold mb-1">Something went wrong.</p>
          <p className="text-sm">Please refresh the page. If the issue persists, try disabling the 3D preview.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
