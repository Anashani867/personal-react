import React from 'react';
import './Services.css'; // تأكد من وجود ملف CSS خاص بالخدمة

function Services() {
  return (
    <section id="services">
      <div className="part_1">
        <h2>My Services</h2>
      </div>

      <div className="part_2">
        <div className="box">
          <h4>Website Development</h4>
          <p>
            I can develop a more <b>Professional</b> and more <b>Responsive</b> website according to your needs
            and make it more <b>Attractive</b> to your customers.
          </p>
        </div>

        <div className="box">
          <h4>Frontend Development</h4>
          <p>
            I can make the interfaces on your sites more <b>user-friendly</b> and have more appealing,
            eye-catching themes to your visitors.
          </p>
        </div>

        <div className="box">
          <h4>Backend Development</h4>
          <p>
            I can also develop web application sites like management applications that can store
            data in a database using new programming technologies to make it more <b>flexible</b>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
