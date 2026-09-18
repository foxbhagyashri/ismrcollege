import React from "react";
import "./Banner2.css";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="banner-wrap-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="banner-wrap-image">
                <div className="student-badge-wrap">
                  <img
                    src="/banner-wrap-1.png"
                    alt="ISMR Pune MBA Graduate"
                    className="student-img"
                  />
                  <div className="legacy-badge">
                    <img
                      src="/banner-wrap-city.png"
                      alt="19 Years of Legacy"
                      className="rotating-img"
                    />
                    <div className="middle-img">
                      <img src="/banner-wrap-city-2.png" alt="Sri Balaji Education Society" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-wrap-content">
                <div className="title">
                  <p style={{ color: "#002a5c", fontWeight: 700, letterSpacing: "0.5px" }}>Sri Balaji Education Society's</p>
                  <h1 className="fs-2">
                    INTERNATIONAL SCHOOL OF <br></br> MANAGEMENT AND RESEARCH
                  </h1>
                  <p>
                    <b
                      style={{
                        color: "#201b1bff",
                        fontWeight: 750,
                        fontSize: "18px",
                      }}
                    >
                      MBA : DTE College Code 6798 | BBA & BCA College Code 16301
                      <br /> Approved by AICTE, Ministry of Education, Govt of India.
                      <br />
                      Affiliated to Savitribai Phule Pune University<br></br>
                      Accredited by NAAC
                    </b>
                  </p>
                </div>
                <ul className="list-unstyled  d-flex align-items-center btn-list">
                  <li className="d-inline-block">
                    <Link className="default-btn" to="/about-us">
                      Institute Overview &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </Link>
                  </li>
                  {/* <li className="d-inline-block">
                    <ul className="list-unstyled d-flex align-items-center ps-0 mb-0 play-btn">
                      <li>
                        <a
                          className="see"
                          data-fslightbox="gallery"
                          href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                        >
                          See How To Apply &nbsp;{" "}
                          <FaArrowRight className="ms-2 arrow-icon" />
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
