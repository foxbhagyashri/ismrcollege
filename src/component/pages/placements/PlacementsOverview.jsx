import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  CheckCircleFill,
  BriefcaseFill,
  GraphUp,
  FileEarmarkSpreadsheet,
} from "react-bootstrap-icons";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import SEO from "../../SEO";



const placementData = {
  2023: [
    { name: "Finance", value: 30 },
    { name: "Marketing", value: 24 },
    { name: "HRM", value: 18 },
    { name: "BA", value: 10 },
    { name: "OSCM", value: 8 },
    { name: "Pharma", value: 6 },
    { name: "Agri Business", value: 4 },
  ],
  2024: [
    { name: "Finance", value: 29 },
    { name: "Marketing", value: 25 },
    { name: "HRM", value: 18 },
    { name: "BA", value: 11 },
    { name: "OSCM", value: 8 },
    { name: "Pharma", value: 5 },
    { name: "Agri Business", value: 4 },
  ],
  2025: [
    { name: "Finance", value: 28 },
    { name: "Marketing", value: 25 },
    { name: "HRM", value: 19 },
    { name: "BA", value: 12 },
    { name: "OSCM", value: 8 },
    { name: "Pharma", value: 5 },
    { name: "Agri Business", value: 3 },
  ],
  2026: [
    { name: "Finance", value: 27 },
    { name: "Marketing", value: 26 },
    { name: "HRM", value: 20 },
    { name: "BA", value: 12 },
    { name: "OSCM", value: 8 },
    { name: "Pharma", value: 4 },
    { name: "Agri Business", value: 3 },
  ],
};

const academicYears = [
  "2026 (ONGOING)",
  "2025",
  "2024",
  "2023",
];

// Map each year to the data-year key
const yearKeyMap = {
  "2026 (ONGOING)": 2026,
  "2025": 2025,
  "2024": 2024,
  "2023": 2023,
};


const SLICE_COLORS = [
  "#0a2240", // navy
  "#1d4e89", // mid blue
  "#3e7cb1", // sky blue
  "#85c7de", // pale teal
  "#d4a843", // gold
  "#c46a3b", // terracotta
  "#7c9070", // sage
];

// ---- Custom label on slice ---------------------------------------------
const RADIAN = Math.PI / 180;
const renderSliceLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.62;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: 11,
        fontWeight: 600,
        fill: "#ffffff",
        pointerEvents: "none",
      }}
    >
      <tspan x={x} dy="-0.3em">
        {name}
      </tspan>
      <tspan x={x} dy="1.2em">
        {`${Math.round(percent * 100)}%`}
      </tspan>
    </text>
  );
};



