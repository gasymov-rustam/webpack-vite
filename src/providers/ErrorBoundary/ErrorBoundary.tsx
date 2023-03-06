/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-console */
import React, { ErrorInfo, ReactNode } from 'react';

import cls from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const refreshPage = () => {
  window.location.reload();
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={cls.errorBoundary}>
          <div className={cls.container}>
            <h1>Something went wrong.</h1>
            <h2>Please try again</h2>
            <button type="button" className={cls.btn} onClick={refreshPage}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}
