import React from "react";
import "./styles/Home.css";
import html from "../assets/lang-icons/html5-orange.png";
import css from "../assets/lang-icons/css3-blue.png";
import js from "../assets/lang-icons/js-yellow.png";
import react from "../assets/lang-icons/react.png";

function Home() {
  return (
    <div className="home-container">
      <p>Let's build something useful together</p>

      

      <div className='icon-container'>
        <img className="lang-icon html" src={html} alt="li" />
        <img className="lang-icon css" src={css} alt="li" />
        <img className="lang-icon" src={js} alt="li" />
        <img className="lang-icon react" src={react} alt="li" />
      </div>
      <p className='easy'>We're gonna make it look easy.</p>
    </div>
  );
}

export default Home;
