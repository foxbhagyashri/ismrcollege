import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { Row, Col } from "react-bootstrap";
import { BriefcaseFill, ChatSquareQuoteFill, StarFill } from "react-bootstrap-icons";

// ---------------------------------------------------------------------
// 1. Local Company Image Imports
// ---------------------------------------------------------------------
import Comp1 from "../../../assets/Homeimg/Comp1.png";
import Comp2 from "../../../assets/Homeimg/Comp2.png";
import Comp3 from "../../../assets/Homeimg/Comp3.png";
import Comp4 from "../../../assets/Homeimg/Comp4.png";
import Comp5 from "../../../assets/Homeimg/Comp5.png";
import Comp6 from "../../../assets/Homeimg/Comp6.png";
import Comp7 from "../../../assets/Homeimg/HDFC-Bank-logo.png";
import Comp8 from "../../../assets/Homeimg/Outlook_Group_Logo.png";
import Comp9 from "../../../assets/Homeimg/atos.png";
import Comp10 from "../../../assets/Homeimg/Tech_Mahindra_New_Logo.svg.png";
import Comp11 from "../../../assets/Homeimg/UBS_Logo.png";
import Comp12 from "../../../assets/Homeimg/Reliance-Logo-2002-2010.png";
import Comp13 from "../../../assets/Homeimg/Infosys_logo.svg.png";
import Comp14 from "../../../assets/Homeimg/csb-bank-tenders-information-service.jpg";
import Comp15 from "../../../assets/Homeimg/coive.png";
import Comp16 from "../../../assets/Homeimg/Amdocs-2017-brand-mark.svg.png";
import Comp17 from "../../../assets/Homeimg/allstate.png";
import Comp18 from "../../../assets/Homeimg/birla.jpg";
import Comp19 from "../../../assets/Homeimg/sharekhan.png";
import Comp20 from "../../../assets/Homeimg/tata.png";
import Comp21 from "../../../assets/Homeimg/xdbs.png";
import Comp22 from "../../../assets/Homeimg/vitanaa.png";
import Comp23 from "../../../assets/Homeimg/600db20da2900_XL_dynamics.jpg";
import Comp24 from "../../../assets/Homeimg/x3yozluxpwkcfa5wicbf.jpg";
// ---------------------------------------------------------------------
// 2. Company Logos Array
// ---------------------------------------------------------------------
const logos = [
  { name: "Company 1", src: Comp1 },
  { name: "Company 2", src: Comp2 },
  { name: "Company 3", src: Comp3 },
  { name: "Company 4", src: Comp4 },
  { name: "Company 5", src: Comp5 },
  { name: "Company 6", src: Comp6 },
  { name: "Company 7", src: Comp7 },
  { name: "Company 8", src: Comp8 },
  { name: "Company 9", src: Comp9 },
  { name: "Company 10", src: Comp10 },
  { name: "Company 11", src: Comp11 },
  { name: "Company 12", src: Comp12 },
  { name: "Company 13", src: Comp13 },
  { name: "Company 14", src: Comp14 },
  { name: "Company 15", src: Comp15 },
  { name: "Company 16", src: Comp16 },
  { name: "Company 17", src: Comp17 },
  { name: "Company 18", src: Comp18 },
  { name: "Company 19", src: Comp19 },
  { name: "Company 20", src: Comp20 },
  { name: "Company 21", src: Comp21 },
  { name: "Company 22", src: Comp22 },
  { name: "Company 23", src: Comp23 },
  { name: "Company 24", src: Comp24 },
];

const MARQUEE_SPEED_SECONDS = 15;
const ALUMNI_MARQUEE_SPEED_SECONDS = 40;

// ---------------------------------------------------------------------
// 3. Alumni Data
// ---------------------------------------------------------------------




// ---------------------------------------------------------------------
// 4. Component
// ---------------------------------------------------------------------
const Ourplacement = () => {
  const tabs = ["IT Companies", "Core Companies", "Service Sector"];
  const [activeTab, setActiveTab] = useState(tabs[0]);



  return (
    <>
      {/* ====== Banner Section ====== */}
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
            Our Internship & <span className="text-warning">Placement</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Placement • <span className="text-warning">Our Internship & Placement</span>
          </p>
        </div>
      </section>

      {/* ====== Main Section ====== */}
      <div className="container section-padding py-5">
        <Row className="mb-5">
          <Col>
            <h1
              className="mb-4"
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#0a2240",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              <BriefcaseFill className="me-3" style={{ color: "#0a2240" }} />
              Internship and <span style={{ color: "#1a4d7a" }}>Placement</span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#444",
                lineHeight: "1.7",
                textAlign: "justify",
              }}
            >
              The stable base provided to ISMR students means that the industry leaders look up to us to continue producing the proficient leaders of tomorrow. Mentioned below are some of the industry giants who visit our campus every year to choose students from our institute who can add value to their organization.
            </p>
          </Col>
        </Row>

        {/* Tabs */}
        <div className="d-flex justify-content-center mb-5">
          <div className="nav nav-tabs border-0 bg-light rounded-3 p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`nav-link tab-link ${activeTab === tab ? "active" : ""
                  }`}
                onClick={() => setActiveTab(tab)}
                style={{
                  borderRadius: "8px",
                  margin: "0 0.25rem",
                  fontWeight: 600,
                  color: activeTab === tab ? "#fff" : "#000",
                  backgroundColor:
                    activeTab === tab ? "#0a2240" : "transparent",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Company Logos Grid */}
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: "2.5rem",
                color: "#0A193E",
              }}
            >
              {activeTab.replace("IT ", "")}
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#0A193E" }}>
              At ISMR, we are proud to collaborate with leading IT, Service, and
              Core companies, giving our students valuable placement
              opportunities that help them step confidently into their
              professional careers.
            </p>
          </div>

          <div className="col-12 col-lg-7">
            <div className="row g-3 g-md-4 justify-content-center">
              {logos.slice(0, 6).map((company, index) => (
                <div key={index} className="col-6 col-md-4 d-flex">
                  <div
                    className="w-100 d-flex justify-content-center align-items-center bg-white"
                    style={{
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      height: "120px",
                    }}
                  >
                    <img
                      src={company.src}
                      alt={company.name}
                      style={{
                        maxWidth: "80%",
                        maxHeight: "70px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Marquee */}
        <section className="recruiters-section my-5">
          <h2 className="text-center mb-4">OUR RECRUITERS</h2>

          <div className="recruiters-grid container">
            {logos.map((logo, index) => (
              <div key={index} className="recruiter-box">
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </section>



      </div>

      {/* ====== Extra CSS ====== */}
      <style>
        {`
.recruiters-section {
  background: #ffffff;
  padding: 40px 0;
}

.recruiters-section h2 {
  font-weight: 700;
  letter-spacing: 2px;
}

.recruiters-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 logos per row */
  gap: 15px;
}

.recruiter-box {
  border: 2px solid #e0e0e0;
  padding: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.recruiter-box img {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
}

.recruiter-box:hover {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 992px) {
  .recruiters-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 576px) {
  .recruiters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

        
          .tab-link:hover {
            background-color: rgba(10, 34, 64, 0.1);
            color: #0a2240 !important;
          }

          /* Slightly tighter section padding on mobile */
          .section-padding {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .logo-marquee-animated {
            animation: scroll-left ${MARQUEE_SPEED_SECONDS}s linear infinite;
            display: flex;
            width: max-content;
            align-items: center;
          }
          .logo-marquee-animated:hover {
            animation-play-state: paused;
          }

          .logo-box {
            width: 150px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            margin: 0 15px;
            flex-shrink: 0;
          }
          .logo-box img {
            max-width: 100%;
            max-height: 70px;
            object-fit: contain;
          }

          @keyframes scroll-right-to-left-3d {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .alumni-marquee-animated {
            animation: scroll-right-to-left-3d ${ALUMNI_MARQUEE_SPEED_SECONDS}s linear infinite;
            display: flex;
            width: max-content;
            align-items: stretch;
          }

          .alumni-marquee-animated:hover {
            animation-play-state: paused;
          }

          /* ✅ Alumni Card Fit Fixed */
          .alumni-card-3d {
            display: inline-block;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            border-top: 5px solid #0a2240;
            width: 350px;
            height: 330px;
            overflow: hidden;
            padding: 25px;
            margin: 0 15px;
            position: relative;
            transition: transform 0.3s ease-in-out;
          }

          .alumni-card-3d:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          }

          .alumni-card-3d blockquote {
            margin: 0;
            border-left: 4px solid #1a4d7a;
            padding-left: 15px;
          }

          .alumni-card-3d p {
            font-size: 0.95rem;
            color: #444;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }

          .alumni-card-3d footer {
            position: absolute;
            bottom: 15px;
            left: 25px;
            font-size: 0.85rem;
            color: #777;
          }

          @media (max-width: 768px) {
            .alumni-card-3d {
              width: 280px;
              height: auto;
            }
            .banner-title {
              font-size: 30px !important;
            }
            .banner-subtitle {
              font-size: 14px !important;
            }
            .tab-link {
              font-size: 14px;
              padding: 6px 10px;
            }
            .logo-box {
              width: 130px;
              height: 90px;
              margin: 0 10px;
            }
            .section-padding {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }

          @media (max-width: 576px) {
            .banner-title {
              font-size: 26px !important;
            }
            .banner-subtitle {
              font-size: 13px !important;
            }
            .logo-box {
              width: 115px;
              height: 80px;
              margin: 0 8px;
            }
            .tab-link {
              font-size: 13px;
              padding: 6px 8px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Ourplacement;
