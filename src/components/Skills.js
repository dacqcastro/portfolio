import React from "react";

const Skills = ({ open }) => {
  return(
    <div id="skills" onClick={open} className="skills section">
      <div className="container">
        <p className="title">My awesome<br/><span>SKILLS</span></p>
      </div>
    </div>
  )
}

export default Skills;