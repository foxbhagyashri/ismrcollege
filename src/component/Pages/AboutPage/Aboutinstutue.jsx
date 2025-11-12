import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutImg from "../../../assets/About-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faGlobe,
  faHandsHelping,
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
        fontSize: "2.5rem", 
        fontWeight: "700",
        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        lineHeight: "1.2"
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
              fontSize: "16px", 
              marginTop: "0.5rem" 
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
          International School of Management and Research (ISMR), is a mission-oriented Institute, run by Sri Balaji Education Society since 2007, with a vision to be a world class Business School, achieving excellence in management education and research through continuous competency building. ISMR is a premier Management Institute in Pune, ranked among the Top Institutes for excellence in placements, with a 100% placement assistance record since inception.
          We, at ISMR, are focused in implementing our mission of "Placing You First". ISMR also believes in developing certain entrepreneurial qualities in the students, helping them in the path of pursuing something beyond normal career growth.
          Today: ISMR campus vibrates with varied co-curricular activities like National & International Conventions, Symposia, Seminars, Student Competitions, Guest Lectures, Outbound Programmes, Industry Interface & Cultural Activities. With a goal to create multi-skilled managers who are well equipped to perform effectively & efficiently in any environment, ISMR Institute not only tries to instil the rigorous syllabi in the students but try to create, a passion for knowledge and also attempt to teach them how to apply that knowledge in real-life situations.
        </p>

        <div className="row justify-content-center pt-4" style={{ marginTop: "2rem" }}>
          <div className="col-12">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.75rem",
              }}
            >
              <img
                src={AboutImg}
                alt="ISMR Campus"
                className="img-fluid w-100 rounded-3 shadow-lg"
                style={{
                  objectFit: "cover",
                  maxHeight: "500px",
                  border: "5px solid #f8f9fa",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "1rem",
                  color: "#fff",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  borderBottomLeftRadius: "0.75rem",
                  borderBottomRightRadius: "0.75rem",
                }}
              >
                <h6 
                  className="mb-0 fw-semibold text-white text-uppercase"
                  style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
                >
                  ISMR Campus – <span className="fw-light fst-italic">Where Excellence Meets Innovation</span>
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
              <div className="mt-2" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
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
              <div className="mt-2" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
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
              <div className="mt-2" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
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
              <div className="mt-2" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
                Alumni
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionStats;