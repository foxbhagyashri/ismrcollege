import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faTree,
  faBriefcase,
  faGlobe,
  faAward,
  faUniversity,
  faPlane,
  faWifi,
  faShieldAlt,
  faGraduationCap,
  faUsers,
  faComments,
  faUserTie,
  faFileExcel,
  faPuzzlePiece,
  faFutbol,
  faDumbbell,
  faMusic,
  faBed,
  faUtensils,
  faHospital,
 
  faSmile,
  faMountain,
  faLightbulb,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const whyIsmrFeatures = [
  { id: 1, title: "Best Institute in Western Region for Academics and Placements Excellence", icon: faAward },
  { id: 2, title: "Management & Leadership Development Programmes", icon: faUsers },
  { id: 3, title: "Indoor and Outdoor Recreational Activities", icon: faFutbol },

  { id: 5, title: "Education Loan Tie-up with Leading Banks", icon: faUniversity },
  { id: 6, title: "Accidental Insurance Coverage", icon: faShieldAlt },
  { id: 7, title: "Scholarships to Meritorious Students", icon: faGraduationCap },
  { id: 8, title: "Fully Wi-Fi Enabled Campus", icon: faWifi },
  { id: 9, title: "Domestic Study Tour", icon: faBus },
  
  { id: 10, title: "Excellent Return on Investment", icon: faDollarSign },
  { id: 11, title: "International Study Tour", icon: faGlobe },
  { id: 12, title: "Gym Facility in Campus", icon: faDumbbell },
  { id: 13, title: "Medicare Facility during the duration of the Course", icon: faHospital },
  { id: 14, title: "Hostel & Mess Facilities for Boys and Girls", icon: faBed },
  { id: 15, title: "100% Placement Assistance Since Inception", icon: faBriefcase },
  { id: 16, title: "Extra Activities", icon: faPuzzlePiece },
  { id: 17, title: "Dedicated and Experienced Faculties", icon: faUserTie },
  { id: 18, title: "Cultural Programme and Intra Collegiate Programme", icon: faMusic },
  { id: 19, title: "20 Acres Serene Campus", icon: faTree },
];


function WhyISMRPage() {
  return (
    <div className="font-poppins">
      <style>{`
        /* Fonts */
        .font-roboto-slab {
          font-family: "Roboto Slab", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }

        /* Headings */
        .page-heading {
          font-family: "Roboto Slab", serif;
          font-size: 46px;
          font-weight: 900;
          text-align: center;
          color: #0a2240;
        }

        .section-heading {
          font-family: "Roboto Slab", serif;
          font-size: 36px;
          font-weight: 900;
          color: #0a2240;
          text-align: center;
        }

        .card-heading {
          font-family: "Roboto Slab", serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a2240;
        }

        /* Body Text */
        .body-text, .caption-text {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          color: #444;
        }

        .caption-text {
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading { font-size: 36px; }
          .section-heading { font-size: 28px; }
          .card-heading { font-size: 20px; }
          .body-text, .caption-text { font-size: 14px; }
        }
      `}</style>

      {/* Hero Section */}
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
            Why <span className="text-warning">ISMR?</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Why ISMR</span>
          </p>
        </div>
      </section>

      {/* Introduction Text */}
      <div className="container pb-3">
        <h2
          style={{
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#0a2240",
            marginTop: "3rem",
            marginBottom: "1.5rem",
          }}
        >
          TOP 24 REASONS TO BE AN ISMRIAN
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            lineHeight: "1.7",
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          ISMR Pune is a hub of innovation, learning, and excellence. Our
          mission is to combine <strong>science and spirituality</strong> to
          create an environment that fosters holistic development. From
          state-of-the-art infrastructure to experienced faculty, ISMR is
          committed to nurturing future leaders in every field. We provide a
          comprehensive learning experience that prepares students for the
          challenges of tomorrow.
        </p>
      </div>

      {/* Features List */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            {whyIsmrFeatures.map((feature) => (
              <div className="col-12 col-md-6" key={feature.id}>
                <div
                  className="d-flex align-items-center p-3 bg-white rounded shadow-sm"
                  style={{
                    transition: "all 0.3s ease",
                    border: "1px solid #e0e0e0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                    e.currentTarget.style.borderColor = "#FFC333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12)";
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0a2240",
                      borderRadius: "10px",
                      marginRight: "1rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={feature.icon}
                      style={{ fontSize: "22px", color: "#FFC333" }}
                    />
                  </div>

                  <h6
                    className="mb-0"
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#0a2240",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.4",
                    }}
                  >
                    {feature.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default WhyISMRPage;
