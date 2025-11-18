import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutImg from "../../../assets/About-img.jpg";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faGlobe,
  faHandsHelping,
  faEye,
  faRocket,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

// ---------------- STAT COUNTER ----------------
const StatCounter = ({ endValue, duration, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = endValue / (duration / 50);
          const timer = setInterval(() => {
            start += increment;
            if (start < endValue) setCount(Math.ceil(start));
            else {
              setCount(endValue);
              clearInterval(timer);
            }
          }, 50);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [endValue, duration]);

  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "700",
        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        lineHeight: "1",
      }}
      ref={ref}
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
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
          className="position-absolute top-0   end-0 w-100 h-100 opacity-25"
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
            About <span className="text-warning">ISMR,</span> Pune
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
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
          International School of Management and Research (ISMR) is a
          mission-oriented institute, run by Sri Balaji Education Society since
          2007, with a vision to be a world-class business school.
          <strong>
            The institute is committed to excellence in management education and
            research through continuous competency building.
          </strong>
          ISMR is a premier management institute in Pune,
          <strong>
            ranked among the top institutes for excellence in placements with a
            100% placement assistance record since inception.
          </strong>
          We, at ISMR, are focused on implementing our mission of
          <strong>“Placing You First.”</strong> The institute also believes in
          nurturing entrepreneurial qualities in students, helping them pursue
          growth beyond traditional career paths. Today, the ISMR campus
          vibrates with diverse co-curricular activities such as national and
          international conventions, symposia, seminars, student competitions,
          guest lectures, outbound programs, industry interactions, and cultural
          events. With a goal to create multi-skilled managers who can perform
          effectively in any environment,
          <strong>
            ISMR not only delivers a rigorous curriculum but also inspires
            students to apply their knowledge to real-life situations.
          </strong>
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

      {/* -------- STATS SECTION -------- */}
      <div className="container pb-4 pt-3">
        <div className="row g-4 text-center justify-content-center">
          {/* Programmes */}
          <div className="col-12 col-sm-6 col-md-3">
            <div
              className="rounded h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: "#002A5C",
                color: "#FFC333",
                padding: "1.5rem",
                minHeight: "140px",
                borderRadius: "12px",
                fontWeight: 500,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              <StatCounter endValue={150} duration={2000} suffix="+" />
              <div
                className="mt-2"
                style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
              >
                Programmes
              </div>
            </div>
          </div>

          {/* Schools */}
          <div className="col-12 col-sm-6 col-md-3">
            <div
              className="rounded h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: "#FFC333",
                color: "#002A5C",
                padding: "1.5rem",
                minHeight: "140px",
                borderRadius: "12px",
                fontWeight: 500,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              <StatCounter endValue={12} duration={2000} suffix="+" />
              <div
                className="mt-2"
                style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
              >
                Schools
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="col-12 col-sm-6 col-md-3">
            <div
              className="rounded h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: "#002A5C",
                color: "#FFC333",
                padding: "1.5rem",
                minHeight: "140px",
                borderRadius: "12px",
                fontWeight: 500,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              <StatCounter endValue={31} duration={2000} suffix="+" />
              <div
                className="mt-2"
                style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
              >
                Departments
              </div>
            </div>
          </div>

          {/* Alumni */}
          <div className="col-12 col-sm-6 col-md-3">
            <div
              className="rounded h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: "#FFC333",
                color: "#002A5C",
                padding: "1.5rem",
                minHeight: "140px",
                borderRadius: "12px",
                fontWeight: 500,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              <StatCounter endValue={100000} duration={3000} suffix="+" />
              <div
                className="mt-2"
                style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
              >
                Alumni
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
            Our Vision, Mission And Philosophy
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
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  To be a world class business school, achieving excellence in
                  imparting management education and research through continuous
                  competency building.
                </p>
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
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#444",
                    marginTop: "10px",
                    textAlign: "justify",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  To provide managerial talent with risk taking ability, passion
                  for lifelong learning; creative, innovative thinking and
                  values in rapidly evolving economic and social global
                  environment.
                </p>
              </div>
            </div>

            {/* OPERATING PHILOSOPHY CARD - FULL WIDTH */}
            <div className="col-12">
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
                      icon={faCogs}
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
                      OPERATING PHILOSOPHY
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
                    Ensure that education is accessible to all irrespective of
                    the financial standings.
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    Provide application-oriented excellence in teaching and
                    anticipate dynamic diversities enabling 'Happy Learning'
                    ambience.
                  </li>
                  <li>
                    Transform students to lead the economy of tomorrow equipped
                    with abilities to overcome challenges of the corporate
                    world. Empower students to grab the opportunity by choice
                    and not by chance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstitutionStats;
