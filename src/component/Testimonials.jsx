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
      name: "William Sekel",
      role: "Adma’s student",
      img: "./usericon.png",
      text: "Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jesonal Smith",
      role: "Adma’s student",
      img: "./usericon.png",
      text: "Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.",
      rating: 5,
    },
    {
      id: 3,
      name: "John Smith",
      role: "Adma’s student",
      img: "./usericon.png",
      text: "Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mary Johnson",
      role: "Adma’s student",
      img: "./usericon.png",
      text: "Adma provides excellent facilities and mentors who guide us to think creatively and achieve our goals.",
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
        <h2 className="section-title text-center mb-5">What Students Say</h2>

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
