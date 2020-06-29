import React from "react";
import axios from "axios";
import { useState } from "react";

const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError(() => true);
      return;
    }
    axios
      .post("/contact", {
        data: { name: name, email: email, message: message },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setSuccess(() => true);
          setError(() => false);
          setName(() => "");
          setEmail(() => "");
          setMessage(() => "");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cardContactBox">
      <div style={{ textAlign: "center", color:'white' }}>
        <h2>Contact Us</h2>
        <h5
          style={{
            visibility: success ? "visible" : "hidden",
            color: "#3ac67f",
            margin: 0,
          }}
        >
          Your Message Has Been Sent!
        </h5>
        <h5
          style={{
            visibility: error ? "visible" : "hidden",
            color: 'rgb(255, 58, 31)',
            margin: 0,
          }}
        >
          Please Fill Out All Fields
        </h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={styles.formContainer}>
          <div style={styles.formSize}>
            <label style={styles.label}>Name</label>
            <br />
            <input
              style={styles.input}
              type="text"
              name="name"
              onChange={onNameChange}
              value={name}
            />
            <label style={styles.label}>Email</label>
            <br />
            <input
              style={styles.input}
              type="email"
              name="email"
              onChange={onEmailChange}
              value={email}
            />
            <label style={styles.label}>Message</label>
            <br />
            <textarea
              style={styles.textArea}
              rows="10"
              type="text"
              name="message"
              onChange={onMessageChange}
              value={message}
            />
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  formSize: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 35,
    borderRadius: 5,
    marginBottom: 20,
    border: "1px solid gray",
  },
  textArea: {
    width: "100%",
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 5,
    border: "1px solid gray",
  },
  label: {
    color: "white",
  },
};

export default ContactCard;
