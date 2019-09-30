import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const WithSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...OtherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...OtherProps}></WrappedComponent>
    );
  };
  return spinner;
};

export default WithSpinner;
