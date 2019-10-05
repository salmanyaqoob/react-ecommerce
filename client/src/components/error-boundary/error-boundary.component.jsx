import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.style";
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    //Process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log("Error Boundary get error", error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png"></ErrorImageContainer>
          <ErrorImageText>This Page is Broken</ErrorImageText>
          This mug was a family heirloom. Of your neighbor. Your neighbor always
          loved the color, shape, and quantity of coffee held by this mug. But
          your neighbor moved out and left it on their porch, no explanation, no
          repair materials, no nothing. So you have this broken mug.
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
