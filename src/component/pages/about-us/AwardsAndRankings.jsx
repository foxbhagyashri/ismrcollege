import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import TrophyImg from "../../../assets/Trophyimg.png";
import SEO from "../../SEO";
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

      category: "Business School of the Year 2019",
      description: "Awarded 'Business School of the Year 2019' by Media Partner THE ACADEMIC INSIGHTS.",
    },
    {

      category: "Top 10 Colleges and Institute in Maharashtra",
      description: "Ranked 'Top 10 Colleges and Institute in Maharashtra' by Media Partner Higher Education Digest for the Year 2019.",
    },
    {

      category: "Ranked 20th in India by Higher Education",
      description: "Ranked 20th in India by Higher Education Review Magazine beyond IIMS Top 100 survey.",
    },
    {

      category: "Excellence in Students Placements for 2018",
      description: "Awarded 'Excellence in Students Placements for 2018' by Education World-Wide India.",
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
      <SEO
        title="Awards & Rankings | ISMR B-School Pune"
        description="Explore top awards, rankings, and institutional accolades awarded to ISMR Pune for academic and placement excellence."
        canonical="https://ismrpune.edu.in/about-us/awards-and-rankings/"
      />
      <style>{`
        /* Fonts & Headings */
        .page-heading {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 40px;
          font-weight: 700;
          text-align: center;
          color: #0a2240;
        }

        .section-heading {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #0a2240;
          text-align: center;
        }

        .card-heading {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a2240;
        }

        /* Body Text */
        .body-text, .caption-text {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #444;
        }

        .caption-text {
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading { font-size: 32px; }
          .section-heading { font-size: 24px; }
          .card-heading { font-size: 18px; }
          .body-text, .caption-text { font-size: 14.5px; }
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
          className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${allsectionbg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Awards & <span className="text-warning">Rankings</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Awards & Rankings</span>
          </p>
        </div>
      </section>

      {/* TROPHY SHOWCASE - Award of Excellence */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#0a2240",
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            Award of <span className="text-warning">Excellence</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.7",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify",
              textJustify: "inter-word",
              marginBottom: "3rem",
            }}
          >
            Our awards and recognitions are designed to exemplify the
            dedication, best practices, ingenuity, and excellence in our
            academic pursuits. These accolades reflect our commitment to
            providing world-class management education and nurturing future
            business leaders.
          </p>

          {/* Trophy with Awards on Both Sides */}
          <div className="row align-items-center g-4">
            {/* Left Side Awards */}
            <div className="col-12 col-lg-4">
              <div
                className="p-4 mb-3"
                style={{
                  border: "2px solid #0a2240",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ fontSize: "24px", color: "#0a2240", marginTop: "4px" }}
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0a2240",
                      marginBottom: 0,
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    Awarded “Business School of the Year 2019” by Media Partner THE ACADEMIC INSIGHTS.
                  </p>
                </div>
              </div>

              <div
                className="p-4 mb-3"
                style={{
                  border: "2px solid #0a2240",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ fontSize: "24px", color: "#0a2240", marginTop: "4px" }}
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0a2240",
                      marginBottom: 0,
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    Ranked “Top 10 Colleges and Institutes in Maharashtra” by Media Partner Higher Education Digest for the year 2019.
                  </p>
                </div>
              </div>

              <div
                className="p-4"
                style={{
                  border: "2px solid #0a2240",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ fontSize: "24px", color: "#0a2240", marginTop: "4px" }}
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0a2240",
                      marginBottom: 0,
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    Ranked 20th in India by “Higher Education Review Magazine” Beyond IIM’s Top 100  survey.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Trophy Image */}
            <div className="col-12 col-lg-4">
              <div className="text-center">
                <img
                  src={TrophyImg}
                  alt="Trophy of Excellence"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    height: "auto",
                    transition: "all 0.6s ease",
                    transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                    transformStyle: "preserve-3d",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -15;
                    const rotateY = ((x - centerX) / centerX) * 15;
                    e.currentTarget.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.1)`;
                    e.currentTarget.style.filter = "drop-shadow(0 20px 40px rgba(0,0,0,0.4))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
                    e.currentTarget.style.filter = "drop-shadow(0 10px 20px rgba(0,0,0,0.3))";
                  }}
                />
              </div>
            </div>

            {/* Right Side Awards (Duplicate) */}
            <div className="col-12 col-lg-4">
              <div
                className="p-4 mb-3"
                style={{
                  border: "2px solid #0a2240",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ fontSize: "24px", color: "#0a2240", marginTop: "4px" }}
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0a2240",
                      marginBottom: 0,
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    Awarded “Excellence in Students Placements for 2018” by Education World- Wide India.
                  </p>
                </div>
              </div>

              <div
                className="p-4 mb-3"
                style={{
                  border: "2px solid #0a2240",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ fontSize: "24px", color: "#0a2240", marginTop: "4px" }}
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0a2240",
                      marginBottom: 0,
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    Winner of “Best Business School Award in 2017” by 24 MRC Award – For Excellence in Higher Education.
                  </p>
                </div>
              </div>

              <div
                className="p-4"
                style={{
                  border: "2px solid #0a2240",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ fontSize: "24px", color: "#0a2240", marginTop: "4px" }}
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0a2240",
                      marginBottom: 0,
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    Jagran Josh recognizing “Top Private Management Institute in Western India.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RANKINGS SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center text-md-start mb-4">
            <h2
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "30px",
                fontWeight: 700,
                color: "#0a2240",
                marginBottom: "10px",
              }}
            >
              Our <span className="text-warning">Rankings</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "1.6",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                marginBottom: "1.5rem",
              }}
            >
              Consistently ranked among the top institutions for excellence in
              management education, research, and placement opportunities.
            </p>
          </div>

          <div className="row g-4">
            {rankings.map((ranking, index) => {
              const isEven = index % 2 === 0;
              const bgColor = isEven ? "#002A5C" : "#FFC333";
              const titleColor = isEven ? "#FFC333" : "#002A5C";
              const descColor = isEven ? "rgba(255, 255, 255, 0.9)" : "#002A5C";

              return (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <div
                    className="p-4 rounded-4 shadow-sm h-100 d-flex flex-column text-center"
                    style={{
                      backgroundColor: bgColor,
                      transition: "all 0.3s ease",
                      border: isEven ? "none" : "1px solid rgba(0, 42, 92, 0.1)",
                    }}
                  >
                    <h5
                      className="fw-bold mb-3"
                      style={{
                        fontSize: "1.05rem",
                        color: titleColor,
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        lineHeight: "1.35",
                        minHeight: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {ranking.category}
                    </h5>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "0.88rem",
                        color: descColor,
                        lineHeight: "1.55",
                        fontFamily: "'Poppins', sans-serif",
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
      

      {/* RANKINGS */}

    </div>
  );
}

export default AwardsRankings;
