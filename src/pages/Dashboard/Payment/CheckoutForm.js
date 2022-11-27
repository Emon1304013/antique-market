import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import SmallSpinner from "../../../components/SmallSpinner/SmallSpinner";

const CheckoutForm = ({bookingData}) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret,setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price,
    userName,userEmail,productId} = bookingData;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('antique-token')}`
        },
        body: JSON.stringify({ price }),
    })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
}, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
setSuccess('');
setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    name: userName,
                    email: userEmail,
                },
            },
        },
    );
    if(confirmError){
        setCardError(confirmError.message);
        return;
    }
    if(paymentIntent.status === "succeeded"){
        setSuccess('Congratulations payment received')
        setTransactionId(paymentIntent.id)
    }
    console.log(paymentIntent);
    setProcessing(false);
     
  };

  if(processing){
    <SmallSpinner></SmallSpinner>
  }
  return (
    <>
      <form className="w-full p-6" onSubmit={handleSubmit}>
        <CardElement
          className="bg-white p-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-primary mt-4 btn-sm"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600 font-semibold text-center">{cardError}</p>
      {
        success && <div>
            <p className="text-green-800">{success}</p>
            <p>Your Transaction id: <span className="font-bold"> {transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
