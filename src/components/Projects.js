import React from "react";

const Projects = ({ open }) => {
  return(
    <div id="projects" onClick={open} className="projects section">
      <div className="container">
        <p className="title">Check out my<br/><span>PROJECTS <i className="fas fa-arrow-circle-right"></i></span></p>
      </div>
    </div>
  )
}

export default Projects;