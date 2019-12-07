import React from "react";

import About from "./About";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

const SocialContact = ({ openModal }) => {
  return(
    <div className="social-contact-section">
      <About open={openModal} />
      <SocialMedia />
      <Contact open={openModal} />
    </div>
  )
}

export default SocialContact;