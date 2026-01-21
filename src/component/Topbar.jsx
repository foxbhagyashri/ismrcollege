import React, { useState } from "react";
import "./TopHeader.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./form/ContactForm";
import { Link } from "react-router-dom";
import ISMRFormModal from "./form/ISMRFormModal";

const TopHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="top-header-area">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Left Section */}
                    <div className="top-header-left">
                        <ul>
                            <li>
                                <a href="tel:+919923786079">
                                    <i className="ri-phone-fill"></i> +91
                                    9923786079
                                </a>
                            </li>

                            <li>
                                <a href="mailto:admissions@ismrpune.edu.in">
                                    <i className="ri-mail-line"></i>{" "}
                                    admissions@ismrpune.edu.in
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.facebook.com/ismrcollegepune/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/ismrofficial/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/school/international-school-of-management-and-research-pune/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="top-header-right">
                        <ul className="list-unstyled d-flex gap-2 mb-0">
                            <li>
                                <Link
                                    to="/Blogs"
                                    className="btn btn-sm text-white"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li className="notice-dropdown">
                                <Link
                                    to="#"
                                    className="btn btn-sm text-white flashy-notice"
                                    onClick={() => setOpen(!open)}
                                >
                                    Notices ▾
                                </Link>

                                {open && (
                                    <ul className="notice-menu">
                                        <li>
                                            <Link to="/notices/Admissions">
                                                ADMISSIONS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/notices/academics">
                                                ACADEMICS
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/notices/placements">
                                                PLACEMENTS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/notices/cultural">
                                                CULTURAL
                                            </Link>
                                        </li> */}
                                    </ul>
                                )}
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
                                    Apply For MAH – CET
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
                                    Apply for MBA
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
                                    Apply for BBA / BCA
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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
