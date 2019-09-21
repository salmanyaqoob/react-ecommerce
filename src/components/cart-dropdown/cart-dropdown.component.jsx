import React from "react";
import "./cart-dropdown.style.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton value="GO TO CHECK OUT" />
  </div>
);

export default CartDropdown;
