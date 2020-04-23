import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_78hBwunNAK6MQwgeUcbMRUBJ00Xno4OuaL";

  const Ontoken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Style Shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={Ontoken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
