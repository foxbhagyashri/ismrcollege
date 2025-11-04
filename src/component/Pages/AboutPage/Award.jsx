import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import awardImg from "../../../assets/Trophyimg.png"; 
function AwardsRankings() {
  const awards = [
    {
      id: 1,
      title: "Best University of the Year 2024",
      organization: "National Education Awards",
      year: "2024",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Excellence in Research",
      organization: "Global Research Council",
      year: "2024",
      icon: "🔬",
    },
    {
      id: 3,
      title: "Top 10 Engineering College",
      organization: "Times Higher Education",
      year: "2023",
      icon: "⚙️",
    },
    {
      id: 4,
      title: "Outstanding Campus Infrastructure",
      organization: "Campus Design Awards",
      year: "2023",
      icon: "🏛️",
    },
    {
      id: 5,
      title: "Best Placement Record",
      organization: "Career Excellence Board",
      year: "2024",
      icon: "💼",
    },
    {
      id: 6,
      title: "Innovation in Teaching",
      organization: "Education Innovation Forum",
      year: "2023",
      icon: "💡",
    },
  ];

  const rankings = [
    {
      rank: "#1",
      category: "State Rankings",
      description: "Top University in Maharashtra",
    },
    {
      rank: "#15",
      category: "National Rankings",
      description: "Among Top Universities in India",
    },
    {
      rank: "#250",
      category: "Global Rankings",
      description: "QS World University Rankings",
    },
    {
      rank: "A+",
      category: "NAAC Accreditation",
      description: "Highest Grade Accreditation",
    },
  ];

  const recognitions = [
    {
      id: 1,
      title: "ISO 9001:2015 Certified",
      description: "Recognized for quality management standards.",
    },
    {
      id: 2,
      title: "AICTE Approved",
      description: "Approved by the All India Council for Technical Education.",
    },
    {
      id: 3,
      title: "Green Campus Award",
      description:
        "Awarded for eco-friendly and sustainable campus initiatives.",
    },
  ];

  return (
    <div className="custom-fonts">
      <style>{`
        .custom-fonts {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
        }

        /* Hero Heading */
        .page-heading {
          font-family: 'Roboto Slab', serif;
          font-weight: 900;
          font-size: 46px;
          text-align: center;
          color: #0a2240;
        }

        /* Section Headings */
        .section-heading {
          font-family: 'Roboto Slab', serif;
          font-weight: 700;
          font-size: 32px;
          color: #0a2240;
          text-align: center;
        }

        /* Card Headings */
        .card-heading {
          font-family: 'Roboto Slab', serif;
          font-weight: 600;
          font-size: 24px;
          color: #0a2240;
        }

        /* Body Text */
        .body-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #444;
        }

        /* Caption Text */
        .caption-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading {
            font-size: 32px;
          }
          .section-heading {
            font-size: 24px;
          }
          .card-heading {
            font-size: 20px;
          }
          .body-text {
            font-size: 14px;
          }
          .caption-text {
            font-size: 14px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
          style={{
             backgroundImage: `url(${awardImg})`, 
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1 className="page-heading text-white mb-3">
            Our <span className="text-warning">Legacy</span> of Excellence
          </h1>
          <p className="body-text text-white-50 mb-0">
            About • <span className="text-warning">Awards & Rankings</span>
          </p>
        </div>
      </section>

      {/* TROPHY SHOWCASE */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-heading mb-4">
            Our Pride – The{" "}
            <span className="text-warning">Trophy of Excellence</span>
          </h2>
          <p
            className="caption-text mb-5 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            A symbol of dedication, innovation, and excellence. This trophy
            represents the countless achievements and milestones of ISMR
            throughout the years.
          </p>

          <div className="d-flex justify-content-center my-5">
            <div
              className="card shadow-lg border-0 rounded-4 d-flex flex-column flex-md-row align-items-center"
              style={{ maxWidth: "1100px", width: "100%" }}
            >
              <div
                className="d-flex justify-content-center align-items-center p-4"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "250px",
                  color: "#FFC107",
                  fontSize: "6rem",
                }}
              >
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div className="card-body text-center text-md-start p-4 p-md-5">
                <h3 className="card-heading mb-3">Award of Excellence</h3>
                <p className="body-text mb-0">
                  Honoring our continuous success and unwavering commitment to
                  excellence, leadership, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS GRID */}
      <section className="py-5 bg-light">
  <div className="container text-center">
    <h1 className="section-heading mb-3" style={{ fontFamily: "Roboto, sans-serif", fontWeight: "700", fontSize: "1.8rem" }}>
      Our Rankings
    </h1>
    <p className="caption-text mb-5" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", color: "#555" }}>
      Consistently ranked among the top institutions
    </p>

    <div className="row g-4">
      {rankings.map((ranking, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "#002A5C" : "#FFC333";
        const textColor = isEven ? "#FFC333" : "#002A5C";

        return (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div
              className="p-3 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: bgColor,
                color: textColor,
                transition: "0.3s ease",
                minHeight: "180px",
              }}
            >
              <div
                className="fw-bold mb-2"
                style={{
                  fontSize: "1.5rem", // ↓ Smaller number font
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {ranking.rank}
              </div>

              <h6
                className="fw-semibold mb-1"
                style={{
                  fontSize: "1.4rem", // ↓ Smaller category text
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {ranking.category}
              </h6>

              <p
                className="mb-0"
                style={{
                  fontSize: "1rem", // ↓ Smaller description
                  lineHeight: "1.4",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {ranking.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* RECOGNITION SECTION */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-heading mb-4">Recognitions</h2>
          <p className="caption-text mb-5">
            Honors and approvals that validate our excellence and standards
          </p>
          <div className="row g-4 justify-content-center">
            {recognitions.map((rec) => (
              <div className="col-12 col-md-4" key={rec.id}>
                <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                  <h5 className="card-heading text-primary mb-2">
                    {rec.title}
                  </h5>
                  <p className="body-text mb-0">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RANKINGS */}
      
    </div>
  );
}

export default AwardsRankings;
