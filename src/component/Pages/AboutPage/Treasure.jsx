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
                        Treasurer <span className="text-warning">Message</span>
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                        }}
                    >
                        About • <span className="text-warning">Treasurer Message</span>
                    </p>
                </div>
            </section>


            {/*  */}
            <div className="container pb-3">

            </div>
            {/*  */}


            <section className="py-1 pt-4">
                <div className="container">


                    <div className="row g-4 mt-5">

                        <div className="col-12 col-md-5 col-lg-5">
                            {/* <img
                                src={secretary}
                                alt="Leadership Team"
                                className="img-fluid rounded"
                            /> */}
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

                                Message from the Treasurer
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
                                Change remains the only constant in today’s dynamic economic and business environment. As industries, financial systems, and organizations continue to evolve, strong financial stewardship and adaptability have become essential. Through my professional journey in finance and management, I have observed multiple cycles of transformation, and I am proud that ISMR B-School has consistently demonstrated financial resilience, transparency, and strategic foresight during these changing times.
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
                                At ISMR B-School, our financial governance is firmly rooted in accountability, integrity, and ethical practices. We ensure optimal utilization of resources while supporting a contemporary, industry-aligned academic framework. Financial planning at ISMR actively enables initiatives in ethics, international exposure, corporate engagement, and experiential learning—ensuring students benefit from a holistic and future-oriented education.
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
                                Our commitment extends beyond numbers to responsible institutional growth and social impact. By supporting community-driven initiatives and the Socially Useful and Productive Work (SUPW) program, we reinforce our responsibility toward society while fostering socially conscious leadership among students.
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
                                As India’s emerging sectors continue to attract global investment, the role of sound financial management becomes increasingly critical. ISMR remains committed to strengthening its financial foundation to support innovation, sustainability, and continuous upskilling—preparing students to thrive in an interconnected and rapidly evolving global business landscape.
                            </p>


                            <h5><i>Chetan Bhutada</i></h5>
                            <h6>
                                CA</h6>


                        </div>






                    </div>



                </div>
            </section>


        </div>
    );
}

export default Leadership;
