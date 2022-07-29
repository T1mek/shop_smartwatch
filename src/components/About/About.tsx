import React from "react";
import "./About.scss";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about_header">
        <div className="about_main">
          <h1>About SMARTWATCH</h1>
          <p>
            SMARTWATCH is a Brand, that stands for environmental awareness, high
            tech standard, and style. Our mission is, to bring color in the
            sometimes dark world. We want to bring people together with our
            product. Explore the new Series 6 now, to be part of our mission.
          </p>
          <button className="about_btn">Shop now</button>
        </div>
        <div>
          <img style={{marginTop:"30px"}} src="/img/about_watch.png" alt="Watch" />
        </div>
      </div>
    </>
  );
};

export default About;
