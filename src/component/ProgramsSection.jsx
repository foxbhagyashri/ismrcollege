import React from "react";
import "./ProgramsSection.css";

const ProgramsSection = () => {
  return (
    <section className="programs-section">
      <h2 className="programs-title">
        Graduates, Undergraduate and <br></br> Online Education
      </h2>

      <div className="programs-container">
        {/* Undergraduate Programs */}
        <div className="program-box navy-box">
          <h3 className="program-heading">Undergraduates Programs</h3>
          <p className="program-text">
            Undergraduates Programs is a business media refers to various forms
            media, including print, digital platforms in media.
          </p>
          <ul>
            <li>
              • Major Programs <span>→</span>
            </li>
            <li>
              • Minors Programs <span>→</span>
            </li>
          </ul>
          <p className="program-footer">🌐 Online + Onsite</p>
        </div>

        {/* Graduate Programs */}
        <div className="program-box yellow-box">
          <h3 className="program-heading">Graduates Programs</h3>
          <p className="program-text">
            Graduate programs are advanced academic programs that allow students
            to further specialize in a specific field.
          </p>
          <ul>
            <li>
              • Business Media <span>→</span>
            </li>
            <li>
              • Modern Biotechnology <span>→</span>
            </li>
            <li>
              • Public Administration <span>→</span>
            </li>
          </ul>
          <p className="program-footer">🌐 Online + Onsite</p>
        </div>

        {/* Online Education Programs */}
        <div className="program-box navy-box">
          <h3 className="program-heading">Online Education Programs</h3>
          <p className="program-text">
            Online education refers to the process of acquiring knowledge and
            skills through digital platforms and the internet.
          </p>
          <ul>
            <li>
              • Undergraduates Programs <span>→</span>
            </li>
            <li>
              • Graduates Programs <span>→</span>
            </li>
          </ul>
          <p className="program-footer">🌐 Only Online Programs</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
