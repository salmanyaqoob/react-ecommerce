import React from "react";
// import "./custom-button.style.scss";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = props => {
  const { value } = props;
  return <CustomButtonContainer {...props}>{value}</CustomButtonContainer>;
};

export default CustomButton;
