import React from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function ContactMe() {
  const SERVICE_ID = "service_tm82sn3";
  const TEMPLATE_ID = "template_yocxyji";
  const PUBLIC_KEY = "R8bet9wsCU7GzC4z4";
  const [formParams, setFormParams] = useState({});
  //state to handle submitted state - use ternary operator to display success message
  const [submitted, setSubmitted] = useState(false);
  //A state variable to handle validation
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormParams((values) => ({ ...values, [name]: value }));

  };

  function sendEmail(e) {
    e.preventDefault(); //This is important, email will not be sent without this
    setIsValid(
      formParams.senderName !== "" && formParams.senderName !== undefined &&
      formParams.senderPhone !== "" && formParams.senderPhone !== undefined &&
      formParams.senderEmail !== "" && formParams.senderEmail !== undefined &&
      formParams.senderMsg !== "" && formParams.senderMsg !== undefined
    );
    setSubmitted(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        //window.location.reload(); //To reload the page (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className="contact-container">
      <h1>Drop me an email</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"

        onSubmit={sendEmail}
      >
        <div>
          {submitted && isValid ? (
            <div className="success"> Thanks for your response!</div>
          ) : null}
          <TextField
            required
            id="outlined-required"
            label="Name"

            name="senderName"
            value={formParams.senderName || ""}

            onChange={handleChange}
          />
          {submitted && !formParams.senderName ? (
            <div className="error"> Name is required </div>
          ) : null}
          <TextField
            required
            id="outlined-required"
            label="Phone"

            name="senderPhone"
            value={formParams.senderPhone || ""}
            onChange={handleChange}
          />
          {submitted && !formParams.senderPhone ? (
            <div className="error"> Phone is required </div>
          ) : null}
          <TextField
            type="email"
            required
            id="outlined-required"
            label="Email"

            name="senderEmail"
            value={formParams.senderEmail || ""}
            onChange={handleChange}
          />
          {submitted && !formParams.senderEmail ? (
            <div className="error"> Email is required </div>
          ) : null}
          <TextField
            id="outlined-required"
            label="Message"
            multiline
            rows={4}
            required
            name="senderMsg"
            value={formParams.senderMsg || ""}
            onChange={handleChange}
          />
          {submitted && !formParams.senderMsg ? (
            <div className="error"> Message is required </div>
          ) : null}
          <Button type="Submit" variant="contained">
            Send
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default ContactMe;
