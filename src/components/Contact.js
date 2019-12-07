import React from "react";

const Contact = ({ open }) => {
  return(
    <div id="contact" onClick={open} className="contact section">
      <div className="container">
        <p className="title">Feel free to<br/><span>CONTACT ME <i className="fas fa-arrow-circle-right"></i></span></p>
      </div>
    </div>
  )
}

export default Contact;