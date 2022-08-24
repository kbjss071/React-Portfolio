import React, { useState } from "react";
import "../styles/Contact.css"

function contact(){

  // const [email, setEmail] = useState('');
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');

  // const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

  }

  return (
        <div class="contact-form">
            <form > {/*ref={form} onSubmit={sendEmail} */}
              <ul>
                <li class="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li class="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" class="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
    )
}

export default contact;