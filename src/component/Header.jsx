import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (index) => {
    // Only toggle if the navbar is open (mobile view) or if on desktop
    if (window.innerWidth < 992) {
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      // For desktop, simply toggle the dropdown on click
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsNavbarOpen(false);

    // Close Bootstrap navbar collapse
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleNavLinkClick = () => {
    closeAll();
  };

  const handleDropdownItemClick = () => {
    closeAll();
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (!isNavbarOpen) {
      setActiveDropdown(null); // Close any open dropdown when opening the navbar
    }
  };

  // Close dropdowns when clicking outside (Desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth >= 992 && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns when window is resized to mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = (
    <ul
      className="navbar-nav mb-2 mb-lg-0"
      // Removed inline style for margin, now handled by CSS media query
    >
      {/* Home */}
      <li className="nav-item">
        <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
          Home
        </Link>
      </li>

      {/* About Dropdown */}
      <li className={`nav-item dropdown ${activeDropdown === 0 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(0);
          }}
          aria-expanded={activeDropdown === 0}
        >
          About
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 0 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/Aboutpage/Aboutinstutue"
              onClick={handleDropdownItemClick}
            >
              About Institute
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/Aboutpage/Leadership"
              onClick={handleDropdownItemClick}
            >
              Leadership Team
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/Aboutpage/Ismr"
              onClick={handleDropdownItemClick}
            >
              Why ISMR?
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/Aboutpage/Award"
              onClick={handleDropdownItemClick}
            >
              Awards & Ranking
            </Link>
          </li>
        </ul>
      </li>

      {/* Admissions Dropdown */}
      <li className={`nav-item dropdown ${activeDropdown === 1 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(1);
          }}
          aria-expanded={activeDropdown === 1}
        >
          Admissions
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 1 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Eligibility-criteria"
              onClick={handleDropdownItemClick}
            >
              Eligibility Criteria
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Howtoapply"
              onClick={handleDropdownItemClick}
            >
              How To Apply
            </Link>
          </li>
          {/* <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Eligibility-criteria" // Note: This link path is a duplicate
              onClick={handleDropdownItemClick}
            >
              List Of Documents
            </Link>
          </li> */}
          <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Educationloan"
              onClick={handleDropdownItemClick}
            >
              Education Loan
            </Link>
          </li>
          
          <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Refundpolicy"
              onClick={handleDropdownItemClick}
            >
              Refund Policy
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Feesstructure"
              onClick={handleDropdownItemClick}
            >
              Fees Structure
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Admissioncontact"
              onClick={handleDropdownItemClick}
            >
              Admission Contact
            </Link>
          </li>
            <li>
            <Link
              className="dropdown-item"
              to="/Addmissions/Disclaimer"
              onClick={handleDropdownItemClick}
            >
              Disclaimer
            </Link>
          </li>
        </ul>
      </li>
      {/* Academics Dropdown */}
      <li className={`nav-item dropdown ${activeDropdown === 4 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(4);
          }}
          aria-expanded={activeDropdown === 4}
        >
          Academics
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 4 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/Academics/Academics"
              onClick={handleDropdownItemClick}
            >
              Academics
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/Academics/Courseduration"
              onClick={handleDropdownItemClick}
            >
              Course Duration
            </Link>
          </li>

          {/* Cleaned up commented links */}
        </ul>
      </li>
      {/* Placement Dropdown */}
      <li className={`nav-item dropdown ${activeDropdown === 2 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(2);
          }}
          aria-expanded={activeDropdown === 2}
        >
          Placement
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 2 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/Placementpage/Placementoverview"
              onClick={handleDropdownItemClick}
            >
              Placement Overview
            </Link>
          </li>

          {/* Cleaned up commented links */}

          <li>
            <Link
              className="dropdown-item"
              to="/Placementpage/Ourplacement"
              onClick={handleDropdownItemClick}
            >
              Our Internship & Placement
            </Link>
          </li>

          {/* Cleaned up commented links */}

          <li>
            <Link
              className="dropdown-item"
              to="/Placementpage/Corporate"
              onClick={handleDropdownItemClick}
            >
              Corporate & Student Testimonials
            </Link>
          </li>

          {/* Cleaned up commented links */}
        </ul>
      </li>

      {/* Life @ Campus Dropdown */}
      <li className={`nav-item dropdown ${activeDropdown === 3 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(3);
          }}
          aria-expanded={activeDropdown === 3}
        >
          Life @ Campus
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 3 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/Life@campus/Studentcampus"
              onClick={handleDropdownItemClick}
            >
              Student Campus life
            </Link>
          </li>
          {/* Cleaned up commented links */}

          <li>
            <Link
              className="dropdown-item"
              to="/Life@campus/StudentFacilities"
              onClick={handleDropdownItemClick}
            >
              Student Facilities
            </Link>
          </li>
          
          <li>
            <Link
              className="dropdown-item"
              to="/NewsPage/Newsletter"
              onClick={handleDropdownItemClick}
            >
              Newsletters
            </Link>
          </li>
  
        </ul>
        
      </li>

      {/* Newsletter Dropdown
      <li className={`nav-item dropdown ${activeDropdown === 6 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(6);
          }}
          aria-expanded={activeDropdown === 6}
        >
          Newsletter
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 6 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/NewsPage/Newsletter"
              onClick={handleDropdownItemClick}
            >
              All Newsletters
            </Link>
          </li>
        </ul>
      </li> */}

      {/* NAAC Dropdown */}
      <li className={`nav-item dropdown ${activeDropdown === 7 ? "show" : ""}`}>
        <a
          href="#"
          className="nav-link dropdown-toggle"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(7);
          }}
          aria-expanded={activeDropdown === 7}
        >
          NAAC
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 7 ? "show" : ""}`}>
          <li>
            <a
              href="accreditation-certificate.html"
              className="dropdown-item"
              onClick={handleDropdownItemClick}
            >
              Accreditation Certificate
            </a>
          </li>
          <li>
            <a
              href="ssr-cycle1.html"
              className="dropdown-item"
              onClick={handleDropdownItemClick}
            >
              SSR – Cycle 1
            </a>
          </li>
          <li>
            <a
              href="assessment-sheet-cycle1.html"
              className="dropdown-item"
              onClick={handleDropdownItemClick}
            >
              Assessment Sheet – Cycle 1
            </a>
          </li>
          <li>
            <a
              href="iqac.html"
              className="dropdown-item"
              onClick={handleDropdownItemClick}
            >
              IQAC
            </a>
          </li>
        </ul>
      </li>

      {/* Contact Us */}
      <li className="nav-item">
        <Link to="/Contactus" className="nav-link" onClick={handleNavLinkClick}>
          Contact Us
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <style>{`
        /* Custom Navbar Styling */
        .custom-navbar {
          background-color: #002a5c !important;
          // padding: 10px 0;
          padding: 3px;
          position: sticky;
          top: 0;
           
          z-index: 1030;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          font-family: 'Inter', Arial, Helvetica, sans-serif !important;
        }
          
        
        .custom-navbar .navbar-brand {
          position: relative;
          padding-left: 25px;
          margin-left: 15px;
          
        }

        .custom-navbar .navbar-brand img {
          height: 125px;
            
          width: 125px;
          border-radius: 50%;
          transition: transform 0.3s ease;
          object-fit: cover;
          position: absolute;
          top: -20px;
          
          left: 18px;
          z-index: 1031;
          border: 6px solid #002a5c;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        
        .custom-navbar .navbar-brand img:hover {
          transform: scale(1.05);
        }
        
        .custom-navbar .nav-link {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          font-size: 16px;
          padding: 18px 22px;
          margin: 2px 12px;
          transition: all 0.3s ease;
          text-transform: capitalize;
          cursor: pointer;
          letter-spacing: 0.2px;
          
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
          cursor: pointer;
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
          cursor: pointer;
          flex-shrink: 0;
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
        
        /* Desktop-specific styles - FIXED DROPDOWN BEHAVIOR */
        @media (min-width: 992px) {
          
          /* NEW: Apply desktop-only margins for ul */
          .custom-navbar .navbar-nav {
            margin-left: 110px !important;
            margin-right: 70px !important;
          }

          .custom-navbar .container-fluid {
            max-width: 100%;
            padding: 0 1rem;
          }
          
          .custom-navbar .nav-item {
            margin-right: 5px;
            margin-left: 5px;
          }
          
          .custom-navbar .nav-link {
            font-size: 14px;
            padding: 12px 14px;
          }
          
          /* FIX: Proper Bootstrap dropdown behavior */
          .navbar-expand-lg .navbar-nav .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1000;
            display: none;
            float: left;
            min-width: 10rem;
            margin: 0.125rem 0 0;
            font-size: 1rem;
            color: #212529;
            text-align: left;
            list-style: none;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 0.375rem;
          }
          
          .navbar-expand-lg .navbar-nav .dropdown-menu.show {
            display: block;
          }
          
          /* FIX: Ensure dropdowns open downwards properly */
          .custom-navbar .dropdown-menu {
            margin-top: 0;
            border: none;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
          }
          
          /* FIX: Remove any overlay issues */
          .custom-navbar .dropdown {
            position: relative;
          }
          
          .custom-navbar .dropdown-toggle::after {
            display: inline-block;
            margin-left: 0.255em;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
          }
          
          /* Apply button responsiveness */
          .apply-btn-container {
            margin-left: auto;
            flex-shrink: 0;
          }
          
          .apply-btn {
            padding: 10px 16px;
            font-size: 13px;
            white-space: nowrap;
          }
          
          /* Compact navigation for smaller desktop screens */
          @media (max-width: 1199px) {
            .custom-navbar .nav-link {
              font-size: 13px;
              padding: 10px 12px;
            }
            
            .custom-navbar .dropdown-item {
              font-size: 13px;
              padding: 8px 16px;
            }
            
            .apply-btn {
              padding: 8px 14px;
              font-size: 12px;
            }
          }
          
          /* Extra small desktop screens */
          @media (max-width: 1024px) {
            .custom-navbar .nav-link {
              font-size: 12px;
              padding: 8px 10px;
            }
            
            .custom-navbar .dropdown-item {
              font-size: 12px;
              padding: 6px 14px;
            }
            
            .apply-btn {
              padding: 6px 12px;
              font-size: 11px;
            }
          }
        }
        
        /* Mobile-specific styles (max-width: 991.98px) */
        @media (max-width: 991.98px) {
          
          /* NEW: Override ul margins for mobile */
          .custom-navbar .navbar-nav {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .custom-navbar .navbar-collapse {
            background-color: #002a5c;
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .custom-navbar .dropdown-menu {
            position: static !important;
            transform: none !important;
            width: 100%;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          
          .custom-navbar .dropdown.show .dropdown-menu {
            display: block;
            animation: slideInRight 0.3s ease;
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .custom-navbar .nav-item.dropdown {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .custom-navbar .dropdown-toggle::after {
            float: right;
            margin-top: 8px;
            transform: rotate(-90deg);
            transition: transform 0.3s ease;
          }
          
          .custom-navbar .dropdown.show .dropdown-toggle::after {
            transform: rotate(0deg);
          }
          
          .custom-navbar .dropdown-item {
            padding: 12px 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            font-size: 14px;
          }
          
          .custom-navbar .dropdown-item:hover {
            padding-left: 25px; /* Keep hover effect consistent */
          }

          .custom-navbar .dropdown-item:last-child {
            border-bottom: none;
          }
          
          /* KEY CHANGE: Left align text and space out arrow */
          .custom-navbar .nav-link {
            padding: 15px 0;
            display: flex;
            justify-content: space-between; /* Pushes toggle to the far right */
            align-items: center;
            font-size: 16px;
            padding-left: 15px; /* Added left padding for text alignment */
            padding-right: 15px; /* Added right padding */
          }
          
          /* Ensure non-dropdown links also align cleanly */
          .navbar-nav .nav-item:not(.dropdown) .nav-link {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            justify-content: flex-start;
          }
          
          /* Mobile apply button */
          .mobile-apply-btn {
            width: 100%;
            justify-content: center;
            margin-top: 1rem;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 575.98px) {
          .custom-navbar .container-fluid {
            padding: 0 10px;
          }
          
          .custom-navbar .navbar-brand img {
            
            height: 70px;
            width: 70px;
            border-radius: 50%;
            transition: transform 0.3s ease;
            object-fit: cover;
            position: absolute;
            top: -18px;
            
            left: -4px;
            z-index: 1031;
            border: 4px solid #002a5c;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          }
          
          .apply-btn {
            width: 100%;
            justify-content: center;
            margin-top: 1rem;
            padding: 12px 20px;
            font-size: 14px;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767.98px) {
          .custom-navbar .navbar-brand img {
            height: 30px;
            width: 30px;
          
          }
        }
        
        @media (min-width: 768px) and (max-width: 991.98px) {
          .custom-navbar .nav-link {
            font-size: 15px; /* Slightly larger for larger tablets */
            padding: 8px 15px;
          }
          
          .custom-navbar .dropdown-item {
            font-size: 14px;
            padding: 10px 20px;
          }
        }
        
        /* Large desktop screens */
        @media (min-width: 1200px) {
          .custom-navbar .nav-link {
            font-size: 15px;
            padding: 12px 18px;
          }
          
          .apply-btn {
            padding: 12px 20px;
            font-size: 14px;
          }
        }
        
        /* Extra large screens */
        @media (min-width: 1400px) {
          .custom-navbar .nav-link {
            font-size: 16px;
            padding: 12px 20px;
          }
          
          .apply-btn {
            padding: 12px 24px;
            font-size: 15px;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar" ref={navbarRef}>
        <div className="container-fluid">
          {/* Logo */}
          <a href="/" className="navbar-brand">
            <img src="/ISMR logo_page-0001.jpg" alt="Institute Logo" />
          </a>

          {/* Apply Button - Mobile Top */}
          <div className="d-lg-none ms-auto me-2">
            <a
              href="admission.html"
              className="apply-btn d-none d-sm-inline-flex"
              onClick={handleNavLinkClick}
            >
              Apply Now
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop & Mobile Navigation */}
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarNav"
          >
            {navItems}
            {/* Mobile-specific Apply Now Button (inside the collapsed menu) */}
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;