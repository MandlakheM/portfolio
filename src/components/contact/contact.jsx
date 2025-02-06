import React, { useRef, useState } from "react";
import "./contact.css";
import { Snackbar } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();
  const [fromEmail, setFromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://basic-email.onrender.com/api/send", {
        fromEmail,
        fromName,
        subject,
        message,
      });

      setOpen(true);
      
      // Clear form
      setFromEmail("");
      setFromName("");
      setSubject("");
      setMessage("");
      form.current.reset();
    } catch (err) {
      alert("Error sending email: " + err.message);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-desc">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">Email Me 🚀</h2>
            <input
              type="email"
              placeholder="Your Email"
              name="from_email"
              className="form-input"
              onChange={(e) => setFromEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              className="form-input"
              onChange={(e) => setFromName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-input"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              name="message"
              className="form-textarea"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="form-button">
              Send
            </button>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;