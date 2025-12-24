import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./StudentLife.css";
import { Link } from "react-router-dom";

const StudentLife = () => {


    return (
        <section className="student-life">
            <Container>
                <h2>Add Campus Tour</h2>
                {/* <Row className="align-items-center">
                    <Col md={12} className="text-center mb-4 mb-md-0">
                        <video
                            className="img-fluid rounded"
                            width="100%"

                            poster="/video-poster.jpg"
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/mp.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row> */}
                <h4 style={{textAlign:"center"}}>We are playing campus video here.</h4>
            </Container>
        </section>
    );
};

export default StudentLife;
