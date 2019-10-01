import React from "react";
// import "./custom-button.style.scss";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({ value, ...otherButton }) => (
  <CustomButtonContainer {...otherButton}>{value}</CustomButtonContainer>
);

export default CustomButton;
