import React from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";
import SEO from "../../SEO";

export default function DisclaimerFeePayment() {
    return (
        <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
            <SEO
                title="Disclaimer for Fee Payment | ISMR Pune"
                description="Important notice and guidelines regarding official bank accounts, online payment security, and fee payment verification for ISMR Pune."
                canonical="https://ismrpune.edu.in/admissions/fee-disclaimer/"
            />
            {/* Add FontAwesome */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            />

            {/* -------- HEADER SECTION -------- */}
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
                            color: "#ffffff",
                            margin: 0,
                        }}
                    >
                        <span className="text-warning">Disclaimer for Fees Payment</span>
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                            color: "#ffffff",
                        }}
                    >
                        Admissions • <span className="text-warning">Disclaimer for Fees Payment</span>
                    </p>
                </div>
            </section>

            {/* -------- MAIN CONTENT -------- */}
            <div className="container pb-5" style={{ marginTop: "3rem" }}>
                <div
                    className="rounded-3 p-4 p-md-5"
                    style={{
                        backgroundColor: "#fff",
                        boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                        border: "1px solid rgba(0,0,0,0.05)"
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "32px",
                            fontWeight: 700,
                            color: "#0a2240",
                            marginBottom: "1.5rem",
                            textAlign: "center"
                        }}
                    >
                        Disclaimer for Fees Payment
                    </h2>





                    <p
                        style={{
                            fontSize: "16px",
                            color: "#000",
                            lineHeight: "1.8",
                            marginBottom: "1rem",
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            textAlign: "justify"
                        }}
                    >
                        The institution will not be responsible for any loss of money arising from payments made to personal accounts, staff members, or any unauthorized channels. Students/parents are strongly advised to avoid making payments outside the official modes mentioned above.
                    </p>



                    {/* IMPORTANT NOTE BOX */}
                    <div
                        className="rounded-3 p-4"
                        style={{
                            borderLeft: "4px solid #d95c5c",
                            backgroundColor: "#FFEBEE",
                            border: "1px solid #FFCDD2"
                        }}
                    >
                        <p
                            style={{
                                fontSize: "16px",
                                color: "#c62828",
                                lineHeight: "1.7",
                                margin: 0,
                                fontWeight: "600",
                                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            }}
                        >
                            ⚠️ <strong>Important :</strong> All fee payments must be made online through the official Ease buzz link only. <a href="https://fees.easebuzz.in/view/ISMR_Pune" style={{ fontSize: "18px" }}>Pay Fee Online</a>

                        </p>
                    </div>




                </div>
            </div>
            <Faq />
        </div>
    );
}