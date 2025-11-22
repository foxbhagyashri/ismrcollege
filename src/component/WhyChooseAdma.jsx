import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaBookReader,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUniversity,
  FaHandshake,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";
import "./WhyChooseAdma.css";
import { Link } from "react-router-dom";

const WhyChooseAdma = () => {
  const features = [
    {
      title: "Academic Excellence",
      description:
        "Cutting-edge curriculum designed by industry experts with focus on practical learning.",
      icon: FaGraduationCap,
    },
    {
      title: "Expert Faculty",
      description:
        "Learn from distinguished professors and industry professionals with decades of experience.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "World-Class Infrastructure",
      description:
        "State-of-the-art laboratories, libraries, and research facilities equipped with latest technology.",
      icon: FaUniversity,
    },
    {
      title: "Industry Connections",
      description:
        "Strong partnerships with leading companies ensuring excellent placement opportunities.",
      icon: FaHandshake,
    },
    {
      title: "Research Opportunities",
      description:
        "Engage in groundbreaking research projects with access to advanced research facilities.",
      icon: FaLightbulb,
    },
    {
      title: "Holistic Development",
      description:
        "Focus on personality development through sports, culture, and leadership programs.",
      icon: FaTrophy,
    },
  ];

  return (
    <section className="why-choose-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="section-title text-center mb-5">Why Choose ISMR?</h2>
            <div className="why-list">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="feature-card">
                    <div className="icon-wrapper">
                      <IconComponent className="why-icon" />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{item.title}</h4>
                      <p className="feature-description">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-5">
              <a href="Aboutpage/Ismr"  className="overview-btn">
               More reasons to join ISMR →
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseAdma;
