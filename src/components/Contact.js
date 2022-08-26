import React, { useState, useRef } from "react";
import "../styles/Contact.css"
// import dotenv from "dotenv";
import validateEmail from "../utils/helper"
import emailjs from "@emailjs/browser";
// dotenv.config();

function Contact(){

  const emailRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [missingFields, setMissingFields] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Getting the value and name of the input which triggered the change
    const email = emailRef;

    if(!validateEmail(email)){
      setErrorMessage("Invalid email address");
      console.log(errorMessage);
      alert("Invalid email address");
      return errorMessage;
    }

    if (form){
      setMissingFields(false);
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then(res => {
          console.log(res.text);
          setMessageSent(true);
          alert("Message Sent!")
        })
        .catch(err => {
          console.log(err.text);
        })
    } else {
      alert("Please fill in the empty fields.")
    }

    setTimeout(() => {
      setMessageSent(false);
      setMissingFields(false);
      setErrorMessage("");
    }, 2000);

    
  };

  return (
        <div className="contact-form">
            <div id="contactMe">
              <h1>Contact me</h1>
            </div>
            <div id="contactForm">
              <form ref={form} onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" ref={emailRef}/>
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
    )
}

export default Contact;