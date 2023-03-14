import { color } from "@mui/system";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import "./css/ContactUsBubble.css";
const ContactUsBubble = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShowBubble(true);
      } else {
        setShowBubble(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setShowBubble(false);
  };

  return (
    <div
      className={`contact-us-bubble ${showBubble ? "show" : ""}`}
      onClick={handleClose}
    >
      <a style={{ color: "white" }} href="/contactus">
        <FaPhoneAlt className="message-icon" />
        <span className="bubble-text">Contact Us</span>{" "}
      </a>
      <FiX className="close-icon" />
    </div>
  );
};

export default ContactUsBubble;
