import React from 'react';
import './Header.css';

function Header() {
  return (
    <section id="section_1">
      <div className="part_1">
        <img 
          src="img/WhatsApp Image 2024-09-21 at 3.34.25 PM.jpeg" 
          alt="Anas Hassan"
        />
      </div>
      <div className="part_2">
        <p>
          Hello, <br /> My name is <br />
          <b>
            <span id="visitor">Anas Hassan</span>
          </b>
          <br />
          And I'm a:<br />
          Full Stack Web Developer
        </p>
        <a href="#contact">
          <button className="btn">
            Hire Me <i className="fa fa-arrow-down" id="down"></i>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Header;
