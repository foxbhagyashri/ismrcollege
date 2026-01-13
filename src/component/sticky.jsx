import React, { useState } from "react";
import "./sticky.css";
import ContactForm from "./form/ContactForm";
// import ReCAPTCHA from "react-google-recaptcha";
import ISMRFormModal from "./form/ISMRFormModal";

const Sticky = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
        program: "",
    });

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {/* Sticky Button */}
            <div className="apply-now-sticky">
                <button
                    className="apply-now-btn rotated"
                    aria-label="Apply Now"
                    onClick={() => setShowModal(true)}
                >
                    Apply Now
                </button>
            </div>

            {/* -------- FORM MODAL -------- */}
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
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
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
        </div>
    );
};

export default Sticky;