function EnhancedPlacementStatus() {
  const [activeYear, setActiveYear] = useState("2026 (ONGOING)");

  const dataYear = yearKeyMap[activeYear];
  const chartData = useMemo(
    () => placementData[dataYear] || [],
    [dataYear]
  );

  const placementMetrics = {
    highestPackage: "₹ 12 LPA",
    averagePackage: "₹ 5.2-6.8 LPA",
    placementPercentage: "92%",
  };

  return (
    <section
      className="enhanced-placement py-5"
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
      }}
    >
      <SEO
        title="Placement Overview | Statistics & Recruiters | ISMR Pune"
        description="Explore 100% placement track record at ISMR Pune. ₹12.6 LPA highest package, leading corporate recruiters, and sector-wise placement stats."
        canonical="https://ismrpune.edu.in/placements/"
      />
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
              Placement  <span style={{ color: "#1a4d7a" }}>Overview</span>
            </h1>
            <p
              className="placement-desc mx-auto mx-md-0 mt-5 text-md-start"
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                maxWidth: "auto",
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
                    Placement Records Since Inception
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
                  Placement Statistics by Specialization-wise
                </h4>

                <div
                  style={{
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    background: "#f7f8fa",
                    padding: "32px 20px",
                    minHeight: "100%",
                  }}
                >
                  <div
                    style={{
                      maxWidth: 1100,
                      margin: "0 auto",
                      display: "flex",
                      // flexWrap: "wrap",
                      gap: 28,
                      alignItems: "stretch",
                    }}
                  >
                    {/* ---------------- LEFT: Year selector ---------------- */}
                    <div
                      style={{
                        flex: "1 1 300px",
                        background: "#ffffff",
                        borderRadius: 16,
                        border: "1px solid #e6e8ec",
                        padding: "28px 24px",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 2px 10px rgba(10,34,64,0.05)",
                      }}
                    >
                      <h2
                        style={{
                          color: "#0a2240",
                          fontSize: 18,
                          fontWeight: 700,
                          margin: "0 0 20px",
                          letterSpacing: 0.2,
                        }}
                      >
                        Academic Year
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {academicYears.map((year) => {
                          const isActive = activeYear === year;
                          return (
                            <div
                              key={year}
                              onClick={() => setActiveYear(year)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") setActiveYear(year);
                              }}
                              style={{
                                cursor: "pointer",
                                textAlign: "center",
                                padding: "14px 16px",
                                borderRadius: 10,
                                border: isActive
                                  ? "1.5px solid #0a2240"
                                  : "1.5px solid #e2e5ea",
                                background: isActive ? "#0a2240" : "#fafbfc",
                                color: isActive ? "#ffffff" : "#0a2240",
                                fontWeight: 600,
                                fontSize: 14.5,
                                transition: "all 0.18s ease",
                              }}
                            >
                              {year}
                            </div>
                          );
                        })}
                      </div>

                      <div
                        style={{
                          marginTop: "auto",
                          paddingTop: 22,
                          textAlign: "center",
                          borderTop: "1px solid #eef0f3",
                        }}
                      >
                        <p
                          style={{
                            color: "#0a2240",
                            fontWeight: 600,
                            fontSize: 14,
                            margin: 0,
                            wordBreak: "break-word",
                          }}
                        >
                          Currently Viewing
                        </p>
                        <span
                          style={{
                            display: "inline-block",
                            marginTop: 6,
                            fontSize: 20,
                            fontWeight: 700,
                            color: "#0a2240",
                          }}
                        >
                          {activeYear}
                        </span>
                      </div>
                    </div>

                    {/* ---------------- RIGHT: Pie chart ---------------- */}
                    <div
                      style={{
                        flex: "2 1 480px",
                        background: "#ffffff",
                        borderRadius: 16,
                        border: "1px solid #e6e8ec",
                        padding: "28px 24px",
                        boxShadow: "0 2px 10px rgba(10,34,64,0.05)",
                      }}
                    >
                      <h2
                        style={{
                          color: "#0a2240",
                          fontSize: 18,
                          fontWeight: 700,
                          margin: "0 0 4px",
                        }}
                      >
                        Specialisation-wise Placement (%)
                      </h2>
                      <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 8px" }}>
                        Showing data for {dataYear}
                      </p>

                      <div style={{ width: "100%", height: 380 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={chartData}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={150}
                              labelLine={false}
                              label={renderSliceLabel}
                              isAnimationActive={true}
                            >
                              {chartData.map((entry, index) => (
                                <Cell
                                  key={entry.name}
                                  fill={SLICE_COLORS[index % SLICE_COLORS.length]}
                                  stroke="#ffffff"
                                  strokeWidth={2}
                                />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Legend */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px 18px",
                          justifyContent: "center",
                          marginTop: 8,
                        }}
                      >
                        {chartData.map((entry, index) => (
                          <div
                            key={entry.name}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              fontSize: 12.5,
                              color: "#374151",
                            }}
                          >
                            <span
                              style={{
                                width: 10,
                                height: 10,
                                borderRadius: 3,
                                background: SLICE_COLORS[index % SLICE_COLORS.length],
                                display: "inline-block",
                              }}
                            />
                            {entry.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
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
              color: "#ffffff",
              margin: 0,
            }}
          >
            Placement <span className="text-warning">Overview</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
              color: "#ffffff",
            }}
          >
            Placement • <span className="text-warning">Placement Overview</span>
          </p>
        </div>
      </section>

      {/* ===== Placement Status Section ===== */}
      <EnhancedPlacementStatus />

      {/* ===== Placement Philosophy Section ===== */}

    </>
  );
}

export default Placementoverview;
