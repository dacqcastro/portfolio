import React from "react";

const SocialMedia = () => {
  return(
    <div className="social-media section">
      <div className="email">
        <div className="icon">
          <a href="mailto:dacqcastro@gmail.com?Subject=Hello" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope fa-2x"></i></a>
        </div>
      </div>
      <div className="codepen">
        <div className="icon">
          <a href="https://codepen.io/dacqcastro" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen fa-2x"></i></a>
        </div>
      </div>
      <div className="github">
        <div className="icon">
          <a href="https://github.com/dacqcastro" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia;