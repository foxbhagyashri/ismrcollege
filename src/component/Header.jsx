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
    // Only toggle if the navbar is open (mobile view) or if on desktop
    if (window.innerWidth < 992) {
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      // For desktop, simply toggle the dropdown on click
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };
  const toggleSubmenu = (index) => {
    if (window.innerWidth < 992) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    }
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null); // ✅ ADD THIS
    setIsNavbarOpen(false);

    // Close Bootstrap navbar collapse
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleHomeClick = (e) => {
    closeAll();
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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
          About
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 0 ? "show" : ""}`}>
          <li>
            <Link
              className="dropdown-item"
              to="/about-us"
              onClick={handleDropdownItemClick}
            >
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
              <li> <Link className="dropdown-item" to="/about-us/leadership-team/chairman-message" onClick={handleDropdownItemClick} > Message From Founder President </Link> </li> <li> <Link className="dropdown-item" to="/about-us/leadership-team/secretary-message" onClick={handleDropdownItemClick} > Message From Secretary </Link> </li> <li> <Link className="dropdown-item" to="/about-us/leadership-team/treasurer-message" onClick={handleDropdownItemClick} > Message From Treasurer </Link> </li> </ul>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/about-us/why-ismr"
              onClick={handleDropdownItemClick}
            >
              Why ISMR?
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/about-us/awards-and-rankings"
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
              to="/admissions/eligibility-criteria"
              onClick={handleDropdownItemClick}
            >
              Eligibility Criteria
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/admissions/how-to-apply"
              onClick={handleDropdownItemClick}
            >
              How To Apply
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/admissions/education-loan"
              onClick={handleDropdownItemClick}
            >
              Education Loan
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/admissions/refund-policy"
              onClick={handleDropdownItemClick}
            >
              Refund Policy
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/admissions/contact"
              onClick={handleDropdownItemClick}
            >
              Admission Contact
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/admissions/disclaimer"
              onClick={handleDropdownItemClick}
            >
              Disclaimer for Admissions
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/admissions/fee-disclaimer"
              onClick={handleDropdownItemClick}
            >
              Disclaimer for Fees Payment
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/admissions/fee-structure"
              onClick={handleDropdownItemClick}
            >
              Fees Structure
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/admissions/required-documents"
              onClick={handleDropdownItemClick}
            >
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
            <Link
              className="dropdown-item"
              to="/academics/programs-offered"
              onClick={handleDropdownItemClick}
            >
              Academics Overview
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/academics/programs"
              onClick={handleDropdownItemClick}
            >
              Programs & Duration
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/programs/mba-in-business-analytics-pune"
              onClick={handleDropdownItemClick}
            >
              MBA Program
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
              to="/placements"
              onClick={handleDropdownItemClick}
            >
              Placement Overview
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/placements/rules-and-regulations"
              onClick={handleDropdownItemClick}
            >
              Placement Rules & Regulations
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/placements/process"
              onClick={handleDropdownItemClick}
            >
              Placement Process
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/placements/internships-and-placements"
              onClick={handleDropdownItemClick}
            >
              Our Internship & Placement
            </Link>
          </li>

          {/* Cleaned up commented links */}

          {/* <li>
            <Link
              className="dropdown-item"
              to="/placements/corporate-partners"
              onClick={handleDropdownItemClick}
            >
              Corporate & Student Testimonials
            </Link>
          </li> */}

          {/* Cleaned up commented links */}
        </ul>
      </li>


      {/* Student Corner */}
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
          Student Corner
        </a>
        <ul className={`dropdown-menu ${activeDropdown === 6 ? "show" : ""}`}>
          <li>
            <a
              className="dropdown-item"
              href="https://ccvis.barti.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply For Caste Validity
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              href="https://cetcell.mahacet.org/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For MAH-CET Form
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://mahadbt.maharashtra.gov.in/Login/Login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For EBC & Scholarship Form
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://atmaaims.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For ATMA Entrance Exam Form
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://mat.aima.in/?utm_source=collegedunia&utm_medium=text11&utm_campaign=online"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For MAT Entrance Exam Form
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://cmat.nta.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For CMAT Entrance Exam Form
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              href="https://exam.unipune.ac.in/pages/ExamFormsOnline.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For MBA Exam Form
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://ndl.iitkgp.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For National Digital Library (NDL)
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://www.delnet.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For DELNET
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://swayam.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDropdownItemClick}
            >
              Apply For SWAYAM
            </a>
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
              to="/campus-life/student-life"
              onClick={handleDropdownItemClick}
            >
              Student Campus life
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/campus-life/student-facilities"
              onClick={handleDropdownItemClick}
            >
              Student Facilities
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item"
              to="/campus-life/newsletter"
              onClick={handleDropdownItemClick}
            >
              Newsletters
            </Link>
          </li>
        </ul>

      </li>



      {/* NAAC */}
      <li className="nav-item">
        <Link to="/naac" className="nav-link" onClick={handleNavLinkClick}>
          NAAC
        </Link>
      </li>

      {/* Contact Us */}
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link" onClick={handleNavLinkClick}>
          Reach Us
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <style>{`
        /* Custom Navbar Styling */
        .custom-navbar {
          padding: 10px 0 !important;
          min-height: 64px;
          width: 100%;
          font-family: 'Inter', Arial, Helvetica, sans-serif !important;
          display: flex;
          align-items: center;
          transition: background-color 0.35s ease, box-shadow 0.35s ease;
        }

        /* Transparent over Hero Video (Home Page at top) - Pure Transparent, No Blur */
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

        .custom-navbar.navbar-transparent .nav-link {
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
        }

        /* Scrolled state or on other internal pages - Fixed at top */
        .custom-navbar.navbar-scrolled {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 1050 !important;
          background-color: #002a5c !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25) !important;
          border-bottom: none;
        }
          

