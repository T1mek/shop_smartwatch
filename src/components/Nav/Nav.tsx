import React from "react";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav_main">
      <div className="nav_header">
        <p>SMARTWATCH</p>
        <li>
          <ul className="nav_list">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>CONTACT</li>
          </ul>
        </li>
        <div className="nav_search">
            <img src="/img/search.png" width={30} height={30} alt="Search" />
            <img src="/img/basket.png" width={25} height={25} alt="Basket" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
