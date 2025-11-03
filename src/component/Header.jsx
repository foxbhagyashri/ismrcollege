import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* Home */}
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      {/* About Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/Aboutpage/Aboutinstutue">
              About Institute
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/Aboutpage/Leadership">
              Leadership Team
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/Aboutpage/Ismr">
              Why ISMR?
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/Aboutpage/Award">
              Awards & Ranking
            </Link>
          </li>
          
        </ul>
      </li>

      {/* Admissions Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Admissions
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="eligibility.html" className="dropdown-item">
              Eligibility Criteria
            </a>
          </li>
          <li>
            <a href="how-to-apply.html" className="dropdown-item">
              How To Apply
            </a>
          </li>
          <li>
            <a href="documents.html" className="dropdown-item">
              List Of Documents
            </a>
          </li>
          <li>
            <a href="education-loan.html" className="dropdown-item">
              Education Loan
            </a>
          </li>
          <li>
            <a href="disclaimer.html" className="dropdown-item">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="refund-policy.html" className="dropdown-item">
              Refund Policy
            </a>
          </li>
          <li>
            <a href="fees-structure.html" className="dropdown-item">
              Fees Structure
            </a>
          </li>
          <li>
            <a href="admission-contact.html" className="dropdown-item">
              Admission Contact
            </a>
          </li>
        </ul>
      </li>

      {/* Placement Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Placement
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="placement-overview.html" className="dropdown-item">
              Placement Overview
            </a>
          </li>
          <li>
            <a href="placement-process.html" className="dropdown-item">
              Placement Process
            </a>
          </li>
          <li>
            <a href="placement-rules.html" className="dropdown-item">
              Placement Rules & Regulations
            </a>
          </li>
          <li>
            <a href="placement-statistics.html" className="dropdown-item">
              Placement Statistics
            </a>
          </li>
          <li>
            <a href="internship-placement.html" className="dropdown-item">
              Our Internship & Placement
            </a>
          </li>
          <li>
            <a href="alumni-talk.html" className="dropdown-item">
              Alumni Talk
            </a>
          </li>
          <li>
            <a href="corporate-testimonials.html" className="dropdown-item">
              Corporate Testimonials
            </a>
          </li>
          <li>
            <a href="student-testimonials.html" className="dropdown-item">
              Student Testimonials
            </a>
          </li>
          <li>
            <a href="placement-contact.html" className="dropdown-item">
              Placement Contact
            </a>
          </li>
        </ul>
      </li>

      {/* Life @ Campus Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Life @ Campus
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="student-campus-life.html" className="dropdown-item">
              Student Campus Life
            </a>
          </li>
          <li>
            <a href="student-facilities.html" className="dropdown-item">
              Student Facilities
            </a>
          </li>
        </ul>
      </li>

      {/* Student Corner Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Student Corner
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="academics.html" className="dropdown-item">
              Academics
            </a>
          </li>
          <li>
            <a href="mah-cet.html" className="dropdown-item">
              Apply For MAH-CET Form
            </a>
          </li>
          <li>
            <a href="caste-validity.html" className="dropdown-item">
              Apply for Caste Validity
            </a>
          </li>
          <li>
            <a href="ebc-scholarship.html" className="dropdown-item">
              Apply for EBC & Scholarship Form
            </a>
          </li>
          <li>
            <a href="mat-form.html" className="dropdown-item">
              Apply for MAT Entrance Exam Form
            </a>
          </li>
          <li>
            <a href="cmat-form.html" className="dropdown-item">
              Apply for CMAT Entrance Exam Form
            </a>
          </li>
          <li>
            <a href="mba-entrance-form.html" className="dropdown-item">
              Apply for MBA Entrance Exam Form
            </a>
          </li>
          <li>
            <a href="mba-exam-form.html" className="dropdown-item">
              Apply for MBA Exam Form
            </a>
          </li>
          <li>
            <a href="ndl-form.html" className="dropdown-item">
              Apply for National Digital Library Form (NDL)
            </a>
          </li>
        </ul>
      </li>

      {/* Reach Us Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Reach Us
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="how-to-reach.html" className="dropdown-item">
              How To Reach
            </a>
          </li>
        </ul>
      </li>

      

      {/* Newsletter Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Newsletter
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="newsletter-aug-25.html" className="dropdown-item">
              August 2025
            </a>
          </li>
          <li>
            <a href="newsletter-sep-25.html" className="dropdown-item">
              September 2025
            </a>
          </li>
        </ul>
      </li>

      {/* NAAC Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          NAAC
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="accreditation-certificate.html" className="dropdown-item">
              Accreditation Certificate
            </a>
          </li>
          <li>
            <a href="ssr-cycle1.html" className="dropdown-item">
              SSR – Cycle 1
            </a>
          </li>
          <li>
            <a href="assessment-sheet-cycle1.html" className="dropdown-item">
              Assessment Sheet – Cycle 1
            </a>
          </li>
          <li>
            <a href="iqac.html" className="dropdown-item">
              IQAC
            </a>
          </li>
        </ul>
      </li>
      {/* Contact Us */}
      <li className="nav-item">
        <a href="contact.html" className="nav-link">
          Contact <span className="text-warning">Us</span>
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <style>{`
        /* Custom Navbar Styling */
        .custom-navbar {
          background-color: #002a5c !important;
          padding: 0.5rem 0;
          position: sticky;
          top: 0;
          z-index: 1030;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .custom-navbar .navbar-brand img {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          transition: transform 0.3s ease;
          object-fit: cover;
        }
        
        .custom-navbar .navbar-brand img:hover {
          transform: scale(1.05);
        }
        
        .custom-navbar .nav-link {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          font-size: 14px;
          padding: 12px 15px;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }
        
        .custom-navbar .nav-link:hover,
        .custom-navbar .nav-link.active,
        .custom-navbar .nav-link.show {
          color: #ffb100 !important;
        }
        
        .custom-navbar .dropdown-menu {
          background-color: #ffffff;
          border: none;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
          margin-top: 0;
          padding: 0.5rem 0;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .custom-navbar .dropdown-item {
          color: #333 !important;
          font-weight: 500;
          padding: 10px 20px;
          transition: all 0.2s ease;
          font-size: 14px;
        }
        
        .custom-navbar .dropdown-item:hover {
          background-color: #f7f7f7;
          color: #002a5c !important;
          padding-left: 25px;
        }
        
        .custom-navbar .dropdown-toggle::after {
          margin-left: 0.5rem;
          vertical-align: middle;
        }
        
        .apply-btn {
          background: #002a5c;
          color: #ffb100;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 8px;
          border: 2px solid #ffb100;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0, 42, 92, 0.3);
          font-size: 14px;
          white-space: nowrap;
        }
        
        .apply-btn:hover {
          background: #003a7c;
          color: #ffc933;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 42, 92, 0.5);
          border-color: #ffc933;
        }
        
        .apply-btn i {
          font-size: 16px;
          transition: transform 0.3s ease;
        }
        
        .apply-btn:hover i {
          transform: translateX(4px);
        }
        
        .navbar-toggler {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          padding: 6px 8px;
          background: none;
          outline: none;
        }
        
        .navbar-toggler:focus {
          box-shadow: none;
          border-color: #ffb100;
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          width: 1.2em;
          height: 1.2em;
        }
        
        .custom-offcanvas {
          background-color: #002a5c;
          color: white;
          width: 280px;
        }
        
        .custom-offcanvas .offcanvas-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
        }
        
        .custom-offcanvas .offcanvas-title {
          color: #ffb100;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        .custom-offcanvas .btn-close {
          filter: brightness(0) invert(1);
          opacity: 0.8;
        }
        
        .custom-offcanvas .btn-close:hover {
          opacity: 1;
        }
        
        .custom-offcanvas .nav-link {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 0;
          padding: 12px 20px;
        }
        
        .custom-offcanvas .dropdown-menu {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 0;
        }
        
        .custom-offcanvas .dropdown-item {
          color: rgba(255, 255, 255, 0.8) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 30px;
        }
        
        .custom-offcanvas .dropdown-item:hover {
          background-color: rgba(255, 177, 0, 0.1);
          color: #ffb100 !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 575.98px) {
          .custom-navbar .container-fluid {
            padding: 0 15px;
          }
          
          .custom-navbar .navbar-brand img {
            height: 50px;
            width: 50px;
          }
          
          .apply-btn {
            width: 100%;
            justify-content: center;
            margin-top: 1rem;
            padding: 12px 20px;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767.98px) {
          .custom-navbar .navbar-brand img {
            height: 55px;
            width: 55px;
          }
        }
        
        @media (min-width: 768px) and (max-width: 991.98px) {
          .custom-navbar .nav-link {
            font-size: 13px;
            padding: 10px 12px;
          }
          
          .custom-navbar .dropdown-item {
            font-size: 13px;
            padding: 8px 15px;
          }
        }
        
        @media (min-width: 992px) {
          .custom-navbar .container-fluid {
            max-width: 100%;
            padding: 0 2rem;
          }
          
          .custom-navbar .nav-item {
            margin-right: 5px;
          }
          
          .custom-navbar .nav-link {
            font-size: 15px;
            padding: 12px 18px;
          }
          
          .navbar-expand-lg .navbar-nav .dropdown-menu {
            position: absolute;
          }
        }
        
        @media (min-width: 1200px) {
          .custom-navbar .nav-link {
            font-size: 16px;
            padding: 12px 20px;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo */}
          <a href="index.html" className="navbar-brand">
            <img src="/ISMR logo_page-0001.jpg" alt="Institute Logo" />
          </a>

          {/* Apply Button - Mobile Top */}
          <div className="d-lg-none ms-auto me-3">
            <a href="admission.html" className="apply-btn d-none d-sm-inline-flex">
              Apply Now
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {navItems}

            {/* Apply Button - Desktop */}
            <div className="d-none d-lg-block ms-auto">
              <a href="admission.html" className="apply-btn">
                Apply Now
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>

          {/* Offcanvas Menu - Mobile */}
          <div
            className="offcanvas offcanvas-end custom-offcanvas d-lg-none"
            tabIndex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="navbarOffcanvasLabel">
                ISMR Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body p-0">
              {navItems}

              {/* Apply Button - Mobile */}
              <div className="p-3 border-top border-secondary">
                <a href="admission.html" className="apply-btn w-100 text-center">
                  Apply Now
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;