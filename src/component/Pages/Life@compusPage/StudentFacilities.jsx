import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRight } from "lucide-react";
import { BriefcaseFill } from "react-bootstrap-icons";

function StudentFacilities() {
  const facilities = [
    {
      id: 1,
      title: "Food Courts",
      description:
        "Catering to diverse tastes and dietary preferences, our food courts offer a wide variety of nutritious and flavourful meals.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Cafeterias",
      description:
        "Experience comfortable dining spaces with fresh, healthy options perfect for students and staff throughout the day.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Sports Facilities",
      description:
        "State-of-the-art sports infrastructure designed to promote fitness, teamwork, and athletic excellence among students.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Library Services",
      description:
        "Extensive collection of books and digital resources providing quiet study spaces for academic excellence and research.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Laboratories",
      description:
        "Modern, well-equipped laboratories offering hands-on learning experiences in science, technology, and innovation.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Recreation Areas",
      description:
        "Vibrant social spaces and recreational facilities designed for relaxation, entertainment, and community building.",
      image:
        "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
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
          height: 580px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .facility-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
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
          padding: 40px;
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
          font-size: 1.9rem;
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
      <section className="hero">
        <div className="container position-relative py-4">
          <h1>
            Student <span className="text-warning">Facilities</span>
          </h1>
          <p>
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
            ISMR Pune provides exceptional facilities that enhance both academic
            and student life experiences. Our well-maintained campus
            infrastructure is designed to foster innovation, collaboration, and
            holistic growth through accessible resources, recreation, and
            convenience. Every facility is tailored to ensure comfort, safety,
            and productivity for all our students.
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
        <p className="facility-desc">{data.description}</p>
        <button className="facility-btn">
          EXPLORE MORE <ArrowRight size={20} color="#002A5C" />
        </button>
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
