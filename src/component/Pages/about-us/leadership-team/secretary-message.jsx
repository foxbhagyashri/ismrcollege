import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../../assets/allsectionbg.jpg";
import director from "../../../../assets/Homeimg/Director.png";
import secretary from "../../../../assets/Homeimg/Secretary.png";
import cairman from "../../../../assets/Homeimg/cairman.png";

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
            Message  <span className="text-warning">From Secretary</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Message From Secretary</span>
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
                src={secretary}
                alt="Leadership Team"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-12 col-md-7 col-lg-7">
              {/* <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0a2240",

                  marginBottom: "1.5rem",
                }}
              >

                A Word From the Secretary
              </h2> */}
              <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0a2240",

                  marginBottom: "1.5rem",
                }}
              >

                Message From Secretary
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
                Change is the only constant in today’s world. As economies, industries and businesses continue to evolve, managers must be agile and prepared to adapt. Over my years in management education, I have witnessed many waves of transformation, and I am proud to say that ISMR has not only faced these changes but has consistently emerged stronger by embracing innovation and growth.
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
                At ISMR, our foundation is built on merit, integrity and ethics. Our curriculum is contemporary, industry-relevant and enriched with courses in ethics, international business and hands-on corporate exposure. We nurture socially aware leaders through various community initiatives and a dedicated three-week Socially Useful and Productive Work (SUPW) project, enabling students to deeply understand real societal needs.
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
                Our mission is to develop competent, responsible and future-ready managers who can confidently navigate an interconnected and rapidly changing global business landscape. As global companies continue to invest in India’s new-age sectors, it is evident that the future belongs to professionals who are willing to learn, unlearn and continuously upskill throughout their careers.
              </p>



              <h5><i>Dr. Nilesh Bhutada</i></h5>
              <h6>
                Secretary</h6>


            </div>





          </div>



        </div>
      </section>




    </div>
  );
}

export default Leadership;
