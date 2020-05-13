import React from "react";
import { useState } from "react";

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const toggle = () => {
        console.log()
        setToggleMenu(pre => !pre);
    }
  return (
    <nav className="navContainer">
      <h1 className="logo">SocialUp</h1>
      <ul id="navItems" className="navList list">
        <li className="navItem">
          <a className="" href="app">
            App
          </a>
        </li>
        <li className="navItem">
          <a className="" href="pricing">
            Pricing
          </a>
        </li>
        <li className="navItem">
          <a className="" href="about">
            About
          </a>
        </li>
        <li className="navItem">
          <a className="" href="contact">
            Contact
          </a>
        </li>
      </ul>
      <ul id="navItems" className="navListMobile list" style={{display: toggleMenu ? 'none' : 'flex'}}>
        <li className="navItem">
          <a className="" href="app">
            App2
          </a>
        </li>
        <li className="navItem">
          <a className="" href="pricing">
            Pricing2
          </a>
        </li>
        <li className="navItem">
          <a className="" href="about">
            About
          </a>
        </li>
        <li className="navItem">
          <a className="" href="contact">
            Contact
          </a>
        </li>
      </ul>
  <button onClick={toggle} id="burger" className="hamburger">{!toggleMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</button>
    {/* <button onClick="" id="exit" className="times"><i className="fas fa-times"></i></button> */}
    </nav>
  );
};

export default NavBar;
