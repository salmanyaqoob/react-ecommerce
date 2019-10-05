import React from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner = WrappedComponent => {
  const spinner = props => {
    const { isLoading } = props;
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...props}></WrappedComponent>
    );
  };
  return spinner;
};

export default WithSpinner;
