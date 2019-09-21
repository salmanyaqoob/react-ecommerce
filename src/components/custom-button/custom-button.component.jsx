import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({
  value,
  loginWithGoogle,
  inverted,
  ...otherButtonProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      loginWithGoogle ? "google-sign-in" : ""
    } custom-button`}
    {...otherButtonProps}
  >
    {value}
  </button>
);

export default CustomButton;
