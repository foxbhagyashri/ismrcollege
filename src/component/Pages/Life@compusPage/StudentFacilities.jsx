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
      {/* ---------- Top Section ---------- */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #0a2240 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop)",
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
            }}
          >
            Student <span className="text-warning">Facilities</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "16px",
              marginTop: "0.5rem",
            }}
          >
            Campus • <span className="text-warning"> Student Facilities</span>
          </p>
        </div>
      </section>

      {/* ---------- Cards Section ---------- */}
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          paddingTop: "70px",
          paddingBottom: "90px",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div className="container mb-5 ">
          <h1
            className="mb-5"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#0a2240",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              

            }}
          >
            <BriefcaseFill className="me-3" style={{ color: "#0a2240" }} />
            Student  <span style={{ color: "#1a4d7a" }}>Facilities</span>
          </h1>
           <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.7",
              textAlign: "justify",
              textJustify: "inter-word",
              marginBottom: 0,
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            }}
          >
            ISMR Pune provides exceptional facilities that enhance both academic
            and student life experiences. Our well-maintained campus
            infrastructure is designed to foster innovation, collaboration, and
            holistic growth through accessible resources, recreation, and
            convenience. Every facility is tailored to ensure comfort, safety,
            and productivity for all our students.
          </p>
        </div>

        <div className="container">
          <div className="row g-4 mt-5 py-2">
            {facilities.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <FacilityCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const FacilityCard = ({ data }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardStyle = {
    position: "relative",
    width: "100%",
    height: "600px",
    overflow: "hidden",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      
  };

  const imageStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "320px",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: isHovered ? "65%" : "50%",
    backgroundColor: isHovered ? "#C8102E" : "#f5f5f5",
    transition: "all 0.5s ease",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: isHovered ? "white" : "#333",
    textAlign: "left",

  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: isHovered ? "white" : "#000",
  };

  const underlineStyle = {
    width: "60px",
    height: "3px",
    backgroundColor: isHovered ? "white" : "#FFC333",
    marginBottom: "25px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "30px",
    color: isHovered ? "white" : "#666",
  };

  // ✅ Button color remains same before and after hover
  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    color: "#002A5C",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "0.95rem",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
    padding: 0,
    transition: "color 0.3s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={overlayStyle}>
        <h2 style={titleStyle}>{data.title}</h2>
        <div style={underlineStyle}></div>
        <p style={descriptionStyle}>{data.description}</p>
        <button style={buttonStyle}>
          EXPLORE MORE <ArrowRight size={24} color="#002A5C" />
        </button>
      </div>
      <img src={data.image} alt={data.title} style={imageStyle} />
    </div>
  );
};

export default StudentFacilities;
