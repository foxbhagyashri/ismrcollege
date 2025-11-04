import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function WhyISMRPage() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      title: "MBA Student",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      mainImage:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop",
      text: "Universities value students who can think critically and solve problems. Reviewers may assess a student's ability to analyze information, evaluate different perspectives, and apply logical reasoning to arrive at solutions.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Engineering Graduate",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
      mainImage:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
      text: "The faculty at ISMR are exceptional mentors who go above and beyond to ensure student success. The infrastructure and learning environment have prepared me well for my career.",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Computer Science Student",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      mainImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
      text: "ISMR has provided me with cutting-edge technical knowledge and hands-on experience. The placement support and industry connections are outstanding.",
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Medical Student",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop",
      mainImage:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=800&fit=crop",
      text: "The comprehensive curriculum and practical exposure at ISMR have been invaluable. The research facilities and experienced professors create an ideal learning environment.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setIsAnimating(false);
      }, 300);
    }
  };

  const current = testimonials[currentIndex];

  return (
    <div className="why-ismr-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto+Slab:wght@900&display=swap');

        .why-ismr-page {
          font-family: 'Poppins', sans-serif;
          color: #444;
        }

        .page-heading {
          font-family: 'Roboto Slab', serif;
          font-weight: 900;
          font-size: 46px;
          text-align: center;
          color: #0a2240;
        }

        .section-heading {
          font-family: 'Roboto Slab', serif;
          font-weight: 900;
          font-size: 36px;
          color: #0a2240;
          text-align: center;
        }

        .card-heading {
          font-family: 'Roboto Slab', serif;
          font-weight: 900;
          font-size: 24px;
          color: #0a2240;
        }

        .body-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 1.6;
        }

        .caption-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading { font-size: 32px; }
          .section-heading { font-size: 28px; }
          .card-heading { font-size: 20px; }
          .body-text { font-size: 15px; }
          .caption-text { font-size: 13px; }
        }

        @media (max-width: 480px) {
          .page-heading { font-size: 26px; }
          .section-heading { font-size: 22px; }
          .card-heading { font-size: 18px; }
          .body-text { font-size: 14px; }
          .caption-text { font-size: 12px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="py-5 text-white text-center position-relative" style={{ background: "linear-gradient(135deg, #003366 0%, #003366 100%)" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            opacity: 0.25,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container position-relative">
          <h1 className="page-heading mb-3 text-white">WHY ISMR ?</h1>
          <p className="body-text text-white-50 mb-0">
            About • <span className="text-warning">ISMR</span>
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Academic Excellence",
                desc: "Cutting-edge curriculum designed by industry experts with focus on practical learning.",
                icon: <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" />,
              },
              {
                title: "Expert Faculty",
                desc: "Learn from distinguished professors and industry professionals with decades of experience.",
                icon: (
                  <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </>
                ),
              },
              {
                title: "World-Class Infrastructure",
                desc: "State-of-the-art laboratories, libraries, and research facilities equipped with latest technology.",
                icon: (
                  <>
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </>
                ),
              },
              {
                title: "Industry Connections",
                desc: "Strong partnerships with leading companies ensuring excellent placement opportunities.",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                ),
              },
              {
                title: "Research Opportunities",
                desc: "Engage in groundbreaking research projects with access to advanced research facilities.",
                icon: (
                  <>
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 12l10 5 10-5" />
                  </>
                ),
              },
              {
                title: "Holistic Development",
                desc: "Focus on personality development through sports, culture, and leadership programs.",
                icon: (
                  <>
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </>
                ),
              },
            ].map((feature, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div
                  className="p-4 bg-white rounded-4 text-center h-100 shadow-sm"
                  style={{
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "#0a2240",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFC53D"
                      strokeWidth="2"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="card-heading mb-3">{feature.title}</h3>
                  <p className="body-text">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-5" style={{ background: "#f1f5f9" }}>
        <div className="container text-center mb-5">
          <h2 className="section-heading mb-3">What Our Students Say</h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#FFC53D",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center gy-4">
            <div className="col-lg-5 col-md-6 text-center">
              <img
                src={current.mainImage}
                alt={current.name}
                className="img-fluid rounded-4 shadow"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-lg-6 col-md-6 text-start">
              <p className="body-text fst-italic mb-4">"{current.text}"</p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="rounded-circle border border-warning"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h4 className="card-heading mb-1">{current.name}</h4>
                  <p className="caption-text mb-0">{current.title}</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <button
                  onClick={handlePrev}
                  className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold"
                >
                  ← Prev
                </button>
                <button
                  onClick={handleNext}
                  className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                  style={{ background: "#0a2240", borderColor: "#0a2240" }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyISMRPage;
