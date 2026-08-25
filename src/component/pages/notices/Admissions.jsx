import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";

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

// ---------------- MAIN COMPONENT ----------------
const Admissionsnote = () => {
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
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Admissions Notice
          </h1>
          <p className="mb-0" style={{ fontSize: "15px" }}>
            Notice • <span className="text-warning">Admissions</span>
          </p>
        </div>
      </section>

      {/* -------- IMAGE SECTION -------- */}
      <div className="container pb-4 pt-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <img
              src="/notice-admission.jpeg"
              alt="Admissions Open"
              style={{
                width: "57%",
                maxWidth: "100%",
                minWidth: "280px",
                height: "678px",
                objectFit: "contain",
              }}
              className="img-fluid"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Admissionsnote;
