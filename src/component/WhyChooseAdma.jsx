import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaBookReader,
  FaCheckCircle,
  FaUniversity,
  FaGlobeAsia,
  FaMedal,
  FaWifi,
  FaUmbrellaBeach,
  FaHandshake,
  FaPlaneDeparture,
  FaUsers,
  FaHeartbeat,
  FaHome,
  FaStar,
  FaMusic,
  FaChalkboardTeacher,
  FaRunning,
} from "react-icons/fa";
import "./WhyChooseAdma.css";

const WhyChooseAdma = () => {
  const features = [
    "Best Institute in western region for Academics and Placements Excellence",
    "Management & Leadership Development Programmed",
    "Indoor and Outdoor Recreational Activities",
    "Domestic and International Industrial Visits",
    "Education Loan Tie up with Leading Banks",
    "Accidental Insurance Coverage",
    "Scholarships to Meritorious Students",
    "Fully Wi-Fi enabled campus",
    "Domestic Study Tour",
    "Excellent Return on Investment",
    "International Study Tour",
    "Gym facility in Campus",
    "Medicare Facility during the duration of the Course",
    "Hostel and Mess facilities for Boys and Girls",
    "100% Placement Assistance since Inception",
    "Extra activities",
    "Dedicated and Experienced Faculties",
    "Cultural Programme and Intra Collegiate Programme",
    "20 Acres Serene Campus",
  ];

  return (
    <section className="why-choose-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="why-title mb-4">Why Choose ISMR?</h2>

            <ul className="why-list">
              {features.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="why-icon" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="link" className="overview-btn mt-3">
              University Overview →
            </Button>

            <Row className="mt-4">
              <Col xs={6}>
                <div className="counter-item">
                  <FaBookReader className="counter-icon" />
                  <div>
                    <h3 className="counter-number">
                      <CountUp end={124} duration={2} />+
                    </h3>
                    <p className="counter-label">Graduate Programs</p>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="counter-item">
                  <FaUserGraduate className="counter-icon" />
                  <div>
                    <h3 className="counter-number">
                      <CountUp end={393} duration={2} />+
                    </h3>
                    <p className="counter-label">Best Courses</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={6}>
            <div className="image-container position-relative">
              <img
                src="./choose-1.png"
                alt="Campus Life"
                className="img-fluid rounded-3 shadow-sm"
              />
              <div className="quote-box">
                “Excellence in Education, Experience, and Exposure —
                Empowering future leaders through innovation and integrity.”
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseAdma;
