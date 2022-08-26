import React, { useState, useRef } from "react";
import "../styles/Contact.css"
// import dotenv from "dotenv";
// import validateEmail from "../utils/helper"
// import emailjs from "@emailjs/browser";
// dotenv.config();

function Contact(){
  
  // ***To be worked in the near future***
  // const emailRef = useRef();
  // const [messageSent, setMessageSent] = useState(false);
  // const [missingFields, setMissingFields] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");

  // const form = useRef();


  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
    
    // if (form){
    //   setMissingFields(false);
    //   emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    //     .then(res => {
    //       console.log(res.text);
    //       setMessageSent(true);
    //       alert("Message Sent!")
    //     })
    //     .catch(err => {
    //       console.log(err.text);
    //     })
    // } else {
    //   alert("Please fill in the empty fields.")
    // }

    // setTimeout(() => {
    //   setMessageSent(false);
    //   setMissingFields(false);
    //   setErrorMessage("");
    // }, 2000);

    
  // };

  return (
        <div className="contact-form">
          <div id="contactMe">
            <h1 className="contactTitle">Contact me</h1>
          </div>
          <div id="contactForm">
            <form className="formContainer"> {/* ref={form} onSubmit={handleFormSubmit} */}
              <ul>
                <li>
                  <label>Name: </label>
                  <input className="form-control" type="text" name="user_name" placeholder="name" required/>
                </li>
                <li>
                  <label>Email: </label>
                  <input className="form-control" type="email" name="user_email" placeholder="email" required/>
                </li>
                <li>
                  <label>Message: </label>
                  <textarea className="form-control" name="message" placeholder="Please add any message" required/>
                </li>
                <li>
                  <input type="submit" value="Send" className="btn btn-primary" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    )
}

export default Contact;