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
      name: "Pooja Ravindra Bawane",

      img: "./pooja_hd.png",
      text: "I am Pooja Ravindra Bawane, an MBA First Semester student at ISMR College. The college provides a dynamic learning environment that effectively connects theory with practical learning. I appreciate the regular internship opportunities, case study sessions, outdoor activities, and hands-on experiences offered. These activities help us understand real business situations and prepare us for future challenges.",
      rating: 5,
    },
    {
      id: 6,
      name: "Khushi Jitendra Bodile",
      // role: "ISMR Alumni",
      img: "./khushi_hd.png",
      text: "I am Khushi Jitendra Bodile, a First-Year MBA student at ISMR Pune. ISMR provides excellent facilities such as bus service, sports, games, and a gym for students. The college also organizes industrial visits and various programs that support our overall development. The faculty members are friendly and supportive, and I am truly grateful to be a part of ISMR.",
      rating: 5,
    },
    {
      id: 7,
      name: "Ajay Choudhary",

      img: "./nonamee_hd.png",
      text: "My first semester of MBA was a valuable and enriching learning experience. Case studies and interactive classes helped me understand how business concepts apply in real-life situations. Group projects enhanced my communication and leadership skills. Overall, this semester provided a strong foundation for my personal and professional growth.",
      rating: 5,
    },
    {
      id: 8,
      name: "Nikhil Gupta",

      img: "./noname02_hd.png",
      text: "The first semester of my MBA helped me enhance my planning and analytical skills, which are essential for my career growth. It strengthened my professional outlook and improved my ability to think strategically. This experience also boosted my confidence in my leadership skills. I am excited and motivated for the rest of the MBA program.",
      rating: 5,
    },
    {
      id: 9,
      name: "Ipsita Haldkar",

      img: "./ipshita_hd.png",
      text: "This program helped me develop strong analytical and strategic thinking skills essential for leadership. The support and guidance from the faculty provided valuable insights into industry practices. I also had the opportunity to build a strong professional network that opened new doors for growth. Overall, the program boosted my confidence and significantly enhanced my abilities.",
      rating: 5,
    },
    {
      id: 10,
      name: "Yogesh Hedau",

      img: "./yogesh.png",
      text: "I’m Yogesh Hedau, and I had a great experience at ISMR. The faculty is highly supportive and knowledgeable, creating a positive learning atmosphere. The lively campus environment and strong focus on practical learning and industry exposure helped me grow academically and professionally. I’m truly proud to be a part of this college.",
      rating: 5,
    },
    {
      id: 11,
      name: "Harsh Kumar Singh",

      img: "./harsh.png",
      text: "I am Harsh Kumar Singh, and my time at ISMR has been filled with learning and personal growth. The supportive faculty and strong focus on practical learning helped me gain confidence and clarity about my career goals. The college environment constantly motivates students to improve and excel. I am grateful to be part of an institution that truly encourages us to do our best.",
      rating: 5,
    },
    {
      id: 12,
      name: "Pallavi Shikhare",

      img: "./pallavi_hd.png",
      text: "I am Pallavi Shikhare, and this program has truly made a positive impact on my life. It helped me gain valuable knowledge and practical skills while connecting with professionals from diverse backgrounds. The global exposure and networking opportunities were extremely beneficial. I now feel confident and well prepared to take on leadership challenges.",
      rating: 5,
    },
    {
      id: 13,
      name: "Roshan Julme",

      img: "./roshan.png",
      text: "I am Roshan Julme, a Marketing student at the International School of Management and Research. My journey here has been very rewarding. The faculty’s guidance and practical examples helped me understand strategic marketing and brand management much better. The active learning environment at ISMR improved my skills and gave me the confidence to succeed in today’s competitive business world.",
      rating: 5,
    },
    {
      id: 14,
      name: "Pranita Bhosale",

      img: "./pranita.png",
      text: "I am PranitaBhosale, and my journey at ISMR College has been both memorable and life-changing. The college gave me a good mix of strong academics and practical learning. The supportive faculty, interactive classes, and real-world exposure helped me develop important professional and personal skills. I am very thankful to ISMR for building my confidence and guiding me toward success. Being the topper of my batch is a proud moment for me, and it shows how much the institute supports and encourages every student.",
      rating: 5,
    },
    {
      id: 15,
      name: "Raj Sakhiya",

      img: "./raj.png",
      text: "I am Raj Sakhiya, an MBA student at the International School of Management and Research.Studying here has been a great experience. The college helped me gain good knowledge and encouraged me to take part in activities that improved my overall personality.I am thankful to ISMR for giving me the chance to learn, grow, and create wonderful memories.",
      rating: 5,
    },
    {
      id: 16,
      name: "Palak Rangari",

      img: "./PalakRangari.png",
      text: "I am Palak Rangari, and my journey at the International School of Management and Research (ISMR), Pune has been truly meaningful.These two years of my MBA helped me grow academically, professionally, and personally through practical learning and constant support from faculty.ISMR strengthened my foundation in Marketing by providing real-world exposure, leadership opportunities, and confidence beyond textbooks.I am deeply grateful for the guidance, experiences, and lifelong memories that shaped my true potential.",
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
          p{
          text-align: justify;
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
          height:900px;
        }
        @media (max-width: 768px) {
          .testimonial-card {
            max-width: 90%;
            margin: auto;
          }
        }
          @media (max-width: 768px) {
  .testimonial-card {
    margin: 0 10px;
  }

  .testimonial-card p {
    font-size: 14px;
    line-height: 1.5;
  }

  .testimonial-card h6 {
    font-size: 16px;
  }

  .testimonial-card img {
    height: 180px;
    object-fit: cover;
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
    fontSize: "40px",
    fontWeight: "700",
    color: "#002147",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #002147 0%, #1a365d 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "18px",
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
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#4a5568",
    marginBottom: "25px",
    fontStyle: "italic",
    padding: "12px",
    flexGrow: 1,
  },
  footer: {
    marginTop: "auto",
  },
  name: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#002147",
    marginBottom: "5px",
  },
  role: {
    fontSize: "18px",
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
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",

    boxShadow: "0 4px 12px rgba(0, 33, 71, 0.2)",
  },
};

export default Testimonials;
