import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import director from "../../../assets/Homeimg/Director.png";
import secretary from "../../../assets/Homeimg/Secretary.png";
import cairman from "../../../assets/Homeimg/cairman.png";

function Leadership() {
  return (
    <div className="font-poppins">

      <style>{`
        /* Fonts */
        .font-roboto-slab {
          font-family: "Roboto Slab", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }

        /* Headings */
        .page-heading {
          font-family: "Roboto Slab", serif;
          font-size: 46px;
          font-weight: 900;
          text-align: center;
          color: #0a2240;
        }

        .section-heading {
          font-family: "Roboto Slab", serif;
          font-size: 36px;
          font-weight: 900;
          color: #0a2240;
          text-align: center;
        }

        .card-heading {
          font-family: "Roboto Slab", serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a2240;
        }

        /* Body Text */
        .body-text, .caption-text {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          color: #444;
        }

        .caption-text {
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading { font-size: 36px; }
          .section-heading { font-size: 28px; }
          .card-heading { font-size: 20px; }
          .body-text, .caption-text { font-size: 14px; }
        }

      `}</style>

      {/* Hero Section */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${allsectionbg})`,
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
              margin: 0,
            }}
          >
            Leadership <span className="text-warning">Team</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Leadership Team</span>
          </p>
        </div>
      </section>


      {/*  */}
      <div className="container pb-3">

      </div>
      {/*  */}
      {/* Leadership Cards */}
      <section className="py-1 pt-4">
        <div className="container">
          <div className="row g-4 mt-3">

            <div className="col-12 col-md-5 col-lg-5">
              <img
                src={cairman}
                alt="Leadership Team"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0a2240",

                  marginBottom: "1.5rem",
                }}
              >

                A Word From Chairman
              </h2>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                We welcome ambitious students aspiring to make a difference in the world of work. We provide you with an environment that believes in the power of business to achieve new heights. Curiosity to explore more about you, others and the world we live in is a unique development that will be made in the ISMR B-School. We build the courage in you to define your vision and make it a reality. You are driven to inspire and empower others to achieve beyond expectations; this is the culture at ISMR B-School.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>The challenges of the 21st century require leaders, who can adapt to rapidly changing environment, understand situations and find innovative solutions to problems, and then lead their organizations forward. To this end, we have designed our program around the core themes of entrepreneurship, leadership and consultancy. In this program, you will have the opportunity to work on real projects in organizations, both large and small, and thereby explore your potential and harness your skills.</p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>We aim to develop exceptional global leaders in a carefully selected learning community, diverse in background but sharing an international perspective and high aspirations. In a redesigned program that combines dialogue, personal attention, coaching and extensive leadership practices, our faculties and professional team guide the class through a dynamic mix of business fundamentals, self-development and real-world experiences.</p>


              <h5><i>Jaikishan Bhutada</i></h5>
              <h6>
                Chairman</h6>

            </div>

          </div>

          <div className="row g-4 mt-5">


            <div className="col-12 col-md-7 col-lg-7">
              <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0a2240",

                  marginBottom: "1.5rem",
                }}
              >

                A Word From Secretary
              </h2>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                The only constant in this world is change. The ebb and flow of change is perennial in economies, industries and businesses. It is indeed a challenging task for managers to constantly adapt to these changes.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                In all these years that I have spent in the field of management education, I have seen wave after wave of changes that have assailed management education. We have not only gone under these waves, but we have also succeeded in riding many of them.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Built on a culture of merit, integrity and ethics, we groom future managers through a comprehensive and contemporary curriculum supported by courses in ethics, international business and considerable industry exposure. Appreciation of societal issues is inculcated through various social action programs and a three-week project on ‘Socially Useful and Productive Activity’.
              </p>

              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                On the whole, our endeavor is to develop managers who by dint of their capability and character can measure up to the diverse challenges of the world of business and industry. The world is increasingly becoming more connected and interdependent in the way such as the businesses operate today with a focus shifting on the emerging markets.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Otherwise how does one explain Walmart’s decision to buy controlling stake in Flipkart, Beckshire Hathway’s decision to invest in Paytm and Softbank’s decision to invest in new age businesses. It clearly states that the business landscape is changing rapidly and means that the workforce of tomorrow is in for a big challenge, which is to not only learn but also re-learn and up-learn all through the course of their professional career.
              </p>
              <h5><i>Dr. Nilesh Bhutada</i></h5>
              <h6>
                Secretary</h6>


            </div>



            <div className="col-12 col-md-5 col-lg-5">
              <img
                src={secretary}
                alt="Leadership Team"
                className="img-fluid rounded"
              />
            </div>

          </div>

          <div className="row g-4 mt-5">

            <div className="col-12 col-md-5 col-lg-5">
              <img
                src={director}
                alt="Leadership Team"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0a2240",
              
                  marginBottom: "1.5rem",
                }}
              >
                A Word  From Director
              </h2>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Dear Students,
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Welcome to the dynamic world of management! As you embark on this transformative journey, you are stepping into a realm where innovation, leadership, and strategic thinking shape the future.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Management is not just about handling business operations—it is about making impactful decisions, leading teams with vision, and adapting to the ever-changing global landscape. The challenges ahead will test your resilience, creativity, and ability to think beyond conventional boundaries.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                At our institution, we are committed to equip you with the skills, knowledge, and values needed to become exceptional leaders. Our curriculum is designed to foster critical thinking, ethical decision-making, and hands-on experience through practical learning and industry engagement.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Success in management is not defined solely by financial growth but by the positive influence you have on people, businesses, and society. Cultivate a mindset of lifelong learning, embrace collaboration, and never hesitate to challenge the status quo.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                We are into a Volatile, Uncertain, Complex and Ambiguous (VUCA) world. Therefore, it is more challenging.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Remember, you need to transform yourself from Ordinary to Legendary. We will help you in this transformation.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>
                Wishing you all the best for a promising and successful career ahead!
              </p>
              <h5>Warm regards,</h5>
              <h5><i>Prof. (Dr.) Rupendra Gaikwad</i></h5>
              <h6>
                Director, ISMR</h6>


            </div>

          </div>


        </div>
      </section>



    </div>
  );
}

export default Leadership;
