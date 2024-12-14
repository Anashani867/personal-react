import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <header id="header">
      <div className="logo">
        <h1>
          Anas<span>Hassan</span>
        </h1>
      </div>
      <div className="menu">
        <div id="menu_btn"></div>
        <nav>
          <ul id="menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
