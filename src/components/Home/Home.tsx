import React from "react";
import Nav from "../Nav/Nav";
import "./Home.scss";

const Home = () => {
  return (
    <>
    <Nav />
    <div className="home_header">
      <img src="/img/watch_main.png" alt="Watch" />
      <div className="home_main">
        <h1>SMARTWATCH Series 6</h1>
        <p>Available now</p>
        <div className="btn">
        <button className="btn_1">Shop now</button>
        <button className="btn_2">Learn more</button>
        </div>
      </div>
      
        
      
    </div>
    </>
  );
};

export default Home;
