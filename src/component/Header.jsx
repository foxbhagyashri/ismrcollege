import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
      document.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, [location.pathname]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const toggleSubmenu = (index) => {
    if (window.innerWidth < 992) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    }
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsNavbarOpen(false);

    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleHomeClick = (e) => {
    closeAll();
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handleNavLinkClick = () => {
    closeAll();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleDropdownItemClick = () => {
    closeAll();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (!isNavbarOpen) {
      setActiveDropdown(null);
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on resize to mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = (
    <ul className="navbar-nav mb-2 mb-lg-0">
      {/* Home */}
      <li className="nav-item">
        <Link className="nav-link" to="/" onClick={handleHomeClick}>
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
          About Us
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 0 ? "show" : ""}`}>
          <li>
            <Link className="dropdown-item" to="/about-us" onClick={handleDropdownItemClick}>
              About Institute
            </Link>
          </li>
          <li className={`dropdown-submenu ${activeSubmenu === 0 ? "show" : ""}`}>
            <a
              href="#"
              className="dropdown-item d-flex justify-content-between align-items-center"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu(0);
              }}
            >
              Leadership Team
              <span>›</span>
            </a>
            <ul className={`submenu ${activeSubmenu === 0 ? "show" : ""}`}>
              <li>
                <Link className="dropdown-item" to="/about-us/leadership-team/chairman-message" onClick={handleDropdownItemClick}>
                  Message From Founder President
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about-us/leadership-team/secretary-message" onClick={handleDropdownItemClick}>
                  Message From Secretary
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about-us/leadership-team/treasurer-message" onClick={handleDropdownItemClick}>
                  Message From Treasurer
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="dropdown-item" to="/about-us/why-ismr" onClick={handleDropdownItemClick}>
              Why ISMR?
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/about-us/awards-and-rankings" onClick={handleDropdownItemClick}>
              Awards & Ranking
            </Link>
          </li>
        </ul>
      </li>

      {/* Admission Dropdown */}
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
          Admission
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 1 ? "show" : ""}`}>
          <li>
            <Link className="dropdown-item" to="/admissions/eligibility-criteria" onClick={handleDropdownItemClick}>
              Eligibility Criteria
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/how-to-apply" onClick={handleDropdownItemClick}>
              How To Apply
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/education-loan" onClick={handleDropdownItemClick}>
              Education Loan
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/refund-policy" onClick={handleDropdownItemClick}>
              Refund Policy
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/contact" onClick={handleDropdownItemClick}>
              Admission Contact
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/disclaimer" onClick={handleDropdownItemClick}>
              Disclaimer for Admissions
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/fee-disclaimer" onClick={handleDropdownItemClick}>
              Disclaimer for Fees Payment
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/fee-structure" onClick={handleDropdownItemClick}>
              Fees Structure
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admissions/required-documents" onClick={handleDropdownItemClick}>
              List Of Documents
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
            <Link className="dropdown-item" to="/academics/programs-offered" onClick={handleDropdownItemClick}>
              Academics Overview
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/academics/programs" onClick={handleDropdownItemClick}>
              Programs & Duration
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/academics/mba-program" onClick={handleDropdownItemClick}>
              MBA Program
            </Link>
          </li>
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
            <Link className="dropdown-item" to="/placements" onClick={handleDropdownItemClick}>
              Placement Overview
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/placements/rules-and-regulations" onClick={handleDropdownItemClick}>
              Placement Rules & Regulations
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/placements/process" onClick={handleDropdownItemClick}>
              Placement Process
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/placements/internships-and-placements" onClick={handleDropdownItemClick}>
              Our Internship & Placement
            </Link>
          </li>
        </ul>
      </li>

      {/* Life @ ISMR Dropdown */}
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
          Life @ ISMR
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 3 ? "show" : ""}`}>
          <li>
            <Link className="dropdown-item" to="/campus-life/student-life" onClick={handleDropdownItemClick}>
              Student Campus life
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/campus-life/student-facilities" onClick={handleDropdownItemClick}>
              Student Facilities
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/campus-life/newsletter" onClick={handleDropdownItemClick}>
              Newsletters
            </Link>
          </li>
        </ul>
      </li>

      {/* Students Corner Dropdown */}
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
          Students Corner
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 6 ? "show" : ""}`}>
          <li>
            <a className="dropdown-item" href="https://ccvis.barti.in/" target="_blank" rel="noopener noreferrer">
              Apply For Caste Validity
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://cetcell.mahacet.org/" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For MAH-CET Form
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://mahadbt.maharashtra.gov.in/Login/Login" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For EBC & Scholarship Form
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://atmaaims.com/" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For ATMA Entrance Exam Form
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://mat.aima.in/?utm_source=collegedunia&utm_medium=text11&utm_campaign=online" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For MAT Entrance Exam Form
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://cmat.nta.nic.in/" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For CMAT Entrance Exam Form
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://exam.unipune.ac.in/pages/ExamFormsOnline.html" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For MBA Exam Form
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For National Digital Library (NDL)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://www.delnet.in/" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For DELNET
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer" onClick={handleDropdownItemClick}>
              Apply For SWAYAM
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );

  return (
    <>
      <style>{`
        /* ===================== MAIN NAVBAR ===================== */
        .custom-navbar {
          padding: 10px 0 !important;
          min-height: 64px;
          width: 100%;
          font-family: 'Inter', Arial, Helvetica, sans-serif !important;
          display: flex;
          align-items: center;
          transition: background-color 0.35s ease, box-shadow 0.35s ease;
        }
.navbar-collapse {
    flex-grow: unset!important;
      }
        .custom-navbar.navbar-transparent {
          position: relative !important;
          z-index: 1030;
          background: transparent !important;
          background-color: transparent !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          box-shadow: none !important;
          border: none !important;
          border-bottom: none !important;
        }

        // .custom-navbar.navbar-transparent .nav-link,
        // .custom-navbar.navbar-transparent .brand-text h1,
        // .custom-navbar.navbar-transparent .brand-text h2,
        // .custom-navbar.navbar-transparent .brand-text p {
        //   text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
        // }

        .custom-navbar.navbar-scrolled {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 1050 !important;
          background-color: #fff !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25) !important;
          border-bottom: none;
        }

        .header-wrapper.header-fixed {
          padding-top: 0;
        }

        /* Brand block: logo + school name/tagline */
        .custom-navbar .navbar-brand.brand-block {
          // display: flex;
          align-items: center;
          gap: 14px;
          padding-left: 0;
          margin-left: 15px;
          text-decoration: none;
          min-width: 0;
        }

        .custom-navbar .brand-block img {
          height: 68px;
          width: 68px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #002a5c;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .custom-navbar .brand-block:hover img {
          transform: scale(1.05);
        }

        .brand-text {
          display: block!important;
 
          line-height: 1.25;
          min-width: 0;
        }
        .brand-text h1 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }
        .brand-text h2 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          color: #ffb100;
        }
        .brand-text p {
          margin: 2px 0 0;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          white-space: normal;
        }
        .navbar-transparent .brand-text h1,
        .navbar-transparent .brand-text p {
          color: #000;
        }

        .custom-navbar .nav-link {
          color: #000 !important;
          font-weight: 500;
          font-size: 13.5px;
          padding: 8px 11px !important;
          margin: 0 1px !important;
          border-radius: 6px;
          // transition: all 0.2s ease;
          text-transform: capitalize;
          cursor: pointer;
          letter-spacing: 0.15px;
          white-space: nowrap !important;
          display: inline-flex;
          align-items: center;
        }

        .custom-navbar .nav-link:hover {
          color: #ffb100 !important;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .custom-navbar .nav-link.active,
        .custom-navbar .nav-link.show,
        .custom-navbar .nav-item.dropdown.show > .nav-link {
          color: #ffb100 !important;
          background-color: rgba(255, 177, 0, 0.15);
          font-weight: 600;
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
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
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

        /* Submenu (Leadership Team) */
        .dropdown-submenu { position: relative; }
        .dropdown-submenu .submenu {
          display: none;
          position: absolute;
          top: 0;
          left: 100%;
          background: #fff;
          padding: 10px 0;
          list-style: none;
          min-width: 220px;
          border: 1px solid #ddd;
          border-radius: 8px;
          z-index: 999;
        }
        @media (min-width: 992px) {
          .dropdown-submenu:hover .submenu { display: block; }
        }
        .submenu li a { padding: 8px 16px; display: block; white-space: nowrap; }

        /* ===================== DESKTOP LAYOUT ===================== */
        @media (min-width: 992px) {
          .custom-navbar .container-fluid {
            max-width: 100%;
            padding: 0 20px !important;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .custom-navbar .navbar-nav {
            display: flex !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
            gap: 4px;
            margin: 0 !important;
          }

          .custom-navbar .nav-item { margin: 0 !important; white-space: nowrap !important; }

          .navbar-expand-lg .navbar-nav .dropdown-menu {
            position: absolute;
            top: 100%;
            left: -166px;
            z-index: 1000;
            display: none;
            float: left;
            min-width: 12rem;
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
          .navbar-expand-lg .navbar-nav .dropdown-menu.show { display: block; }
          .custom-navbar .dropdown { position: relative; }

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

          @media (max-width: 1199px) {
            .custom-navbar .navbar-nav { gap: 2px !important; }
            .custom-navbar .nav-link { font-size: 12px !important; padding: 5px 6px !important; }
            .custom-navbar .dropdown-item { font-size: 13px; padding: 8px 16px; }
            .brand-text h1, .brand-text h2 { font-size: 13px; }
            .custom-navbar .brand-block img { height: 58px; width: 58px; }
          }

          @media (max-width: 1024px) {
            .custom-navbar .navbar-nav { gap: 1px !important; }
            .custom-navbar .nav-link { font-size: 11.5px !important; padding: 5px 5px !important; }
            .custom-navbar .dropdown-item { font-size: 12px; padding: 6px 14px; }
          }
        }

        /* Large desktop screens (1200px to 1399px) */
        @media (min-width: 1200px) and (max-width: 1399px) {
          .custom-navbar .navbar-nav { gap: 4px !important; }
          .custom-navbar .nav-link { font-size: 13.2px !important; padding: 7px 9px !important; }
        }

        /* Extra large screens (1400px+) */
        @media (min-width: 1400px) {
          .custom-navbar .navbar-nav { gap: 6px !important; }
          .custom-navbar .nav-link { font-size: 15px !important; padding: 7px 11px !important; }
          .brand-text h1, .brand-text h2 { font-size: 16px; }
          .custom-navbar .brand-block img { height: 78px; width: 78px; }
        }

        /* ===================== MOBILE LAYOUT (<992px) ===================== */
        @media (max-width: 991.98px) {
          .custom-navbar .container-fluid {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0 12px !important;
          }

          .custom-navbar .brand-block {
            margin-left: 0;
            gap: 10px;
            flex: 1 1 auto;
            min-width: 0;
          }

          .custom-navbar .brand-block img {
            height: 46px;
            width: 46px;
            border-width: 3px;
          }

          .brand-text h1, .brand-text h2 { font-size: 12px; }
          .brand-text p { font-size: 9.5px; }
          /* Hide the two affiliation lines on very small screens to save space */
          .brand-text p:nth-of-type(2) { display: none; }

          .navbar-toggler { flex-shrink: 0; }

          .custom-navbar .navbar-nav { margin: 0 !important; width: 100%; }

          .custom-navbar .navbar-collapse {
            background-color: #002a5c;
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            max-height: 75vh;
            overflow-y: auto;
            width: 100%;
            flex-basis: 100%;
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
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
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
          .custom-navbar .dropdown.show .dropdown-toggle::after { transform: rotate(0deg); }

          .custom-navbar .dropdown-item {
            padding: 12px 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            font-size: 14px;
          }
          .custom-navbar .dropdown-item:hover { padding-left: 25px; }
          .custom-navbar .dropdown-item:last-child { border-bottom: none; }

          .custom-navbar .nav-link {
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
          }

          .navbar-nav .nav-item:not(.dropdown) .nav-link {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            justify-content: flex-start;
          }

          .dropdown-submenu .submenu {
            position: static;
            display: none;
            background: #f5f5f5;
            border-radius: 8px 10px 10px 8px;
            margin-top: 5px;
            padding: 10px;
          }
          .dropdown-submenu.show .submenu { display: block; }
          .submenu li a { font-size: 14px; color: #0a2240; }
          .dropdown-submenu > a span { transform: rotate(90deg); transition: 0.3s; display: inline-block; }
          .dropdown-submenu.show > a span { transform: rotate(180deg); }
        }

        /* Extra small phones */
        @media (max-width: 575.98px) {
          .custom-navbar .brand-block img {
            height: 38px;
            width: 38px;
            border-width: 2px;
          }
          .brand-text h1, .brand-text h2 { font-size: 10.5px; }
          .brand-text p { display: none; } /* hide all sub-lines on the smallest screens */
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .custom-navbar .nav-link { font-size: 15px; padding: 8px 15px; }
          .custom-navbar .dropdown-item { font-size: 14px; padding: 10px 20px; }
        }
      `}</style>

      <div
        className={`header-wrapper ${!isHomePage || isScrolled ? "header-fixed" : ""}`}
        style={{
          minHeight: !isHomePage && isScrolled ? "84px" : "auto",
        }}
      >
        <nav
          className={`navbar navbar-expand-lg custom-navbar ${isHomePage && !isScrolled ? "navbar-transparent" : "navbar-scrolled"
            }`}
          style={{
            position: isHomePage && !isScrolled ? "relative" : "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 1050,
            backgroundColor: isHomePage && !isScrolled ? "transparent" : "#002a5c",
            transition: "background-color 0.35s ease, box-shadow 0.35s ease",
            boxShadow: isHomePage && !isScrolled ? "none" : "0 4px 20px rgba(0, 0, 0, 0.25)",
          }}
          ref={navbarRef}
        >
          <div className="container-fluid">
            {/* Logo + School Name / Tagline */}
            <Link to="/" className="navbar-brand brand-block" onClick={handleHomeClick} style={{ textAlign: "center" }}>
              <img src="/ISMR logo_page-0001.jpg" alt="Institute Logo" />
              <div className="brand-text">

                <h2>ISMR Business School, Pune</h2>

              </div>
            </Link>

            {/* Mobile Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarNav"
              aria-expanded={isNavbarOpen}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Desktop & Mobile Navigation */}
            <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
              {navItems}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;