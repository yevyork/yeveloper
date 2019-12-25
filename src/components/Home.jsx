import React from "react";
import "./styles/Home.css";
import html from "../assets/lang-icons/html5-orange.png";
import css from "../assets/lang-icons/css3-blue.png";
import js from "../assets/lang-icons/js-yellow.png";
import react from "../assets/lang-icons/react.png";
import ruby from "../assets/lang-icons/ruby.png"
import rails from "../assets/lang-icons/rails.png"
import sql from "../assets/lang-icons/sql.png"
import node from "../assets/lang-icons/node.png"
import skills from "../assets/lang-icons/skills.png"

function Home() {
  return (
    <div className="home-container">
      <p className='quick-about'>A full-stack developer with a background in insurance, security, and media production. <br></br><br></br>My priorities are structure, efficiency, and maintaining focus on the task at hand. I pride myself on my ability to constantly expand my knowledge-base, empathize with an audience, and solve problems without affecting stability, all while being able to swiftly adapt to new technologies and environments.</p>
      <p className='build'>Let's build something useful- <strong>Together</strong>.</p>

      

      <div className='skill-container'>
        <div className='skill-heading'>
          <img className='skills-icon' src={skills} alt='li'/>
        </div>
        <div className="icon-container1">
        <img className="lang-icon html" src={html} alt="li" />
        <img className="lang-icon css" src={css} alt="li" />
        <img className="lang-icon js" src={js} alt="li" />
        <img className="lang-icon sql" src={sql} alt="li" />
        <img className="lang-icon ruby" src={ruby} alt="li" />
        <img className="lang-icon rails" src={rails} alt="li" />
        <img className="lang-icon react" src={react} alt="li" />
        <img className="lang-icon node" src={node} alt="li" />
        </div>
      </div>
      <p className='easy'>Let's make it <strong>look easy</strong>.</p>
      <div className='icon-container2'>
        
      </div>
    </div>
  );
}

export default Home;
