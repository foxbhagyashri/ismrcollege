import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGraduationCap, faBriefcase, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

// Define the custom CSS styles
const customStyles = `
/* Overall page background now white */
.program-page-container {
    background-color: #ffffff !important; 
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
}

/* Main title styling */
.main-program-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #1a2c5b; /* dark blue for heading */
    margin-bottom: 60px;
    font-size: 2.5rem;
}

/* Card base styles */
.program-card {
    border: none;
    border-radius: 8px;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Card background colors */
.bg-deep-blue {
    background-color: #1a2c5b;
    color: #ffffff;
}

.bg-accent-yellow {
    background-color: #ffd76d;
    color: #34495e;
}

/* Icon styling */
.program-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid;
    border-radius: 8px;
    display: inline-block;
}

.bg-deep-blue .program-icon {
    color: #ffd76d;
    border-color: #ffd76d;
}

.bg-accent-yellow .program-icon {
    color: #1a2c5b;
    border-color: #1a2c5b;
}

/* Card titles */
.program-card .card-title {
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 15px;
}

.bg-deep-blue .card-title {
    color: #ffffff;
}

.bg-accent-yellow .card-title {
    color: #1a2c5b;
}

/* Card descriptions */
.program-card .card-text {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 25px;
    flex-grow: 1;
}

/* Yellow description text for UG and Online programs */
.program-card-description-yellow {
    color: #ffd76d;
}

/* Program list styling */
.program-list {
    list-style: none;
    padding: 0;
    margin-bottom: 25px;
}

.program-list li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 1rem;
    font-weight: 600;
}

.program-list li svg {
    margin-right: 10px;
    font-size: 0.8rem;
}

.bg-deep-blue .program-list li {
    color: #ffffff;
}

.bg-accent-yellow .program-list li {
    color: #34495e;
}

.program-list li .arrow-icon {
    margin-left: auto;
    font-size: 1rem;
    margin-right: 0;
}

.bg-deep-blue .program-list li .arrow-icon {
    color: #ffd76d;
}

.bg-accent-yellow .program-list li .arrow-icon {
    color: #1a2c5b;
}

/* Footer styling */
.program-footer {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 20px;
    border-top: 1px solid;
    padding-top: 20px;
}

.bg-deep-blue .program-footer {
    border-color: rgba(255, 255, 255, 0.2);
    color: #e0e0e0;
}

.bg-accent-yellow .program-footer {
    border-color: rgba(0, 0, 0, 0.1);
    color: #555555;
}

.program-footer .globe-icon {
    font-size: 1.2rem;
    margin-right: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .main-program-title {
        font-size: 2rem;
    }
    .program-card {
        padding: 25px;
    }
    .program-icon {
        font-size: 2rem;
    }
    .program-card .card-title {
        font-size: 1.4rem;
    }
}
`;

function Courseduration() {
  const undergraduateIcon = faLaptopCode;
  const graduateIcon = faGraduationCap;
  const onlineIcon = faBriefcase;
  const globeIcon = faGlobeAmericas;

  const programs = [
    {
      id: 'ug',
      bgColorClass: 'bg-deep-blue',
      icon: undergraduateIcon,
      title: 'Undergraduate Programs',
      description: 'Undergraduate programs provide foundational knowledge and skills for entry-level careers in various fields.',
      courses: ['BCA (Comp. Applications)', 'BBA (Business Admin.)'],
      footer: 'Online + Onsite'
    },
    {
      id: 'grad',
      bgColorClass: 'bg-accent-yellow',
      icon: graduateIcon,
      title: 'Graduate Programs',
      description: 'Graduate programs offer advanced specialization and research opportunities, deepening expertise in a chosen discipline.',
      courses: ['MBA (Master of Business Admin.)', 'MCA (Comp. Applications)'],
      footer: 'Online + Onsite'
    },
    {
      id: 'online',
      bgColorClass: 'bg-deep-blue',
      icon: onlineIcon,
      title: 'Online Education Programs',
      description: 'Online education provides flexible learning opportunities, allowing students to acquire skills and degrees remotely.',
      courses: ['BCA Online', 'BBA Online'],
      footer: 'Only Online Programs'
    },
  ];

  const GlobalStyles = () => (
    <style dangerouslySetInnerHTML={{ __html: customStyles }} />
  );

  return (
    <>
      <GlobalStyles />
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #0a2240 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            Program <span className="text-warning">Offered</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "16px",
              marginTop: "0.5rem",
            }}
          >
            Academics • <span className="text-warning">Programs</span>
          </p>
        </div>
      </section>
      <Container className="my-4 program-page-container">
        
        <h1 className="  main-program-title">
          Graduates, Undergraduate and Online Education
        </h1>
          <p
          style={{
            fontSize: "18px",
            color: "#444",
            lineHeight: "1.7",
            textAlign: "justify",
            textJustify: "inter-word",
            marginBottom: "40px",
            marginTop: "50px",
          }}
        >
          ISMR Pune is a hub of innovation, learning, and excellence. Our
          mission is to combine <strong>science and spirituality</strong> to
          create an environment that fosters holistic development. From
          state-of-the-art infrastructure to experienced faculty, ISMR is
          committed to nurturing future leaders in every field. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus a ad rerum laboriosam. Porro tempora nostrum facere expedita culpa itaque rem ut, provident nemo eaque aspernatur dolor omnis assumenda.

        </p>
        <Row className="justify-content-center">
          {programs.map((program) => (
            <Col md={4} key={program.id} className="mb-4">
              <Card className={`program-card ${program.bgColorClass}`}>
                <Card.Body>
                  <div className="text-center">
                    <FontAwesomeIcon icon={program.icon} className="program-icon" />
                  </div>
                  <Card.Title className="text-center">{program.title}</Card.Title>
                  <Card.Text
                    className={`text-center ${
                      program.id === 'ug' || program.id === 'online'
                        ? 'program-card-description-yellow'
                        : ''
                    }`}
                  >
                    {program.description}
                  </Card.Text>

                  <ul className="program-list">
                    {program.courses.map((course, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faLaptopCode} className="arrow-icon" /> {course}
                      </li>
                    ))}
                  </ul>

                  <div className={`program-footer ${program.bgColorClass}`}>
                    <FontAwesomeIcon icon={globeIcon} className="globe-icon" />
                    <span>{program.footer}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Courseduration;
