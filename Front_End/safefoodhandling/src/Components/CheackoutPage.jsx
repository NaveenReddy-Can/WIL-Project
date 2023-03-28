import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit the form data to the server
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Billing and Payment</h2>

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="zip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <h3>Payment Information</h3>

      <Form.Group controlId="cardName">
        <Form.Label>Name on Card</Form.Label>
        <Form.Control
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="cardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="expiryDate">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="cvv">
        <Form.Label>CVV</Form.Label>
        <Form.Control
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  );
};

export default CheckoutForm;
