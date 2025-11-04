import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./CounterSection.css";

const CounterSection = () => {
  const counters = [
    { id: 1, end: 124, label: "Online Programs", icon: "🎓" },
    { id: 2, end: 140, label: "Graduates Programs", icon: "📘" },
    { id: 3, end: 393, label: "The Best Courses", icon: "📖" },
    { id: 4, end: 865, label: "Professional Teacher", icon: "👨‍🏫" },
  ];

  return (
    <section className="py-3 text-center">
      <Container>
        <Row className="gy-4">
          {counters.map((item) => (
            <Col key={item.id} xs={6} md={3}>
              <div className="single-counter h-100">
                <div className="display-5 mb-2">{item.icon}</div>
                <div className="mx-3 counterpara">
                  <h3 className="fw-bold text-primary">
                    <CountUp end={item.end} duration={2} /><b>+</b>
                  </h3>
                  <p className="mb-0 text-muted">{item.label}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CounterSection;
