import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./StudentLife.css";

const StudentLife = () => {
    return (
        <section className="student-life">
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
                        <h2 className="mb-4">Student Life @ ISMR</h2>
                            
                        <p className="program-text">
                        Student life at ISMR is vibrant, engaging, and career-focused. With a Wi-Fi enabled campus, modern classrooms, library, sports facilities, gym, and seminar halls, students enjoy a balanced academic environment. Regular guest lectures, industry interactions, outbound training, clubs, and cultural activities help build leadership, teamwork, and confidence—preparing students for both professional success and personal growth.
                        </p>
                        {/* <p className="program-text">
                            Our graduates are equipped with the skills, values, knowledge, and
                            ability to excel in their chosen fields and make a positive impact.
                        </p> */}

                        <a className="default-btn" href="/Life@campus/Studentcampus">
                            Know more <span className="arrowst">→</span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StudentLife;
