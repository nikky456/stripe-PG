// ../checkout.js
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

export async function checkout({ lineItems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  try {
    const stripe = await getStripe();
    if (!stripe) {
      throw new Error("Stripe.js failed to load");
    }

    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });

    if (error) {
      console.error("Stripe checkout error:", error);
      alert(`Stripe error: ${error.message}`);
    }
  } catch (error) {
    console.error("Error during checkout:", error);
    alert(`An error occurred: ${error.message}`);
  }
}
