import React, { useRef } from "react";
import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const sliderRef = useRef();

  const testimonials = [
  
  
  
 
    {
      id: 5,
      name: "Mary Johnson",
      role: "Current ISMR Student",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80&fm=jpg",
      text: "ISMR provides excellent facilities and dedicated mentors who constantly guide us to think creatively and achieve all of our career goals. Highly recommend the program!",
      rating: 5,
    },
    {
      id: 6,
      name: "Ankit Kulkarni",
      role: "ISMR Alumni",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80&fm=jpg",
      text: "The curriculum is industry-aligned and the practical case studies provided a real-world edge. My experience at ISMR was pivotal in my career growth.",
      rating: 5,
    },
    {
      id: 7,
      name: "Jesonal Smith",
      role: "Current ISMR Student",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80&fm=jpg",
      text: "The infrastructure and hands-on workshops here are fantastic. It's a supportive environment that truly pushes you towards excellence in management.",
      rating: 5,
    },
    {
      id: 8,
      name: "Deepa Menon",
      role: "ISMR B-School (2021-23)",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80&fm=jpg",
      text: "I was impressed with the faculty expertise. They don't just teach theory; they share invaluable industry insights that make a huge difference in interviews.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "30px" } },
    ],
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
    
            <h1 className="section-title text-center">What Students Say</h1>

         
        </div>

        <div style={styles.sliderContainer}>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} style={styles.slideWrapper}>
                <div
                  className="testimonial-card"
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <div style={styles.imageWrapper}>
                    <img src={item.img} alt={item.name} style={styles.image} />
                    <div style={styles.curvedDivider}></div>
                  </div>

                  <div style={styles.cardBody}>
                    <p style={styles.text}>"{item.text}"</p>
                    <div style={styles.footer}>
                      <h6 style={styles.name}>{item.name}</h6>
                      <p style={styles.role}>{item.role}</p>
                      <div style={styles.stars}>
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} style={styles.star} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div style={styles.controls}>
          <button
            style={styles.arrowBtn}
            onClick={() => sliderRef.current.slickPrev()}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f8b400";
              e.currentTarget.style.color = "#002147";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#002147";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaArrowLeft />
          </button>
          <button
            style={styles.arrowBtn}
            onClick={() => sliderRef.current.slickNext()}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f8b400";
              e.currentTarget.style.color = "#002147";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#002147";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <style>{`
        .slick-dots {
       
          bottom: -60px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #002147;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          color: #f8b400;
          opacity: 1;
          font-size: 14px;
        }
        .slick-slide > div {
          display: flex;
          justify-content: center;
        }
        .testimonial-card {
          width: 100%;
          max-width: 360px;
          height: auto;
        }
        @media (max-width: 768px) {
          .testimonial-card {
            max-width: 90%;
            margin: auto;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
    
    padding: "90px 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#002147",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #002147 0%, #1a365d 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "1.2rem",
 
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  sliderContainer: {
    margin: "0 auto",
    position: "relative",
    maxWidth: "1200px",
  },
  slideWrapper: {
    padding: "20px",
    boxSizing: "border-box",

  },
  card: {
    
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    minHeight: "460px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // border: "1px solid #e5e7eb",
  },
  imageWrapper: {
    width: "100%",
    height: "290px",
    overflow: "hidden",
    background: "linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  curvedDivider: {
    position: "absolute",
    bottom: "-2px",
    left: "0",
    width: "100%",
    height: "30px",
    background: "#ffffff",
    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
  },
  cardBody: {
    // padding: "30px 25px 25px",
    // padding:"10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    flexGrow: 1,
  },
  text: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#4a5568",
    marginBottom: "25px",
    fontStyle: "italic",
    padding:"12px",
    flexGrow: 1,
  },
  footer: {
    marginTop: "auto",
  },
  name: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#002147",
    marginBottom: "5px",
  },
  role: {
    fontSize: "14px",
    color: "#718096",
    margin: "0 0 12px 0",
    fontWeight: "500",
  },
  stars: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    paddingBottom: "30px",
  },
  star: {
    color: "#f8b400",
    fontSize: "16px",
    //  marginTop:"200px",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    marginTop: "90px",
  },
  arrowBtn: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#002147",
    color: "#fff",
    border: "none",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
   
    boxShadow: "0 4px 12px rgba(0, 33, 71, 0.2)",
  },
};

export default Testimonials;
