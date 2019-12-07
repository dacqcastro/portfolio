import React, { useState } from "react";

import ProjectsModal from "./ProjectsModal";
import SkillsModal from "./SkillsModal";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";
import SkillsProjects from "./SkillsProjects";
import SocialContact from "./SocialContact";

const RightSection = () => {
  const [modalStyle, setModalStyle] = useState('none');
  const [buttonStyle, setButtonStyle] = useState('none');
  const [buttonColor, setButtonColor] = useState('#fff');
  const [selected, setSelected] = useState(null);
  
  const style = {
    animation: modalStyle,
    backgroundColor: buttonColor
  }
  
  const closeAnimation = {
    animation: buttonStyle,
    backgroundColor: buttonColor
  }
  
  const openModal = (e) => {
    setModalStyle('modalOpen .5s cubic-bezier(0.1, 1.0, 0.1, 1.0) forwards');
    setButtonStyle('closeBtn 1s cubic-bezier(0.1, 1.0, 0.1, 1.0) forwards');
    
    switch(e.currentTarget.id) {
      case "projects":
        setButtonColor('#575a78');
        setSelected(<ProjectsModal/>);
        break;
      case "skills":
        setButtonColor('#5c7658');
        setSelected(<SkillsModal/>);
        break;
      case "about":
        setButtonColor('#da9833');
        setSelected(<AboutModal/>);
        break;
      case "contact":
        setButtonColor('#943855');
        setSelected(<ContactModal/>);
        break;
      default:
        setButtonColor('');
        setSelected('');
    }
  }
  
  const closeModal = () => {
    setModalStyle('modalOpenRev .5s cubic-bezier(0.1, 1.0, 0.1, 1.0) forwards');
    setButtonStyle('closeBtnRev 1s cubic-bezier(0.1, 1.0, 0.1, 1.0) forwards');
  }
  
  return(
    <div className="right-section">
      <SkillsProjects openModal={openModal} />
      <SocialContact openModal={openModal} />
      <div style={style} className="modal">
        {selected}
      </div>
      <div onClick={closeModal} style={closeAnimation} className="close-modal">x</div>
    </div>
  )
}

export default RightSection;