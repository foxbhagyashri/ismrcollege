import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import "./LatestNews.css";


const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      category: "Education",
      title:
        "$165-million for Adma’s world-leading inclusive genomics and RNA research program",
      date: "October 08, 2024",
      author: "William Cambel",
      image: "./blog-1.jpg",
    },
    {
      id: 2,
      category: "Science",
      title:
        "UBC professor is spinning the stuff of electric dreams in the Adma university",
      date: "October 08, 2024",
      author: "John Smith",
      image: "./blog-2.jpg",
    },
    {
      id: 3,
      category: "Business",
      title:
        "Unlocking the potential of peer support to improve men’s mental health",
      date: "October 08, 2024",
      author: "William Cambel",
      image: "blog-3.jpg",
    },
  ];

  return (
    <section className="latest-news-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">See Our Latest News</h2>
        <Row>
          {newsData.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="news-card border-0 h-100">
                <div className="news-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    className="news-img"
                  />
                  <span className="news-category">{item.category}</span>
                </div>
                <Card.Body>
                  <Card.Title className="news-title">{item.title}</Card.Title>
                  <div className="news-meta d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center me-3 text-mutedd small">
                      <FaCalendarAlt className="me-1 text-danger" />
                      {item.date}
                    </div>
                    <div className="d-flex align-items-center text-mutedd small">
                      <FaUserAlt className="me-1 text-danger" />
                      {item.author}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestNews;
