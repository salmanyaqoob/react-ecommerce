import React from "react";
// import "./custom-button.style.scss";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({ value, ...otherButtonProps }) => (
  <CustomButtonContainer {...otherButtonProps}>{value}</CustomButtonContainer>
);

export default CustomButton;