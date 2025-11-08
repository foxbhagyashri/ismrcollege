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
    quote: "Sustainable Growth & Community Engagement",
    quoteText:
      "We believe in education that contributes positively to society. Our initiatives focus on eco-friendly operations and community outreach, preparing ethical and responsible leaders.",
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
      "Through mandatory soft-skills training, leadership workshops, and practical exposure, we focus on holistic development, ensuring graduates possess both technical expertise and essential interpersonal skills.",
    quote: "Industry-Ready Graduates",
    quoteText:
      "Our curriculum is designed by industry veterans to ensure 100% employability.",
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
    quote: "The Power of Mentorship",
    quoteText:
      "Mentorship is key to guiding students toward success and fostering personal growth.",
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
      setStartIndex((prev) => {
        if (newIdx < prev) return Math.max(0, newIdx);
        return prev;
      });
    } else {
      // wrap to last
      const newIdx = allMonths.length - 1;
      setSelectedMonth(allMonths[newIdx]);
      // ensure last is visible in window
      setStartIndex(Math.max(0, allMonths.length - monthsToShow));
    }
  };

  const handleNext = () => {
    const currentIdx = allMonths.indexOf(selectedMonth);
    if (currentIdx < allMonths.length - 1) {
      const newIdx = currentIdx + 1;
      setSelectedMonth(allMonths[newIdx]);
      setStartIndex((prev) => {
        if (newIdx > prev + monthsToShow - 1) return Math.min(allMonths.length - monthsToShow, newIdx - monthsToShow + 1);
        return prev;
      });
    } else {
      // wrap to first
      const newIdx = 0;
      setSelectedMonth(allMonths[newIdx]);
      setStartIndex(0);
    }
  };

  return (
    <div className="monthly-newsletter-page pt-0 pb-5">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .monthly-newsletter-page { font-family: 'Inter', Arial, Helvetica, sans-serif; color: #444; background-color: #f8f9fa; }
        .newsletter-heading { font-weight: 700; font-size: 40px; color: #0a2240; margin: 0; }
        .newsletter-title { font-weight: 600; font-size: 24px; color: #0a2240; margin-bottom: 0.5rem; }
        .section-subheading { font-weight: 600; font-size: 20px; color: #0a2240; padding-left: 10px; border-left: 5px solid #FFC53D; line-height: 1.2; margin-bottom: 10px; }
  .body-text { font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 1.5rem; word-break: break-word; white-space: normal; text-align: justify; }
        .newsletter-card { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); border: none; overflow: visible; background: white; min-height: auto; }
        .blue-bg-col { background-color: #003366; color: white; padding: 30px; display: flex; flex-direction: column; }
        .quote-box { background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-left: 5px solid #FFC53D; margin-bottom: 20px; }
        .quote-icon { font-family: serif; font-size: 4rem; line-height: 1; color: #FFC53D; display: block; margin-bottom: 0; }
        .month-selector-item { cursor: pointer; transition: all 0.3s ease; font-weight: 600; color: #0a2240; border: 2px solid #0a2240; background-color: #ffffff; }
        .month-selector-item.active { background-color: #FFC53D; color: #0a2240; border-color: #FFC53D; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        .month-selector-nav { background-color: #0a2240; color: white; border-color: #0a2240; }
        .month-selector-nav:disabled { opacity: 0.5; }
        .blue-point { font-size: 14px; margin-bottom: 0.5rem; }
        .institute-label { font-size: 30px; font-weight: 500; color: #0a2240; }
        .edition-text { font-size: 30px; font-weight: 500; color: #0a2240; }
        .lead { font-size: 16px; }
        .caption-text { font-size: 16px; }
        .connect-link { font-size: 16px; color: #FFC53D; font-weight: 600; margin: 0; }
        @media (max-width: 992px) { .blue-bg-col { order: -1; margin-bottom: 20px; } }

        /* About Section Styles */
        .monthly-newsletter-about {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #0a2240;
          background: linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%);
          position: relative;
        }
        .monthly-newsletter-about::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.25;
          z-index: 0;
        }
        .monthly-newsletter-about .container {
          position: relative;
          z-index: 1;
        }
        .monthly-newsletter-about .newsletter-heading {
          font-weight: 700;
          font-size: 40px;
          margin-bottom: 0.5rem;
          color: #FFC53D;
        }
        .monthly-newsletter-about .lead-text {
          font-size: 16px;
          color: #ffffff;
          margin-bottom: 0;
        }
        .featured-img { height: 150px; width: 100%; object-fit: cover; }
        .newsletter-hr { border-color: #ddd; }
        @media (max-width: 992px) {
          .monthly-newsletter-about .newsletter-heading {
            font-size: 32px;
          }
        }
      `}</style>

      {/* About Section */}
      <section className="monthly-newsletter-about py-4 text-center">
        <div className="container py-4 ">
           <h1 className="newsletter-heading mb-4">
              ISMR Institute Newsletter Archive
            </h1>
          <p className="lead-text">
            Newsletters • <span className="fw-semibold">All News</span>
          </p>
        </div>
      </section>

  {/* Header & Month Selector */}
  <Container className="mb-5 ">
      

        <Row className="justify-content-center mt-5">
          <Col
            lg={8}
            className="d-flex align-items-center justify-content-center"
          >
            <Button
              variant="secondary"
              className="month-selector-nav p-2 me-2"
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
                  className={`month-selector-item mx-2 px-4 py-2 rounded-pill ${
                    selectedMonth === month ? "active" : ""
                  }`}
                  onClick={() => handleSelectMonth(month)}
                >
                  {month}
                </Button>
              ))}
            <Button
              variant="secondary"
              className="month-selector-nav p-2 ms-2"
              onClick={handleNext}
            >
              <ChevronRight size={20} />
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Newsletter Content */}
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            {newsletterContent ? (
              <Card className="newsletter-card shadow-lg">
                <Row className="g-0 h-100">
                  {/* Left Column */}
                  <Col lg={8} className="p-4 p-md-5 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-baseline mb-4">
                      <div className="institute-label">ISMR INSTITUTE</div>
                      <div className="edition-text text-end">
                        <span className="fw-semibold">{selectedMonth}</span>{" "}
                        Edition
                      </div>
                    </div>

                    <h2 className="newsletter-heading mb-4 text-uppercase">
                      NEWSLETTER
                    </h2>

                    <Row className="mb-4 g-2">
                      <Col xs={8}>
                        <img
                          src={newsletterContent.image1}
                          alt="Featured"
                          className="img-fluid rounded featured-img"
                        />
                      </Col>
                    </Row>

                    <h3 className="newsletter-title text-center mb-1">
                      {newsletterContent.title}
                    </h3>

                    <hr className="my-4 newsletter-hr" />

                    {/* Main Article */}
                    <div className="mb-5">
                      <p className="section-subheading">
                        {newsletterContent.mainArticle}
                      </p>
                      <p className="body-text">{newsletterContent.mainText}</p>
                    </div>

                    {/* Secondary Article */}
                    <div className="mb-5">
                      <p className="section-subheading">
                        {newsletterContent.secondaryArticle}
                      </p>
                      <p className="body-text">
                        {newsletterContent.secondaryText}
                      </p>
                    </div>
                  </Col>

                  {/* Right Column */}
                  <Col lg={4} className="blue-bg-col">
                    <div className="d-flex flex-column h-100">
                      {/* Top Quote Section */}
                      <div>
                        <div className="text-end caption-text mb-3">
                          <span className="p-1 px-3 rounded-pill bg-white bg-opacity-25">
                            ISMR Business
                          </span>
                        </div>

                        {/* Points Section */}
                        <div className="mt-4">
                          {newsletterContent.points &&
                            newsletterContent.points.map((point, idx) => (
                              <p key={idx} className="blue-point text-white-50">
                                • {point}
                              </p>
                            ))}
                        </div>
                      </div>

                      {/* Bottom Connect Section */}
                      <div className="text-center mt-auto">
                        <p className="caption-text text-white-50 mb-1">
                          Connect with us
                        </p>
                        <p className="connect-link mb-0">www.ismr.edu</p>
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