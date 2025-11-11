import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const newsletterData = {
  "May 2024": {
    title: "Innovations in AI & Technology Research",
    mainArticle: "Academic Excellence & Adaptability",
    mainText:
      "ISMR's curriculum is constantly updated to meet industry demands. Our focus on critical thinking and problem-solving ensures students are future-ready, capable of analyzing complex information and developing logical solutions.",
    secondaryArticle: "World-Class Infrastructure & Learning Environment",
    secondaryText:
      "The faculty at ISMR are exceptional mentors who go above and beyond to ensure student success. The state-of-the-art laboratories, libraries, and learning environment have prepared me well for my career.",
    points: [
      "State-of-the-art labs & library",
      "Active industry collaborations",
      "Eco-friendly campus initiatives",
      "Mentorship programs for all students",
    ],
    image1:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9491?w=600&h=400&fit=crop",
  },
  "June 2024": {
    title: "Faculty Achievements and Placement Highlights",
    mainArticle: "Record Placement Success",
    mainText:
      "Our strong partnerships with leading companies and a dedicated placement cell have resulted in a record placement season. ISMR ensures every student receives excellent career guidance and opportunities.",
    secondaryArticle: "Future-Ready Skills Development",
    secondaryText:
      "Through soft-skills training, leadership workshops, and practical exposure, we focus on holistic development, ensuring graduates possess both technical expertise and interpersonal skills.",
    points: [
      "100% placement support",
      "Soft skills & leadership training",
      "Strong alumni network",
      "Industry-relevant curriculum",
    ],
    image1:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop",
  },
  "July 2024": {
    title: "New Student Orientation and Research Grants",
    mainArticle: "Welcome to the New Batch",
    mainText:
      "A warm welcome to all new students! The orientation program covered everything from academic guidelines to campus life, setting a solid foundation for their journey at ISMR.",
    secondaryArticle: "Major Research Grants Awarded",
    secondaryText:
      "ISMR faculty members secured three major grants this month for groundbreaking research in Renewable Energy and Data Science, strengthening our research profile.",
    points: [
      "Mentorship from experienced faculty",
      "Research grants & scholarships",
      "Student clubs & initiatives",
      "Orientation & induction programs",
    ],
    image1:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
};

const allMonths = Object.keys(newsletterData);

function MonthlyNewsletter() {
  const [selectedMonth, setSelectedMonth] = useState(
    allMonths[allMonths.length - 1]
  );
  const [startIndex, setStartIndex] = useState(
    Math.max(0, allMonths.length - 3)
  );
  const monthsToShow = 3;

  const newsletterContent = newsletterData[selectedMonth];

  const handleSelectMonth = (month) => setSelectedMonth(month);

  const handlePrev = () => {
    const currentIdx = allMonths.indexOf(selectedMonth);
    if (currentIdx > 0) {
      const newIdx = currentIdx - 1;
      setSelectedMonth(allMonths[newIdx]);
      setStartIndex((prev) =>
        newIdx < prev ? Math.max(0, newIdx) : prev
      );
    } else {
      setSelectedMonth(allMonths[allMonths.length - 1]);
      setStartIndex(Math.max(0, allMonths.length - monthsToShow));
    }
  };

  const handleNext = () => {
    const currentIdx = allMonths.indexOf(selectedMonth);
    if (currentIdx < allMonths.length - 1) {
      const newIdx = currentIdx + 1;
      setSelectedMonth(allMonths[newIdx]);
      setStartIndex((prev) =>
        newIdx > prev + monthsToShow - 1
          ? Math.min(allMonths.length - monthsToShow, newIdx - monthsToShow + 1)
          : prev
      );
    } else {
      setSelectedMonth(allMonths[0]);
      setStartIndex(0);
    }
  };

  return (
    <div className="monthly-newsletter-page pt-0 pb-5">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .monthly-newsletter-page {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #444;
          background-color: #f8f9fa;
        }

        /* --- General --- */
        .newsletter-heading { font-weight: 700; font-size: 40px; color: #0a2240; margin: 0; }
        .newsletter-month-title { color: #003366 !important; font-weight: 700; }
        .newsletter-title { font-weight: 600; font-size: 24px; color: #0a2240; margin-bottom: 0.5rem; }
        .body-text { font-size: 16px; line-height: 1.5; color: #555; text-align: justify; }
        .blue-bg-col { background-color: #003366; color: white; padding: 30px; display: flex; flex-direction: column; border-radius: 0 12px 12px 0; }
        .blue-point { font-size: 14px; margin-bottom: 0.5rem; }
        .newsletter-card { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); border: none; background: white; border-radius: 12px; margin-top: 40px; }

        /* --- Month Selector --- */
        .month-selector-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px; /* Increased gap between buttons */
          padding: 20px 10px;
          margin: 0 auto 50px;
          flex-wrap: nowrap;
          overflow-x: auto;
          white-space: nowrap;
        }
        .month-selector-item {
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          color: #0a2240;
          border: 2px solid #0a2240;
          background-color: #ffffff;
          border-radius: 25px;
          padding: 8px 22px;
          font-size: 15px;
          flex-shrink: 0;
        }
        .month-selector-item.active {
          background-color: #FFC53D;
          border-color: #FFC53D;
          color: #0a2240;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .month-selector-nav {
          background-color: #0a2240;
          color: white;
          border: none;
          border-radius: 50%;
          width: 46px; /* Increased size */
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .month-selector-nav:hover {
          transform: scale(1.1);
          background-color: #003366;
        }

        /* --- Header Section --- */
        .monthly-newsletter-about {
          background: linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%);
          color: white;
          position: relative;
          padding: 60px 0;
        }
        .monthly-newsletter-about .newsletter-heading {
          color: #FFC53D;
          font-size: 38px;
          margin-bottom: 10px;
        }
        .monthly-newsletter-about .lead-text {
          font-size: 16px;
          color: #ffffff;
        }

        /* --- Responsive --- */
        @media (max-width: 768px) {
          .monthly-newsletter-about { padding: 40px 0; }
          .newsletter-heading { font-size: 28px; }
          .month-selector-container {
            gap: 10px;
            margin: 20px auto 40px;
          }
          .month-selector-item {
            font-size: 13px;
            padding: 6px 16px;
          }
          .month-selector-nav {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 576px) {
          .newsletter-heading { font-size: 24px; }
          .month-selector-item {
            font-size: 12px;
            padding: 5px 12px;
          }
          .month-selector-container {
            margin-bottom: 30px;
          }
        }
      `}</style>

      {/* Header Section */}
      <section className="monthly-newsletter-about text-center">
        <div className="container">
          <h1 className="newsletter-heading mb-3">
            ISMR Institute Newsletter
          </h1>
         
{/*  */}
          <p
  className="body-text text-white-50 mb-0 text-center"
  style={{ fontSize: "13px" }}
>
  Newsletter • <span className="text-warning">ISMR Newsletter</span>
</p>

        </div>
      </section>

      {/* Month Selector */}
      <Container className="text-center mt-5">
        <div className="month-selector-container">
          <Button
            variant="dark"
            className="month-selector-nav"
            onClick={handlePrev}
          >
            <ChevronLeft size={20} />
          </Button>

          {allMonths
            .slice(startIndex, startIndex + monthsToShow)
            .map((month) => (
              <Button
                key={month}
                variant="light"
                className={`month-selector-item ${
                  selectedMonth === month ? "active" : ""
                }`}
                onClick={() => handleSelectMonth(month)}
              >
                {month.split(" ")[0]}
              </Button>
            ))}

          <Button
            variant="dark"
            className="month-selector-nav"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </Container>

      {/* Newsletter Section */}
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {newsletterContent ? (
              <Card className="newsletter-card shadow-lg mt-4 mb-5">
                <Row className="g-0 h-100">
                  <Col lg={8} className="p-4 p-md-5 d-flex flex-column">
                    <h2 className="text-uppercase newsletter-month-title mb-3 text-center">
                      {selectedMonth.split(" ")[0]} Newsletter
                    </h2>
                    <img
                      src={newsletterContent.image1}
                      alt="Featured"
                      className="featured-img mb-4"
                    />
                    <h3 className="newsletter-title text-center mb-1">
                      {newsletterContent.title}
                    </h3>
                    <hr className="my-4" />
                    <p className="section-subheading">
                      {newsletterContent.mainArticle}
                    </p>
                    <p className="body-text">{newsletterContent.mainText}</p>
                    <p className="section-subheading">
                      {newsletterContent.secondaryArticle}
                    </p>
                    <p className="body-text">{newsletterContent.secondaryText}</p>
                  </Col>

                  <Col lg={4} className="blue-bg-col">
                    <div className="d-flex flex-column h-100">
                      <div>
                        {newsletterContent.points.map((point, idx) => (
                          <p key={idx} className="blue-point text-white-50">
                            • {point}
                          </p>
                        ))}
                      </div>
                      <div className="text-center mt-auto pt-3">
                        <p className="text-white-50 mb-1">Connect with us</p>
                        <p className="fw-semibold text-warning mb-0">
                          www.ismr.edu
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            ) : (
              <Card className="p-5 text-center">
                <h3 className="text-secondary">
                  Please select a month to view the newsletter.
                </h3>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MonthlyNewsletter;
