import React, { useState } from "react";
import "./Shop.scss";
import Nav from "../Nav/Nav";

const Shop = () => {
  const [change, setChange] = useState(
    <img src="/img/shop_watch.png" height={426} width={426} alt="Watch_Black" />
  );
  return (
    <>
      <Nav />
      <div className="shop_container">
        <div className="shop_header">
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
          {change}
          <div className="color_btn">
            <img
              src="/img/white_btn.png"
              onClick={() =>
                setChange(
                  <img
                    src="/img/white_watch.png"
                    height={426}
                    width={426}
                    alt="ColorWhite"
                  />
                )
              }
              alt="ColorWhite"
            />
            <img
              src="/img/red_btn.png"
              onClick={() =>
                setChange(
                  <img
                    src="/img/red_watch.png"
                    height={426}
                    width={426}
                    alt="ColorWhite"
                  />
                )
              }
              alt="ColorRed"
            />
            <img
              src="/img/pr_btn.png"
              onClick={() =>
                setChange(
                  <img
                    src="/img/blue_watch.png"
                    height={426}
                    width={780}
                    alt="ColorWhite"
                  />
                )
              }
              alt="ColoBlue"
            />
            <img
              src="/img/pink_btn.png"
              onClick={() =>
                setChange(
                  <img
                    src="/img/pink_watch.png"
                    height={426}
                    width={426}
                    alt="ColorWhite"
                  />
                )
              }
              alt="ColorPink"
            />
            <img
              src="/img/black_btn.png"
              onClick={() =>
                setChange(
                  <img
                    src="/img/shop_watch.png"
                    height={426}
                    width={426}
                    alt="ColorWhite"
                  />
                )
              }
              alt="ColorBlack"
            />
          </div>
        </div>
        <div className="img_arrow">
          <img src="/img/arrow.png" alt="Arrow" />
        </div>
      </div>
    </>
  );
};

export default Shop;
