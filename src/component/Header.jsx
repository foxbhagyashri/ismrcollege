import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css"; // optional for custom styles

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg style-3" id="navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a href="index.html" className="navbar-brand">
          <img
            className="black-logo"
            src="/ISMR logo_page-0001.jpg"
            alt="black-logo"
          />
        </a>

        {/* Mobile Toggle Button */}
        <a
          className="navbar-toggler text-decoration-none"
          data-bs-toggle="offcanvas"
          href="#navbarOffcanvas"
          role="button"
          aria-controls="navbarOffcanvas"
        >
          <span className="burger-menu">
            <span className="top-bar"></span>
            <span className="middle-bar"></span>
            <span className="bottom-bar"></span>
          </span>
        </a>

        {/* Offcanvas Menu for Mobile */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="navbarOffcanvas"
          aria-labelledby="navbarOffcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarOffcanvasLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto">
              {/* Home */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>

              {/* About */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>

              {/* Admissions */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Admissions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="apply.html" className="dropdown-item">
                      About Institute
                    </a>
                  </li>
                  <li>
                    <a href="tuition-fees.html" className="dropdown-item">
                      Leadership Team
                    </a>
                  </li>
                  <li>
                    <a href="tuition-fees.html" className="dropdown-item">
                      Why ISMR?
                    </a>
                  </li>
                  <li>
                    <a href="tuition-fees.html" className="dropdown-item">
                      Awards & Ranking
                    </a>
                  </li>
                  <li>
                    <a href="tuition-fees.html" className="dropdown-item">
                      Recognition & Affiliation
                    </a>
                  </li>
                  <li>
                    <a href="tuition-fees.html" className="dropdown-item">
                      Our Vision, Mission & Philosophy
                    </a>
                  </li>
                </ul>
              </li>

              {/* Placement */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Placement
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="programs.html" className="dropdown-item">
                      Eligibility Criteria
                    </a>
                  </li>
                  <li>
                    <a href="program-details.html" className="dropdown-item">
                      How To Apply
                    </a>
                  </li>
                  <li>
                    <a href="events.html" className="dropdown-item">
                      List Of Documents
                    </a>
                  </li>
                  <li>
                    <a href="event-details.html" className="dropdown-item">
                      Education Loan
                    </a>
                  </li>
                  <li>
                    <a href="event-details.html" className="dropdown-item">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="event-details.html" className="dropdown-item">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="event-details.html" className="dropdown-item">
                      Fees Structure
                    </a>
                  </li>
                  <li>
                    <a href="event-details.html" className="dropdown-item">
                      Admission Contact
                    </a>
                  </li>
                </ul>
              </li>

              {/* Life @ Campus */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Life @ Campus
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Placement Overview
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Placement Process
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Placement Rules & REgulations
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Placement  Statistics
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Our Intership & Placement
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Alumni Talk
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Corporate  Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Student Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="fitness-athletics.html" className="dropdown-item">
                      Placement Contact
                    </a>
                  </li>
                </ul>
              </li>

              {/* Student Corner */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Student Corner → Academics
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Student Campus Life
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Student Facilities
                    </a>
                  </li>
                </ul>
              </li>

              {/* Reach Us */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Reach Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Academics
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply For MAH-CET Form
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for Caste Validity
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for EBC & Scholarship Form
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for MAT Entrance Exam Form
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for CMAT Entrance Exam Form
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for MBA Entrance Exam Form
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for MBA Exam Form
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Apply for National Digital Library Form (NDL)
                    </a>
                  </li>
                </ul>
              </li>

              {/* ✅ Add Newsletter / NAAC / Contact inside mobile menu */}
              <div className="d-lg-none mt-3 border-top pt-2">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Newsletter
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          href="university-life.html"
                          className="dropdown-item"
                        >
                          How To Reach
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      NAAC
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          href="university-life.html"
                          className="dropdown-item"
                        >
                          Accreditation Certificate
                        </a>
                      </li>
                      <li>
                        <a
                          href="university-life.html"
                          className="dropdown-item"
                        >
                          SSR – Cycle 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="university-life.html"
                          className="dropdown-item"
                        >
                          Assessment Sheet – Cycle 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="university-life.html"
                          className="dropdown-item"
                        >
                          IQAC
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact <span>Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          {/* ✅ Desktop Only Bottom Row */}
          <div className="text-center mt-3 border-top pt-2 d-none d-lg-block">
            <ul className="d-flex justify-content-center align-items-center gap-3 navbar-nav">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Newsletter
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      How To Reach
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  NAAC
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Accreditation Certificate
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      SSR – Cycle 1
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      Assessment Sheet – Cycle 1
                    </a>
                  </li>
                  <li>
                    <a href="university-life.html" className="dropdown-item">
                      IQAC
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact <span>Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
