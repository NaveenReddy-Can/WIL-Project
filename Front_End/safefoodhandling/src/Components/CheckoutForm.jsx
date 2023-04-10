import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./css/Checkoutform.css";
import CourseModule1 from "./CourseModule1";
import CourseModule2 from "./Courses/CourseModule2";
import CourseModule3 from "./Courses/CourseModule4";
import CourseModule4 from "./Courses/CoursesModule3";

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [module1Unlocked, setModule1Unlocked] = useState(false);
  const [module2Unlocked, setModule2Unlocked] = useState(false);
  const [module3Unlocked, setModule3Unlocked] = useState(false);
  const [module4Unlocked, setModule4Unlocked] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const C_name = location.state?.CourseName;
  const C_Id = location.state?.C_Id;
  const C_Price = location.state?.Price;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
    // Unlock course modules based on the course ID
    switch (C_Id) {
      case 1:
        setModule1Unlocked(true); // unlock course module 1
        break;
      case 2:
        setModule2Unlocked(true); // unlock course module 2
        break;
      case 3:
        setModule3Unlocked(true); // unlock course module 3
        break;
      case 4:
        setModule4Unlocked(true); // unlock course module 4
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>{C_name}</h2>

        <p style={{ fontWeight: 600 }}>Course Cost: $ 10 {C_Price} CAD</p>
      </div>
      <CardElement
        disabled={processing || disabled || succeeded}
        id="card-element"
        options={cardStyle}
      />
      <button id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded,
      </p>
      <div>
        {C_Id === 1 && module1Unlocked && <CourseModule1 />}
        {C_Id === 2 && module2Unlocked && <CourseModule2 />}
        {C_Id === 3 && module3Unlocked && <CourseModule3 />}
        {C_Id === 4 && module4Unlocked && <CourseModule4 />}
      </div>{" "}
      {/* conditionally render MyComponent */}
    </form>
  );
}
