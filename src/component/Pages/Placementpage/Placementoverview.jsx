import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import {
  CheckCircleFill,
  BriefcaseFill,
  GraphUp,
  FileEarmarkSpreadsheet,
} from "react-bootstrap-icons";

function EnhancedPlacementStatus() {
  const [activeYear, setActiveYear] = useState("2024-25 (ONGOING)");
  const academicYears = [
    "2024-25 (ONGOING)",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
  ];

  const placementMetrics = {
    highestPackage: "₹ 28 LPA",
    averagePackage: "₹ 6.1 LPA",
    placementPercentage: "95%",
  };

  return (
    <section
      className="enhanced-placement py-5"
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
      }}
    >
      <Container>
        <Row className="mb-4  text-md-start">
          <Col>
            <h1
              className="mb-3 section-title text-md-start"
              style={{
                fontSize: "2.4rem",
                fontWeight: 700,
                color: "#0a2240",
               
              }}
            >
              <BriefcaseFill
                className="me-2 text-md-start text-md-start"
                style={{ color: "#0a2240", verticalAlign: "middle" }}
              />
              Placement <span style={{ color: "#1a4d7a" }}>Status</span>
            </h1>
            <p
              className="placement-desc mx-auto mx-md-0 mt-5 text-md-start"
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                maxWidth:"auto",
                textAlign: "justify",
              }}
            >
              <strong>ISMR</strong> has a strong record of placements across
              leading organizations. We emphasize{" "}
              <strong>industry exposure</strong>,{" "}
              <strong>skill development</strong>, and{" "}
              <strong>career mentorship</strong> to ensure students are
              future-ready and globally competitive.
            </p>
          </Col>
        </Row>

        <Row className="gx-4 gy-4 align-items-stretch">
          {/* Left - Highlights */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-3 h-100"
              style={{ borderLeft: "4px solid #0a2240" }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{ color: "#0a2240", fontSize: "1.4rem" }}
                  >
                    <GraphUp className="me-2" />
                    Placement Highlights
                  </h4>

                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between border-0 bg-transparent py-2 flex-wrap">
                      <span>Highest Package</span>
                      <strong>{placementMetrics.highestPackage}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between border-0 bg-transparent py-2 flex-wrap">
                      <span>Average Package</span>
                      <strong>{placementMetrics.averagePackage}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between border-0 bg-transparent py-2 flex-wrap">
                      <span>Placement Rate</span>
                      <strong>{placementMetrics.placementPercentage}</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </div>

                <Button
                  className="w-100 mt-4 py-3 fw-semibold"
                  style={{
                    backgroundColor: "#0a2240",
                    borderColor: "#0a2240",
                    fontSize: "0.95rem",
                  }}
                >
                  <FileEarmarkSpreadsheet className="me-2" />
                  View Detailed Report
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Right - Academic Years */}
          <Col lg={8} md={6}>
            <Card className="border-0 shadow-sm p-4 h-100">
              <Card.Body className="d-flex flex-column">
                <h4
                  className="fw-bold mb-4 text-center text-md-start"
                  style={{ color: "#0a2240", fontSize: "1.4rem" }}
                >
                  <CheckCircleFill className="me-2 text-primary" />
                  Placement Status by Academic Year
                </h4>

                <Row className="g-3 justify-content-center">
                  {academicYears.map((year) => (
                    <Col
                      md={4}
                      sm={6}
                      xs={6}
                      key={year}
                      className="d-flex justify-content-center"
                    >
                      <div
                        onClick={() => setActiveYear(year)}
                        className={`text-center p-3 rounded border year-box w-100 ${
                          activeYear === year ? "active" : ""
                        }`}
                      >
                        <span className="year-text">{year}</span>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="mt-auto text-center pt-3">
                  <p
                    style={{
                      color: "#0a2240",
                      fontWeight: 600,
                      fontSize: "15px",
                      wordBreak: "break-word",
                    }}
                  >
                    Currently Viewing:{" "}
                    <span className="font-size-32 fw-small">{activeYear}</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <style>{`
        .year-box {
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-wrap: break-word;
          word-break: break-word;
          transition: 0.3s;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.2;
          padding: 12px;
        }
        .year-box.active {
          background-color: #0a2240;
          color: #fff;
          border-color: #0a2240;
          font-weight: 700;
        }
        .year-box:hover {
          transform: translateY(-2px);
        }
        .year-text {
          display: inline-block;
          white-space: normal;
          text-align: center;
          font-size: clamp(12px, 2.8vw, 14px);
        }

        /* Responsive Fixes */
        @media (max-width: 992px) {
          .year-box {
            min-height: 60px;
          }
        }

        @media (max-width: 768px) {
          section.enhanced-placement {
            padding: 2.5rem 1rem !important;
          }
          .section-title {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
           
          }
          .placement-desc {
            font-size: 14px !important;
            line-height: 1.6 !important;
            margin-bottom: 1.2rem !important;
          }
          .year-box {
            font-size: 0.85rem !important;
            padding: 10px !important;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 1.6rem !important;
      
          }
          .placement-desc {
            font-size: 13px !important;
            line-height: 1.55 !important;
          }
          .year-box {
            font-size: 0.8rem !important;
            padding: 8px !important;
            min-height: 55px;
          }
        }
      `}</style>
    </section>
  );
}

function Placementoverview() {
  return (
    <>
      {/* ===== Header Section ===== */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #003366 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div className="container position-relative py-5">
          <h1
            className="mb-3 text-uppercase"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Placement <span className="text-warning">Overview</span>
          </h1>
          <p
            className="text-white-50 mb-0 text-center"
            style={{ fontSize: "13px" }}
          >
            Placement • <span className="text-warning">Placement Overview</span>
          </p>
        </div>
      </section>

      {/* ===== Placement Status Section ===== */}
      <EnhancedPlacementStatus />

      {/* ===== Placement Philosophy Section ===== */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#fff",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div className="container">
          <h1
            className="mb-4 text-center text-md-start"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#0a2240",
            }}
          >
            <BriefcaseFill
              className="me-2"
              style={{ color: "#0a2240", verticalAlign: "middle" }}
            />
            Our <span style={{ color: "#1a4d7a" }}>Placement Philosophy</span>
          </h1>

         <p
  className="placement-text mx-auto mx-md-0"
  style={{
    fontSize: "16px",
    color: "#444",
    lineHeight: 1.7,
    textAlign: "justify",
    padding: "10px 15px", // 👈 add padding (top-bottom, left-right)
    marginTop: "10px",    // 👈 add top margin
    marginBottom: "10px", // 👈 add bottom margin
  }}
>
  ISMR Pune’s placement philosophy revolves around holistic development,
  technical excellence, and leadership readiness. Through
  <strong> skill development workshops</strong>,
  <strong> internships</strong>, and{" "}
  <strong>corporate collaborations</strong>, ISMR ensures students are equipped
  for modern corporate challenges.
</p>

        </div>
      </section>
    </>
  );
}

export default Placementoverview;
