import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import './payment.css'
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_PK);

    return (
        <div>
            <h1 className="text-2xl font-semibold">hello this is payment gatway section pages...</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;