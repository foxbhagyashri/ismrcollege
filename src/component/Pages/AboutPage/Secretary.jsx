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
            Secretary <span className="text-warning">Message</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            About • <span className="text-warning">Secretary Message</span>
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



           

          </div>

      

        </div>
      </section>



    </div>
  );
}

export default Leadership;
