import "./Contact.css";
import { useState } from "react";
import { __userapiurl } from "../../API_URL";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault(); 

    const userDetails = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post(__userapiurl + "save", userDetails)
      .then(() => {
        setOutput("Contact successfully");
        console.log("done");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setOutput("Contact failed");
        console.error("Error:", error);
      });
  };

  return (
    <div className="main-contact-container container my-5">

      <h2 className="text-center mb-4">CONTACT ME</h2>
      <p className="contact-output">{output}</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            className="contact-form p-4 shadow rounded bg-light"
            onSubmit={handlesubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
