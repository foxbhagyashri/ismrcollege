import React from "react";
import "./Banner2.css";

import { FaPlay, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="banner-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-wrap-image">
                <img
                  src="/banner-wrap-1.png"
                  alt="banner-wrap-image"
                  className="student-img"
                ></img>
                <div className="image-2">
                  <img
                    src="/banner-wrap-city.png"
                    alt="banner-wrap"
                    className="rotating-img"
                  ></img>
                  <div className="middle-img">
                    <img src="/banner-wrap-city-2.png" alt="banner-wrap"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-wrap-content">
                <div className="title">
                  <p>Sri Balaji Education Society's</p>
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
                      Accredited to NAAC
                    </b>
                  </p>
                </div>
                <ul className="list-unstyled  d-flex align-items-center btn-list">
                  <li className="d-inline-block">
                    <a className="default-btn" href="Aboutpage/Aboutinstutue">
                      Institute Overview &nbsp;{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </a>
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

                {/*  */}
                <ul className="ps-0 mb-0 d-flex align-items-center user-list">
                  <li>
                    <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center image">
                      <li>
                        <img src="/hero-user-1.jpg" alt="hero-user" />
                      </li>
                      <li>
                        <img src="/hero-user-2.jpg" alt="hero-user" />
                      </li>
                      <li>
                        <img src="/hero-user-3.jpg" alt="hero-user" />
                      </li>
                      <li>
                        <img src="/hero-user-4.jpg" alt="hero-user" />
                      </li>
                    </ul>
                  </li>
                  <li className="user-listtext">
                    <h2>
                      <span className="counter">3500</span>+
                    </h2>
                    <p className="subtext"> worldwide Students</p>
                  </li>
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
