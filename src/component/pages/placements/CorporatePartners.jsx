import React from 'react'
import allsectionbg from "../../../assets/allsectionbg.jpg";
import SEO from "../../SEO";

function Corporate() {
  const testimonials = [
    {
      name: "Pooja Ravindra Bawane",
      image: "/pooja.png",
      text: "I, Pooja RavindraBawane, am an MBA First Semester student at ISMR College. The college provides a dynamic learning environment where we get to connect theory with practical learning. I really appreciate the regular internship opportunities, case study sessions, outdoor activities, and hands-on experiences. These activities help us understand real business situations and prepare us well for future challenges.",
      rating: 5
    },
    {
      name: "Khushi Jitendra Bodile",
      image: "/khushi.png",
      text: "I am KhushiJitendraBodile, a First-Year MBA student at ISMR Pune. I would like to share my personal experience about my college. ISMR provides many facilities such as bus service, sports, games, and a gym for students. The college also organizes industrial visits and various programs for our overall development. All the faculty members are very friendly and supportive. I am truly grateful to be a student of ISMR.",
      rating: 5
    },
    {
      name: "Ajay Choudhary",
      image: "/nonamee.png",
      text: "My first semester of MBA was a great learning experience. The case studies and interactive classes helped me understand how business concepts work in real situations. Group projects improved my communication and leadership skills. Overall, this semester gave me a strong foundation for my personal and professional growth.",
      rating: 5
    },
    {
      name: "Ms. Priya Sharma",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      text: "ISMR has transformed my career journey. The practical approach to learning and industry exposure has been invaluable. The faculty's dedication to student success is commendable.",
      rating: 5
    },
    {
      name: "Mr. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "The research opportunities and innovation culture at ISMR are exceptional. Students are encouraged to think beyond textbooks and create real-world solutions.",
      rating: 5
    }
  ]

  return (
    <>
      <SEO
        title="Corporate Testimonials & Feedback | ISMR Pune"
        description="Read what corporate recruiters and industry leaders say about ISMR Pune MBA graduates and campus recruitment drives."
        canonical="https://ismrpune.edu.in/placements/internships-and-placements/"
      />
      {/* ====== Banner Section ====== */}
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
            className="mb-3 banner-title"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Corporate & Student <span className="text-warning">Testimonials</span>
          </h1>
          <p
            className="mb-0 banner-subtitle"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Placement • <span className="text-warning">Corporate & Student Testimonials</span>
          </p>
        </div>
      </section>

      {/* ====== Marquee Section ====== */}
      <section
        className="py-5 bg-light position-relative overflow-hidden"
        style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
      >
        <div className="container">
          <div className="row align-items-center mb-4 g-5">
            <div className="col-lg-4">
              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "32px",
                  color: "#0a2240",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                }}
              >
                Must See<br />Testimonials
              </h2>
              <p
                className="text-muted mb-3"
                style={{
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                }}
              >
                Discover what makes ISMR special by exploring testimonials from our esteemed corporate partners.
              </p>
              <button
                className="btn btn-danger rounded-pill px-4 py-2"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                }}
              >
                Explore
              </button>
            </div>

            <div className="col-lg-8">
              <div className="position-relative overflow-hidden">
                <style>
                  {`
                    @keyframes scroll {
                      0% {
                        transform: translateX(0);
                          100% { transform: translateX(-40%); }
                      }
                      100% {
                        transform: translateX(-40%);
                      }
                    }
                    .marquee-container {
                      display: flex;
                      animation: scroll 25s linear infinite;
                    }
                    .marquee-container:hover {
                      animation-play-state: paused;
                    }
                    .testimonial-card {
                      transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .testimonial-card:hover {
                      transform: translateY(-10px);
                      box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                    }
                  `}
                </style>

                <div className="marquee-container">
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                      key={index}
                      className="testimonial-card mx-3 flex-shrink-0"
                      style={{
                        width: "230px",
                        height: "350px",
                        borderRadius: "15px",
                        overflow: "hidden",
                        position: "relative",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute bottom-0 w-100 p-3 text-white"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                        }}
                      >
                        <h5
                          className="mb-1 fw-bold"
                          style={{
                            fontSize: "18px",
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                          }}
                        >
                          {testimonial.name}
                        </h5>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "12px",
                            opacity: 0.9,
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                          }}
                        >
                          Corporate Partner
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Corporate Testimonials Section ====== */}
      <section
        className="py-5 bg-white"
        style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "36px",
                color: "#0a2240",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif"
              }}
            >
              Corporate Testimonials
            </h2>
            <p
              className="text-muted mx-auto"
              style={{
                fontSize: "16px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                maxWidth: "800px"
              }}
            >
              Read what our corporate partners have to say about their experience with ISMR.
              We're proud to have helped over thousands of students emerge as world-class leaders globally.
              Let's hear it out from them.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5
                          className="mb-1 fw-bold"
                          style={{
                            fontSize: "16px",
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                          }}
                        >
                          {testimonial.name}
                        </h5>
                        <div>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-warning">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-muted"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                      }}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Corporate Partners Section ====== */}

      {/* ====== Corporate Testimonials Section ====== */}
      <section
        className="py-5 bg-white"
        style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "36px",
                color: "#0a2240",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif"
              }}
            >
              Students  Testimonials
            </h2>
            <p
              className="text-muted mx-auto"
              style={{
                fontSize: "16px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                maxWidth: "800px"
              }}
            >
              Hear directly from our students about their transformative experiences at ISMR.
              From academic excellence to personal growth, our students share how ISMR has shaped their futures.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5
                          className="mb-1 fw-bold"
                          style={{
                            fontSize: "16px",
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                          }}
                        >
                          {testimonial.name}
                        </h5>
                        <div>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-warning">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-muted"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif"
                      }}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Responsive Tweaks ====== */}
      <style>
        {`
          @media (max-width: 768px) {
            .banner-title {
              font-size: 30px !important;
            }
            .banner-subtitle {
              font-size: 14px !important;
            }
            .testimonial-card {
              width: 200px !important;
              height: 320px !important;
            }
          }

          @media (max-width: 576px) {
            .banner-title {
              font-size: 26px !important;
            }
            .banner-subtitle {
              font-size: 13px !important;
            }
            .testimonial-card {
              width: 180px !important;
              height: 300px !important;
            }
          }
        `}
      </style>

    </>
  )
}

export default Corporate;