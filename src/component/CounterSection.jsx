import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faUserGraduate,
  faBookOpen,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import "./CounterSection.css";

const CounterSection = () => {
  const counters = [
    { id: 1, end: 124, label: "Online Programs", icon: faLaptopCode },
    { id: 2, end: 140, label: "Graduate Programs", icon: faUserGraduate },
    { id: 3, end: 393, label: "Best Courses", icon: faBookOpen },
    { id: 4, end: 865, label: "Pro Teachers", icon: faChalkboardTeacher },
  ];

  return (
    <section className="counter-section text-center">
      <Container>
        <Row className="gy-4 gx-4 justify-content-center">
          {counters.map((item) => (
            <Col key={item.id} xs={6} md={3}>
              <div className="single-counter">
                <div className="counter-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="counter-inline">
                  <h3 className="counter-number">
                    <CountUp end={item.end} duration={2} />+
                  </h3>
                  <p className="counter-label">{item.label}</p>
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
