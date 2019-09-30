import React from "react";
// import "./custom-button.style.scss";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({ value, ...otherButtonPropss }) => (
  <CustomButtonContainer {...otherButtonPropss}>{value}</CustomButtonContainer>
);

export default CustomButton;
