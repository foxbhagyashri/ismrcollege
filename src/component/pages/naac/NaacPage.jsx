import React, { useState } from "react";
import { Link } from "react-router-dom";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import naacLogo from "../../../assets/Homeimg/NAAC.png";
import sppuLogo from "../../../assets/Homeimg/SPPU.png";
import aicteLogo from "../../../assets/Homeimg/AICTE.png";
import SEO from "../../SEO";
import Faq from "../../Faq";

const brochurePdf = "/ISMR Brochure.pdf";

export default function NaacPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const criteriaList = [
    {
      id: "C1",
      number: "Criterion I",
      name: "Curricular Aspects",
      score: "Under NEP 2020 & SPPU Framework",
      desc: "Curriculum planning and delivery, academic flexibility with seven modern MBA specializations, value-added certification courses, and systematic multi-stakeholder feedback analysis.",
      points: [
        "Curriculum enrichment with industry-aligned modules & analytics",
        "Systematic feedback from students, alumni, employers & teachers",
        "Cross-cutting issues addressing professional ethics, gender, and environment",
      ],
    },
    {
      id: "C2",
      number: "Criterion II",
      name: "Teaching-Learning & Evaluation",
      score: "Student-Centric Pedagogy",
      desc: "Outcome-Based Education (OBE), experiential and participative case-method teaching, ICT-enabled smart classrooms, continuous internal assessment, and personalized mentoring.",
      points: [
        "1:15 student-faculty mentorship and career guidance ratio",
        "Case studies from Harvard, IIM, and live industry projects",
        "Transparent, continuous evaluation system with objective rubrics",
      ],
    },
    {
      id: "C3",
      number: "Criterion III",
      name: "Research, Innovations & Extension",
      score: "Industry & Social Outreach",
      desc: "Promotion of faculty and student research, publications in UGC-CARE and peer-reviewed journals, active MoUs with top corporates, and community CSR initiatives.",
      points: [
        "Annual national management research conference & publications",
        "Corporate MoUs for live industry internships & research projects",
        "Community extension drives through Rotaract & NSS initiatives",
      ],
    },
    {
      id: "C4",
      number: "Criterion IV",
      name: "Infrastructure & Learning Resources",
      score: "State-of-the-Art Campus",
      desc: "20-acre lush green campus, air-conditioned smart seminar halls, modern computer centers, sports grounds, automated library with DELNET and National Digital Library (NDL).",
      points: [
        "High-speed campus-wide Wi-Fi with fiber-optic connectivity",
        "Modern digital library with EBSCO, J-Gate, and DELNET e-resources",
        "Executive hostel facilities, cafeteria, and indoor/outdoor recreation",
      ],
    },
    {
      id: "C5",
      number: "Criterion V",
      name: "Student Support & Progression",
      score: "100% Placement Support",
      desc: "Dedicated Corporate Resource Center (CRC), scholarship guidance through MahaDBT, career counseling, competitive exam guidance, and active Alumni Association.",
      points: [
        "100% placement support with 350+ recruiting corporate partners",
        "Pre-placement training in soft skills, aptitude, and mock GD/PI",
        "Dynamic student councils, cultural clubs, and entrepreneurial cell",
      ],
    },
    {
      id: "C6",
      number: "Criterion VI",
      name: "Governance, Leadership & Management",
      score: "Strategic Quality Culture",
      desc: "Participative management led by eminent academicians and trustees, robust e-governance across administration and finance, faculty welfare, and strategic decentralization.",
      points: [
        "Visionary leadership by Sri Balaji Society leadership team",
        "Faculty development programs (FDPs) and research incentives",
        "Regular statutory audits and transparent financial governance",
      ],
    },
    {
      id: "C7",
      number: "Criterion VII",
      name: "Institutional Values & Best Practices",
      score: "Holistic & Green Campus",
      desc: "Eco-friendly green campus practices, rooftop solar energy, rainwater harvesting, gender equity initiatives, ethical code of conduct, and distinct institutional best practices.",
      points: [
        "360° Corporate Grooming & Industry Immersion Ecosystem",
        "Green audit, energy audit, and plastic-free campus protocols",
        "Constitutional values, human rights, and social responsibility forums",
      ],
    },
  ];

  const iqacMembers = [
    { role: "Chairperson", name: "Dr. Director / Principal", designation: "Head of the Institution" },
    { role: "Management Representative", name: "Executive Trustee", designation: "Governing Council Member" },
    { role: "IQAC Coordinator", name: "Senior Professor & Academic Dean", designation: "Associate Professor" },
    { role: "Senior Faculty Members", name: "HOD Marketing & Finance", designation: "Core Teaching Faculty" },
    { role: "Senior Faculty Members", name: "HOD HR & Business Analytics", designation: "Core Teaching Faculty" },
    { role: "Senior Administrative Officer", name: "Registrar / Admin Officer", designation: "Administration" },
    { role: "Industry Expert", name: "Corporate HR Director / VP", designation: "Industry Partner" },
    { role: "Alumni Representative", name: "Distinguished Alumnus", designation: "Corporate Alumni Leader" },
    { role: "Student Representative", name: "President, Student Council", designation: "Student Representative" },
  ];

  const statutoryPolicies = [
    { title: "Anti-Ragging Committee & Squad", desc: "Zero-tolerance policy compliant with UGC/AICTE regulations to ensure a 100% safe, inclusive campus.", tag: "Mandatory" },
    { title: "Internal Complaints Committee (ICC)", desc: "Constituted under the POSH Act to foster a respectful and gender-equitable environment for all.", tag: "Statutory" },
    { title: "Grievance Redressal Committee", desc: "Transparent mechanism for students, faculty, and staff to raise concerns with guaranteed timely resolution.", tag: "Governance" },
    { title: "SC / ST / OBC Welfare Cell", desc: "Committed to supporting students from reserved categories with scholarships, guidance, and social equity.", tag: "Equity" },
    { title: "Right to Information (RTI)", desc: "Proactive compliance under RTI Act 2005 with designated Public Information Officer (PIO).", tag: "Transparency" },
    { title: "Code of Professional Conduct", desc: "Clearly defined ethical expectations, academic integrity standards, and behavioral guidelines for all stakeholders.", tag: "Ethics" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif", color: "#212529" }}>
      <SEO
        title="NAAC Accreditation | Quality Assurance (IQAC) | ISMR Pune"
        description="ISMR B-School Pune is accredited by NAAC with B++ grade. Explore our Internal Quality Assurance Cell (IQAC), SSR Cycle-1 reports, best practices, and institutional governance."
        canonical="https://ismrpune.edu.in/naac/"
      />

      {/* -------- HERO BANNER -------- */}
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
            National Assessment & Accreditation Council <span className="text-warning">(NAAC)</span>
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
            Home • <span className="text-warning">NAAC Accreditation & Quality Assurance</span>
          </p>
        </div>
      </section>

      {/* -------- ACCREDITATION BADGE STRIP -------- */}
      <section className="py-4" style={{ backgroundColor: "#071b33", borderBottom: "3px solid #ffd76d" }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-start g-3">
            <div className="col-12 col-md-3 text-center">
              <div
                className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle shadow"
                style={{ backgroundColor: "#ffffff", width: "100px", height: "100px" }}
              >
                <img src={naacLogo} alt="NAAC Logo" style={{ maxHeight: "70px", maxWidth: "70px", objectFit: "contain" }} />
              </div>
            </div>
            <div className="col-12 col-md-6 text-white">
              <span className="badge px-3 py-2 text-dark mb-2" style={{ backgroundColor: "#ffd76d", fontWeight: 700, fontSize: "13px" }}>
                Accredited with Grade B++
              </span>
              <h3 className="fw-bold mb-1" style={{ color: "#ffffff", fontSize: "24px" }}>
                International School of Management & Research (ISMR)
              </h3>
              <p className="mb-0 text-white-50" style={{ fontSize: "14px" }}>
                Affiliated to Savitribai Phule Pune University (SPPU) · Approved by AICTE, New Delhi · Recognized by DTE Govt. of Maharashtra
              </p>
            </div>
            <div className="col-12 col-md-3 text-center text-md-end">
              <a
                href={brochurePdf}
                download="ISMR-Brochure.pdf"
                className="btn d-inline-flex align-items-center gap-2 fw-semibold shadow-sm"
                style={{
                  backgroundColor: "#ffd76d",
                  color: "#0a2240",
                  padding: "10px 22px",
                  borderRadius: "30px",
                  border: "none",
                  fontSize: "14px",
                }}
              >
                <span>📄</span> Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------- TAB NAVIGATION -------- */}
      <section className="bg-light border-bottom sticky-top shadow-sm" style={{ zIndex: 1040, top: "0px" }}>
        <div className="container">
          <ul className="nav nav-pills justify-content-center py-3 gap-2 flex-wrap" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { id: "overview", label: "Accreditation Overview" },
              { id: "iqac", label: "Internal Quality Assurance (IQAC)" },
              { id: "ssr", label: "SSR Cycle-1 (7 Criteria)" },
              { id: "best-practices", label: "Best Practices & Distinctiveness" },
              { id: "statutory", label: "Statutory Cells & RTI" },
            ].map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                    activeTab === tab.id ? "text-dark" : "text-muted"
                  }`}
                  style={{
                    backgroundColor: activeTab === tab.id ? "#ffd76d" : "#ffffff",
                    border: activeTab === tab.id ? "2px solid #e5a812" : "1px solid #dee2e6",
                    transition: "all 0.25s ease",
                    fontSize: "14px",
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------- MAIN TAB CONTENT AREA -------- */}
      <div className="container py-5">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <div className="row g-4 align-items-center mb-5">
              <div className="col-lg-7">
                <span className="text-uppercase fw-bold text-primary" style={{ letterSpacing: "1px", fontSize: "13px" }}>
                  Institutional Quality Benchmark
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0a2240", fontSize: "32px" }}>
                  Commitment to World-Class Business Education
                </h2>
                <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "15px", color: "#495057" }}>
                  The <strong>National Assessment and Accreditation Council (NAAC)</strong> is an autonomous institution of the University Grants Commission (UGC) that assesses and accredits higher education institutions across India. Accreditation by NAAC reflects an institution’s high standards of quality in education, infrastructure, teaching-learning processes, research, faculty competence, and governance.
                </p>
                <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "15px", color: "#495057" }}>
                  Sri Balaji Society's <strong>International School of Management & Research (ISMR) Pune</strong> has been rigorously evaluated and accredited by NAAC with a <strong>B++ Grade</strong>. This prestigious endorsement reaffirms our dedication to student success, industry-aligned curricula, and transparent corporate-governance practices.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="p-4 rounded-4 shadow-sm bg-white" style={{ borderTop: "4px solid #0a2240" }}>
                  <h4 className=" mb-3" style={{ color: "#0a2240" }}>Institutional Approvals</h4>
                  <div className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                    <img src={naacLogo} alt="NAAC" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
                    <div>
                      <h6 className="mb-0 " style={{ color: "#0a2240" }}>NAAC Accredited B++</h6>
                      <small className="text-muted">National Assessment & Accreditation Council</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                    <img src={sppuLogo} alt="SPPU" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
                    <div>
                      <h6 className="mb-0 " style={{ color: "#0a2240" }}>Affiliated to SPPU</h6>
                      <small className="text-muted">Savitribai Phule Pune University</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                    <img src={aicteLogo} alt="AICTE" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
                    <div>
                      <h6 className="mb-0" style={{ color: "#0a2240" }}>Approved by AICTE</h6>
                      <small className="text-muted">All India Council for Technical Education</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Highlights Grid */}
            <div className="row g-4 mt-2">
              {[
                { title: "Curricular Excellence", desc: "Outcome-based education integrated with modern corporate specializations and business analytics.", icon: "📚" },
                { title: "Holistic Student Support", desc: "100% placement track record, global live internships, and active corporate mentorship.", icon: "🎯" },
                { title: "Lush 20-Acre Campus", desc: "Smart AC lecture halls, automated high-tech library, modern computer labs, and recreational amenities.", icon: "🏛️" },
                { title: "Empowered Faculty", desc: "Ph.D. qualified educators and industry leaders with distinguished corporate and academic experience.", icon: "👨‍🏫" },
              ].map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-3">
                  <div className="p-4 rounded-3 h-100 bg-white shadow-sm" style={{ borderBottom: "3px solid #ffd76d" }}>
                    <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                    <h5 className="fw-bold mb-2" style={{ color: "#0a2240", fontSize: "18px" }}>{item.title}</h5>
                    <p className="mb-0 text-muted" style={{ fontSize: "14px", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: IQAC */}
        {activeTab === "iqac" && (
          <div>
            <div className="mb-5 text-center">
              <span className="text-uppercase fw-bold text-primary" style={{ letterSpacing: "1px", fontSize: "13px" }}>
                Quality Culture & Continuous Improvement
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0a2240", fontSize: "32px" }}>
                Internal Quality Assurance Cell (IQAC)
              </h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "15px", lineHeight: 1.7 }}>
                The IQAC was established as a nodal agency of ISMR Pune to institutionalize quality enhancement initiatives, formulate benchmarks, and monitor continuous quality improvement in academic and administrative processes.
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="p-4 bg-white rounded-4 shadow-sm h-100" style={{ borderLeft: "4px solid #0a2240" }}>
                  <h4 className="fw-bold mb-3" style={{ color: "#0a2240" }}>🎯 Primary Objectives of IQAC</h4>
                  <ul className="mb-0" style={{ paddingLeft: "20px", lineHeight: 1.8, fontSize: "15px", color: "#495057" }}>
                    <li>To develop a conscious, consistent, and catalytic system toward holistic academic and administrative excellence.</li>
                    <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture.</li>
                    <li>To institutionalize best practices, experiential learning, and corporate immersion across all degree programs.</li>
                    <li>To ensure timely, efficient, and progressive performance of academic, financial, and administrative tasks.</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-white rounded-4 shadow-sm h-100" style={{ borderLeft: "4px solid #ffd76d" }}>
                  <h4 className="fw-bold mb-3" style={{ color: "#0a2240" }}>⚙️ Core Functions of IQAC</h4>
                  <ul className="mb-0" style={{ paddingLeft: "20px", lineHeight: 1.8, fontSize: "15px", color: "#495057" }}>
                    <li>Formulation and application of quality parameters for academic and administrative operations.</li>
                    <li>Facilitating creation of a student-centric learning environment conducive to quality education and faculty development.</li>
                    <li>Organization of inter- and intra-institutional workshops, national seminars on quality themes, and FDPs.</li>
                    <li>Documentation of diverse programs and preparation of Annual Quality Assurance Reports (AQAR).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Committee Structure Table */}
            <div className="bg-white rounded-4 p-4 shadow-sm">
              <h4 className="fw-bold mb-4" style={{ color: "#0a2240" }}>📋 IQAC Composition & Key Roles</h4>
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead style={{ backgroundColor: "#0a2240", color: "#ffffff" }}>
                    <tr>
                      <th style={{ padding: "14px 18px", borderTopLeftRadius: "8px" }}>Role in IQAC</th>
                      <th style={{ padding: "14px 18px" }}>Representation / Name</th>
                      <th style={{ padding: "14px 18px", borderTopRightRadius: "8px" }}>Institutional Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iqacMembers.map((m, i) => (
                      <tr key={i}>
                        <td className="fw-bold" style={{ color: "#0a2240", padding: "14px 18px" }}>{m.role}</td>
                        <td style={{ padding: "14px 18px" }}>{m.name}</td>
                        <td className="text-muted" style={{ padding: "14px 18px" }}>{m.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SSR (7 CRITERIA) */}
        {activeTab === "ssr" && (
          <div>
            <div className="mb-5 text-center">
              <span className="text-uppercase fw-bold text-primary" style={{ letterSpacing: "1px", fontSize: "13px" }}>
                NAAC Assessment Framework
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0a2240", fontSize: "32px" }}>
                Self Study Report (SSR) – Cycle 1 Criteria
              </h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "15px", lineHeight: 1.7 }}>
                ISMR Pune is evaluated across all seven core quality criteria laid down by NAAC, encompassing all facets of institutional functioning and student development.
              </p>
            </div>

            <div className="row g-4">
              {criteriaList.map((c) => (
                <div key={c.id} className="col-12 col-lg-6">
                  <div className="p-4 bg-white rounded-4 shadow-sm h-100" style={{ borderTop: "4px solid #0a2240" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge px-3 py-1 text-white" style={{ backgroundColor: "#0a2240", fontSize: "12px" }}>
                        {c.number}
                      </span>
                      <span className="badge px-3 py-1" style={{ backgroundColor: "#ffd76d", color: "#0a2240", fontWeight: 700, fontSize: "12px" }}>
                        {c.score}
                      </span>
                    </div>
                    <h4 className="fw-bold mt-2 mb-2" style={{ color: "#0a2240", fontSize: "20px" }}>{c.name}</h4>
                    <p className="text-muted" style={{ fontSize: "14px", lineHeight: 1.6 }}>{c.desc}</p>
                    <hr className="my-3 opacity-25" />
                    <ul className="mb-0" style={{ paddingLeft: "18px", fontSize: "13.5px", color: "#495057", lineHeight: 1.7 }}>
                      {c.points.map((p, pIdx) => (
                        <li key={pIdx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BEST PRACTICES */}
        {activeTab === "best-practices" && (
          <div>
            <div className="mb-5 text-center">
              <span className="text-uppercase fw-bold text-primary" style={{ letterSpacing: "1px", fontSize: "13px" }}>
                Institutional Distinctiveness
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0a2240", fontSize: "32px" }}>
                Best Practices & Signature Initiatives
              </h2>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-lg-6">
                <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm h-100" style={{ borderLeft: "5px solid #0a2240" }}>
                  <span className="badge mb-2 px-3 py-1" style={{ backgroundColor: "#ffd76d", color: "#0a2240", fontWeight: 700 }}>
                    Best Practice I
                  </span>
                  <h3 className="fw-bold mb-3" style={{ color: "#0a2240", fontSize: "22px" }}>
                    Corporate Readiness & 360° Employability Program (CREP)
                  </h3>
                  <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "14.5px", color: "#495057" }}>
                    <strong>Goal:</strong> Bridging the academia-corporate divide by integrating real-world managerial competencies from day one of the MBA journey.
                  </p>
                  <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "14.5px", color: "#495057" }}>
                    <strong>The Practice:</strong> Students undergo rigorous pre-placement modules including Business Analytics certifications (Power BI, Python, Tableau), corporate communication bootcamps, psychometric assessments, and live winter/summer internships at Fortune 500 partner companies.
                  </p>
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f8f9fa", borderLeft: "3px solid #0a2240" }}>
                    <small className="fw-bold" style={{ color: "#0a2240" }}>Key Impact: Consistent 100% placement track record with 350+ corporate recruiters annually.</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm h-100" style={{ borderLeft: "5px solid #ffd76d" }}>
                  <span className="badge mb-2 px-3 py-1" style={{ backgroundColor: "#0a2240", color: "#ffffff", fontWeight: 700 }}>
                    Best Practice II
                  </span>
                  <h3 className="fw-bold mb-3" style={{ color: "#0a2240", fontSize: "22px" }}>
                    Experiential Learning, Research Culture & Social Responsibility
                  </h3>
                  <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "14.5px", color: "#495057" }}>
                    <strong>Goal:</strong> Nurturing socially responsible, ethically conscious leaders committed to sustainable business and community welfare.
                  </p>
                  <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "14.5px", color: "#495057" }}>
                    <strong>The Practice:</strong> Implementation of rural immersion programs, tree plantation drives on our 20-acre green campus, blood donation camps, and active CSR projects. Student research conferences encourage empirical inquiry and paper publications.
                  </p>
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f8f9fa", borderLeft: "3px solid #ffd76d" }}>
                    <small className="fw-bold" style={{ color: "#0a2240" }}>Key Impact: Multiple national social leadership awards and widespread student community engagement.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STATUTORY CELLS & RTI */}
        {activeTab === "statutory" && (
          <div>
            <div className="mb-5 text-center">
              <span className="text-uppercase fw-bold text-primary" style={{ letterSpacing: "1px", fontSize: "13px" }}>
                Regulatory Compliance & Student Safety
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0a2240", fontSize: "32px" }}>
                Statutory Committees & RTI Declaration
              </h2>
            </div>

            <div className="row g-4">
              {statutoryPolicies.map((pol, pIdx) => (
                <div key={pIdx} className="col-12 col-md-6 col-lg-4">
                  <div className="p-4 bg-white rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between" style={{ borderTop: "3px solid #0a2240" }}>
                    <div>
                      <span className="badge px-3 py-1 mb-2" style={{ backgroundColor: "#f0f4f8", color: "#0a2240", fontWeight: 600 }}>
                        {pol.tag}
                      </span>
                      <h5 className="fw-bold mb-2" style={{ color: "#0a2240" }}>{pol.title}</h5>
                      <p className="text-muted mb-0" style={{ fontSize: "14px", lineHeight: 1.6 }}>{pol.desc}</p>
                    </div>
                    <div className="mt-3 pt-3 border-top">
                      <small className="text-primary fw-semibold">Active & Compliant with UGC / AICTE</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RTI Box */}
            <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white mt-5" style={{ borderLeft: "6px solid #0a2240" }}>
              <h4 className="fw-bold mb-3" style={{ color: "#0a2240" }}>📜 Right to Information (RTI) Declaration</h4>
              <p style={{ textAlign: "justify", lineHeight: 1.8, fontSize: "15px", color: "#495057" }}>
                In accordance with Section 4(1)(b) of the Right to Information Act, 2005, the International School of Management & Research (ISMR) Pune proactively publishes all relevant institutional details. For any statutory inquiries, the Public Information Officer (PIO) and Appellate Authority can be officially reached at:
              </p>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                    <h6 className="fw-bold mb-1" style={{ color: "#0a2240" }}>Public Information Officer (PIO)</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>Admin Officer / Registrar, ISMR Pune Campus</p>
                    <small className="text-primary">Email: admissions@ismrpune.edu.in</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                    <h6 className="fw-bold mb-1" style={{ color: "#0a2240" }}>Appellate Authority</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>Director, ISMR Pune</p>
                    <small className="text-primary">Phone: +91 9923786079</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* -------- FAQ COMPONENT -------- */}
      <Faq />
    </div>
  );
}
