import React, { useState, useRef } from "react";
import "./Contact.css"
import Particle from "../Particle";
// import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
// import {BsFillPhoneFill, } from "react-icons/bs"
// import { IconContext } from "react-icons/";
// import {BiMailSend} from "react-icons/bi"
// import {FaPhoneSquareAlt} from "react-icons/fa"

function Contact(){
  const tooltipStyle = {
    position: 'relative',
  }

  return (
        <div className="contact-form">
          <Particle />
          <div id="contactMe">
            <h1 className="contactTitle">Contact me </h1>
            {/* <IconContext.Provider value={{color: "gray"}}>
              <FaPhoneSquareAlt className="tooltip"/><p className="tooltiptext">336-688-3920</p>
              <BiMailSend className="tooltip"/><p className="tooltiptext">kbjss071@gmail.com</p>
            </IconContext.Provider> */}
          </div>
          {/* <h1>Or...</h1> */}
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
                  <input type="submit" value="Send" className="btn btn-primary btn-block" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    )
}

export default Contact;