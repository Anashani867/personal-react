import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
      <div className="part_1">
        <h2>About Me</h2>
      </div>
      <div className="part_2">
        <div className="image_part">
          <img 
            src="img/WhatsApp Image 2024-09-21 at 3.34.25 PM.jpeg" 
            alt="Anas Hassan"
          />
        </div>
        <div className="info">
          <h3>My name is Anas &</h3>
          <marquee>
            Graduate CIS, Frontend Developer, Backend Development.
          </marquee>
          <p>
            I am a Computer Information Systems Specialist and recent graduate
            of Muta University. I focus on Web development. Proficient in
            English with additional training in front-end web development at Era
            Tech. Skilled in problem-solving and equipped with a diverse skill
            set including C++, Python, HTML, CSS, and JavaScript.
          </p>
          <a href="/cv/ANAS_CV (2).pdf" target="_blank">
            <button className="btn">View Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
