import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import './payment.css'
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({price, cart}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [axiosSecure] = useAxiosSecure()
  const [ clientSecret, setClientSecret ] = useState()
  const {user} = useContext(AuthContext)
  const [processing, setProcessing] = useState()
  const [transactionId, setTransactionId] = useState()
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";
  useEffect(() =>  {
   if(price > 0){
    axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
      console.log('result', res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
   }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    console.log("card", card);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message)
    } else {
        setCardError('')
      // console.log("payment method", paymentMethod);
    }
    setProcessing(true)

   const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.displayName || 'user',
        },
      },
    }
   )
   if(confirmError){
    console.log(confirmError)
   }
   console.log('payment intent ', paymentIntent)
   setProcessing(false)
   if(paymentIntent && paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id)
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        quantity: cart.length,
        date: new Date(),
        price,
        status: "services pending",
        menuItems: cart.map(item => item.menuId),
        cartItems: cart.map(item => item._id),
        itemNames: cart.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
      .then(res => {
        console.log('res data', res.data)
        if(res.data.insertResult.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Payment pay successfully...',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from, { replace: true });
        }
      })
   }
  };
  return (
    <div className="p-10">
        {
        price && <h2 className="text-xl font-medium text-sky-500">total bill: {price}</h2>
    }
      <form className="m-10" onSubmit={handleSubmit}>
        <CardElement
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
          className="btn mt-5 btn-primary btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500 font-sans text-sm">{cardError}</p>
      }
      {
        transactionId && <p className="text-sky-500 font-semibold">transaction completed with transaction id {transactionId}</p>
      }
    
    </div>
  );
};

export default CheckoutForm;
