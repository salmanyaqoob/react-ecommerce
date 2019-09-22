import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_mvNcukUzMTLh7JbVVdmRdxbg00SOVYO8Mv";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
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

export default StripCheckoutButton;
