import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const WithSpinner = WrappedComponent => {
  const spinner = props => {
    const { isLoading } = props;
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props}></WrappedComponent>
    );
  };
  return spinner;
};

export default WithSpinner;
