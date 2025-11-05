import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header-area">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Section - Contact Info */}
        <div className="top-header-left">
          <ul>
            <li>
              <a href="tel:+919923786079">
                <i className="ri-phone-fill"></i> +91 9923786079
              </a>
            </li>
            <li>
              <a href="mailto:admissions@ismrpune.edu.in">
                <i className="ri-mail-line"></i> admissions@ismrpune.edu.in
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Buttons */}
        <div className="top-header-right">
          <ul className="list-unstyled d-flex gap-2 mb-0">
            <li>
              <button
                onClick={() => (window.location.href = "/Appltonline")}
                className="btn btn-sm"
                style={{
                  backgroundColor: "#dcb413ff",
                  color: "#2c2626ff",
                  border: "none",
                }}
              >
                Pay Fees
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/register")}
                className="btn btn-sm"
                style={{
                  backgroundColor: "#dcb413ff",
                  color: "#2c2626ff",
                  border: "none",
                }}
              >
                Apply Online
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
