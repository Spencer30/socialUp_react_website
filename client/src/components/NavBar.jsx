import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggle = () => {
        setToggleMenu(pre => !pre);
    }
  return (
    <nav className="navContainer">
      <h1 className="logo">SocialUp</h1>
      <ul id="navItems" className="navList list">
        <NavLink toPage="app" title="App" active={props.active === 'App' ? true: false} length={30}/>
        <NavLink toPage="pricing" title="Pricing" active={props.active === 'Pricing' ? true: false} length={50} />
        <NavLink toPage="about" title="About" active={props.active === 'About' ? true: false} length={43}/>
        <NavLink toPage="contact" title="Contact" active={props.active === 'Contact' ? true: false} length={55}/>
      </ul>
      <ul id="navItems" className="navListMobile list" style={{display: toggleMenu ? 'flex' : 'none'}}>
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
  <button onClick={toggle} id="burger" className="hamburger">{toggleMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</button>
    {/* <button onClick="" id="exit" className="times"><i className="fas fa-times"></i></button> */}
    </nav>
  );
};

export default NavBar;
