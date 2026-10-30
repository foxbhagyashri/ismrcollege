import React from "react";

/* If your site already exports these tokens (NAVY, GOLD, display, body),
   import them instead and delete the local copies below. */
const NAVY = "#0a2240";
const NAVY_SOFT = "#3d5a80";
const GOLD = "#e0b44c";
const display = { fontFamily: "'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" };

const EMAIL = "careers@ismrpune.edu.in";
const WHATSAPP_DISPLAY = "+91 9158000595";
const WHATSAPP_LINK = "https://wa.me/919158000595";

const documents = [
    { icon: "📄", title: "Updated resume / CV", note: "Your latest academic and professional profile." },
    { icon: "🎓", title: "Educational certificates and mark sheets", note: "Degree certificates and all relevant mark sheets." },
    { icon: "💼", title: "Experience certificates", note: "From your previous institutions or employers." },
    { icon: "💰", title: "Salary slips", note: "For the last six months." },
];

export default function Careers() {
    const mailSubject = encodeURIComponent("Application for Career Opportunity at ISMR");

    return (
        <div style={body}>
            <style>{`
                .cr-doc { background:#fff; border:1px solid #e3e6ec; border-top:3px solid ${GOLD}; border-radius:10px; padding:1.25rem; height:100%; }
                .cr-icon { width:46px; height:46px; border-radius:50%; background:${NAVY}; display:inline-flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:0.9rem; }
                .cr-btn { display:inline-flex; align-items:center; gap:.5rem; padding:12px 22px; border-radius:8px; font-weight:600; font-size:16px; text-decoration:none; transition:filter .15s; }
                .cr-btn:hover { filter:brightness(.93); }
                .cr-btn:focus-visible { outline:3px solid ${GOLD}; outline-offset:3px; }
                .cr-contact-row { display:flex; gap:1rem; align-items:flex-start; padding:1.1rem 0; border-bottom:1px solid rgba(255,255,255,.15); }
                .cr-contact-row:last-child { border-bottom:0; }
                .cr-contact-row a:not(.cr-btn) { color:#fff; font-weight:600; font-size:1.15rem; word-break:break-all; }
            `}</style>

            {/* ===== HERO ===== */}
            <section className="container-fluid py-5 mt-5" style={{ backgroundColor: NAVY }}>
                <div className="container py-lg-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <p style={{ color: GOLD, fontWeight: 600, fontSize: "15px", marginBottom: "0.75rem" }}>
                                Careers at ISMR · International School of Management &amp; Research, Pune
                            </p>
                            <h1 style={{ ...display, color: "#fff", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                                Build your career with ISMR
                            </h1>
                            <p style={{ color: "#e6eaf2", fontSize: "17px", lineHeight: 1.75, maxWidth: "680px", marginBottom: "1.75rem" }}>
                                At International School of Management &amp; Research (ISMR), Pune, we believe in
                                nurturing talent, encouraging professional growth, and creating opportunities for
                                dedicated and passionate professionals. If you are looking to contribute to the
                                field of management education and grow in a dynamic academic environment, we invite
                                you to explore career opportunities with us.
                            </p>
                            <a
                                href={`mailto:${EMAIL}?subject=${mailSubject}`}
                                className="cr-btn"
                                style={{ backgroundColor: GOLD, color: "#2c2626" }}
                            >
                                <span aria-hidden="true">📩</span> Apply by email
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HOW TO APPLY ===== */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                    <h2 style={{ ...display, color: NAVY, fontWeight: 800, fontSize: "1.9rem", marginBottom: "0.6rem" }}>
                        <span aria-hidden="true">📩</span> How to apply
                    </h2>
                    <div style={{ width: 56, height: 4, background: GOLD, borderRadius: 2, marginBottom: "1.25rem" }} />
                    <p style={{ fontSize: "16px", color: "#444", lineHeight: 1.7, maxWidth: "720px", marginBottom: "2rem" }}>
                        Interested candidates are requested to email their updated resume along with the
                        following supporting documents:
                    </p>

                    <div className="row g-4">
                        {documents.map((d) => (
                            <div className="col-sm-6 col-lg-3" key={d.title}>
                                <div className="cr-doc">
                                    <span className="cr-icon" aria-hidden="true">{d.icon}</span>
                                    <h3 style={{ ...display, color: NAVY, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                                        {d.title}
                                    </h3>
                                    <p style={{ fontSize: "14.5px", color: "#555", lineHeight: 1.6, margin: 0 }}>{d.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SEND APPLICATION ===== */}
            <section className="container-fluid py-5 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="rounded-3 p-4 p-md-5" style={{ backgroundColor: NAVY }}>
                                <h2 style={{ ...display, color: "#fff", fontWeight: 800, fontSize: "1.7rem", marginBottom: "0.5rem" }}>
                                    <span aria-hidden="true">📧</span> Send your application
                                </h2>
                                <p style={{ color: "#c9d2e3", fontSize: "15px", marginBottom: "0.5rem" }}>
                                    Attach all four documents to a single email.
                                </p>

                                <div className="cr-contact-row">
                                    <span aria-hidden="true" style={{ fontSize: "24px" }}>✉️</span>
                                    <div>
                                        <div style={{ color: GOLD, fontWeight: 600, fontSize: "14px", marginBottom: "0.2rem" }}>Email</div>
                                        <a href={`mailto:${EMAIL}?subject=${mailSubject}`}>{EMAIL}</a>
                                    </div>
                                </div>

                                <div className="cr-contact-row">
                                    <span aria-hidden="true" style={{ fontSize: "24px" }}>📱</span>
                                    <div>
                                        <div style={{ color: GOLD, fontWeight: 600, fontSize: "14px", marginBottom: "0.2rem" }}>WhatsApp</div>
                                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap gap-3 mt-3">
                                    <a
                                        href={`mailto:${EMAIL}?subject=${mailSubject}`}
                                        className="cr-btn"
                                        style={{ backgroundColor: GOLD, color: "#2c2626" }}
                                    >
                                        Email your resume
                                    </a>
                                    <a
                                        href={WHATSAPP_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cr-btn"
                                        style={{ border: "2px solid #fff", color: "#fff" }}
                                    >
                                        Message on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}