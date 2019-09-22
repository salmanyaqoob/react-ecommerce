import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.style.scss";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="epmty-cart">Cart is empty</span>
      )}
    </div>
    <CustomButton
      value="GO TO CHECK OUT"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    />
  </div>
);

const mapStatToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStatToProps)(CartDropdown));
