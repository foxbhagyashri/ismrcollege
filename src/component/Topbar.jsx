import React, { useState, useEffect } from "react";
import "./TopHeader.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./forms/ContactForm";
import { Link, useLocation } from "react-router-dom";
import ISMRFormModal from "./forms/ISMRFormModal";

const TopHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "";

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

    return (
        <>
            <div className={`top-header-area ${isHomePage && !isScrolled ? "topbar-transparent" : "topbar-solid"}`}>
                <div className="container-fluid d-flex justify-content-between align-items-center top-header-container">
                    {/* Left Section */}
                    <div className="top-header-left">
                        <ul>
                            <li>

                                <div className="brand-text">

                                    <h1>ISMR Business School, Pune</h1>
                                </div>
                            </li>

                            {/* <li>
                                <a href="mailto:admissions@ismrpune.edu.in">
                                    <i className="ri-mail-line"></i>{" "}
                                    admissions@ismrpune.edu.in
                                </a>
                            </li> */}




                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="top-header-right">
                        <ul className="list-unstyled d-flex gap-2 mb-0">
                            <li>
                                <Link
                                    to="/blogs"
                                    className="btn btn-sm"
                                    style={{
                                        // backgroundColor: "#ffc333",
                                        color: "#fff",
                                        fontWeight: "600",
                                    }}
                                >
                                    Blogs
                                </Link>
                            </li>
                            {/* <li className="notice-dropdown">
                                <Link
                                    to="#"
                                    className="btn btn-sm  flashy-notice"
                                    onClick={() => setOpen(!open)}
                                >
                                    Notices ▾
                                </Link>

                                {open && (
                                    <ul className="notice-menu">
                                        <li>
                                            <Link to="/notices/admission-notice">
                                                ADMISSIONS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/notices/academics">
                                                ACADEMICS
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                )}
                            </li> */}

                            <li>
                                <Link  to="/Careers"
                                 
                                    className="btn btn-sm"
                                    style={{
                                        backgroundColor: "#ffc333",
                                        color: "#2c2626ff",
                                        fontWeight: "600",
                                    }}
                                >
                                    Career @ ISMR
                                </Link>
                            </li>


                            <li>
                                <button
                                    onClick={() =>
                                    (window.location.href =
                                        "https://cetcell.mahacet.org/")
                                    }
                                    className="btn btn-sm"
                                    style={{
                                        backgroundColor: "#ffc333",
                                        color: "#2c2626ff",
                                        fontWeight: "600",
                                    }}
                                >
                                    Apply for MH-CET Exam
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                    (window.location.href =
                                        "https://fees.easebuzz.in/view/ISMR_Pune")
                                    }
                                    className="btn btn-sm"
                                    style={{
                                        backgroundColor: "#ffc333",
                                        color: "#2c2626ff",
                                        fontWeight: "600",
                                    }}
                                >
                                    Pay Fees Online
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="btn btn-sm"
                                    style={{
                                        backgroundColor: "#ffc333",
                                        color: "#2c2626ff",
                                        fontWeight: "600",
                                    }}
                                >
                                    Registration Form
                                </button>
                            </li>

                            {/* <li>
                                <Link to="/contact-us"

                                    className="btn btn-sm"
                                    style={{
                                       
                                        color: "#fff",
                                        fontWeight: "600",
                                    }}
                                >
                                    NACC
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/contact-us"

                                    className="btn btn-sm"
                                    style={{
                                        // backgroundColor: "#ffc333",
                                        color: "#fff",
                                        fontWeight: "600",
                                    }}
                                >
                                    Reach Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>

            {/* -------- MODAL -------- */}

            {showModal && (
                <ISMRFormModal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}

            {/* {showModal && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-content rounded-3 p-4"
            style={{
              backgroundColor: "#fff",
              maxWidth: "500px",
              width: "90%",
            }}
          >
            <h4 style={{ color: "#0a2240", marginBottom: "1rem" }}>
              Enquiry Form
            </h4>

            <ContactForm />

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "10px",
                background: "transparent",
                border: "none",
                color: "#d95c5c",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
        </>
    );
};

export default TopHeader;
