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
            Chairman  <span className="text-warning">Message</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Chairman Message</span>
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

      

     

        </div>
      </section>



    </div>
  );
}

export default Leadership;
