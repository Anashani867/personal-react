import React from 'react';
import './Skills.css'; // تأكد من وجود ملف CSS خاص بالمكون

function Skills() {
  return (
    <section id="skills">
      <div className="part_1">
        <h2>My Skills</h2>
      </div>

      <div className="part_2">
        <div className="info">
          <h3>My Creative Skills & Experiences:</h3>
          <p>
            I have learned much more in the field of Information and Technology (IT) and attained 
            great, required, and marketable skills in programming. The programming skills that 
            I have attained, understood, and gained real experience with are as shown:
          </p>
        </div>

        <div className="card">
          <div className="skills">
          <div className="skill">
              <div className="skill-name">HTML</div>
              <div className="skill-bar">
                <div className="skill-per" per="80%" id="skill" style={{ maxWidth: "80%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">CSS</div>
              <div className="skill-bar">
                <div className="skill-per" per="70%" id="skill" style={{ maxWidth: "70%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">JavaScript</div>
              <div className="skill-bar">
                <div className="skill-per" per="75%" id="skill" style={{ maxWidth: "75%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">Database</div>
              <div className="skill-bar">
                <div className="skill-per" per="80%" id="skill"  style={{ maxWidth: "80%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">Node.js</div>
              <div className="skill-bar">
                <div className="skill-per" per="75%" id="skill" style={{ maxWidth: "75%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">React.js</div>
              <div className="skill-bar">
                <div className="skill-per" per="70%" id="skill" style={{ maxWidth: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Skills;
