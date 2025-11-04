import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./StudentLife.css";

const StudentLife = () => {
    return (
        <section className="student-life my-5">
            <Container>
                <Row className="align-items-center">
                    {/* Left Image */}
                    <Col md={4} className="text-center mb-4 mb-md-0">
                        <img
                            src="./student-1.png"
                            alt="Student Life"
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* List Links */}
                    <Col md={3}>
                        <ListGroup variant="flush" className="mb-4 list-group-flush">
                            <ListGroup.Item>
                                <a href="#athletics">
                                    Athletics & Fitness <span className="listgroup-arrow">→</span>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="#support">
                                    Support & Guidance <span className="listgroup-arrow">→</span>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="#activities">
                                    Student Activities <span className="listgroup-arrow">→</span>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="#campus">
                                    Campus Life <span className="listgroup-arrow">→</span>
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    {/* Right Content */}
                    <Col md={5}>
                        <h2 className="mb-4">Student Life At ISMR</h2>
                        <p className="program-text">
                            We are proud of our alumni network, which spans across industries
                            and continents. Our graduates are equipped with the skills, values,
                            knowledge, and to excel in their chosen fields and make positive
                            impact on society.
                        </p>
                        <p className="program-text">
                            Our graduates are equipped with the skills, values, knowledge, and
                            ability to excel in their chosen fields and make a positive impact.
                        </p>

                        <a className="default-btn" href="#application-form">
                            Application Form <span className="arrowst">→</span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StudentLife;
