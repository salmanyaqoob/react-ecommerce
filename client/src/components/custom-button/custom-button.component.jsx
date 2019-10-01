import React from "react";
// import "./custom-button.style.scss";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = props => {
  const { value, ...otherButton } = props;
  return (
    <CustomButtonContainer {...otherButton}>{value}</CustomButtonContainer>
  );
};

export default CustomButton;
