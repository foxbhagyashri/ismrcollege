import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contactus() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const contactData = [
    {
      icon: 'fa-graduation-cap',
      title: 'Careers',
      email: 'careers@ismrpune.edu.in',
      phones: ['+91 9923786079']
    },
    {
      icon: 'fa-user-graduate',
      title: 'Academics',
      email: 'academics@ismrpune.edu.in',
      phones: ['+91 9373513331']
    },
    {
      icon: 'fa-building',
      title: 'Admissions',
      email: 'admissions@ismrpune.edu.in',
      phones: ['+91 9923786079']
    },
    {
      icon: 'fa-briefcase',
      title: 'Placements',
      email: 'placements@ismrpune.edu.in',
      phones: ['+91 9923786079']
    }
  ];

  return (
    <div className="contact-page">
      <style>{`
        :root {
          --primary-color: #1a1a2e;
          --secondary-color: #16213e;
          --accent-color: #ffc107;
          --text-dark: #0f3460;
          --text-light: #6c757d;
        }

        .contact-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      
          min-height: 100vh;
          padding: 60px 0;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 4rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          height: 100%;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: none;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, var(--accent-color), #ff6b6b);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .contact-card:hover::before {
          transform: scaleX(1);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          background: linear-gradient(135deg, var(--accent-color), #ffd54f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .contact-card:hover .icon-wrapper {
          transform: rotate(360deg);
        }

        .icon-wrapper i {
          font-size: 2rem;
          color: var(--primary-color);
        }

        .contact-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 25px;
          text-align: center;
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-info li {
          padding: 12px 0;
          display: flex;
          align-items: center;
          color: var(--text-light);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .contact-info li:hover {
          color: var(--text-dark);
          transform: translateX(5px);
        }

        .contact-info i {
          width: 30px;
          color: var(--accent-color);
          margin-right: 12px;
          font-size: 1.1rem;
        }

        .contact-info a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info a:hover {
          color: var(--accent-color);
        }

        .cta-section {
          background: white;
          border-radius: 20px;
          padding: 50px;
          margin-top: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .cta-section p {
          color: var(--text-light);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .btn-custom {
          padding: 14px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: none;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          color: white;
          margin-right: 15px;
        }

        .btn-primary-custom:hover {
          background: linear-gradient(135deg, #ee5a6f, #ff6b6b);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(238, 90, 111, 0.4);
        }

        .btn-outline-custom {
          background: transparent;
          color: var(--text-dark);
          border: 2px solid var(--text-dark);
        }

        .btn-outline-custom:hover {
          background: var(--text-dark);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(26, 26, 46, 0.3);
        }

        .newsletter-section {
          background: linear-gradient(135deg, var(--accent-color), #ffd54f);
          border-radius: 20px;
          padding: 50px;
          margin-top: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .newsletter-section h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 15px;
        }

        .newsletter-section p {
          color: var(--text-dark);
          margin-bottom: 30px;
          line-height: 1.8;
        }

        .newsletter-form {
          max-width: 600px;
        }

        .newsletter-form input {
          border-radius: 50px;
          padding: 15px 25px;
          border: none;
          font-size: 1rem;
          margin-bottom: 15px;
        }

        .newsletter-form input:focus {
          box-shadow: 0 0 0 3px rgba(26, 26, 46, 0.2);
          outline: none;
        }

        .btn-subscribe {
          background: var(--primary-color);
          color: white;
          padding: 15px 50px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          width: 100%;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .btn-subscribe:hover {
          background: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(26, 26, 46, 0.3);
        }

        .map-section {
          margin-top: 60px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          height: 450px;
        }

        .map-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .contact-card {
            margin-bottom: 30px;
          }

          .cta-section, .newsletter-section {
            padding: 30px;
          }

          .btn-custom {
            width: 100%;
            margin-bottom: 15px;
            margin-right: 0 !important;
          }
        }
      `}</style>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />

      <div className="container">
        <h1 className="page-title">How to Reach</h1>

        {/* Contact Cards */}
     <div className="row g-4 mb-5">
  {contactData.map((contact, index) => (
    <div className="col-lg-3 col-md-6" key={index}>
      <div className="contact-card">
        <div className="icon-wrapper">
          <i className={`fas ${contact.icon}`}></i>
        </div>
        <h3 className="contact-title">{contact.title}</h3>
        <ul className="contact-info">
          <li>
            <i className="fas fa-envelope"></i>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          {[...new Set(contact.phones)].map((phone, idx) => (
            <li key={idx}>
              <i className={`fas ${idx === 0 ? 'fa-phone' : 'fa-phone-alt'}`}></i>
              <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>


        {/* CTA Section */}
        <div className="cta-section">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Are You Ready To Build Up Your Career</h2>
              <p>
                We are proud of our alumni network, which spans across industries
                and continents. Our graduates are equipped with the skills, values
                knowledge, and to excel in their chosen fields and make positive
                impact on society.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-custom btn-primary-custom">
                Application Form <i className="fas fa-arrow-right ms-2"></i>
              </button>
             
            </div>
          </div>
        </div>

            
        {/* Map Section */}
      <div className="container my-5">
  <div className="row d-flex align-items-stretch">
    {/* Left info panel - narrower */}
    <div className="col-md-3">
      <div
        className="h-100 p-4 text-white d-flex flex-column justify-content-center"
        style={{ backgroundColor: "#002a5c", borderRadius: "8px" }}
      >
        <div className="text-center">
          <i className="fas fa-map-marker-alt fa-3x mb-3"></i>
          <h5>Interactive Map Location</h5>
          <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
            Bypass Pune Saswad Road, Sr. No 907, Opp Hotel Vijay Executive, Gaidhara Kanifnath College Road, Wadki, Pune - 412308, Maharashtra
          </p>
        </div>
      </div>
    </div>

    {/* Right map panel - wider */}
    <div className="col-md-9">
      <iframe
        title="Pune Location Map"
        src="https://www.google.com/maps?q=Bypass+Pune+Saswad+Road,+Sr.+No+907,+Opp+Hotel+Vijay+Executive,+Gaidhara+Kanifnath+College+Road,+Wadki,+Pune,+Maharashtra+412308&output=embed"
        width="100%"
        height="500px"
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

  




      </div>
    </div>
  );
}

export default Contactus;