import React from "react";

const About = ({ open }) => {
  return(
    <div id="about" onClick={open} className="about section">
      <div className="container">
        <p className="title">A little bit<br/><span>ABOUT ME</span></p>
      </div>
    </div>
  )
}

export default About;