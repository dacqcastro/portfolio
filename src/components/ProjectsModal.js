import React, { useState } from "react";

import image1 from "../images/MixedDrink.png";
import image2 from "../images/DevTweets.png";
import image3 from "../images/JeepBuilds.png";
import demo from "../images/DevTweetsDemo.gif";

import mongodb from "../images/mongodb.png";
import express from "../images/express.png";
import react from "../images/react.png";
import node from "../images/Node.png";
import sass from "../images/sass.png";
import firebase from "../images/firebase.png";

const ProjectsModal = () => {
  const[isOpen, setIsOpen] = useState(false)

  const style1 = {
    display: "flex"
  }

  const style2 = {
    display: "none"
  }

  const setOpen = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className="popup show-projects">
      <div className="container">
        <div className="project">
          <div className="pic">
            <img src={image2} alt="project-img" />
          </div>
          <div className="body">
            <h2 className="project-title"><u>Twitter Clone</u></h2>
            <p className="project-info">I created this app using the MERN stack and added user authentication by using JWT. It is connected to a MongoDB database that stores the user info and the tweets with their corresponding likes. I also implemented authentication use Jason Web Tokens. I first created the API with all the routes then I created a separate React project for the client side/frontend. I made all the api calls using AXIOS. Overall I am really satisfied with this project and had a lot of fun creating it.</p>
            <h2>Stack:</h2>
            <ul className="stack-icons">
              <li><img src={mongodb} alt="Mongodb" /></li>
              <li><img src={express} alt="express" /></li>
              <li><img src={react} alt="react" /></li>
              <li><img src={node} alt="nodeJs" /></li>
            </ul>
            <div className="links">
              <a href="https://github.com/dacqcastro/socialdevapp" target="_blank" rel="noopener noreferrer">Code</a>
              <div onClick={setOpen} className="btn">demo</div>
              <a href="https://socialdevapp.netlify.com" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        </div>

        <div className="gif" style={isOpen ? style1:style2}>
          <div onClick={setOpen} className="cls-demo"><i class="fas fa-times"></i></div>
          <img className="gif-demo" src={demo} alt="demo" />
        </div>
        
        <div className="project">
          <div className="pic">
            <img src={image3} alt="project-img"/>
          </div>
          <div className="body">
            <h2 className="project-title"><u>Jeep Builds</u></h2>
            <p className="project-info">This is a website for jeep enthusiasts, you are allowed to see all the jeep builds without credentials but in order for you to post your own build you need to create an account. The project was created only with Reactjs and Firebase. I used React hooks to make calls to the Firebase database and also to make any changes/addition to the database. My goal is to implement more options for users for example: commenting and liking a post. Also being able to add a list of where they were able to find their build parts. </p>
            <h2>Stack:</h2>
            <ul className="stack-icons">
              <li><img src={react} alt="react" /></li>
              <li><img src={firebase} alt="firebase" /></li>
            </ul>
            <div className="links">
              <a className="not-allowed" href="." rel="noopener noreferrer">Code</a>
              <div className="btn not-allowed">demo</div>
              <a className="not-allowed" href="." rel="noopener noreferrer">Website</a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="pic">
            <img src={image1} alt="project-img"/>
          </div>
          <div className="body">
            <h2 className="project-title"><u>Random Mixed Drink</u></h2>
            <p className="project-info">I created this project with React and theCocktailDB.com's API. I used a ASYNC AWAIT function to fetch the data from the API. The app display's a picture of the cocktail</p>
            <h2>Stack:</h2>
            <ul className="stack-icons">
              <li><img src={react} alt="react" /></li>
              <li><img src={sass} alt="sass" /></li>
            </ul>
            <div className="links">
              <a href="https://codepen.io/dacqcastro/pen/vopGPz" target="_blank" rel="noopener noreferrer">Code</a>
              <div className="btn not-allowed">demo</div>
              <a href="https://mixed-drink-picker.netlify.com/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsModal;