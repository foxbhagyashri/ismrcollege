import React, { useState } from "react";

export default function AdmissionContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", programme: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="admissions-contact">
      <style>{`
        .admissions-contact{font-family:Inter, Roboto, Arial, sans-serif;color:#0f2b44}
        .hero{position:relative;display:flex;align-items:center;min-height:180px;background:#0f3350;color:#fff;padding:36px 40px;overflow:hidden}
        .hero-inner{position:relative;z-index:2;width:100%}
        .hero h1{font-size: 54px;margin:0 0 6px;font-weight:700}
        .hero p{margin:0;color:rgba(255,255,255,0.92)}
        .breadcrumb{color:#ffd27b;margin-top:8px;display:flex;gap:8px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        .container{max-width:1100px;margin:22px auto;padding:0 20px}
        .grid{display:grid;grid-template-columns:1fr 360px;gap:22px;align-items:start}

        .panel{background:#fff;padding:20px;border-radius:10px;box-shadow:0 8px 30px rgba(15,51,80,0.06)}
        .contact-list{display:flex;flex-direction:column;gap:12px}
        .contact-card{display:flex;gap:12px;align-items:flex-start}
        .icon{width:44px;height:44px;border-radius:8px;background:#f7f9fb;display:flex;align-items:center;justify-content:center;color:#0f3350;font-weight:700}
        .card-body h4{margin:0 0 6px}
        .card-body p{margin:0;color:#555}

        form .row{display:flex;gap:10px}
        form input, form textarea, form select{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(15,51,80,0.08);outline:none}
        form textarea{min-height:120px}
        .btn{padding:10px 14px;border-radius:8px;border:0;cursor:pointer}
        .btn-primary{background:#ff3a4e;color:#fff}
        .btn-outline{background:#fff;border:1px solid rgba(15,51,80,0.08)}

        .hours{background:#fff;padding:12px;border-radius:8px;box-shadow:0 6px 20px rgba(15,51,80,0.04)}
        .map{height:220px;border-radius:8px;overflow:hidden;background:linear-gradient(135deg,#e6f3ff,#fff)}

        @media(max-width:980px){.grid{grid-template-columns:1fr}.map{height:180px}}
      `}</style>

      <div className="hero" aria-label="Admissions contact header">
        <div className="hero-inner">
          <h1>Admissions & Contact</h1>
          <p className="muted">Need help with admissions, fees, or courses? Contact our admissions team — we're here to help.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <span aria-hidden>•</span>
            <span aria-current="page">Admissions & Contact</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="grid">
          <div>
            <div className="panel">
              <h2 style={{ marginTop: 0 }}>Get in touch</h2>
              <p style={{ color: '#555' }}>Fill the form and our admissions team will contact you within 2 working days. For urgent queries, use the phone numbers on the right.</p>

              <form onSubmit={handleSubmit} style={{ marginTop: 12 }} aria-label="Admissions enquiry form">
                <div className="row">
                  <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
                </div>

                <div style={{ marginTop: 10 }}>
                  <input name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
                </div>

                <div style={{ marginTop: 10 }}>
                  <select name="programme" value={form.programme} onChange={handleChange} aria-label="Select programme">
                    <option value="">Select programme (optional)</option>
                    <option>B.Sc Computer Science</option>
                    <option>MBA (Finance)</option>
                    <option>M.A. English</option>
                  </select>
                </div>

                <div style={{ marginTop: 10 }}>
                  <textarea name="message" placeholder="How can we help?" value={form.message} onChange={handleChange} />
                </div>

                <div style={{ marginTop: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <button type="submit" className="btn btn-primary">{submitted ? 'Submitted' : 'Send enquiry'}</button>
                  <button type="button" className="btn btn-outline" onClick={() => setForm({ name: '', email: '', phone: '', message: '', programme: '' })}>Reset</button>
                </div>

                <div style={{ marginTop: 12, color: '#666' }}>By submitting you agree to our <a href="#">privacy policy</a>.</div>
              </form>

              <div style={{ marginTop: 20 }}>
                <h3>Other contacts</h3>
                <div className="contact-list" style={{ marginTop: 8 }}>
                  <div className="contact-card">
                    <div className="icon">AD</div>
                    <div className="card-body">
                      <h4>Admissions Office</h4>
                      <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a><br />Email: <a href="mailto:admissions@college.edu">admissions@college.edu</a></p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="icon">FI</div>
                    <div className="card-body">
                      <h4>Fees & Finance</h4>
                      <p>Phone: <a href="tel:+911234567891">+91 12345 67891</a><br />Email: <a href="mailto:finance@college.edu">finance@college.edu</a></p>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="icon">HR</div>
                    <div className="card-body">
                      <h4>Registrar</h4>
                      <p>Phone: <a href="tel:+911234567892">+91 12345 67892</a><br />Email: <a href="mailto:registrar@college.edu">registrar@college.edu</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 16 }} className="panel">
              <h3 style={{ marginTop: 0 }}>Visit us</h3>
              <p className="muted">Address:</p>
              <p style={{ marginTop: 6 }}><strong>ISMR Institute</strong><br />123 College Avenue,<br />Pune, Maharashtra, India 411001</p>

              <div style={{ marginTop: 12 }} className="map" aria-hidden>
                {/* Replace with actual embedded map (iframe) or static image */}
                <div style={{ padding: 18 }}>Map placeholder — embed Google Maps iframe here.</div>
              </div>
            </div>
          </div>

          <aside>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Office hours</h3>
              <div style={{ marginTop: 8 }} className="hours">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><div>Monday — Friday</div><div><strong>9:30 — 17:30</strong></div></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><div>Saturday</div><div><strong>9:30 — 13:00</strong></div></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><div>Sunday</div><div><strong>Closed</strong></div></div>
              </div>

              <div style={{ marginTop: 14 }}>
                <h4 style={{ marginBottom: 6 }}>Quick help</h4>
                <p style={{ margin: 0 }}>Call <a href="tel:+911234567890">+91 12345 67890</a> for urgent admissions help.</p>
              </div>

              <div style={{ marginTop: 12 }}>
                <h4 style={{ marginBottom: 6 }}>Download</h4>
                <a className="btn btn-outline" href="/pdfs/admissions-brochure.pdf" download>Admissions brochure</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
