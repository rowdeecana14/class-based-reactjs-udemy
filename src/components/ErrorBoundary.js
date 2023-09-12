import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Render your custom error UI here
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error.toString()}</p>
          <div>{this.state.errorInfo.componentStack}</div>
        </div>
      );
    }

    // If there's no error, render the children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
