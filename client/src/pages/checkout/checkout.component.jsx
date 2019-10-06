import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/strip-button/strip-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <div>
    <Helmet>
      <title>Checkout</title>
      <meta name="description" content="Checkout page Crown Clothing" />
    </Helmet>
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
