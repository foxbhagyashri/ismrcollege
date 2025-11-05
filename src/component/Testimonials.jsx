import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const sliderRef = useRef();

  const testimonials = [
    {
      id: 1,
      name: "Samagya Sharma",
      role: "ISMR student",
      img: "./usericon.png",
      text: "Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jesonal Smith",
      role: "ISMR student",
      img: "./usericon.png",
      text: "Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.",
      rating: 5,
    },
    {
      id: 3,
      name: "John Smith",
      role: "ISMR student",
      img: "./usericon.png",
      text: "Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mary Johnson",
      role: "ISMR student",
      img: "./usericon.png",
      text: "ISMR provides excellent facilities and mentors who guide us to think creatively and achieve our goals.",
      rating: 5,
    },
    {
      id: 5,
      name: "Samagya Sharma",
      role: "ISMR B-School (2020-22)",
      img: "./usericon.png",
      text: `I Samagya Sharma pursuing MBA (2020-22) at ISMR B-School, Pune. I am delighted to share that in 1st semester itself I got placed in Ambitious Polytech, Pune as "Business Development Intern".`,
      rating: 5,
    },
    {
      id: 6,
      name: "Krishna Mishra",
      role: "ISMR B-School (2020-22)",
      img: "./usericon.png",
      text: `I Krishna Mishra pursuing MBA (2020-22) from ISMR B-School, Pune. I got an opportunity to carry out my internship at UAS International, Delhi in sales and marketing.`,
      rating: 5,
    },
    {
      id: 7,
      name: "Bharat Ratangan",
      role: "ISMR B-School (2019-21)",
      img: "./usericon.png",
      text: `I Bharat Rotangan pursuing MBA (2019-21) at ISMR B-School, Pune. I was lucky enough to get a placement with XL Dynamics company with a good annual package.`,
      rating: 5,
    },
    {
      id: 8,
      name: "Shruti Sinha Plummer",
      role: "ISMR B-School (2020-22)",
      img: "./usericon.png",
      text: `This is Shruti Sinha pursuing MBA (2020-22) from ISMR B-School, Pune. I was provided with a wonderful opportunity to work for Blitzjobs, Pune by ISMR Placement Cell.`,
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-section py-5">
      <Container>
        <p className="section-title text-center mb-5 ">What Students Say</p>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-2">
              <Card className="testimonial-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="testimonial-img me-3"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold text-dark">{item.name}</h6>
                      <small className="text-muted">{item.role}</small>
                    </div>
                    <div className="ms-auto text-warning">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <hr />
                  <p className="testimonial-text mb-0">{item.text}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>

        <div className="testimonial-arrows text-center mt-4">
          <button
            className="arrow-btn me-3"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="arrow-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;






// 