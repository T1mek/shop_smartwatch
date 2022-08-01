import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav_main">
      <div className="nav_header">
        <p ><Link style={{ textDecoration: 'none', color: 'white' }} to={"/"}>SMARTWATCH</Link></p>
        <li>
          <ul className="nav_list">
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to={"/"}>HOME</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to={"/about"}>ABOUT</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to={"/shop"}>SHOP</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to={"/contact"}>CONTACT</Link></li>
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
