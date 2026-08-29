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
    { id: 1, end: 3500, label: "Students Passed", icon: faLaptopCode, suffix: "+" },
    { id: 2, end: 3100, label: "Student Placed", icon: faUserGraduate, suffix: "+" },
    { id: 3, end: 600, label: "Companies", icon: faBookOpen, suffix: "+" },
    { id: 4, end: 12.6, decimals: 1, label: "Highest Package", icon: faChalkboardTeacher, suffix: " LPA" },
  ];

  return (
    <section className="counter-section text-center">
      <Container>
        <div className="counter-scroll-container">
          <Row className="gy-4 gx-4 justify-content-center flex-nowrap">
            {counters.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <div className="single-counter">
                  <div className="counter-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="counter-inline">
                    <h3 className="counter-number">
                      <CountUp
                        end={item.end}
                        decimals={item.decimals || 0}
                        duration={2.5}
                        separator=""
                        suffix={item.suffix}
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                      />
                    </h3>
                    <p className="counter-label">{item.label}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CounterSection;
