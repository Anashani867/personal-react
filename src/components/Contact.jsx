import React from 'react';
import './Contact.css'; // تأكد من وجود ملف CSS خاص بالمكون

function Contact() {
  return (
    <section id="contact">
      <div className="part_1">
        <h2>Contact Me</h2>
      </div>

      <div className="part_2">
        <div className="info">
          <h3>Get in Touch:</h3>
          <p>
            Hey, <span id="visitor"></span> hope you enjoyed the view. For any services or projects you would like done nicely and eye-catching like this, don't hesitate to message me, and I'll respond promptly.
          </p>
          <p>At least say hello and pass by, let's have a cup of coffee :)</p>
          <ul>
            <li>
              <i className="fa fa-user"></i>
              <h4>Name</h4>
              <p>Anas Hassan</p>
            </li>
            <li>
              <i className="fa fa-map-marker"></i>
              <h4>Address</h4>
              <p>Jordan, Amman</p>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <h4>Phone</h4>
              <p>0790830793</p>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>anashassan.it@gmail.com</p>
            </li>
          </ul>

          <div className="social-media">
            <a href="https://github.com/anashani867" target="_blank" rel="noopener noreferrer">
              <img src="img/githup.png" alt="GitHub" style={{ width: '50px', marginLeft: '30px' }} />
            </a>
            <a href="https://www.linkedin.com/in/anas-hassan-254125280/" target="_blank" rel="noopener noreferrer">
              <img src="img/linkedin.png" alt="LinkedIn" style={{ width: '50px', marginLeft: '30px' }} />
            </a>
          </div>
        </div>

        <div className="contact_form">
          <h3>Message me:</h3>
          <div className="c_box">
            <div className="icon">
              <a href="mailto:anashassan.it@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="img/gmail.png" alt="Gmail Icon" />
              </a>
            </div>

            <div className="icon">
              <h1>OR</h1>
            </div>

            <div className="icon">
              <a href="https://wa.me/0790830793" target="_blank" rel="noopener noreferrer">
                <img src="img/whatsapp.png" alt="Whatsapp Icon" />
              </a>
            </div>
          </div>

          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=amman&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
