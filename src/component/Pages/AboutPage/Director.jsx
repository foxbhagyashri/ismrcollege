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
            Director <span className="text-warning">Message</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Director Message</span>
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
                Welcome to the dynamic world of management !!! As you embark on this transformative journey, you are stepping into a realm where innovation, leadership, and strategic thinking shape the future.
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
              {/* <h5>Warm regards,</h5> */}
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
