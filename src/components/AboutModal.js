import React from "react";

const AboutModal = () => {
  return(
    <div className="popup show-about">
      <div className="container">
        <h2>About me...</h2>
        <div className="about-info">
          <p>My name is Diego Castro, I'm a self taught full stack developer looking for challenging problems to solve. I love working on tasks that challenge my skill set and help me become a better programmer. I am willing to learn any new technology to get the job done!</p>
          <br/>
          <p>
            I enjoy going on long hikes, eating new food, lifting weights, traveling, and meeting new people.
          </p>
          <br/>
          <p>
            I am ready to take on new adventures and to make the world a greater place with the knowledge I have!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutModal;