import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  { name: "Company 1", src: Comp1 },
  { name: "Company 2", src: Comp2 },
  { name: "Company 3", src: Comp3 },
  { name: "Company 4", src: Comp4 },
  { name: "Company 5", src: Comp5 },
  { name: "Company 6", src: Comp6 },
];

const MARQUEE_SPEED_SECONDS = 15;
const ALUMNI_MARQUEE_SPEED_SECONDS = 40;

// ---------------------------------------------------------------------
// 3. Alumni Data
// ---------------------------------------------------------------------
const alumniTalks = [
  {
    name: "Vikram Sharma",
    title: "Senior Developer at TechGlobal",
    year: "Batch of 2018",
    quote:
      "The rigorous curriculum and hands-on projects at ISMR gave me the practical skills I needed to excel in my role. Highly recommend the placement cell's support!",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-fb3ac982b0f4?w=80&h=80&fit=crop",
  },
  {
    name: "Priya Singh",
    title: "Marketing Manager at MarketLead",
    year: "Batch of 2020",
    quote:
      "ISMR's industry connections were invaluable. My internship directly converted into a full-time job thanks to the exposure and networking opportunities provided.",
    imageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
  },
  {
    name: "Rajesh Kulkarni",
    title: "Financial Analyst, FinCorp",
    year: "Batch of 2017",
    quote:
      "The dedicated placement cell and career guidance ensured I landed my dream role right after graduation. Truly a career-defining experience.",
    imageSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop",
  },
  {
    name: "Sneha Reddy",
    title: "HR Specialist, PeopleConnect",
    year: "Batch of 2021",
    quote:
      "The blend of theory and practical training prepared me perfectly for the corporate environment, making the transition seamless and confident.",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=80&h=80&fit=crop",
  },
  {
    name: "Ajay Verma",
    title: "Operations Head, Logistics Corp",
    year: "Batch of 2016",
    quote:
      "The practical management skills I learned at ISMR were immediately applicable. The institute truly focuses on real-world competence.",
    imageSrc:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=80&h=80&fit=crop",
  },
];

const alumniMarqueeItems = [...alumniTalks, ...alumniTalks];

// ---------------------------------------------------------------------
// 4. Component
// ---------------------------------------------------------------------
const Ourplacement = () => {
  const tabs = ["IT Companies", "Core Companies", "Service Sector"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const AlumniTalkMarquee = () => (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#0a2240",
            fontFamily: "Inter, Arial, Helvetica, sans-serif",
          }}
        >
          <ChatSquareQuoteFill className="me-3" style={{ color: "#ffc107" }} />
          <span style={{ color: "#ffc107" }}>Alumni Success </span> Stories
        </h2>

        <div
          className="alumni-marquee-container"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "20px 0",
            position: "relative",
            perspective: "1000px",
          }}
        >
          <div className="alumni-marquee-animated">
            {alumniMarqueeItems.map((alumnus, index) => (
              <div key={index} className="alumni-card-3d">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={alumnus.imageSrc}
                    alt={alumnus.name}
                    className="rounded-circle me-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      border: "3px solid #ffc107",
                    }}
                  />
                  <div>
                    <h5 className="mb-0 fw-bold" style={{ color: "#0a2240" }}>
                      {alumnus.name}
                    </h5>
                    <p className="mb-0 small text-muted">{alumnus.title}</p>
                  </div>
                </div>

                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarFill
                      key={i}
                      style={{ color: "#ffc107", fontSize: "14px" }}
                      className="me-1"
                    />
                  ))}
                </div>

                <blockquote className="blockquote mb-0">
                  <p className="mb-0 fst-italic">"{alumnus.quote}"</p>
                  <footer className="blockquote-footer mt-2">
                    {alumnus.year}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* ====== Banner Section ====== */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #0a2240 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1
            className="mb-3 banner-title"
            style={{
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            Internship <span className="text-warning">& Placement</span>
          </h1>
          <p
            className="mb-0 banner-subtitle"
            style={{
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontSize: "16px",
              marginTop: "0.5rem",
            }}
          >
            Placement • <span className="text-warning">Internship & Placement</span>
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
              <strong>ISMR</strong> takes immense pride in its{" "}
              <strong>consistent track record</strong> of successful placements,
              with students securing positions in top companies across various
              industries. Our focus on training, skill development, and career
              guidance ensures <strong>excellent placement outcomes</strong>{" "}
              year after year.
            </p>
          </Col>
        </Row>

        {/* Tabs */}
        <div className="d-flex justify-content-center mb-5">
          <div className="nav nav-tabs border-0 bg-light rounded-3 p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`nav-link tab-link ${
                  activeTab === tab ? "active" : ""
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
        <section className="my-5">
          <div
            className="my-5 d-flex justify-content-center"
            style={{
              padding: "30px 0",
              overflow: "hidden",
              backgroundColor: "#f8f9fa",
              borderTop: "1px solid #dee2e6",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <div className="logo-marquee-animated">
              {logos.map((logo, index) => (
                <div key={index} className="logo-box">
                  <img src={logo.src} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Marquee */}
        <AlumniTalkMarquee />
      </div>

      {/* ====== Extra CSS ====== */}
      <style>
        {`
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
