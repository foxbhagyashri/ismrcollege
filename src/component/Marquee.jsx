import React from "react";
import "./Marquee.css";
import { FaBullhorn } from "react-icons/fa";

const Marquee = () => {
  const announcements = [
    { id: 1, title: "AICTE Approved" },
    { id: 2, title: "NAAC Accredited" },
    { id: 3, title: "MBA: DTE College Code 6798" },
    { id: 4, title: "Admission Open for MBA Course 2026-27" },
    { id: 5, title: "BBA & BCA: College Code 16301" },
    { id: 6, title: "Admission Open for BBA/BCA A.Y. 2026-27" },
    { id: 7, title: "Scholarships for Meritorious Students" },
  ];

  return (
    <div className="announcement-wrapper">
      <h2 className="announcement-title">Institute Announcements</h2>

      <div className="marquee-box">
        <div className="marquee-track">
          {announcements.concat(announcements).map((item, i) => (
            <div key={i} className="marquee-item">
              <FaBullhorn className="icon" />
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
