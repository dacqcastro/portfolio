import React from "react";

import reactImg from "../images/react-big.png";
import javascript from "../images/javascript-big.png";
import html from "../images/html-5-big.png";
import npm from "../images/npm-big.png";
import css from "../images/css3-big.png";
import ruby from "../images/ruby-big.png";
import express from "../images/expressjs-big.png";
import sass from "../images/sass-big.png";
import firebase from "../images/firebase-big.png";
import node from "../images/node-big.png";
import git from "../images/git-big.png";
import mongodb from "../images/mongodb-big.png";

const SkillsModal = () => {
  return(
    <div className="popup show-skills">
      <div className="container">
        <div className="front-end">
          <h2 className="title"><u>Front End:</u></h2>
          <ul className="skill-list">
            <li>
              <img src={html} alt="html5" />
              <p>HTML5</p>
            </li>
            <li>
              <img src={css} alt="css3" />
              <p>CSS3</p>
            </li>
            <li>
              <img src={javascript} alt="javascript" />
              <p>Javascript</p>
            </li>
            <li>
              <img src={reactImg} alt="react" />
              <p>React JS</p>
            </li>
            <li>
              <img src={git} alt="git" />
              <p>Git</p>
            </li>
            <li>
              <img src={sass} alt="sass" />
              <p>Sass</p>
            </li>
          </ul>
        </div>
        
        <div className="back-end">
          <h2 className="title"><u>Back End:</u></h2>
          <ul className="skill-list">
            <li>
              <img src={node} alt="nodeJs" />
              <p>Node JS</p>
            </li>
            <li>
              <img src={express} alt="express" />
              <p>Express JS</p>
            </li>
            <li>
              <img src={mongodb} alt="mongodb" />
              <p>MongoDB</p>
            </li>
            <li>
              <img src={firebase} alt="firebase" />
              <p>Firebase</p>
            </li>
            <li>
              <img src={ruby} alt="ruby" />
              <p>Ruby</p>
            </li>
            <li>
              <img src={npm} alt="npm" />
              <p>NPM</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default SkillsModal;