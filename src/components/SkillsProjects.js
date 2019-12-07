import React from "react";

import Projects from "./Projects";
import Skills from "./Skills";

const SkillsProjects = ({ openModal }) => {
  return(
    <div className="skills-projects-section">
      <Projects open={openModal} />
      <Skills open={openModal} />
    </div>
  )
}

export default SkillsProjects;