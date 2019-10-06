import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { cartClear } from "../../redux/cart/cart.action";

import axios from "axios";

const StripeCheckoutButton = ({ price, cartClear, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_mvNcukUzMTLh7JbVVdmRdxbg00SOVYO8Mv";

  const onToken = token => {
    console.log(token);
    const live_url = "https://react-ecommerce-salman.herokuapp.com/payment";
    axios({
      url: live_url,
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("payment successful");
        cartClear();
      })
      .catch(error => {
        // console.log(JSON.parse(error));
        console.log(error);
        alert(
          "there is an issue with your payment. Please sure you are using proper credit card."
        );
      });
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Cloths Lttd." // the pop-in header title
      description={`Your total is $${price}`}
      image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
      ComponentClass="div"
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      currency="USD"
      stripeKey={publishableKey}
      token={onToken}
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
    />
  );
};

const mapDispatchToProps = dispatch => ({
  cartClear: () => dispatch(cartClear())
});

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton);
