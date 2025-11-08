import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import {
  CheckCircleFill,
  BriefcaseFill,
  GraphUp,
  FileEarmarkSpreadsheet,
} from "react-bootstrap-icons";

// ---------------------------------------------------------------------
// 1. New Imports for Company Images
// ---------------------------------------------------------------------
import Comp1 from "../../../assets/Homeimg/Comp1.png";
import Comp2 from "../../../assets/Homeimg/Comp2.png";
import Comp3 from "../../../assets/Homeimg/Comp3.png";
import Comp4 from "../../../assets/Homeimg/Comp4.png";
import Comp5 from "../../../assets/Homeimg/Comp5.png";
import Comp6 from "../../../assets/Homeimg/Comp6.png"; // fixed
// ---------------------------------------------------------------------
// Company Data
// ---------------------------------------------------------------------
const companyData = {
  "IT COMPANIES": [
    { name: "Company 1", src: Comp1 },
    { name: "Company 2", src: Comp2 },
    { name: "Company 3", src: Comp3 },
    { name: "Company 4", src: Comp4 },
    { name: "Company 5", src: Comp5 },
    { name: "Company 6", src: Comp6 },
    { name: "Placeholder 7", src: Comp1 },
    { name: "Placeholder 8", src: Comp2 },
    { name: "Placeholder 9", src: Comp3 },
    { name: "Placeholder 10", src: Comp4 },
    { name: "Placeholder 11", src: Comp5 },
    { name: "Placeholder 12", src: Comp6 },
  ],
  "IT SERVICE COMPANIES": [
    {
      name: "Service 1",
      src: "https://via.placeholder.com/150/007bff/ffffff?text=Service+1",
    },
    {
      name: "Service 2",
      src: "https://via.placeholder.com/150/007bff/ffffff?text=Service+2",
    },
    {
      name: "Service 3",
      src: "https://via.placeholder.com/150/007bff/ffffff?text=Service+3",
    },
  ],
  "CORE COMPANIES": [
    {
      name: "Core 1",
      src: "https://via.placeholder.com/150/28a745/ffffff?text=Core+1",
    },
    {
      name: "Core 2",
      src: "https://via.placeholder.com/150/28a745/ffffff?text=Core+2",
    },
    {
      name: "Core 3",
      src: "https://via.placeholder.com/150/28a745/ffffff?text=Core+3",
    },
  ],
};

// ---------------------------------------------------------------------
// Placement Stats
// ---------------------------------------------------------------------
const stats = [
  { mainValue: "28", unit: "LPA", label: "HIGHEST PACKAGE" },
  { mainValue: "6.1", unit: "LPA", label: "AVERAGE PACKAGE" },
  { mainValue: "570+", unit: "", label: "PLACEMENT OFFERS" },
  { mainValue: "700+", unit: "", label: "INTERNSHIP OFFERS" },
  { mainValue: "450+", unit: "", label: "RECRUITING COMPANIES" },
];

// ---------------------------------------------------------------------
// Leadership Team
// ---------------------------------------------------------------------
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

// ---------------------------------------------------------------------
// Enhanced Placement Status Component
// ---------------------------------------------------------------------
const academicYears = [
  "2024-25 (ONGOING)",
  "2023-24",
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
  "2014-15",
  "2013-14",
  "2012-13",
];

// Placeholder for key success metrics
const placementMetrics = {
  highestPackage: "₹ 28 LPA",
  averagePackage: "₹ 6.1 LPA",
  placementPercentage: "95%",
};

