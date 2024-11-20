import React, { useEffect } from "react";

const PaypalCheckout = ({ totalAmount }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&components=buttons";
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalAmount,
                    },
                  },
                ],
              });
            },
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                alert(
                  "Payment successful, thank you " +
                    details.payer.name.given_name
                );
              });
            },
          })
          .render("#paypal-button-container");
      }
    };
    document.body.appendChild(script);
  }, [totalAmount]);

  return <div id="paypal-button-container" style={{ marginTop: "30px" }}></div>;
};

export default PaypalCheckout;
