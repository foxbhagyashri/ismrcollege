import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const leadershipTeam = [
  {
    id: 1,
    name: "Dr. Anil Kumar",
    position: "Principal",
    qualification: "PhD, M.Tech",
    experience: "25 years",
    email: "principal@institution.edu",
    phone: "+91 99999 99999",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80&fm=jpg",
  },
  {
    id: 2,
    name: "Mrs. Sujata Rao",
    position: "Vice Principal",
    qualification: "M.Sc, B.Ed",
    experience: "18 years",
    email: "vp@institution.edu",
    phone: "+91 88888 88888",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80&fm=jpg",
  },
  {
    id: 3,
    name: "Dr. Rajesh Sharma",
    position: "Dean of Academics",
    qualification: "PhD, M.Phil",
    experience: "22 years",
    email: "dean@institution.edu",
    phone: "+91 77777 77777",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80&fm=jpg",
  },
  {
    id: 4,
    name: "Prof. Meera Patel",
    position: "Head of Research",
    qualification: "PhD, M.Tech",
    experience: "20 years",
    email: "research@institution.edu",
    phone: "+91 66666 66666",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80&fm=jpg",
  },
  {
    id: 5,
    name: "Mr. Vikram Singh",
    position: "Director of Administration",
    qualification: "MBA, B.Com",
    experience: "15 years",
    email: "admin@institution.edu",
    phone: "+91 55555 55555",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80&fm=jpg",
  },
  {
    id: 6,
    name: "Dr. Priya Desai",
    position: "Dean of Student Affairs",
    qualification: "PhD, M.A.",
    experience: "16 years",
    email: "studentaffairs@institution.edu",
    phone: "+91 44444 44444",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&q=80&fm=jpg",
  },
];

function Leadership() {
  return (
    <div className="font-poppins">

      <style>{`
        /* Fonts */
        .font-roboto-slab {
          font-family: "Roboto Slab", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }

        /* Headings */
        .page-heading {
          font-family: "Roboto Slab", serif;
          font-size: 46px;
          font-weight: 900;
          text-align: center;
          color: #0a2240;
        }

        .section-heading {
          font-family: "Roboto Slab", serif;
          font-size: 36px;
          font-weight: 900;
          color: #0a2240;
          text-align: center;
        }

        .card-heading {
          font-family: "Roboto Slab", serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a2240;
        }

        /* Body Text */
        .body-text, .caption-text {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          color: #444;
        }

        .caption-text {
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading { font-size: 36px; }
          .section-heading { font-size: 28px; }
          .card-heading { font-size: 20px; }
          .body-text, .caption-text { font-size: 14px; }
        }

      `}</style>

      {/* Hero Section */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #003366 0%, #003366 100%)",
        }}
      >
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
          <h1 className="page-heading text-white mb-3">Leadership Team</h1>
          <p className="body-text text-white-50 mb-0">
            About • <span className="text-warning">Leadership Team</span>
          </p>
        </div>
      </section>


       {/*  */}
         <div className="container pb-3">
           <h2
          style={{
            fontFamily: "Roboto Slab, serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#0a2240",
            marginTop: "3rem",
             marginBottom: "1.5rem",
          }}
        >
          Our Executive Board
        </h2>
        <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
          ISMR Pune is a hub of innovation, learning, and excellence. Our
          mission is to combine <strong>science and spirituality</strong>
          to create an environment that fosters holistic development. From
          state-of-the-art infrastructure to experienced faculty, ISMR is
          committed to nurturing future leaders in every field. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt enim corrupti
          itaque odio eos odit iusto sequi provident repellendus aperiam et
          fugit, voluptate, velit modi at cum quasi maxime voluptates. 
        </p>
        </div>
       {/*  */}
      {/* Leadership Cards */}
      <section className="py-1 pt-4 bg-light">
        <div className="container">
          <div className="row g-4">
            {leadershipTeam.map((leader) => (
              <div className="col-12 col-md-6 col-lg-4" key={leader.id}>
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="overflow-hidden position-relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-100"
                      style={{
                        height: "440px",
                        objectFit: "cover",
                        filter: "grayscale(100%)",
                        transition: "0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "grayscale(0%)";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "grayscale(100%)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-heading mb-1">{leader.name}</h5>
                    <p className="text-danger fw-semibold mb-3 body-text">
                      {leader.position}
                    </p>

                    <p className="mb-1 body-text">
                      <strong className="text-secondary">Qualification:</strong>{" "}
                      {leader.qualification}
                    </p>
                    <p className="mb-3 body-text">
                      <strong className="text-secondary">Experience:</strong>{" "}
                      {leader.experience}
                    </p>

                    <hr />
                    <p className="caption-text small mb-1">
                      <i className="bi bi-envelope me-2"></i>
                      {leader.email}
                    </p>
                    <p className="caption-text small">
                      <i className="bi bi-telephone me-2"></i>
                      {leader.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div className="p-5 rounded-4 shadow-sm bg-light">
            <h2 className="section-heading mb-3">
              Leading with Vision and Excellence
            </h2>
            <p className="body-text mb-0">
              Our leadership team brings together decades of experience in
              academia, research, and administration. United by a shared
              commitment to educational excellence, they guide our institution
              toward becoming a world-class center of learning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leadership;
