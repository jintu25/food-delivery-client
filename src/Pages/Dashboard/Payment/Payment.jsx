import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./payment.css";
import useCart from "../../../Hooks/useCart";
const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_PK);


const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <div className="text-center  m-auto md:w-2/4">
        <p className="text-[#f77846] font-medium text-lg mb-3">
          ---Pay your bill---
        </p>
        <h2 className=" border-y-2 py-4 border-slate-500 text-3xl lg:text-4xl font-semibold uppercase">
          Payment
        </h2>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
