import React from "react";

export default function RefundPolicy() {
  return (
    <section className="refund-policy">
      <style>{`
        .refund-policy {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #0f2b44;
          background: #f8f9fa;
          min-height: 100vh;
        }
        
        /* Hero Section */
        .hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 240px;
          background: #0f3350;
          color: #fff;
          padding: 50px 0;
          overflow: hidden;
        }
        
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }
        
        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        .hero h1 {
          font-size: 3.5rem;
          margin: 0 0 12px;
          font-weight: 800;
          line-height: 1.1;
        }
        
        .hero p {
          margin: 0;
          color: rgba(255,255,255,0.92);
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
        }
        
        .breadcrumb {
          color: #ffd27b;
          margin-top: 16px;
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 1rem;
          font-weight: 500;
        }
        
        .breadcrumb a {
          color: #ffd27b;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }
        
        .breadcrumb a:hover {
          opacity: 0.8;
        }

        /* Main Content */
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

     

       <section
                className="py-0 text-white text-center position-relative"
                style={{
                    background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                }}
            >
                <div
                    className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>

                <div className="container position-relative py-5">
                    <h1
                        className="mb-3"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "45px",
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
                            fontSize: "16px", 
                            marginTop: "0.5rem" 
                        }}
                    >
                       Admissions • <span className="text-warning">Refund Policy</span>
                    </p>
                </div>
            </section>

      <div className="container">
        <div className="panel" role="region" aria-labelledby="refund-heading">
          <h2 id="refund-heading">Overview</h2>
          <p className="lead">
            We want to make refunds simple and transparent. This page explains when refunds are available, 
            timelines, how to request a refund, and any applicable deductions or exceptions.
          </p>

          <div className="section">
            <h3>Scope</h3>
            <p>
              This policy applies to: application fees, admission deposits, tuition fees paid via the institute portal, 
              and other administrative fees charged directly by the institute. Third‑party charges (payment gateway fees, 
              partner services) are subject to the third party's terms.
            </p>
          </div>

          <div className="section">
            <h3>Refund Timelines & Amounts</h3>
            <p>Refunds depend on the fee type and timing of the request. Typical rules are summarised below.</p>

            <table className="table" aria-describedby="refund-heading">
              <thead>
                <tr>
                  <th>Fee Type</th>
                  <th>When Refunded</th>
                  <th>Refund Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Application Fee</strong></td>
                  <td>Within 15 working days of a verified duplicate payment request</td>
                  <td>Full refund (less any gateway charges)</td>
                </tr>
                <tr>
                  <td><strong>Admission Deposit</strong></td>
                  <td>Before programme start date and within specified withdrawal window</td>
                  <td>Partial refund depending on withdrawal date (see details)</td>
                </tr>
                <tr>
                  <td><strong>Tuition Fees</strong></td>
                  <td>Per programme refund schedule — depends on withdrawal date</td>
                  <td>Pro‑rated refund may apply; administrative deductions possible</td>
                </tr>
              </tbody>
            </table>

            <div className="note">
              <strong>Note:</strong> All refunds are processed to the original payment method where possible. 
              Bank processing times may apply after the institute issues the refund.
            </div>
          </div>

          <div className="section">
            <h3>Example Refund Schedule (Admission Deposit)</h3>
            <ul className="list">
              <li><strong>Withdrawal more than 30 days before start:</strong> 90% refund of deposit</li>
              <li><strong>Withdrawal 15–30 days before start:</strong> 50% refund</li>
              <li><strong>Withdrawal less than 15 days before start:</strong> No refund</li>
            </ul>
          </div>

          <div className="section">
            <h3>How to Request a Refund</h3>
            <div className="steps">
              <div className="step">
                <strong>1. Submit Request</strong>
                <p className="muted">
                  Log in to the admissions portal and raise a refund request from your application dashboard, 
                  or email admissions with your application ID.
                </p>
              </div>
              <div className="step">
                <strong>2. Verification</strong>
                <p className="muted">
                  We will verify payment records and supporting documents (bank receipt, proof of duplicate payment, etc.).
                </p>
              </div>
              <div className="step">
                <strong>3. Approval & Processing</strong>
                <p className="muted">
                  Approved refunds are processed and issued within 15 working days. You will receive an email when processing begins.
                </p>
              </div>
              <div className="step">
                <strong>4. Receive Funds</strong>
                <p className="muted">
                  Refunds appear in your account depending on your bank/card provider — usually 5–10 working days 
                  after the institute issues the refund.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Exceptions & Deductions</h3>
            <p>
              We may deduct reasonable administrative charges and any non‑refundable third‑party fees 
              (e.g. payment gateway charges). No refunds will be issued in cases of disciplinary dismissals 
              where the institute has followed due process.
            </p>
          </div>

          <div className="section">
            <h3>Contact & Escalation</h3>
            <p>If you have questions or an urgent refund issue, please contact:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:finance@college.edu">finance@college.edu</a></p>
              <p><strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></p>
            </div>
            <div className="muted">
              If you do not receive a satisfactory response within 10 working days, escalate to the Registrar's office with your ticket ID.
            </div>
          </div>

          <div className="note">
            If a refund is approved, the institute reserves the right to offset outstanding dues (if any) 
            from the refundable amount before issuing the payment.
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={() => window.print()}>
              Print / Save PDF
            </button>
            <a className="btn btn-outline" href="/pdfs/refund-policy.pdf" download>
              Download PDF
            </a>
          </div>

          <div className="muted">
            Last updated: <strong>June 1, 2025</strong>
          </div>
        </div>
      </div>
    </section>
  );
}