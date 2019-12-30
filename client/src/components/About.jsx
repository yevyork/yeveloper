import React from "react";
import "./styles/About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <>
      <div className="about-container">
        <p className="who">Who am I?</p>
        <img className="yev-pic" src={profile} alt="yev" />
        <p className="yev">
          I'm Yevgeniy- but for readability, we can refactor that to Yev.
        </p>

        <h1>Bio</h1>
        <p className="bio">
          My parents brought me to the United States from Moscow, Russia in
          1993. We spoke Russian at home- it helped me retain my first language.
          As a kid, I spent a lot of time on the computer, but never actually
          doing any real programming except console commands in Half-Life games.
          I've always been fascinated how everything is made, and programming
          takes me a few levels deeper on my quest for knowledge.
          <br></br>
          <br></br>
          Prior to getting into programming, I was an insurance professional,
          and subsequently went into production- photo and video shoots. In
          between that, I sold cars, delivered dental labs, was a DJ at several
          nightclubs in New York City, produced electronic music, sang/played in
          a band or two, and helped organize a few events. Although all of those
          industries have their appeal, I ultimately wanted to spend my days
          doing something that fit the criteria I wanted. Programming allows me
          to continue to constantly expand my mind, change the world, and best
          of all, I can work with headphones on.
          <br></br>
          <br></br>
          In my spare time, I love to: go to the gym, read books/articles, vibe
          out to amazing music, take my dog on long walks, spend time with my
          soul-mate, ride my bicycle, travel, road trips, ski down slopes, cook
          delicious food, eat delicious food, and chess.
          <br></br>
          <br></br>
        </p>

        <h1>Facts about Yev</h1>
        <div className="fact-container">
          <p className="fact">· I took an elevator with Bill Gates and Emmanuel Macron once</p>
          <p className="fact">· I'm a mild hoarder but if I had more space, I'd be a severe hoarder</p>
          <p className="fact">· Hate cilantro, love tacos and pho so I always have to be mindful of that</p>
          <p className="fact">· I am missing my appendix</p>
          <p className='fact'>· I'm very big on animal rights</p>
          
        </div>
      </div>
    </>
  );
}

export default About;
