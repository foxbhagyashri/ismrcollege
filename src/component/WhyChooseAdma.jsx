import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";
import { FaUserGraduate, FaBookReader } from "react-icons/fa";

import "./WhyChooseAdma.css";


const WhyChooseAdma = () => {
  return (
    <section className="why-choose-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="why-title mb-3">Why Choose ISMR</h2>
            <p className="why-text mb-4">
              At Adma, we believe in providing an exceptional educational
              experience that prepares students for success in an ever-changing
              world. As a leading institution of higher learning, we are
              committed to fostering a vibrant academic community and empowering
              our students to reach their full potential.
            </p>

            <Button variant="link" className="overview-btn">
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
                    <p className="counter-label">Our graduates programs</p>
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
                    <p className="counter-label">We have the best courses</p>
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
                alt="Teacher"
                className="img-fluid"
              />
              <div className="quote-box">
                “Research-intensive universities may have specialized research
                centers and institutes for various disciplines.”
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseAdma;