function EnhancedPlacementStatus() {
  const [activeYear, setActiveYear] = useState("2024-25 (ONGOING)");

  // Function to handle opening the detailed report (the "excel sheet")
  const handleViewReport = () => {
    // In a real application, you would implement navigation or a modal here.
    alert(
      `Opening Detailed Placement Report for ${activeYear}. (Simulated action)`
    );
    // Example: window.open('link-to-excel-sheet.xlsx', '_blank');
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "4rem 0",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            {/* Title and Description */}
            <h1
              className="mb-4"
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#0a2240",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              <BriefcaseFill className="me-3" style={{ color: "#0a2240" }} />
              Placement <span style={{ color: "#1a4d7a" }}>Status</span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#444",
                lineHeight: "1.7",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              <strong>ISRM</strong> takes immense pride in its{" "}
              <strong>consistent track record</strong> of successful placements,
              with a strong history of students securing positions in top
              companies across various industries. Our dedicated efforts in
              providing industry-relevant training, skill development programs,
              and career guidance have resulted in{" "}
              <strong>excellent placement outcomes</strong> year after year.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Left Column: Key Success Metrics */}
          <Col lg={4} className="mb-4">
            <Card
              className="shadow-lg border-0 h-100 p-3"
              style={{
                backgroundColor: "#ffffff",
                borderLeft: "4px solid #0a2240",
              }}
            >
              <Card.Body>
                <h4
                  className="mb-4 fw-bold"
                  style={{
                    color: "#0a2240",
                    fontSize: "1.5rem",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  <GraphUp className="me-2" style={{ color: "#0a2240" }} />
                  Placement Highlights
                </h4>

                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent py-3">
                    <span style={{ color: "#444", fontWeight: "600" }}>
                      Highest Package:
                    </span>
                    <span
                      className="fw-bold"
                      style={{ color: "#0a2240", fontSize: "1.1rem" }}
                    >
                      {placementMetrics.highestPackage}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent py-3">
                    <span style={{ color: "#444", fontWeight: "600" }}>
                      Average Package:
                    </span>
                    <span
                      className="fw-bold"
                      style={{ color: "#0a2240", fontSize: "1.1rem" }}
                    >
                      {placementMetrics.averagePackage}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent py-3">
                    <span style={{ color: "#444", fontWeight: "600" }}>
                      Placement Rate:
                    </span>
                    <span
                      className="fw-bold"
                      style={{ color: "#0a2240", fontSize: "1.1rem" }}
                    >
                      {placementMetrics.placementPercentage}
                    </span>
                  </ListGroup.Item>
                </ListGroup>

                {/* Call to Action Button */}
                <div className="mt-4 text-center">
                  <Button
                    size="lg"
                    onClick={handleViewReport}
                    className="w-100 py-3"
                    style={{
                      backgroundColor: "#0a2240",
                      borderColor: "#0a2240",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    <FileEarmarkSpreadsheet className="me-2" />
                    View Detailed Placement Report
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column: Academic Year Selector */}
          <Col lg={8}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Body className="p-4">
                <h4
                  className="mb-4 fw-bold"
                  style={{
                    color: "#0a2240",
                    fontSize: "1.5rem",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  <CheckCircleFill
                    className="me-2"
                    style={{ color: "#1a4d7a" }}
                  />
                  Placement Status by Academic Year
                </h4>

                <Row>
                  {academicYears.map((year) => (
                    <Col md={3} sm={4} xs={6} key={year} className="mb-3">
                      <div
                        className={`p-3 text-center border rounded cursor-pointer ${
                          activeYear === year ? "shadow-sm fw-bold" : ""
                        }`}
                        style={{
                          transition: "all 0.2s",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          fontWeight: activeYear === year ? "600" : "400",
                          backgroundColor:
                            activeYear === year ? "#0a2240" : "#f8f9fa",
                          borderColor:
                            activeYear === year ? "#0a2240" : "#dee2e6",
                          color: activeYear === year ? "#ffffff" : "#444",
                        }}
                        onClick={() => {
                          setActiveYear(year);
                          console.log(`Year selected: ${year}`);
                        }}
                      >
                        {year}
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="mt-4 p-3 border-top">
                  <p
                    className="mb-0"
                    style={{ color: "#444", fontSize: "20px" }}
                  >
                    <strong>Currently Viewing Data For:</strong>{" "}
                 
                   <span 
  className="fw-bold" 
  style={{ 
    color: "#0a2240", 
    fontSize: "20px",
    fontWeight: "600",
  }}
>
  {activeYear}
</span>

                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// ---------------------------------------------------------------------
// Main Placement Overview Component
// ---------------------------------------------------------------------
function Placementoverview() {
  const [activeTab, setActiveTab] = useState("IT COMPANIES");
  const tabs = ["IT COMPANIES", "IT SERVICE COMPANIES", "CORE COMPANIES"];
  const logos = companyData[activeTab];

  // Custom CSS
  const customStyles = `
    .text-primary-dark { color: #0A193E !important; }
    .text-muted-light { color: #A9A9A9 !important; }

    .stat-value-main {
      font-family: 'Inter', Arial, Helvetica, sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 1;
    }

    .stat-value-unit {
      font-size: 2.2rem;
      font-weight: 800;
      line-height: 1;
    }

    .stat-label {
      font-family: 'Inter', Arial, Helvetica, sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      line-height: 1.2;
      opacity: 0.8;
    }

    .stat-item { 
      padding: 1.5rem 0.75rem;
    }

    .company-logo-box {
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      height: 100%;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .company-logo-box:hover { 
      transform: scale(1.05); 
      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
    }

    .card img { 
      transition: all 0.5s ease; 
      filter: grayscale(100%); 
    }
    
    .card img:hover { 
      filter: grayscale(0%); 
      transform: scale(1.05); 
    }

    .tab-link {
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      margin: 0 0.25rem;
      border-radius: 0.5rem 0.5rem 0 0;
      color: #6c757d;
      background: transparent;
      border: none;
      font-family: 'Inter', Arial, Helvetica, sans-serif;
    }

    .tab-link.active {
      color: #0A193E;
      background: #fff;
      border-bottom: 3px solid #0A193E;
    }

    .tab-link:hover {
      color: #0A193E;
      background: rgba(10, 25, 62, 0.05);
    }

    .logo-img {
      max-height: 60px;
      width: auto;
      object-fit: contain;
    }

    @media (max-width: 576px) {
      .stat-value-main { font-size: 2.5rem; }
      .stat-value-unit { font-size: 1.5rem; }
      .stat-item { padding: 1rem 0.5rem; }
      .tab-link { padding: 0.5rem 1rem; font-size: 0.9rem; }
    }

    .section-padding {
      padding: 4rem 0;
    }

    .equal-height-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .equal-height-card .card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Enhanced Placement Status Styles */
    .enhanced-placement-card {
      border-left: 4px solid #0a2240 !important;
    }

    .year-selector-item {
      transition: all 0.3s ease;
      font-family: 'Inter', Arial, Helvetica, sans-serif;
    }

    .year-selector-item:hover {
      transform: translateY(-2px);
    }
  `;

  return (
    <>
      <style>{customStyles}</style>

      {/* ====== Banner Section ====== */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #0a2240 100%)",
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
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            Placement <span className="text-warning">Overview</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontSize: "16px",
              marginTop: "0.5rem",
            }}
          >
            Placement • <span className="text-warning">Placement Overview</span>
          </p>
        </div>
      </section>

      {/* ====== Enhanced Placement Status Component ====== */}
      <EnhancedPlacementStatus />

      {/* ====== Placement Description Section ====== */}
      <div className="container section-padding">
        <h2
          style={{
            fontFamily: "Inter, Arial, Helvetica, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#0a2240",
            marginBottom: "2rem",
          }}
        >
          Our Placement Philosophy
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#444",
            lineHeight: "1.7",
            textAlign: "justify",
            textJustify: "inter-word",
            marginBottom: 0,
          }}
        >
          ISMR Pune is a hub of innovation, learning, and excellence. Our
          mission is to combine <strong>science and spirituality</strong> to
          create an environment that fosters holistic development. From
          state-of-the-art infrastructure to experienced faculty, ISMR is
          committed to nurturing future leaders in every field. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus a ad rerum laboriosam. Porro tempora nostrum facere expedita culpa itaque rem ut, provident nemo eaque aspernatur dolor omnis assumenda.

        </p>
      </div>

      {/* ====== Placement Stats Section ====== */}
      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-2 stat-item mb-4 mb-lg-0"
            >
              <div className="d-flex justify-content-center align-items-baseline">
                <span className="stat-value-main text-primary-dark">
                  {stat.mainValue}
                </span>
                {stat.unit && (
                  <span
                    className={`stat-value-unit ms-1 ${
                      stat.unit === "LPA"
                        ? "text-muted-light"
                        : "text-primary-dark"
                    }`}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="stat-label mt-2 mb-0 text-uppercase text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ====== Leadership Team Cards ====== */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2
            style={{
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#0a2240",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Placement Team
          </h2>

          <div className="row g-4">
            {leadershipTeam.map((leader) => (
              <div className="col-12 col-md-6 col-lg-4" key={leader.id}>
                <div className="card h-100 border-0 shadow-sm rounded-3 equal-height-card">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-100"
                    style={{
                      height: "450px",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                  <div className="card-body text-center d-flex flex-column">
                    <div>
                      <h4
                        className=" mb-3 mt-2 "
                        style={{ color: "#0a2240", fontSize: "1.6rem" }}
                      >
                        {leader.name}
                      </h4>
                      <p className="text-danger fw-semibold mb-3">
                        {leader.position}
                      </p>
                      <p className="mb-1">
                        <strong className="text-secondary">
                          Qualification:
                        </strong>{" "}
                        {leader.qualification}
                      </p>
                      <p className="mb-3">
                        <strong className="text-secondary">Experience:</strong>{" "}
                        {leader.experience}
                      </p>
                    </div>
                    <div>
                      <hr className="my-3" />
                      <p className="caption-text small mb-1">
                        <i className="bi bi-envelope me-2"></i>
                        {leader.email}
                      </p>
                      <p className="caption-text small mb-0">
                        <i className="bi bi-telephone me-2"></i>
                        {leader.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    
    </>
  );
}

export default Placementoverview;
