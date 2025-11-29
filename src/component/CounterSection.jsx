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
    { id: 1, end: 3500, label: "Student Pass", icon: faLaptopCode },
    { id: 2, end: 3100, label: "Student Placed", icon: faUserGraduate },
    { id: 3, end: 600, label: "Companies", icon: faBookOpen },
    { id: 4, end: "12.6 LPA", label: "Highest Package", icon: faChalkboardTeacher, noCount: true },
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
                      {item.noCount ? (
                        item.end       // show directly, no counter, no +
                      ) : (
                        <CountUp end={item.end} duration={2} /> // animated counters
                      )}
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