/* Parent li */
.dropdown-submenu {
  position: relative;
}

/* Submenu default */
.dropdown-submenu .submenu {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: #fff;
  padding: 10px 0;
  list-style: none;
  min-width: 180px;
  border: 1px solid #ddd;
  z-index: 999;
}

/* Desktop hover */
@media (min-width: 992px) {
  .dropdown-submenu:hover .submenu {
    display: block;
  }
}

/* Mobile click support */
@media (max-width: 991.98px) {
  .dropdown-submenu .submenu {
    position: static;
    display: none;
    background: #f8f9fa;
    border-radius: 8px;
    margin-top: 5px;
  }

  .dropdown-submenu.show .submenu {
    display: block;
  }

  .dropdown-submenu > a span {
    transform: rotate(90deg);
    transition: 0.3s;
  }

  .dropdown-submenu.show > a span {
    transform: rotate(180deg);
  }
}
/* Show on hover */
// .dropdown-submenu:hover .submenu {
//   display: block;
// }

/* Optional styling */
.submenu li a {
  padding: 8px 16px;
  display: block;
  white-space: nowrap;
}

        .custom-navbar .navbar-brand {
          position: relative;
          padding-left: 25px;
          margin-left: 15px;
        }

        .custom-navbar .navbar-brand img {
          height: 115px;
          width: 115px;
          border-radius: 50%;
          transition: transform 0.3s ease;
          object-fit: cover;
          position: absolute;
          top: -26px;
          left: 18px;
          z-index: 1031;
          border: 5px solid #002a5c;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .custom-navbar .navbar-brand img:hover {
          transform: scale(1.05);
        }
        
        .custom-navbar .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500;
          font-size: 13.5px;
          padding: 8px 11px !important;
          margin: 0 1px !important;
          border-radius: 6px;
          transition: all 0.2s ease;
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
          
          .custom-navbar .navbar-nav {
            margin-left: 150px !important;
            margin-right: 0 !important;
            display: flex !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
            gap: 4px;
          }

          .custom-navbar .container-fluid {
            max-width: 100%;
            padding: 0 15px !important;
          }
          
          .custom-navbar .nav-item {
            margin: 0 !important;
            white-space: nowrap !important;
          }
          
          .custom-navbar .nav-link {
            font-size: 13.2px !important;
            padding: 7px 9px !important;
            white-space: nowrap !important;
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
            padding: 8px 14px;
            font-size: 13px;
            white-space: nowrap;
          }
          
          /* Compact navigation for smaller desktop screens (992px to 1199px) */
          @media (max-width: 1199px) {
            .custom-navbar .navbar-nav {
              margin-left: 135px !important;
              gap: 2px !important;
            }

            .custom-navbar .nav-link {
              font-size: 12px !important;
              padding: 5px 6px !important;
              white-space: nowrap !important;
            }
            
            .custom-navbar .dropdown-item {
              font-size: 13px;
              padding: 8px 16px;
            }
            
            .apply-btn {
              padding: 6px 12px;
              font-size: 12px;
            }
          }
          
          /* Extra small desktop screens (992px to 1024px) */
          @media (max-width: 1024px) {
            .custom-navbar .navbar-nav {
              margin-left: 130px !important;
              gap: 1px !important;
            }

            .custom-navbar .nav-link {
              font-size: 11.5px !important;
              padding: 5px 5px !important;
              white-space: nowrap !important;
            }
            
            .custom-navbar .dropdown-item {
              font-size: 12px;
              padding: 6px 14px;
            }
            
            .apply-btn {
              padding: 6px 10px;
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
        
        /* Large desktop screens (1200px to 1399px) */
        @media (min-width: 1200px) and (max-width: 1399px) {
          .custom-navbar .navbar-nav {
            margin-left: 155px !important;
            gap: 4px !important;
          }
          
          .custom-navbar .nav-link {
            font-size: 13.2px !important;
            padding: 7px 9px !important;
            white-space: nowrap !important;
          }
          
          .apply-btn {
            padding: 8px 14px;
            font-size: 13px;
          }
        }
        
        /* Extra large screens (1400px+) */
        @media (min-width: 1400px) {
          .custom-navbar .navbar-nav {
            margin-left: 165px !important;
            gap: 6px !important;
          }
          
          .custom-navbar .nav-link {
            font-size: 15.8px !important;
            padding: 7px 11px !important;
            white-space: nowrap !important;
          }
          
          .apply-btn {
            padding: 8px 16px;
            font-size: 14px;
          }
        }
          /* MOBILE FIX */
@media (max-width: 768px) {
  .submenu {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
  }

  .submenu li a {
    font-size: 14px;
    color: #0a2240;
  }
}
      `}</style>

      <div
        className="header-wrapper"
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
            {/* Logo */}
            <Link to="/" className="navbar-brand" onClick={handleHomeClick}>
              <img src="/ISMR logo_page-0001.jpg" alt="Institute Logo" />
            </Link>

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
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarNav"
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
      </div>
    </>
  );
};

export default Header;
