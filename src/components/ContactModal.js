import React from "react";

const ContactModal = () => {
  return(
    <div className="popup show-contact">
      <div className="container">
        <h2 id="subtitle">Contact info!</h2>
        <div className="info">
          <ul>
            <li><i className="fas fa-map-marker-alt fa-1x"></i><h2 id="location">Salt Lake City, UT</h2></li>
            <li><i className="far fa-envelope fa-2x"></i><h6><a id="email" href="mailto:dacqcastro@gmail.com?Subject=Hello">dacqcastro@gmail.com</a></h6></li>
          </ul>
          <h3 id="or">Or you can find me in these apps:</h3>
          <ul id="second-list">
            <li><a href="https://codepen.io/dacqcastro" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen fa-4x"></i></a></li>
            <li><a href="https://github.com/dacqcastro" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-4x"></i></a></li>
            <li><a href="https://www.linkedin.com/in/diego-castro-15aa2015b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-4x"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactModal;