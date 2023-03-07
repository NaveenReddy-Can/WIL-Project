import React, { useState } from "react";
import "./css/ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("subject", subject);
    formData.append("message", message);
    for (const file of files) {
      formData.append("files[]", file);
    }
    try {
      const response = await fetch(
        "https://formsubmit.co/teamone6767@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }
      window.location = "/thank-you";
    } catch (error) {
      console.error(error);
      // Handle error state
    }
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2>Contact Us</h2>

        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="files">Attachments</label>
          <input id="files" type="file" multiple onChange={handleFileChange} />
        </div>
        <button className="button button-sound" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
