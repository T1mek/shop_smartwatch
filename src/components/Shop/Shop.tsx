import React from "react";
import "./Shop.scss";
import Nav from "../Nav/Nav";

const Shop = () => {
  return (
    <>
      <Nav />
      <div className="shop_container">
        <div className="shop_header" >
          <h1>SMARTWATCH Series 6</h1>
          <p>
            Get the fashion that metters with time. it is the best watch for
            your time.
          </p>
          <div className="shop_btn">
            <button className="btn_1">Buy now</button>
            <button className="btn_2">Add to card</button>
          </div>
        </div>
        <div className="img_watch">
          <img src="/img/shop_watch.png" alt="Watch" />
        </div>
      </div>
    </>
  );
};

export default Shop;
