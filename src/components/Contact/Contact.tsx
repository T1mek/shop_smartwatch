import React from "react";
import "./Contact.scss";
import Nav from "../Nav/Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact_header">
        <h1>Contact SMARTWATCH</h1>
        <h3>Email</h3>
        <h6>contact@smartwatch.com</h6>
        <div className="contact_footer">
          <h3>Send us a letter</h3>
          <p>
            420 Smart Street<br></br> 95462 Monte Rio, California
          </p>
          <button className="contact_btn">Shop now</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
