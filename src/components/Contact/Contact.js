import React, { useState, useRef } from "react";
import "./Contact.css"

function Contact(){

  return (
        <div className="contact-form">
          <div id="contactMe">
            <h1 className="contactTitle">Contact me</h1>
          </div>
          <div id="contactForm">
            <form className="formContainer" action="https://formsubmit.co/8f01d1f2f8580b3716c791b41fd7fb0d" method="POST"> 
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
                  <input type="submit" value="Send" className="btn btn-dark btn-block" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    )
}

export default Contact;