import React from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
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

                    {/* Right Content */}
                    <Col md={3}>


                        {/* List Links */}
                        <ListGroup variant="flush" className="mb-4">
                            <ListGroup.Item className=" p-0 border-0">
                                <a href="#athletics" className="text-decoration-none">
                                    Athletics & Fitness
                                </a>
                                <span className="listgroup-arrow">&nbsp;→</span>
                            </ListGroup.Item>
                            <ListGroup.Item className=" p-0 border-0">
                                <a href="#support" className="text-decoration-none">
                                    Support & Guidance
                                </a>
                                <span className="listgroup-arrow">&nbsp;→</span>
                            </ListGroup.Item>
                            <ListGroup.Item className=" p-0 border-0">
                                <a href="#activities" className="text-decoration-none">
                                    Student Activities
                                </a>
                                <span className="listgroup-arrow">&nbsp;→</span>
                            </ListGroup.Item>
                            <ListGroup.Item className=" p-0 border-0">
                                <a href="#campus" className="text-decoration-none">
                                    Campus Life
                                </a>
                                <span className="listgroup-arrow">&nbsp;→</span>
                            </ListGroup.Item>
                        </ListGroup>


                    </Col>
                    <Col md={5}>
                        <h2 className="mb-4">Student Life At ISMR</h2>
                        <p className="program-text">
                            We are proud of our alumni network, which spans across industries
                            and continents. Our graduates are equipped with the skills, values
                            knowledge, and to excel in their chosen fields and make positive
                            impact on society.
                        </p>
                        <p className="program-text">
                            Our graduates are equipped with the skills, values knowledge, and
                            to excel in their chosen fields and make positive.
                        </p>


                        <a className=" default-btn" href="#application-form">
                            Application Form <span className="arrowst">&nbsp; →</span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StudentLife;
