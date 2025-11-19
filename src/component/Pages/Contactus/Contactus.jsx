import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";

function Contactus() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  const contactData = [
    {
      icon: "fa-graduation-cap",
      title: "Careers",
      email: "careers@ismrpune.edu.in",
      phones: ["+91 9923786079"],
    },
    {
      icon: "fa-user-graduate",
      title: "Academics",
      email: "academics@ismrpune.edu.in",
      phones: ["+91 9373513331"],
    },
    {
      icon: "fa-building",
      title: "Admissions",
      email: "admissions@ismrpune.edu.in",
      phones: ["+91 9923786079"],
    },
    {
      icon: "fa-briefcase",
      title: "Placements",
      email: "placements@ismrpune.edu.in",
      phones: ["+91 9923786079"],
    },
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
          background-color: #f8f9fa;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 3rem;
          text-transform: uppercase;
        }

        /* Contact Cards */
        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 35px 20px;
          height: 100%;
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          border: none;
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.15);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, var(--accent-color), #ffd54f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-wrapper i {
          font-size: 2rem;
          color: var(--primary-color);
        }

        .contact-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 15px;
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          display: inline-block;
          text-align: left;
        }

        .contact-info li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8px 0;
          color: var(--text-light);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .contact-info li i {
          width: 25px;
          text-align: center;
          color: var(--accent-color);
          font-size: 1rem;
          margin-right: 10px;
        }

        .contact-info a {
          color: var(--text-dark);
          text-decoration: none;
          word-break: break-word;
        }

        .contact-info a:hover {
          color: var(--accent-color);
        }

        /* CTA Section */
        .cta-section {
          background: white;
          border-radius: 20px;
          padding: 50px;
          margin-top: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-section h2 {
          font-size: 2.3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .cta-section p {
          color: var(--text-light);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .btn-custom {
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          color: white;
        }

        .btn-primary-custom:hover {
          background: linear-gradient(135deg, #ee5a6f, #ff6b6b);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(238, 90, 111, 0.4);
        }

        /* Map Section */
        .map-section {
          margin-top: 60px;
        }

        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        /* --- Responsive --- */
        @media (max-width: 991px) {
          .page-title {
            font-size: 2.2rem;
            margin-bottom: 2.5rem;
          }
          .cta-section {
            padding: 35px 25px;
            margin-top: 40px;
          }
          .cta-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          /* Equal margin & padding for contact boxes */
          .contact-card {
            padding: 25px 20px;
            margin: 15px auto;
            max-width: 90%;
          }
          .contact-info {
            text-align: center;
          }
          .contact-info li {
            justify-content: center;
          }

          /* Equal spacing between cards */
          .row.g-4.mb-5 {
            margin-left: 0;
            margin-right: 0;
          }

          .cta-section {
            text-align: center;
          }

          .btn-custom {
            width: 100%;
            margin-top: 10px;
          }

          .map-section {
            margin-top: 40px;
          }

          .col-md-3 {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 576px) {
          .page-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
          .contact-card {
            padding: 20px 15px;
            margin: 12px auto;
          }
          .icon-wrapper {
            width: 65px;
            height: 65px;
          }
          .contact-title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* Header Section */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${allsectionbg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Contact <span className="text-warning">Us</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Contact • <span className="text-warning">Reach Us</span>
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: "60px" }}>
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
                  {contact.phones.map((phone, idx) => (
                    <li key={idx}>
                      <i className="fas fa-phone"></i>
                      <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
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
                We are proud of our alumni network, which spans across
                industries and continents. Our graduates are equipped with
                skills and values to excel and make a positive impact.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <button className="btn btn-custom btn-primary-custom">
                Application Form <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section container my-5">
          <div className="row d-flex align-items-stretch">
            {/* Left info panel */}
            <div className="col-md-3 mb-3 mb-md-0">
              <div
                className="h-100 p-4 text-white d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "#002a5c",
                  borderRadius: "8px",
                }}
              >
                <div className="text-center">
                  <i className="fas fa-map-marker-alt fa-3x mb-3"></i>
                  <h5>Interactive Map Location</h5>
                  <p
                    className="mt-3"
                    style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                  >
                    Bypass Pune Saswad Road, Sr. No 907, Opp Hotel Vijay
                    Executive, Gaidhara Kanifnath College Road, Wadki, Pune -
                    412308, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Right map */}
            <div className="col-md-9 map-container">
              <iframe
                title="Pune Location Map"
                src="https://www.google.com/maps?q=Bypass+Pune+Saswad+Road,+Sr.+No+907,+Opp+Hotel+Vijay+Executive,+Gaidhara+Kanifnath+College+Road,+Wadki,+Pune,+Maharashtra+412308&output=embed"
                width="100%"
                height="450"
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
