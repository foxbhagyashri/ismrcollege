import React from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function RefundPolicy() {
  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
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
            Refund <span className="text-warning">Policy</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem"
            }}
          >
            Admissions • <span className="text-warning">Refund Policy</span>
          </p>
        </div>
      </section>

      <section className="refund-policy">
        <style>{`
        .refund-policy {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #0f2b44;
          background: #f8f9fa;
          min-height: 100vh;
        }
        .container {
          max-width: 1200px;
          margin: 50px auto;
          padding: 0 40px;
        }
        
        .panel {
          background: #fff;
          padding: 50px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(15,51,80,0.1);
        }
        
        .panel h2 {
          margin: 0 0 20px;
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f3350;
          line-height: 1.2;
        }
        
        .lead {
          font-size: 1.2rem;
          color: #444;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        /* Sections */
        .section {
          margin-top: 35px;
          padding-top: 30px;
          border-top: 1px solid rgba(15,51,80,0.1);
        }
        
        .section:first-of-type {
          border-top: none;
          margin-top: 0;
          padding-top: 0;
        }
        
        .section h3 {
          margin: 0 0 16px;
          color: #0f3350;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .section p {
          margin: 0 0 16px;
          color: #444;
          line-height: 1.7;
          font-size: 1.1rem;
        }
        
        .section p:last-child {
          margin-bottom: 0;
        }

        /* Table Styling */
        .table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        
        .table th {
          background: #0f3350;
          color: #fff;
          padding: 18px 16px;
          text-align: left;
          font-weight: 700;
          font-size: 1rem;
        }
        
        .table td {
          padding: 16px;
          border: 1px solid rgba(15,51,80,0.1);
          background: #fff;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .table tr:nth-child(even) td {
          background: #f8fafc;
        }
        
        .table tr:hover td {
          background: #f0f7ff;
        }

        /* Notes and Alerts */
        .note {
          margin: 25px 0;
          padding: 20px;
          border-left: 4px solid #ffb74d;
          background: #fff8e6;
          border-radius: 8px;
          color: #664400;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .note strong {
          color: #0f3350;
        }

        /* Lists */
        .list {
          margin: 16px 0;
          padding-left: 24px;
        }
        
        .list li {
          margin-bottom: 12px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
        }
        
        .list li strong {
          color: #0f3350;
        }

        /* Steps Grid */
        .steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 25px 0;
        }
        
        .step {
          background: #f7f9fb;
          padding: 24px;
          border-radius: 12px;
          border-left: 4px solid #0f3350;
          transition: all 0.3s ease;
        }
        
        .step:hover {
          background: #f0f7ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(15,51,80,0.1);
        }
        
        .step strong {
          display: block;
          margin-bottom: 12px;
          color: #0f3350;
          font-size: 1.1rem;
          font-weight: 700;
        }
        
        .step .muted {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Contact Information */
        .contact-info {
          background: #f0f7ff;
          padding: 24px;
          border-radius: 12px;
          margin: 20px 0;
        }
        
        .contact-info p {
          margin: 8px 0;
          font-size: 1.1rem;
        }
        
        .contact-info a {
          color: #0f3350;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .contact-info a:hover {
          color: #ff3a4e;
        }

        /* Action Buttons */
        .actions {
          display: flex;
          gap: 16px;
          margin: 35px 0 20px;
          flex-wrap: wrap;
        }
        
        .btn {
          padding: 16px 32px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .btn-primary {
          background: #ff3a4e;
          color: #fff;
          box-shadow: 0 4px 15px rgba(255, 58, 78, 0.3);
        }
        
        .btn-primary:hover {
          background: #e03547;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 58, 78, 0.4);
        }
        
        .btn-outline {
          background: #fff;
          border: 2px solid #0f3350;
          color: #0f3350;
        }
        
        .btn-outline:hover {
          background: #0f3350;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 51, 80, 0.2);
        }

        /* Footer */
        .muted {
          color: #666;
          margin-top: 20px;
          font-size: 1rem;
        }
        
        .muted strong {
          color: #0f3350;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero h1 {
            font-size: 3rem;
          }
          
          .container {
            padding: 0 30px;
          }
          
          .panel {
            padding: 40px 30px;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 40px 0;
            min-height: 200px;
          }
          
          .hero-container {
            padding: 0 24px;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero p {
            font-size: 1.1rem;
          }
          
          .container {
            padding: 0 24px;
            margin: 30px auto;
          }
          
          .panel {
            padding: 30px 24px;
          }
          
          .panel h2 {
            font-size: 1.8rem;
          }
          
          .steps {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .step {
            padding: 20px;
          }
          
          .actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
          
          .table {
            display: block;
            overflow-x: auto;
          }
        }
        
        @media (max-width: 480px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero p {
            font-size: 1rem;
          }
          
          .panel h2 {
            font-size: 1.6rem;
          }
          
          .section h3 {
            font-size: 1.3rem;
          }
          
          .breadcrumb {
            font-size: 0.9rem;
          }
        }
      `}</style>

        <div className="container">
          <div className="panel" role="region" aria-labelledby="refund-heading">
            <h2 id="refund-heading">Refund Policy</h2>
            <p className="lead">
            Our Refund Policy explains the terms and conditions under which students can request a fee refund. It provides clear guidelines on eligibility, required documents, timelines, and the refund process to ensure transparency and smooth handling of all refund requests.
            </p>

            <div className="section">
              <h3>Refund Schedule - Table 1</h3>
              <table className="table" aria-describedby="refund-heading">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Situation</th>
                    <th>Refund</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1.</strong></td>
                    <td>Request Received before date of start of session.</td>
                    <td>Entire fee less Rs.1000-2000/- Processing Fees</td>
                  </tr>
                  <tr>
                    <td><strong>2.</strong></td>
                    <td>Request received after commencement the course & seat could be filled by the Institute.</td>
                    <td>Entire fees collected after a deduction of the processing fee of Rs.1000/- and proportionate deductions of monthly tuition fee and hostel rent.</td>
                  </tr>
                  <tr>
                    <td><strong>3.</strong></td>
                    <td>Request received after commencement the course & seat could not be filled.</td>
                    <td>No Refund. Only Security Deposit (if any) will be refunded.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section">
              <h3>Refund Schedule - Table 2</h3>
              <table className="table" aria-describedby="refund-heading">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Situation</th>
                    <th>Refund</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1.</strong></td>
                    <td>On request received before the date of start of the academic session & seat could be filled by the Institute before the cut off date</td>
                    <td>Entire fee less Rs.1000/-</td>
                  </tr>
                  <tr>
                    <td><strong>2.</strong></td>
                    <td>On request received on/ after the beginning of academic session & seat could be filled by the Institute before the cut off date.</td>
                    <td>Entire fee less the seat Cancellation Charges on pro rata basis**</td>
                  </tr>
                  <tr>
                    <td><strong>3.</strong></td>
                    <td>On request received before/after the start of the academic session & seat could not be filled by the Institute.</td>
                    <td>No refund (expect security deposit if any)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section">
              <h3>Important Notes</h3>
              <div className="note">
                <ul className="list">
                  <li>Refund of fees will be done on or after 15th November 2026.
                  </li>
                  <li>For admission cancellation and refund, please send a detailed email to admissions@ismrpune.edu.in.
                  </li>
                  <li>Make sure to include:
                  </li>
                  <ul className="list">
                    <li>Your exact name as per your bank account, and

                    </li>
                    <li>A scanned copy of the required supporting documents

                    </li>

                  </ul>

                </ul>
                <p><b>Please note :
                </b>Your request will be accepted only until the last date announced by CET Cell.
                  After this date, no requests will be processed.
                </p>
              </div>
            </div>



            {/* <div className="muted">
            Last updated: <strong>November 18, 2026</strong>
          </div> */}
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
}