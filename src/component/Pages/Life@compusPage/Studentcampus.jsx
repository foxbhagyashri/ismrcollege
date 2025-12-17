import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BriefcaseFill } from "react-bootstrap-icons";
import allsectionbg from "../../../assets/allsectionbg.jpg";



function StudentCampusAndActivities() {
  const [activeSection, setActiveSection] = useState(
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT"
  );

  const interFont = {
    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
    fontSize: "16px",
    lineHeight: 1.7,
  };

  const navItems = [
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT",
    "TRAINING & DEVELOPMENT",
    "ACADEMIC AWARD CEREMONY",
    "DOMESTIC & INTERNATIONAL STUDY TOUR",
    "CULTURAL ACTIVITIES",
  ];

  const contentMap = {
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT": (
      <div>
        <h3
          className="mb-3"
          style={{
            ...interFont,
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "#0a2240",
          }}
        >
          🌍 National & International Industrial Visits
        </h3>

        {/* <p
          className="campus-text"
          style={{
            ...interFont,
            maxWidth: "800px",
            textAlign: "justify",
          }}
        >
          Our students regularly participate in <strong>industrial visits</strong>
          to leading organizations across India and abroad. These visits bridge
          the gap between theoretical learning and real-world application, allowing
          students to understand modern technologies, management practices, and
          global business trends.
          <br />

        </p> */}


        {/* ===== Image Cards Row ===== */}
        {/* ===== Image Cards Row ===== */}
        <div className="row g-4 my-3">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/Industry Visit @ National Paints Abu Dhabi.jpg"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>National Paints, Abu Dhabi</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/2-1.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Tata Steel, Dubai</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/3-1.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Renishaw Metrologies India Ltd. Pune</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/5-1.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Industrial Visit to Mapro Mahableshwar</h5>
            </div>
          </div>

        </div>



      </div>
    ),

    // ------- Other Sections --------
    "TRAINING & DEVELOPMENT": (
      <div>
        <h3
          className="mb-3"
          style={{
            ...interFont,
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "#0a2240",
          }}
        >
          🧠 Training & Development
        </h3>
        {/* <p className="campus-text" style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          The institute conducts comprehensive <strong>training and development programs</strong>
          to enhance students’ employability skills.
        </p> */}

        <div className="row g-4 my-3">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/4-1.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Team Building Activity</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/5.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Yoga Meditation</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/6.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Outbound Training Program</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/activity-e1643704137253.jpg"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Sports Activity</h5>
            </div>
          </div>

        </div>

      </div>
    ),

    "ACADEMIC AWARD CEREMONY": (
      <div>
        <h3
          className="mb-3"
          style={{
            ...interFont,
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "#0a2240",
          }}
        >
          🏅 Academic Award Ceremony
        </h3>
        {/* <p className="campus-text" style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          The Academic Award Ceremony recognizes outstanding students for their excellence.
        </p> */}
        <div className="row g-4 my-3">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/7.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Best Disciplined Award</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/8.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Overall Award Distribution</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/9.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Academic Award Ceremony Day</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/7-1.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Top Merit Award</h5>
            </div>
          </div>

        </div>
      </div>
    ),

    "DOMESTIC & INTERNATIONAL STUDY TOUR": (
      <div>
        <h3
          className="mb-3"
          style={{
            ...interFont,
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "#0a2240",
          }}
        >
          ✈️ Domestic & International Study Tours
        </h3>
        {/* <p className="campus-text" style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          Study tours provide learning beyond classrooms.
        </p> */}
        <div className="row g-4 my-3">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/Students @ Ferrari World Abu Dabhi.jpg"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Ferrari World, Abu Dhabi</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/Students @ Burj Al Arab Beach Dubai.jpg"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Burj-AI-Arab Beach, Dubai</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/12.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Gujarat</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/Picnic @ Mahableshwar .jpg"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Goa</h5>
            </div>
          </div>

        </div>
      </div>
    ),

    "CULTURAL ACTIVITIES": (
      <div>
        <h3
          className="mb-3"
          style={{
            ...interFont,
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "#0a2240",
          }}
        >
          🎭 Cultural Activities
        </h3>
        {/* <p className="campus-text" style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          The vibrant cultural life at our campus encourages creativity and teamwork.
        </p> */}
        <div className="row g-4 my-3">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/15.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Holi Celebration</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/14.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Independence Day</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/_DSC3779.jpg"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Fresher's Party</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <img
                src="/4-4.png"
                className="card-img-top"
                alt="Industrial Visit"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px", color: "#b71c20" }}>Farewell Party</h5>
            </div>
          </div>

        </div>
      </div>
    ),
  };

  return (
    <>
      {/* ===== Responsive Styles ===== */}
      <style>{`
        @media (max-width: 768px) {
          .campus-text { font-size: 14px !important; }
        }
          .card {
  max-width: 420px;
  margin: auto;
}

.card img {
  height: 380px;
}
      `}</style>

      {/* ===== Header Section ===== */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${allsectionbg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1 className="mb-3" style={{ fontSize: "40px", fontWeight: 700 }}>
            Student <span className="text-warning">Campus Life</span>
          </h1>
        </div>
      </section>

      {/* ===== Main Section ===== */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h1
            className="mb-4 text-center text-md-start"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#0a2240",
            }}
          >
            <BriefcaseFill className="me-2" style={{ color: "#0a2240" }} /> Campus
            <span style={{ color: "#1a4d7a" }}> Life</span>
          </h1>

          <div className="row g-4 mt-2">
            {/* Left Navigation */}
            <div className="col-md-4 col-lg-3">
              <div className="shadow-sm bg-white rounded-3 p-3" style={{ borderLeft: "4px solid #0a2240" }}>
                {navItems.map((item) => (
                  <div
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`p-3 mb-2 rounded ${activeSection === item ? "text-white" : "text-dark"
                      }`}
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      cursor: "pointer",
                      backgroundColor: activeSection === item ? "#0a2240" : "#f8f9fa",
                      border: activeSection === item ? "2px solid #0a2240" : "1px solid #dee2e6",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-8 col-lg-9">
              <div className="bg-white shadow-sm rounded-3 p-2 p-md-2">
                {contentMap[activeSection]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCampusAndActivities;
