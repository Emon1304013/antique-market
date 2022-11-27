import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
  const bookingData = useLoaderData();
  const { productName, price } = bookingData;
  return (
    <div>
      <h2 className="text-center text-xl my-8">
        Please pay BDT <span className="text-red-400">{price}</span> for{" "}
        <span className="font-bold">{productName}</span>
      </h2>

      <div className="w-1/2 mx-auto bg-gray-300 p-10 rounded">
        <Elements
        className="border"
        stripe={stripePromise}>
          <CheckoutForm 
          bookingData = {bookingData}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
