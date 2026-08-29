import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { ArrowRight } from "lucide-react";
import { BriefcaseFill } from "react-bootstrap-icons";
import SEO from "../../SEO";

function StudentFacilities() {
  const facilities = [
    {
      id: 1,
      title: "Dress Code",

      image:
        "/uniformm.jpg",
    },
    {
      id: 2,
      title: "Computer Lab",

      image:
        "/comp_lab.jpg",
    },

    {
      id: 4,
      title: "Foreign Study Tour",

      image:
        "/Industry Visit @ National Paints Abu Dhabi.jpg",
    },
    {
      id: 5,
      title: "Guest Lectures / Seminars / Workshops",

      image:
        "/guest_lecture.jpg",
    },
    {
      id: 6,
      title: "Sports Facilities",

      image:
        "/activity-e1643704137253.jpg",
    },
    {
      id: 7,
      title: "Library",

      image:
        "/008.jpg",
    },
    {
      id: 8,
      title: "MDP Activities",

      image:
        "/One-Day-Workshop-on-Team-Building-4.png",
    },
    {
      id: 9,
      title: "Out-Bound Training Program",

      image:
        "/outactivity.jpeg",
    },

    {
      id: 10,
      title: "Bus (Transport) Facility",

      image:
        "/bustrasport.jpeg",
    },
    {
      id: 11,
      title: "Seminar Hall / Auditorium",

      image:
        "/017.jpg",
    },
    {
      id: 12,
      title: "Gym",

      image:
        "/gym.jpeg",
    },
    {
      id: 13,
      title: "Wi-Fi Enabled Campus",

      image:
        "/0004.jpg",
    },
  ];

  return (
    <>
      <SEO
        title="Student Facilities & Campus Infrastructure | ISMR Pune"
        description="Explore top-class facilities at ISMR Pune: modern computer labs, library, sports arena, gym, Wi-Fi campus, seminar halls, and cafeteria."
        canonical="https://ismrpune.edu.in/campus-life/student-facilities/"
      />
      <style>{`
        :root {
          --text-dark: #0a2240;
          --accent: #FFC333;
          --bg-light: #f8f9fa;
          --white: #ffffff;
        }

        body {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
        }

        /* ---------- Header Section ---------- */
        .hero {
          background: linear-gradient(135deg, #0a2240 0%, #0a2240 100%);
          color: #fff;
          padding: 60px 0;
          text-align: center;
          position: relative;
        }
        .hero h1 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .hero p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        /* ---------- Intro Section ---------- */
        .intro-section {
          background: var(--white);
          padding: 70px 0;
        }
        .intro-section h1 {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }
        .intro-section p {
          font-size: 16px;
          color: #444;
          line-height: 1.75;
          text-align: justify;
          margin-bottom: 0;
        }

        /* ---------- Cards Section ---------- */
        .cards-section {
          background: var(--bg-light);
          padding: 70px 0 90px;
        }
        .facility-card {
          position: relative;
          height: 456px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid #ffc107;
        }
        .facility-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
          border:none
        }
        .facility-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 310px;
          object-fit: cover;
        }
        .facility-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 52%;
          background-color: #f5f5f5;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: all 0.5s ease;
        }
        .facility-card:hover .facility-overlay {
          background-color: #C8102E;
          color: #fff;
          height: 64%;
        }
        .facility-title {
          font-size: 25px;
          font-weight: 700;
          margin-bottom: 14px;
          color: var(--text-dark);
          transition: color 0.4s ease;
        }
        .facility-card:hover .facility-title {
          color: #fff;
        }
        .facility-underline {
          width: 60px;
          height: 3px;
          background-color: var(--accent);
          margin-bottom: 20px;
          transition: background 0.4s ease;
        }
        .facility-card:hover .facility-underline {
          background: #fff;
        }
        .facility-desc {
          font-size: 15.5px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 24px;
          text-align: justify;
          transition: color 0.4s ease;
        }
        .facility-card:hover .facility-desc {
          color: #fff;
        }
        .facility-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #002A5C;
          background: transparent;
          border: none;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s ease;
        }
        .facility-btn:hover {
          transform: translateX(4px);
        }

        /* ---------- Responsive Design ---------- */
        @media (max-width: 992px) {
          .hero { padding: 45px 0; }
          .hero h1 { font-size: 40px; }
          .intro-section, .cards-section { padding: 50px 0; }
          .facility-card { height: 500px; }
          .facility-image { height: 260px; }
          .facility-overlay { height: 55%; padding: 30px; }
          .facility-title { font-size: 1.6rem; }
          .facility-desc { font-size: 14.5px; }
        }

        @media (max-width: 768px) {
          .hero { padding: 35px 15px; }
          .hero h1 { font-size: 40px; }
          .hero p { font-size: 13.5px; }
          .intro-section { padding: 40px 20px; }
          .intro-section h1 { font-size: 1.9rem; text-align: center; }
          .intro-section p { font-size: 14px; text-align: justify; }
          .cards-section { padding: 50px 20px; }
          .facility-card { height: 470px; }
          .facility-image { height: 240px; }
          .facility-overlay { height: 56%; padding: 22px; }
          .facility-title { font-size: 1.45rem; text-align: left; }
          .facility-desc { font-size: 13.8px; line-height: 1.6; }
        }

        @media (max-width: 576px) {
          .hero { padding: 30px 10px; }
          .hero h1 { font-size: 32px; }
          .hero p { font-size: 12.5px; }
          .intro-section { padding: 35px 15px; }
          .intro-section h1 { font-size: 1.7rem; text-align: center; }
          .intro-section p { font-size: 13px; line-height: 1.55; }
          .cards-section { padding: 40px 10px; }
          .facility-card { height: 420px; }
          .facility-image { height: 200px; }
          .facility-overlay { height: 58%; padding: 16px; }
          .facility-title { font-size: 1.3rem; }
          .facility-desc { font-size: 13px; }
          .facility-btn { font-size: 0.85rem; }
        }
      `}</style>

      {/* ---------- Header Section ---------- */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
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
        <div className="container position-relative py-4">
          <h1
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
              marginBottom: "10px",
            }}
          >
            Student <span className="text-warning">Facilities</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              margin: 0,
            }}
          >
            Campus • <span className="text-warning">Student Facilities</span>
          </p>
        </div>
      </section>

      {/* ---------- Intro Section ---------- */}
      <section className="intro-section">
        <div className="container">
          <h1>
            <BriefcaseFill className="me-2" style={{ color: "#0a2240" }} />
            Student <span style={{ color: "#1a4d7a" }}>Facilities</span>
          </h1>
          <p className="mt-2">
            ISMR offers a spacious campus with facilities designed to enhance both learning and campus life. The campus includes a well-equipped library, modern laboratories, classrooms, cafeteria, and dedicated administration and faculty offices. Our facilities are listed below.
          </p>
        </div>
      </section>

      {/* ---------- Facilities Cards ---------- */}
      <section className="cards-section">
        <div className="container">
          <div className="row g-4 mb-4">
            {facilities.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <FacilityCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Facility Card ---------- */
const FacilityCard = ({ data }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="facility-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="facility-overlay">
        <h2 className="facility-title">{data.title}</h2>
        <div className="facility-underline"></div>
        {/* <p className="facility-desc">{data.description}</p> */}
        {/* <button className="facility-btn">
          EXPLORE MORE <ArrowRight size={20} color="#002A5C" />
        </button> */}
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="facility-image"
        loading="lazy"
      />
    </div>
  );
};

export default StudentFacilities;
