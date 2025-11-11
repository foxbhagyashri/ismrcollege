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
      role: "MBA 2020-22 | Business Development Intern",
      img: "./usericon.png",
      text: "I was delighted to be placed in Ambitious Polytech, Pune, as a Business Development Intern in my very first semester! ISMR B-School provided the foundational skills and support needed to achieve this early success.",
      rating: 5,
    },
    {
      id: 2,
      name: "Krishna Mishra",
      role: "MBA 2020-22 | UAS International",
      img: "./usericon.png",
      text: "The ISMR Placement Cell offered a wonderful opportunity for my internship at UAS International, Delhi in Sales and Marketing. The guidance from our faculty was truly instrumental.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bharat Ratangan",
      role: "MBA 2019-21 | XL Dynamics",
      img: "./usericon.png",
      text: "I was lucky enough to secure a placement with XL Dynamics company with a great annual package. The program structure at ISMR B-School prepared me thoroughly for the corporate world.",
      rating: 5,
    },
    {
      id: 4,
      name: "Shruti Sinha Plummer",
      role: "MBA 2020-22 | Blitzjobs",
      img: "./usericon.png",
      text: "This is Shruti Sinha pursuing MBA (2020-22) from ISMR B-School, Pune. I was provided with a wonderful opportunity to work for Blitzjobs, Pune by ISMR Placement Cell.",
      rating: 5,
    },
    {
      id: 5,
      name: "Mary Johnson",
      role: "Current ISMR Student",
      img: "./usericon.png",
      text: "ISMR provides excellent facilities and dedicated mentors who constantly guide us to think creatively and achieve all of our career goals. Highly recommend the program!",
      rating: 5,
    },
    {
      id: 6,
      name: "Ankit Kulkarni",
      role: "ISMR Alumni",
      img: "./usericon.png",
      text: "The curriculum is industry-aligned and the practical case studies provided a real-world edge. My experience at ISMR was pivotal in my career growth.",
      rating: 5,
    },
    {
      id: 7,
      name: "Jesonal Smith",
      role: "Current ISMR Student",
      img: "./usericon.png",
      text: "The infrastructure and hands-on workshops here are fantastic. It's a supportive environment that truly pushes you towards excellence in management.",
      rating: 5,
    },
    {
      id: 8,
      name: "Deepa Menon",
      role: "ISMR B-School (2021-23)",
      img: "./usericon.png",
      text: "I was impressed with the faculty expertise. They don't just teach theory; they share invaluable industry insights that make a huge difference in interviews.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true, 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { 
        // For tablets and medium screens
        breakpoint: 992, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        } 
      },
      { 
        // For mobile and small screens (<= 767.98px)
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1, // Only 1 testimonial is shown on mobile
          slidesToScroll: 1, 
          dots: true, 
        } 
      },
    ],
  };

  return (
    <section className="testimonials-section py-5">
      <Container>
        <p className="section-title text-center mb-5 ">What Students Say 🗣️</p>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-2 d-flex">
              <Card className="testimonial-card shadow-sm border-0 w-100">
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