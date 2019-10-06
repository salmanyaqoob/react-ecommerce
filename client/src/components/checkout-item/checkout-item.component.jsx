import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import {
  itemRemove,
  itemAdd,
  decreaseQuantity
} from "../../redux/cart/cart.action";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, itemRemove, itemAdd, decreaseQuantity }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => itemAdd(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => itemRemove(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  itemRemove: item => dispatch(itemRemove(item)),
  itemAdd: item => dispatch(itemAdd(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
