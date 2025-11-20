import React from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function DisclaimerPage() {
  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
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
              margin: 0,
            }}
          >
             <span className="text-warning">Disclaimer</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "15px", 
              marginTop: "0.5rem" 
            }}
          >
            Admissions • <span className="text-warning">Disclaimer</span>
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
            DISCLAIMER FOR FEES
          </h2>
          
          <p
            style={{
              fontSize: "18px",
              color: "#0a2240",
              lineHeight: "1.8",
              marginBottom: "1rem",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify",
              fontWeight: "600"
            }}
          >
            ISMR B-School Pune has not appointed any person or any third party to take admission on behalf of the International School of Management & Research.
          </p>

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
            Candidates are advised to get in touch directly with the institute for any admission related procedure.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#000",
              lineHeight: "1.8",
              marginBottom: "2rem",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify"
            }}
          >
            <strong style={{ color: "#0a2240" }}>Fees to be paid at institute counter or in the following account only:</strong> You are advised to remit the amount through a bank draft, drawn in favour of <strong>"International School of Management & Research (ISMR)"</strong>, payable at Pune or through online payment via NEFT or RTGS.
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
              ⚠️ <strong>NOTE:</strong> Institute will not be responsible, if any Students pay any fees or part of fees to any person or deposits in any other account.
            </p>
          </div>

       

         
        </div>
      </div>
      <Faq />
    </div>
  );
}