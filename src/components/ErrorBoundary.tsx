import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-dark via-retro-purple/20 to-retro-dark">
          <div className="glassmorphism-dark p-8 rounded-lg max-w-md mx-4">
            <h1 className="text-2xl font-digital text-retro-neon mb-4">Oops! Something went wrong</h1>
            <p className="text-white/70 mb-4">
              We encountered an unexpected error. Please refresh the page to continue.
            </p>
            {this.state.error && (
              <details className="mb-4">
                <summary className="text-white/50 cursor-pointer text-sm">Error details</summary>
                <pre className="text-xs text-white/40 mt-2 overflow-auto max-h-40 bg-black/20 p-2 rounded">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="retro-button w-full"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
