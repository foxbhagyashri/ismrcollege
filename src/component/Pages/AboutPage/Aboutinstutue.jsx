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
    <div style={{ fontSize: "2.5rem", fontWeight: "700" }} ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

// ---------------- MAIN COMPONENT ----------------
const InstitutionStats = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
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
              fontFamily: "Roboto Slab, serif",
              fontSize: "47px",
              fontWeight: 900,
            }}
          >
            About <span className="text-warning">ISMR,</span> Pune
          </h1>
          <p
            className="mb-0"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
          >
            About • <span className="text-warning">About Institute</span>
          </p>
        </div>
      </section>

      {/* -------- ABOUT TEXT & IMAGE -------- */}
      <div className="container pb-5">
        <h2
          style={{
            fontFamily: "Roboto Slab, serif",
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
    textAlign: "justify",      // makes text evenly distributed
    textJustify: "inter-word", // improves spacing between words
  }}
>
  ISMR Pune is a hub of innovation, learning, and excellence. Our mission
  is to combine <strong>science and spirituality</strong> to create an
  environment that fosters holistic development. From state-of-the-art
  infrastructure to experienced faculty, ISMR is committed to nurturing
  future leaders in every field. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Nesciunt enim corrupti itaque odio eos odit iusto sequi
  provident repellendus aperiam et fugit, voluptate, velit modi at cum quasi
  maxime voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Ducimus repellat iste ipsa aut ea deleniti voluptatum autem
  provident magnam, iure velit, vel omnis facere totam accusamus fuga sunt,
  unde ad! Quidem vitae sint sapiente. Soluta rem consectetur distinctio,
  libero, fugit id natus voluptatem est ipsa doloribus quaerat. Facere est
  saepe aliquid! Totam?
</p>

        <div className="row justify-content-center pt-4   marginTop: 2rem">
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
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  borderBottomLeftRadius: "0.75rem",
                  borderBottomRightRadius: "0.75rem",
                }}
              >
             <h6 className="mb-0 fw-semibold text-white text-uppercase">
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
        }}
      >
        <StatCounter endValue={150} duration={2000} suffix="+" />
        <div className="mt-2">Programmes</div>
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
        }}
      >
        <StatCounter endValue={12} duration={2000} suffix="+" />
        <div className="mt-2">Schools</div>
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
        }}
      >
        <StatCounter endValue={31} duration={2000} suffix="+" />
        <div className="mt-2">Departments</div>
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
        }}
      >
        <StatCounter endValue={100000} duration={3000} suffix="+" />
        <div className="mt-2">Alumni</div>
      </div>
    </div>
  </div>
</div>


      {/* -------- VALUE / VISION / MISSION -------- */}
   
    </div>
  );
};

export default InstitutionStats;
