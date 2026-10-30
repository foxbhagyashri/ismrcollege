import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutImg from "../../../assets/About-img.jpg";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheckCircle } from "react-icons/fa";

import {
  faGem,
  faGlobe,
  faHandsHelping,
  faEye,
  faRocket,
  faCircle,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";

// ---------------- STAT COUNTER ----------------
const StatCounter = ({ endValue, duration, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return (
    <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
      {Math.floor(count)}
      {suffix}
    </h2>
  );
};

// ---------------- WHY CHOOSE ISMR DATA ----------------
const whyChooseData = [
  { title: "Established in 2007", desc: "A strong foundation in management education." },
  { title: "Placement Assistance", desc: "Dedicated placement support to help students pursue rewarding career opportunities." },
  { title: "Industry-Oriented Learning", desc: "Emphasis on practical knowledge and real-world business applications." },
  { title: "Entrepreneurial Development", desc: "Encouraging students to explore innovative ideas and entrepreneurial opportunities." },
  { title: "Holistic Development", desc: "Focus on leadership, communication, teamwork, and decision-making skills." },
  { title: "Continuous Competency Building", desc: "Preparing students for professional growth and changing industry expectations." },
];

const academicActivities = [
  "National and International Conventions",
  "Symposia, Seminars, and Conferences",
  "Student Competitions and Management Events",
  "Expert Guest Lectures",
  "Outbound Learning Programmes",
  "Industry Interaction and Corporate Engagement",
  "Cultural Activities and Student Development Initiatives",
];

const learningApproach = [
  { title: "Knowledge with Application", desc: "Connecting classroom concepts with real-life business situations." },
  { title: "Industry Exposure", desc: "Providing opportunities to understand current corporate practices and business challenges." },
  { title: "Multi-Skilled Managers", desc: "Developing adaptable professionals equipped to work in diverse environments." },
  { title: "Leadership & Teamwork", desc: "Building confidence, collaboration, and effective decision-making." },
  { title: "Career Readiness", desc: "Supporting students in developing the skills and competencies required for professional success." },
];

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  border: "1px solid #e5e7eb",
};

const hoverOn = (e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15)";
};
const hoverOff = (e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.1)";
};

const sectionTitleStyle = {
  fontSize: "32px",
  fontWeight: 700,
  color: "#0a2240",
  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
};

const bodyTextStyle = {
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#444",
  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
};

// ---------------- MAIN COMPONENT ----------------
const InstitutionStats = () => {
  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
      {/* -------- HEADER -------- */}
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
              color: "#ffffff",
              margin: 0,
            }}
          >
            About Institute
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
              color: "#ffffff",
            }}
          >
            About • <span className="text-warning">About Institute</span>
          </p>
        </div>
      </section>

      {/* -------- ABOUT TEXT & IMAGE -------- */}
      <div className="container pb-5">
        <h2
          style={{
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#0a2240",
            marginTop: "3rem",
          }}
        >
          Welcome to ISMR, Pune -{" "}
          <span style={{ color: "#d95c5c" }}>
            International School of Management and Research.
          </span>
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: "1.7",
            marginTop: "2rem",
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          International School of Management & Research (ISMR), Pune, established in 2007 and managed by Sri Balaji Education Society, is a premier management institute committed to excellence in management education, research, and professional development.<br></br>


          Today: ISMR campus vibrates with varied co-curricular activities like National & International Conventions, Symposia, Seminars, Student Competitions, Guest Lectures, Outbound Programmes, Industry Interface & Cultural Activities. With a goal to create multi-skilled managers who are well equipped to perform effectively & efficiently in any environment, ISMR Institute not only tries to instil the rigorous syllabi in the students but try to create, a passion for knowledge and also attempt to teach them how to apply that knowledge in real-life situations.
        </p>






        <div
          className="row justify-content-center pt-4"
          style={{ marginTop: "2rem" }}
        >
          <div className="col-12">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.75rem",
              }}
            >
              <div style={{ position: "relative", maxHeight: "500px", overflow: "hidden", borderRadius: "0.75rem", border: "5px solid #f8f9fa" }}>
                <img
                  src={AboutImg}
                  alt="ISMR Campus"
                  className="img-fluid w-100 shadow-lg"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // adjust 0.3 for darkness
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "1rem",
                  color: "#fff",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  borderBottomLeftRadius: "0.75rem",
                  borderBottomRightRadius: "0.75rem",
                }}
              >
                <h6
                  className="mb-0 fw-semibold text-white text-uppercase"
                  style={{
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  ISMR Campus ,{" "}
                  <span className="fw-light fst-italic">
                    Where Excellence Meets Innovation — Since 2007
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {/* -------- VISION, MISSION & PHILOSOPHY SECTION -------- */}
      <section
        className="py-5"
        style={{

          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#0a2240",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            }}
          >
            Our Vision, Mission, Goals And Core Values
          </h2>

          <div className="row g-4">
            {/* VISION CARD */}
            <div className="col-12 col-md-6">
              <div
                className="h-100 p-4"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#0a2240",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{ fontSize: "16px", color: "#FFC333" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#0a2240",
                        marginBottom: "12px",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      VISION
                    </h3>
                  </div>
                </div>

                <ul>
                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>		To become a Best Business School in India.</li>

                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>	To achieve excellence in management education and research.</li>
                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>	To continuously enhance students’ competencies, leadership capabilities, and professional skills.</li>

                </ul>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="col-12 col-md-6">
              <div
                className="h-100 p-4"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#0a2240",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faRocket} style={{ fontSize: "16px", color: "#FFC333" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#0a2240",
                        marginBottom: "12px",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      MISSION
                    </h3>
                  </div>
                </div>


                <ul>
                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>	To provide quality management education focused on industry requirements.</li>
                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>		To empower students with knowledge, practical skills, and professional competencies.</li>
                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>		To encourage innovation, entrepreneurship, and independent thinking.</li>
                  <li style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}>		To prepare students to meet the challenges of a dynamic business environment.</li>
                </ul>

              </div>
            </div>

            {/* OPERATING PHILOSOPHY CARD - FULL WIDTH */}
            <div className="col-12 col-md-6">
              <div
                className="h-100 p-4"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#0a2240",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ fontSize: "16px", color: "#FFC333" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#0a2240",
                        marginBottom: "10px",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      GOALS
                    </h3>
                  </div>
                </div>
                <ul
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "20px",
                    paddingLeft: "20px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    textAlign: "justify",
                  }}
                >
                  <li style={{ marginBottom: "12px" }}>
                    <b>I - Inspire</b><br></br>
                    Inspire our students to discover their true potential and strive for academic and personal excellence.
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <b>S -Strengthen</b><br></br>
                    Strengthen their knowledge, confidence, and character through continuous learning and exposure.
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <b>M-Motivate</b><br></br>
                    Motivate every learner to lead with innovation,
                    purpose, and professionalism in their chosen field.

                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <b>R-Rise</b><br></br>
                    Rise beyond limitations to become globally
                    competent, responsible, and successful individuals.

                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div
                className="h-100 p-4"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#0a2240",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHandHoldingHeart}
                      style={{ fontSize: "16px", color: "#FFC333" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#0a2240",
                        marginBottom: "10px",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      CORE VALUES - SBES
                    </h3>
                  </div>
                </div>
                <ul
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "20px",
                    paddingLeft: "20px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    textAlign: "justify",
                  }}
                >
                  <li style={{ marginBottom: "12px" }}>
                    <b>S -</b> Service
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <b>B -</b> Brilliance
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <b>E - </b> Excellence
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <b>S -</b> Sustainability
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* -------- WHY CHOOSE ISMR -------- */}
          <section
            className="py-5"
            style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
          >
            <div className="container">
              <h2 className="text-center mb-5" style={sectionTitleStyle}>
                Why Choose <span style={{ color: "#d95c5c" }}>ISMR?</span>
              </h2>

              <div className="row g-4">
                {whyChooseData.map((item, i) => (
                  <div className="col-12 col-md-6 col-lg-4" key={i}>
                    <div
                      className="h-100 p-4"
                      style={cardStyle}
                      onMouseEnter={hoverOn}
                      onMouseLeave={hoverOff}
                    >
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <FaCheckCircle size={24} color="#FFC333" style={{ flexShrink: 0 }} />
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#0a2240",
                            margin: 0,
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p style={{ ...bodyTextStyle, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* -------- ACADEMIC & CO-CURRICULAR EXCELLENCE + OUR APPROACH -------- */}
          <section
            className="pb-5"
            style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
          >
            <div className="container">
              <div className="row g-4">
                {/* Academic & Co-Curricular Excellence */}
                <div className="col-12 col-md-6">
                  <div
                    className="h-100 p-4"
                    style={cardStyle}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    <h3 style={{ ...sectionTitleStyle, fontSize: "28px", marginBottom: "12px" }}>
                      Academic &amp; Co-Curricular Excellence
                    </h3>
                    <p style={{ ...bodyTextStyle, textAlign: "justify" }}>
                      At ISMR, learning extends beyond the classroom through a wide range
                      of academic and professional activities:
                    </p>
                    <ul className="list-unstyled mb-0">
                      {academicActivities.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2"
                          style={{ ...bodyTextStyle, marginTop: "10px" }}
                        >
                          <FaCheckCircle
                            color="#d95c5c"
                            style={{ marginTop: "6px", flexShrink: 0 }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Our Approach towards Learning */}
                <div className="col-12 col-md-6">
                  <div
                    className="h-100 p-4"
                    style={cardStyle}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    <h3 style={{ ...sectionTitleStyle, fontSize: "28px", marginBottom: "12px" }}>
                      Our Approach towards Learning
                    </h3>
                    <ul className="list-unstyled mb-0">
                      {learningApproach.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2"
                          style={{ ...bodyTextStyle, marginTop: "10px" }}
                        >
                          <FaCheckCircle
                            color="#d95c5c"
                            style={{ marginTop: "6px", flexShrink: 0 }}
                          />
                          <span>
                            <b style={{ color: "#0a2240" }}>{item.title}:</b> {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Commitment */}
              <div
                className="mt-4 p-4 p-md-5 text-center"
                style={{
                  background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#FFC333",
                    marginBottom: "16px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  Our Commitment
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.8",
                    color: "#ffffff",
                    margin: "0 auto",
                    maxWidth: "900px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  At ISMR, we strive to nurture competent, confident, and responsible
                  management professionals who can contribute meaningfully to the
                  corporate world and society. Through quality education, practical
                  exposure, entrepreneurial thinking, and continuous development, we are
                  committed to helping every student move towards a successful and
                  fulfilling career.
                </p>
              </div>
            </div>
          </section>

        </div>
      </section>
    </div >
  );
};

export default InstitutionStats;
