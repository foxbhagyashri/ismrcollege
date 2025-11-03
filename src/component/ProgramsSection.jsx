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
          <h3 className="program-heading"><span className="icon">📘</span>Undergraduates Programs</h3>
          <hr></hr>
          <p className="program-text">
            Undergraduates Programs is a business media refers to various forms
            media, including print, digital platforms in media.
          </p>
          <hr></hr>
          <ul>
            <li>
              • Major Programs <span class="arrow">→</span>
            </li>
            <hr></hr>
            <li>
              • Minors Programs <span class="arrow">→</span>
            </li>
          </ul>
          <p className="program-footer">🌐 Online + Onsite</p>
        </div>

        {/* Graduate Programs */}
        <div className="program-box yellow-box">
          <h3 className="program-heading"><span className="icon">🎓</span>Graduates Programs</h3>
          <hr></hr>
          <p className="program-text">
            Graduate programs are advanced academic programs that allow students
            to further specialize in a specific field.
          </p>
          <hr></hr>
          <ul>
            <li>
              • Business Media <span class="arroww">→</span>
            </li>
            <hr></hr>
            <li>
              • Modern Biotechnology <span class="arroww">→</span>
            </li>
            <hr></hr>
            <li>
              • Public Administration <span class="arroww">→</span>
            </li>
          </ul>
          <p className="program-footer">🌐 Online + Onsite</p>
        </div>

        {/* Online Education Programs */}
        <div className="program-box navy-box">
          <h3 className="program-heading"><span className="icon">🧊</span>Online Education Programs</h3>
          <hr></hr>
          <p className="program-text">
            Online education refers to the process of acquiring knowledge and
            skills through digital platforms and the internet.
          </p>
          <hr></hr>
          <ul>
            <li>
              • Undergraduates Programs <span class="arrow">→</span>
            </li>
            <hr></hr>
            <li>
              • Graduates Programs <span class="arrow">→</span>
            </li>
          </ul>
          <p className="program-footer">🌐 Only Online Programs</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
