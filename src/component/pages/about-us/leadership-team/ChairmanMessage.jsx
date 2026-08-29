import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../../assets/allsectionbg.jpg";
import director from "../../../../assets/Homeimg/Director.png";
import secretary from "../../../../assets/Homeimg/Secretary.png";
import cairman from "../../../../assets/Homeimg/cairman.png";
import SEO from "../../../SEO";

function Leadership() {
  return (
    <div className="font-poppins">
      <SEO
        title="Chairman's Message | Founder President | ISMR Pune"
        description="Read the inspiring message from the Founder President & Chairman of ISMR Pune on shaping global business leaders."
        canonical="https://ismrpune.edu.in/about-us/leadership-team/chairman-message/"
      />

      <style>{`
        /* Fonts & Headings */
        .page-heading {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 40px;
          font-weight: 700;
          text-align: center;
          color: #0a2240;
        }

        .section-heading {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #0a2240;
          text-align: center;
        }

        .card-heading {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a2240;
        }

        /* Body Text */
        .body-text, .caption-text {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #444;
        }

        .caption-text {
          color: #666;
        }

        @media (max-width: 768px) {
          .page-heading { font-size: 32px; }
          .section-heading { font-size: 24px; }
          .card-heading { font-size: 18px; }
          .body-text, .caption-text { font-size: 14.5px; }
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
            Founder President  <span className="text-warning">Message</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Founder President</span>
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

                Message from Founder President
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
                We are delighted to welcome students who aspire to grow, lead and make a meaningful impact in the world of business. At ISMR, we strive to create an environment that nurtures curiosity, builds confidence and encourages self-discovery. Our commitment is to help every student develop the clarity and courage needed to define their vision and work steadily toward achieving it. Inspiring and empowering others is woven into the very culture of our institution.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>In today’s rapidly changing world, the demand for leaders who can think critically, respond swiftly and design innovative solutions has never been greater. With this in mind, our programs are thoughtfully crafted around the pillars of entrepreneurship, leadership and consultancy. Through hands-on projects and collaborations with diverse organizations, students gain invaluable opportunities to recognize their strengths and acquire practical, industry-relevant skills.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>At ISMR, we are dedicated to shaping global leaders who come from varied backgrounds yet share a common ambition—to excel and contribute meaningfully to society. Our updated curriculum integrates interactive learning, personalized guidance, coaching and robust leadership development. Supported by our experienced faculty and professional team, students receive a balanced blend of business knowledge, personal growth and real-world exposure.</p>


              <p style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                marginTop: "10px",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word",
              }}>We look forward to welcoming you to a journey of transformation, learning and leadership.</p>


              <h5><i>Jaikishan Bhutada</i></h5>
              <h6>
                Founder President</h6>

            </div>

          </div>





        </div>
      </section>



    </div>
  );
}

export default Leadership;
