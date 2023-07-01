import { useState, FormEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => {
  return card !== null
}


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayments, setIsProcessingPayments] = useState(false)

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayments(true)

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardElement = elements.getElement(CardElement);

    if(!ifValidCardElement(cardElement)) {
      alert("invalid card element")
      return
    }

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });

    setIsProcessingPayments(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful")
      }
    }



  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>credit card payment:</h2>
        <CardElement />
        <PaymentButton isLoading={isProcessingPayments} buttonType={BUTTON_TYPE_CLASSES.inverted}>PAY NOW</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;