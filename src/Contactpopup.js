import React, { useState } from "react";
import "./Contactpopup.css";

function ContactPopup({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p className="help-text">
          Need more help? Contact{" "}
          <a href="mailto:hello@newzera.com">hello@newzera.com</a>
        </p>
      </div>
    </div>
  );
}

export default ContactPopup;
