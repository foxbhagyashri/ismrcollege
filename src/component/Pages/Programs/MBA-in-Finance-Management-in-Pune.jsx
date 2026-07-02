import { useState } from "react";

const NAV_LINKS = ["Program", "Curriculum", "Eligibility", "Careers", "Admissions", "FAQs"];

const OUTCOMES = [
    { icon: "🎓", title: "Day-One Ready", desc: "Transition from graduate to industry-certified specialist in global logistics and lean operations." },
    { icon: "💻", title: "Master Enterprise Tech", desc: "Gain hands-on mastery of SAP, Oracle, and advanced inventory simulation platforms." },
    { icon: "📈", title: "Command Leadership Roles", desc: "Qualify for tracks like Supply Chain Analyst, Logistics Manager, and Procurement Specialist." },
    { icon: "🚀", title: "Hassle-Free Admissions", desc: "Step-by-step guidance from entrance test counseling to final enrollment." },
];

const SUBJECTS = [
    { title: "Supply Chain Strategy & Global Logistics", desc: "International trade barriers, customs compliance, and cross-border risk management." },
    { title: "Logistics & Warehouse Management", desc: "Multimodal transport networks, distribution physics, and automated warehousing layouts." },
    { title: "Procurement & Vendor Management", desc: "Strategic sourcing models and sustainable, cost-effective supplier networks." },
    { title: "Lean, Six Sigma & Demand Forecasting", desc: "Eliminate operational waste, improve quality control, and predict consumer demand through data." },
    { title: "ERP Systems & Inventory Control", desc: "Software literacy in SAP/Oracle with JIT and real-time inventory models." },
];

const WHO_PROFILES = [
    { label: "Fresh Graduates", icon: "🎯", desc: "No prior experience required. From engineering, commerce, science, or arts — ISMR bridges the gap to a corporate launchpad." },
    { label: "Working Professionals", icon: "🏭", desc: "Already in operations or manufacturing? Gain strategic credentials to break the growth ceiling into senior roles." },
    { label: "BFSI / Retail / E-Commerce", icon: "🛒", desc: "Lead cross-functional projects and optimize multi-city delivery routes and tech-enabled fulfillment centers." },
    { label: "Tech & ERP Aspirants", icon: "🖥️", desc: "Prepare for specialized roles in cloud-based inventory tracking and software implementation." },
    { label: "Entrepreneurs", icon: "💡", desc: "Use Lean and Six Sigma to eliminate waste and negotiate smarter vendor contracts in your own business." },
];

const CAREERS = [
    { role: "Supply Chain Manager", responsibility: "Governs complete product movement from raw materials to final consumers.", relevance: "Procurement protocols, international shipping, lean inventory systems." },
    { role: "Operations Manager", responsibility: "Shop-floor orchestration, capacity planning, and resource allocation.", relevance: "Engineering methodologies to eliminate waste and boost output quality." },
    { role: "Logistics & Distribution Manager", responsibility: "Designs multimodal shipping networks and supervises fulfillment facilities.", relevance: "Fleet utilization, automated sorting, cutting delivery times." },
    { role: "Procurement & Vendor Manager", responsibility: "Analyzes global supplier markets and executes commercial agreements.", relevance: "Reduces material costs through data-driven negotiation." },
    { role: "Demand Forecasting Analyst", responsibility: "Anticipates market patterns to avoid overproduction or shortages.", relevance: "Designs mathematical data models reviewing retail patterns." },
    { role: "ERP Implementation Analyst", responsibility: "Configures cloud platforms and software modules for companies.", relevance: "Automates inventory tracking in SAP or Oracle environments." },
];

const STEPS = [
    { step: "01", title: "Apply Online", desc: "Complete the digital form in under 15 minutes. Pay a registration fee of ₹1,100 to initiate your candidate file." },
    { step: "02", title: "Counselling Interview", desc: "Connect with an academic counselor via telephonic interview to align your entrance scores and career goals." },
    { step: "03", title: "Seat Confirmation", desc: "Receive your official Admission Letter. Submit a processing fee of ₹30,000 within four days to lock your seat." },
    { step: "04", title: "Provisional Admission", desc: "Your seat is formally registered. Submit transcripts and entrance scorecards as guided by the ISMR team." },
];

const FAQS = [
    { q: "What is an MBA in Operations and Supply Chain Management?", a: "A specialized two-year postgraduate degree focused on making production and distribution lines as efficient as possible — covering raw material sourcing, automated warehousing, and international transportation networks." },
    { q: "Who can apply?", a: "Any graduate with a bachelor's degree in any stream from a recognized university with a minimum of 50% marks (45% for reserved categories), plus valid MAH-MBA CET, CAT, or CMAT scores." },
    { q: "What is the duration of the course?", a: "Two academic years split into four comprehensive semesters — the first year covers management fundamentals; the second dives into advanced operations, ERP systems, and field projects." },
    { q: "Is ISMR AICTE-approved?", a: "Yes. ISMR holds complete statutory approvals from AICTE and DTE Maharashtra, and is affiliated with Savitribai Phule Pune University (SPPU)." },
    { q: "What is the typical starting salary?", a: "ISMR graduates typically secure entry-level packages ranging from ₹4.5 LPA to ₹7.5 LPA across Pune's automotive, logistics, and e-commerce sectors." },
    { q: "What are the program fees?", a: "The complete two-year program typically costs between ₹4.5 Lakhs to ₹5.5 Lakhs, covering academics, software training, and placement services. Contact the finance desk for exact figures." },
];

const WHY = [
    { icon: "🏛️", title: "AICTE & SPPU Credibility", desc: "Formally approved by AICTE and DTE, affiliated with Savitribai Phule Pune University." },
    { icon: "🔧", title: "Tech-Driven Curriculum", desc: "Interactive case studies and hands-on SAP/Oracle modules — no textbook-only approach." },
    { icon: "🤝", title: "Active Placement Cell", desc: "Direct connections with Pune's industrial ecosystem for proactive placement support." },
    { icon: "👩‍🏫", title: "Domain-Expert Faculty", desc: "Management scholars combined with visiting supply chain directors from industry." },
    { icon: "📍", title: "Strategic Location", desc: "Positioned inside the Pune and PCMC manufacturing corridors for plant visits and networking." },
    { icon: "💰", title: "Financial Transparency", desc: "Complete clarity on fees with no hidden costs. Education loan guidance available." },
];

// ── Style objects ──────────────────────────────────────────────
const styles = {
    page: {
        fontFamily: "sans-serif",
        color: "#1e293b",
        backgroundColor: "#ffffff",
        scrollBehavior: "smooth",
    },

    // HERO
    hero: {
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #172554 50%, #164e63 100%)",
        color: "#ffffff",
    },
    heroBgGrid: {
        position: "absolute",
        inset: 0,
        opacity: 0.1,
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
    },
    heroInner: {
        position: "relative",
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
    },
    heroContent: {
        maxWidth: "48rem",
    },
    heroBadge: {
        display: "inline-block",
        backgroundColor: "rgba(34,211,238,0.2)",
        border: "1px solid rgba(34,211,238,0.4)",
        color: "#67e8f9",
        fontSize: "0.7rem",
        fontWeight: 600,
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        marginBottom: "1.5rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    heroH1: {
        fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
        fontWeight: 900,
        lineHeight: 1.15,
        marginBottom: "1.5rem",
    },
    heroGradientText: {
        background: "linear-gradient(to right, #67e8f9, #93c5fd)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    heroSubtitle: {
        color: "#cbd5e1",
        fontSize: "1.1rem",
        lineHeight: 1.7,
        marginBottom: "2.5rem",
        maxWidth: "42rem",
    },
    heroCtas: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "3rem",
    },
    ctaPrimary: {
        backgroundColor: "#22d3ee",
        color: "#0f172a",
        fontWeight: 900,
        padding: "0.75rem 1.5rem",
        borderRadius: "0.75rem",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "background-color 0.2s",
        display: "inline-block",
    },
    ctaSecondary: {
        border: "1px solid rgba(255,255,255,0.3)",
        color: "#ffffff",
        fontWeight: 600,
        padding: "0.75rem 1.5rem",
        borderRadius: "0.75rem",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "background-color 0.2s",
        display: "inline-block",
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "1rem",
    },
    statCard: {
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "0.75rem",
        padding: "1rem",
        border: "1px solid rgba(255,255,255,0.1)",
    },
    statVal: {
        fontSize: "1.5rem",
        fontWeight: 900,
        color: "#67e8f9",
    },
    statLabel: {
        color: "#94a3b8",
        fontSize: "0.7rem",
        marginTop: "0.25rem",
    },

    // SECTIONS
    sectionWhite: {
        padding: "5rem 0",
        backgroundColor: "#ffffff",
    },
    sectionSlate: {
        padding: "5rem 0",
        backgroundColor: "#f8fafc",
    },
    container: {
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 1.5rem",
    },
    sectionHeader: {
        textAlign: "center",
        marginBottom: "3.5rem",
    },
    eyebrow: {
        color: "#1d4ed8",
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    sectionH2: {
        fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
        fontWeight: 900,
        marginTop: "0.5rem",
        color: "#0f172a",
    },
    sectionSubtitle: {
        color: "#64748b",
        marginTop: "0.75rem",
        maxWidth: "36rem",
        margin: "0.75rem auto 0",
    },

    // OUTCOMES GRID
    outcomesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
    },
    outcomeCard: {
        padding: "1.5rem",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        backgroundColor: "#ffffff",
        transition: "border-color 0.3s, box-shadow 0.3s",
    },
    outcomeIcon: {
        fontSize: "1.75rem",
        marginBottom: "1rem",
    },
    outcomeTitle: {
        fontWeight: 900,
        color: "#0f172a",
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },
    outcomeDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },

    // WHO GRID
    whoGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
    },
    whoCard: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "1.5rem",
        border: "1px solid #f1f5f9",
    },
    whoIcon: { fontSize: "1.75rem" },
    whoTitle: {
        fontWeight: 900,
        color: "#0f172a",
        fontSize: "1.1rem",
        marginTop: "0.75rem",
        marginBottom: "0.5rem",
    },
    whoDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },

    // CURRICULUM
    curriculumGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
    },
    curriculumLeft: {},
    subjectList: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem",
    },
    subjectItem: {
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        borderRadius: "0.75rem",
        backgroundColor: "#eff6ff",
        transition: "background-color 0.2s",
    },
    subjectDot: {
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "50%",
        backgroundColor: "#1d4ed8",
        marginTop: "0.5rem",
        flexShrink: 0,
    },
    subjectTitle: {
        fontWeight: 700,
        color: "#0f172a",
        fontSize: "0.875rem",
    },
    subjectDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        marginTop: "0.25rem",
    },
    curriculumRight: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
    },
    learningCard: {
        background: "linear-gradient(135deg, #1d4ed8, #0891b2)",
        color: "#ffffff",
        padding: "2rem",
        borderRadius: "1rem",
    },
    learningCardTitle: {
        fontWeight: 900,
        fontSize: "1.2rem",
        marginBottom: "1rem",
    },
    methodList: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    methodItem: {
        display: "flex",
        gap: "0.75rem",
    },
    methodIcon: { fontSize: "1.5rem" },
    methodTitle: { fontWeight: 700, fontSize: "0.875rem" },
    methodDesc: { color: "#bfdbfe", fontSize: "0.875rem", marginTop: "0.125rem" },
    erpCard: {
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "1.5rem",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    erpIcon: { fontSize: "2.5rem" },
    erpTitle: { fontWeight: 900 },
    erpDesc: { color: "#94a3b8", fontSize: "0.875rem", marginTop: "0.25rem" },

    // ELIGIBILITY
    eligibilityGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        maxWidth: "48rem",
        margin: "0 auto",
    },
    eligCard: {
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    },
    eligIcon: {
        width: "3rem",
        height: "3rem",
        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        marginBottom: "1.25rem",
    },
    eligIconBlue: { backgroundColor: "#dbeafe" },
    eligIconCyan: { backgroundColor: "#cffafe" },
    eligTitle: {
        fontWeight: 900,
        color: "#0f172a",
        fontSize: "1.1rem",
        marginBottom: "0.75rem",
    },
    eligDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },
    tagRow: {
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        marginTop: "1rem",
    },
    tag: {
        backgroundColor: "#eff6ff",
        color: "#1d4ed8",
        fontSize: "0.75rem",
        fontWeight: 700,
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        border: "1px solid #bfdbfe",
    },

    // CAREERS TABLE
    tableWrapper: {
        overflowX: "auto",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    },
    table: {
        width: "100%",
        fontSize: "0.875rem",
        borderCollapse: "collapse",
    },
    thead: {
        backgroundColor: "#0f172a",
        color: "#ffffff",
    },
    th: {
        textAlign: "left",
        padding: "1rem 1.5rem",
        fontWeight: 700,
    },
    tdRole: {
        padding: "1rem 1.5rem",
        fontWeight: 700,
        color: "#1d4ed8",
        whiteSpace: "nowrap",
    },
    tdBody: {
        padding: "1rem 1.5rem",
        color: "#475569",
    },
    tdMuted: {
        padding: "1rem 1.5rem",
        color: "#64748b",
    },
    trEven: { backgroundColor: "#ffffff" },
    trOdd: { backgroundColor: "#f8fafc" },
    industryRow: {
        marginTop: "2.5rem",
        textAlign: "center",
    },
    industryLabel: {
        color: "#64748b",
        fontSize: "0.875rem",
        fontWeight: 600,
        marginBottom: "1rem",
    },
    industryTags: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.75rem",
    },
    industryTag: {
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontSize: "0.75rem",
        fontWeight: 600,
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
    },

    // ADMISSIONS
    admissionsSection: {
        padding: "5rem 0",
        background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)",
        color: "#ffffff",
    },
    admissionsBadge: {
        display: "inline-block",
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "#ffffff",
        fontSize: "0.7rem",
        fontWeight: 700,
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        marginBottom: "1rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    admissionsSubtitle: {
        color: "#bfdbfe",
        marginTop: "0.75rem",
    },
    stepsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
    },
    stepCard: {
        backgroundColor: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "1rem",
        padding: "1.5rem",
        transition: "background-color 0.2s",
    },
    stepNum: {
        fontSize: "3rem",
        fontWeight: 900,
        color: "rgba(255,255,255,0.3)",
        lineHeight: 1,
        marginBottom: "0.75rem",
    },
    stepTitle: {
        fontWeight: 900,
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },
    stepDesc: {
        color: "#bfdbfe",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },
    ctaBox: {
        display: "inline-block",
        backgroundColor: "#ffffff",
        color: "#1e3a8a",
        borderRadius: "1rem",
        padding: "1.5rem 2rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        maxWidth: "28rem",
        marginTop: "3rem",
        textAlign: "center",
    },
    ctaBoxTitle: {
        fontWeight: 900,
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
    },
    ctaBoxSubtitle: {
        color: "#64748b",
        fontSize: "0.875rem",
        marginBottom: "1.25rem",
    },
    ctaBoxBtns: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        justifyContent: "center",
    },
    callBtn: {
        backgroundColor: "#1d4ed8",
        color: "#ffffff",
        fontWeight: 700,
        padding: "0.625rem 1.25rem",
        borderRadius: "0.75rem",
        fontSize: "0.875rem",
        textDecoration: "none",
        display: "inline-block",
    },
    emailBtn: {
        border: "1px solid #bfdbfe",
        color: "#1d4ed8",
        fontWeight: 700,
        padding: "0.625rem 1.25rem",
        borderRadius: "0.75rem",
        fontSize: "0.875rem",
        textDecoration: "none",
        display: "inline-block",
    },

    // WHY
    whyGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
    },
    whyCard: {
        display: "flex",
        gap: "1rem",
        padding: "1.5rem",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        transition: "border-color 0.2s, box-shadow 0.2s",
    },
    whyIcon: { fontSize: "1.75rem", flexShrink: 0 },
    whyTitle: {
        fontWeight: 900,
        color: "#0f172a",
        marginBottom: "0.25rem",
    },
    whyDesc: {
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },

    // FAQS
    faqsInner: {
        maxWidth: "48rem",
        margin: "0 auto",
        padding: "0 1.5rem",
    },
    faqList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
    },
    faqItem: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        border: "1px solid #f1f5f9",
        overflow: "hidden",
    },
    faqBtn: {
        width: "100%",
        textAlign: "left",
        padding: "1.25rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: 700,
        color: "#0f172a",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    faqQ: {
        fontSize: "0.875rem",
        paddingRight: "1rem",
    },
    faqIcon: {
        color: "#1d4ed8",
        fontSize: "1.25rem",
        flexShrink: 0,
    },
    faqAnswer: {
        padding: "0 1.5rem 1.25rem",
        color: "#64748b",
        fontSize: "0.875rem",
        lineHeight: 1.7,
        borderTop: "1px solid #f1f5f9",
        paddingTop: "1rem",
    },

    // FOOTER CTA
    footerCta: {
        padding: "4rem 0",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        textAlign: "center",
    },
    footerH2: {
        fontSize: "1.875rem",
        fontWeight: 900,
        marginBottom: "1rem",
    },
    footerSubtitle: {
        color: "#94a3b8",
        marginBottom: "2rem",
    },
    footerBtn: {
        display: "inline-block",
        backgroundColor: "#22d3ee",
        color: "#0f172a",
        fontWeight: 900,
        padding: "1rem 2rem",
        borderRadius: "0.75rem",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "background-color 0.2s",
    },
    footerNote: {
        color: "#475569",
        fontSize: "0.75rem",
        marginTop: "1.5rem",
    },
};

export default function ISMRLanding() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div style={styles.page}>
            {/* ── HERO ── */}
            <section id="program" style={styles.hero}>
                <div style={styles.heroBgGrid} />
                <div style={styles.heroInner}>
                    <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                        {/* Left Column */}
                        <div style={{ ...styles.heroContent, flex: "1 1 480px" }}>
                            <span style={styles.heroBadge}>SPPU Affiliated · AICTE Approved</span>
                            <h1 style={styles.heroH1}>
                                <span style={styles.heroGradientText}>MBA in Finance Management in Pune: Skills, Placements & Career Outcomes</span>
                            </h1>

                            {/* CTA Buttons */}
                            <div style={styles.heroCtas}>
                                <a href="#admissions" style={styles.ctaPrimary}>Apply for 2026 →</a>
                                <a href="#curriculum" style={styles.ctaSecondary}>Explore Curriculum</a>
                            </div>
                        </div>

                        {/* Right Column: Quick Facts Table */}
                        <div style={{ flex: "1 1 380px", maxWidth: "480px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1rem", overflow: "hidden", backdropFilter: "blur(8px)" }}>
                            <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                                <p style={{ fontWeight: 800, fontSize: "1rem", color: "#ffffff" }}>
                                    Quick Facts: MBA in Finance Management at ISMR Pune
                                </p>
                            </div>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    {[
                                        { label: "Duration", value: "2 years (4 semesters)" },
                                        { label: "Affiliation", value: "Savitribai Phule Pune University (SPPU)" },
                                        { label: "Approval", value: "AICTE Approved" },
                                        { label: "Eligibility", value: "Any graduate with a minimum 50% marks" },
                                        { label: "Accepted Exams", value: "MAH-MBA CET / CAT / CMAT / MAT / XAT / ATMA / SNAP" },
                                        { label: "Total Fee", value: "Approx. ₹4 lakh (₹2 lakh/year)" },
                                        { label: "Highest Package", value: "₹12 LPA (2025)" },
                                        { label: "Average Package", value: "₹5.2–6.8 LPA (2025)" },
                                        { label: "Placement Rate", value: "86% batch placed" },
                                        { label: "Top Skills", value: "Financial modelling, Excel, DCF valuation, MIS reporting" },
                                        { label: "Career Roles", value: "Financial Analyst, Corporate Finance, Investment Analysis" },
                                    ].map((row, i, arr) => (
                                        <tr key={row.label} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
                                            <td style={{ padding: "0.75rem 1.25rem", fontSize: "0.8rem", fontWeight: 700, color: "#67e8f9", whiteSpace: "nowrap", verticalAlign: "top" }}>
                                                {row.label}
                                            </td>
                                            <td style={{ padding: "0.75rem 1.25rem", fontSize: "0.8rem", color: "#e2e8f0", lineHeight: 1.5 }}>
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <svg style={{ position: "absolute", bottom: 0, width: "100%", display: "block" }} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 60L1440 60L1440 0C1200 50 960 60 720 40C480 20 240 0 0 20L0 60Z" fill="white" />
                </svg>
            </section>

            {/* ── UNDERSTANDING THE PROGRAMME ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Placement Reality Check</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Why Most MBA Finance Students Don't Become Analysts</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "48rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            Most MBA Finance students don't become analysts — despite completing the same degree. The reason isn't knowledge. It's execution.
                        </p>
                    </div>

                    {/* The Gap */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "2rem", marginBottom: "3rem" }}>
                        <p style={{ color: "#ffffff", fontWeight: 800, fontSize: "1rem", marginBottom: "1.25rem" }}>
                            Most students underestimate what placement rounds actually require — and begin preparing only after the process has already started. The result:
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            {[
                                { icon: "📉", text: "They understand financial concepts but haven't applied them to real datasets" },
                                { icon: "⏱️", text: "They can explain theory, but struggle under the time pressure of live case rounds" },
                                { icon: "🧭", text: "They enter placement season without role clarity — and default into backend positions" },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.875rem", padding: "0.9rem 1.1rem" }}>
                                    <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                                    <p style={{ color: "#cbd5e1", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.95rem" }}>
                            The gap is not the syllabus. It's what you can do with it.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>

                        {/* How ISMR Trains */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.5rem" }}>
                                <span style={{ color: "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>How ISMR Trains Differently</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>Built Around How Recruiters Actually Evaluate</h3>
                                <p style={{ color: "#bfdbfe", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>This is what separates analyst-track outcomes from backend-track outcomes at the same institution.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                                {[
                                    { icon: "📊", title: "Dataset-Based Excel Tasks", desc: "Work on real datasets of 5,000–10,000 rows under a strict 30–45 minute time limit — not toy spreadsheets." },
                                    { icon: "🧩", title: "Case-Driven Decision Analysis", desc: "Solve live business cases instead of textbook problems, mirroring what recruiters actually test for." },
                                    { icon: "💬", title: "Business Interpretation", desc: "Learn to explain what the numbers mean for the business — not just how to calculate them." },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.1rem 0", borderBottom: i < 2 ? "1px solid #e2e8f0" : "none" }}>
                                        <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.5rem", backgroundColor: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{item.icon}</div>
                                        <div>
                                            <p style={{ fontWeight: 800, fontSize: "0.875rem", color: "#0f172a", marginBottom: "0.25rem" }}>{item.title}</p>
                                            <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ padding: "0 1.5rem 1.5rem" }}>
                                <a href="#counseling" style={{ display: "block", textAlign: "center", backgroundColor: "#0f172a", color: "#67e8f9", fontWeight: 800, fontSize: "0.85rem", padding: "0.9rem 1.25rem", borderRadius: "0.75rem", textDecoration: "none" }}>
                                    Evaluate your placement readiness — speak to an ISMR counsellor →
                                </a>
                            </div>
                        </div>

                        {/* Placement Process FAQ */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ backgroundColor: "#0f172a", padding: "1.5rem" }}>
                                <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Placement Process</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>How MBA Finance Placements at ISMR Pune Work</h3>
                                <p style={{ color: "#94a3b8", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>What to expect at each stage of the placement journey.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                                <div style={{ padding: "0.9rem 0", borderBottom: "1px solid #e2e8f0" }}>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>What is the placement process for MBA Finance at ISMR Pune?</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        ISMR's placement process follows three stages: Excel/aptitude assessment → Case/GD round → Personal Interview. Students are prepared for each stage through structured mock rounds before the actual placement season.
                                    </p>
                                </div>
                                <div style={{ padding: "0.9rem 0" }}>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>What happens in Excel rounds?</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        Candidates analyse dataset-based tasks — typically 5,000–10,000 rows — within 30–45 minutes. Most students underestimate this stage and prepare for it only after placement season begins. ISMR addresses this with dataset-based training from Semester 1.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── ELIGIBILITY & ADMISSIONS ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Recruiters & Outcomes</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Why Do Students Fail in MBA Finance Placements?</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "42rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            Most candidates can calculate outputs but cannot interpret them into business decisions.
                        </p>
                    </div>

                    {/* Case Round Example */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "3rem", maxWidth: "56rem", margin: "0 auto 3rem" }}>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Sample Case Round Prompt</p>
                        <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.6, marginBottom: "0.75rem" }}>
                            "Revenue increased by 12%, but profit dropped by 8% — identify the cause and recommend corrective action."
                        </p>
                        <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6 }}>
                            Case rounds evaluate this exact skill. Candidates who prepare only on concepts, not interpretation, fail this stage consistently.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", maxWidth: "72rem", margin: "0 auto" }}>

                        {/* Top Recruiters */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.75rem" }}>
                                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>🏢</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>Top Recruiters at ISMR Pune (2025)</h3>
                                <p style={{ color: "#bfdbfe", fontSize: "0.825rem", lineHeight: 1.5 }}>Sectors covered: BFSI, IT, Education, FMCG, Consulting, E-Commerce</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem" }}>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <tbody>
                                        {[
                                            { category: "Big 4 — Consulting & Advisory", recruiters: "Deloitte · KPMG · EY (Ernst & Young) · PwC" },
                                            { category: "Private Sector Banks", recruiters: "HDFC Bank · ICICI Bank · Axis Bank · Kotak Mahindra Bank" },
                                            { category: "NBFC & Financial Services", recruiters: "Bajaj Finserv · Aditya Birla Capital · Tata Capital" },
                                            { category: "Insurance", recruiters: "SBI Life Insurance" },
                                            { category: "Capital Markets & Research", recruiters: "Motilal Oswal · CRISIL · JM Financial" },
                                        ].map((row, i, arr) => (
                                            <tr key={row.category} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                                <td style={{ padding: "0.9rem 0.5rem 0.9rem 0", fontSize: "0.775rem", fontWeight: 800, color: "#1d4ed8", verticalAlign: "top", width: "42%" }}>
                                                    {row.category}
                                                </td>
                                                <td style={{ padding: "0.9rem 0", fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>
                                                    {row.recruiters}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Salary Expectations */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ backgroundColor: "#0f172a", padding: "1.75rem" }}>
                                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>💰</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>Salary After Completing MBA Finance at ISMR Pune</h3>
                                <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Salary outcomes differ significantly based on the role you enter after graduation.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem" }}>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <tbody>
                                        {[
                                            { role: "Financial Analyst", range: "₹4–8 LPA", why: "Decision support, data interpretation" },
                                            { role: "Investment Analyst", range: "₹6–12 LPA", why: "Valuation, research, portfolio assessment" },
                                            { role: "Corporate Finance", range: "₹4–7 LPA", why: "Budgeting, forecasting, planning" },
                                            { role: "MIS / Reporting Analyst", range: "₹3.5–6 LPA", why: "Excel-heavy, dashboard management" },
                                        ].map((row, i, arr) => (
                                            <tr key={row.role} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                                <td style={{ padding: "0.9rem 0.5rem 0.9rem 0", verticalAlign: "top" }}>
                                                    <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0f172a" }}>{row.role}</p>
                                                    <p style={{ fontSize: "1rem", fontWeight: 900, color: "#0891b2", marginTop: "0.15rem" }}>{row.range}</p>
                                                </td>
                                                <td style={{ padding: "0.9rem 0", fontSize: "0.775rem", color: "#64748b", lineHeight: 1.6, textAlign: "right" }}>
                                                    {row.why}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div style={{ backgroundColor: "#dbeafe", borderRadius: "0.75rem", padding: "0.875rem 1rem", marginTop: "1rem", border: "1px solid #bfdbfe" }}>
                                    <p style={{ fontSize: "0.8rem", color: "#1d4ed8", fontWeight: 600, lineHeight: 1.5 }}>
                                        📌 Not all graduates reach ₹6–12 LPA immediately. These roles require strong data handling skills, business interpretation ability, and preparation that most students begin too late.
                                    </p>
                                </div>
                                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6, marginTop: "0.9rem" }}>
                                    ISMR's Finance specialisation trains students specifically on the skills that determine which salary bracket they enter — not just which concepts they know.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── WHO SHOULD PURSUE ── */}
            <section id="curriculum" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Career Roles
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                        MBA Finance Job Roles After MBA<br />from ISMR Pune
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 640 }}>
                        There are multiple MBA Finance jobs after an MBA in Pune, including analyst, corporate finance, and investment roles.
                    </p>

                    {/* Job Role Cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                        {[
                            { icon: "📊", tag: "Analyst Track", title: "Financial Analyst", desc: "Reporting, variance analysis, decision support." },
                            { icon: "📈", tag: "Strategic Track", title: "Corporate Finance", desc: "Budgeting, forecasting, capital planning." },
                            { icon: "💹", tag: "Analyst Track", title: "Investment Analyst", desc: "Equity valuation, portfolio research." },
                            { icon: "🖥️", tag: "Reporting Track", title: "MIS / Reporting Analyst", desc: "Dashboard creation, data tracking." },
                        ].map((p, i) => (
                            <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <span style={{ fontSize: 20 }}>{p.icon}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2563eb", background: "#eff6ff", borderRadius: 6, padding: "3px 9px", display: "inline-block", marginBottom: "0.25rem" }}>
                                            {p.tag}
                                        </span>
                                        <p style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>{p.title}</p>
                                    </div>
                                </div>
                                <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: "#eff6ff", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "3.5rem", border: "1px solid #bfdbfe" }}>
                        <p style={{ fontSize: 14, color: "#1d4ed8", fontWeight: 600, margin: 0 }}>
                            📌 Sectors hiring ISMR MBA Finance graduates: BFSI, IT Services, Healthcare, FMCG, Consulting, E-Commerce
                        </p>
                    </div>

                    {/* Analyst vs Backend */}
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Career Trajectory
                    </span>
                    <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 900, marginTop: "0.5rem", marginBottom: "0.75rem", color: "#0f172a" }}>
                        Analyst vs Backend Roles — Understanding the Difference
                    </h2>
                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 700 }}>
                        Most students don't choose backend roles. They default into them because they aren't prepared for analyst-round selection criteria.
                    </p>

                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "0.5rem", marginBottom: "1.5rem", overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}></th>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 13, fontWeight: 800, color: "#67e8f9" }}>Analyst Role</th>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 13, fontWeight: 800, color: "#94a3b8" }}>Backend / Operations Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Work Nature", analyst: "Decision-focused", backend: "Process-focused" },
                                    { label: "Salary Range", analyst: "₹4–12 LPA", backend: "₹2.5–4 LPA" },
                                    { label: "Career Growth", analyst: "Faster trajectory", backend: "Slower, harder to switch" },
                                    { label: "Skills Required", analyst: "Data interpretation, case solving", backend: "Execution, coordination" },
                                    { label: "Exposure", analyst: "High — client/business-facing", backend: "Limited" },
                                ].map((row, i, arr) => (
                                    <tr key={row.label} style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{row.label}</td>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, color: "#cbd5e1" }}>{row.analyst}</td>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, color: "#94a3b8" }}>{row.backend}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, marginBottom: "4rem", maxWidth: 760 }}>
                        Your first role determines your long-term career trajectory. Switching from backend to analyst roles later is possible, but significantly harder. ISMR's placement preparation is built to improve your eligibility for the analyst track — not just the offer.
                    </p>

                    {/* Course Structure */}
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Curriculum
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", marginBottom: "0.75rem", color: "#0f172a" }}>
                        MBA in Finance Management Course Structure at ISMR Pune
                    </h2>
                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, marginBottom: "0.75rem", maxWidth: 760 }}>
                        <strong style={{ color: "#0f172a" }}>What is the MBA Finance Course in Pune offered by ISMR?</strong> This MBA Finance course in Pune focuses on practical financial decision-making and real-world applications.
                    </p>
                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 760 }}>
                        MBA Finance at ISMR Pune is a 2-year, 4-semester programme. The syllabus is aligned with Savitribai Phule Pune University (SPPU) and supplemented by ISMR's practical application layer covering Excel, financial modelling, and case-based learning.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
                        {/* Year 1 */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.5rem" }}>
                                <span style={{ color: "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Year 1</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>Core Foundation</h3>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>Semester 1</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        Financial Management, Financial Accounting, Managerial Economics, Organisational Behaviour, Business Communication, and Quantitative Methods.
                                    </p>
                                </div>
                                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.1rem" }}>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>Semester 2</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        Cost and Management Accounting, Financial Markets and Institutions, Marketing Management, Operations Management, Research Methodology, and Business Law.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Year 2 */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ backgroundColor: "#0f172a", padding: "1.5rem" }}>
                                <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Year 2</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>Finance Specialisation</h3>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>Semester 3</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        Investment Analysis and Portfolio Management, Corporate Valuation, Security Analysis, Derivatives and Risk Management, and Banking and Financial Services.
                                    </p>
                                </div>
                                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.1rem" }}>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>Semester 4</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        Financial Modelling, Strategic Finance, International Finance, Project Work, and a specialisation elective based on career track (corporate finance / investment / BFSI).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What You Actually Learn + Tools */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
                        <div style={{ backgroundColor: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>What You Actually Learn</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                                {[
                                    "Financial statement analysis and ratio interpretation",
                                    "Capital budgeting and project evaluation",
                                    "DCF valuation and M&A basics",
                                    "MIS dashboard creation and reporting",
                                    "Business case analysis under time pressure",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
                                        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ backgroundColor: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>Tools Covered</p>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    {[
                                        { tool: "Excel (Pivot Tables, XLOOKUP, IF/INDEX)", applied: "Placements, MIS, analysis" },
                                        { tool: "Financial Modelling", applied: "Valuation, forecasting" },
                                        { tool: "Power BI / Tableau", applied: "Dashboard reporting" },
                                        { tool: "MIS Templates", applied: "Analyst and corporate finance roles" },
                                    ].map((row, i, arr) => (
                                        <tr key={row.tool} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                            <td style={{ padding: "0.75rem 0.5rem 0.75rem 0", fontSize: 13, fontWeight: 700, color: "#0f172a", lineHeight: 1.5 }}>{row.tool}</td>
                                            <td style={{ padding: "0.75rem 0", fontSize: 12.5, color: "#64748b", textAlign: "right", lineHeight: 1.5 }}>{row.applied}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, maxWidth: 760 }}>
                        Outcomes differ not because of the syllabus — they differ because of how well students apply the curriculum under real placement conditions. ISMR's practical layer is built to close this gap.
                    </p>
                </div>
            </section>




            {/* ── STRATEGIC MARKET BENEFITS ── */}
            <section id="benefits" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Admissions 2026
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            MBA Finance Admission 2026 at ISMR Pune
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            The MBA Finance admission process in Pune typically includes application, evaluation, and selection stages.
                        </p>
                    </div>

                    {/* Admission Process */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", marginBottom: "1.25rem" }}>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                            What is the admission process for MBA Finance at ISMR Pune?
                        </p>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                            ISMR Pune admission follows four stages:
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
                            {["Application", "Counselling & Telephonic Interview", "Seat Confirmation", "Provisional Admission"].map((step, i, arr) => (
                                <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1d4ed8", background: "#eff6ff", borderRadius: 20, padding: "0.6rem 1.1rem" }}>
                                        {i + 1}. {step}
                                    </span>
                                    {i < arr.length - 1 && <span style={{ color: "#94a3b8", fontWeight: 700 }}>→</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem", marginBottom: "3.5rem" }}>

                        {/* Entrance Exams */}
                        <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.4rem" }}>
                                What entrance exams does ISMR Pune accept for MBA Finance admission?
                            </p>
                            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                                <tbody>
                                    {[
                                        { exam: "MAH-MBA CET", type: "State-level (Maharashtra)" },
                                        { exam: "CMAT", type: "National-level (NTA)" },
                                        { exam: "CAT", type: "National-level (IIMs)" },
                                        { exam: "MAT", type: "National-level (AIMA)" },
                                        { exam: "XAT", type: "National-level (XLRI)" },
                                        { exam: "ATMA", type: "National-level (AIMS)" },
                                        { exam: "SNAP", type: "National-level (Symbiosis)" },
                                    ].map((row, i, arr) => (
                                        <tr key={row.exam} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                            <td style={{ padding: "0.7rem 0.5rem 0.7rem 0", fontSize: 13.5, fontWeight: 700, color: "#0f172a" }}>{row.exam}</td>
                                            <td style={{ padding: "0.7rem 0", fontSize: 13, color: "#64748b", textAlign: "right" }}>{row.type}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Eligibility */}
                        <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                                What is the MBA Finance eligibility in Pune at ISMR?
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                {[
                                    "Bachelor's degree (minimum 3 years after 10+2) from a recognised university",
                                    "Minimum 50% aggregate marks (45% for reserved category candidates from Maharashtra)",
                                    "Final-year graduation students are eligible to apply with a certificate from their institution",
                                    "Valid score in any of the accepted entrance exams above",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
                                        <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Fees & ROI */}
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 900, color: "#0f172a", marginBottom: "0.5rem" }}>
                            MBA Finance Fees at ISMR Pune — and the ROI Perspective
                        </h2>
                    </div>

                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", marginBottom: "1.25rem" }}>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                            What are the MBA Finance fees at ISMR Pune?
                        </p>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                            MBA Finance fees at ISMR Pune are approximately ₹2 lakh per year, totalling approximately ₹4 lakh for the complete 2-year programme. This makes ISMR one of the most cost-accessible AICTE-approved MBA Finance programmes in Pune.
                        </p>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                            For comparison, MBA Finance fees in Pune across institutes range from ₹2 lakh to ₹18 lakh, depending on the institution. ISMR's fee sits at the accessible end of this range while maintaining SPPU affiliation.
                        </p>
                    </div>

                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.75rem", marginBottom: "1.25rem" }}>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                            ROI Calculation — What the Numbers Actually Mean
                        </p>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                {[
                                    { label: "Total Programme Fee", value: "~₹4 lakh" },
                                    { label: "Average Package (2025)", value: "₹5.2–6.8 LPA" },
                                    { label: "Highest Package (2025)", value: "₹12 LPA" },
                                    { label: "Fee-to-Salary Ratio", value: "~1:1.3 to 1:1.7 in Year 1 alone" },
                                ].map((row, i, arr) => (
                                    <tr key={row.label} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)" }}>
                                        <td style={{ padding: "0.75rem 0.5rem 0.75rem 0", fontSize: 13.5, fontWeight: 700, color: "#e2e8f0" }}>{row.label}</td>
                                        <td style={{ padding: "0.75rem 0", fontSize: 13.5, color: "#67e8f9", textAlign: "right", fontWeight: 800 }}>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, marginBottom: "1.25rem", maxWidth: 760 }}>
                        Two students can pay identical fees and get very different outcomes. The variable is role outcome — analyst-track vs. backend-track — not the institution or the syllabus. ISMR's placement preparation is structured to maximise the probability of analyst-track placements.
                    </p>

                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem" }}>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                            Are education loans available for MBA Finance at ISMR Pune?
                        </p>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                            Yes. Students can avail of education loans through SBI and other nationalised banks. Scholarship assistance is also available through the Maharashtra government for eligible candidates.
                        </p>
                        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, fontStyle: "italic" }}>
                            Confirm current scholarship details with the admissions office.
                        </p>
                    </div>

                </div>
            </section>



            {/* ── ADMISSION PROCESS + CAREER OPPORTUNITIES ── */}

            {/* ADMISSION PROCESS */}
            <section id="admissions" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Curriculum
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            MBA Finance Syllabus Pune (SPPU-Aligned)
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
                            Semester-wise subject map, from foundational management principles to advanced finance specialisation.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                        {[
                            {
                                sem: "Semester 1",
                                title: "Management Foundations",
                                accent: "linear-gradient(135deg, #1d4ed8, #0891b2)",
                                dark: false,
                                subjects: [
                                    { subject: "Financial Management", skill: "Capital budgeting, cost of capital" },
                                    { subject: "Financial Accounting and Analysis", skill: "P&L reading, ratio analysis" },
                                    { subject: "Managerial Economics", skill: "Business decision frameworks" },
                                    { subject: "Quantitative Methods", skill: "Statistical tools for finance" },
                                    { subject: "Organisational Behaviour", skill: "Team and stakeholder management" },
                                ],
                            },
                            {
                                sem: "Semester 2",
                                title: "Analytical Depth",
                                accent: "#0f172a",
                                dark: true,
                                subjects: [
                                    { subject: "Cost and Management Accounting", skill: "Budgeting, variance analysis" },
                                    { subject: "Financial Markets and Institutions", skill: "Equity, debt, banking systems" },
                                    { subject: "Research Methodology", skill: "Data analysis, report writing" },
                                    { subject: "Operations Management", skill: "Process and supply chain basics" },
                                ],
                            },
                            {
                                sem: "Semester 3",
                                title: "Finance Specialisation",
                                accent: "linear-gradient(135deg, #1d4ed8, #0891b2)",
                                dark: false,
                                subjects: [
                                    { subject: "Investment Analysis and Portfolio Management", skill: "Portfolio evaluation" },
                                    { subject: "Security Analysis", skill: "Company valuation, equity research" },
                                    { subject: "Corporate Valuation", skill: "DCF, M&A fundamentals" },
                                    { subject: "Derivatives and Risk Management", skill: "Futures, options, and credit risk" },
                                    { subject: "Banking and Financial Services", skill: "BFSI sector fundamentals" },
                                ],
                            },
                            {
                                sem: "Semester 4",
                                title: "Advanced Application",
                                accent: "#0f172a",
                                dark: true,
                                subjects: [
                                    { subject: "Financial Modelling", skill: "Forecasting models, scenario analysis" },
                                    { subject: "Strategic Finance", skill: "Long-range planning, capital strategy" },
                                    { subject: "International Finance", skill: "Forex, global financial markets" },
                                    { subject: "Project Work", skill: "Industry-live research project" },
                                ],
                            },
                        ].map((block, idx) => (
                            <div key={idx} style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                                <div style={{ background: block.accent, padding: "1.5rem" }}>
                                    <span style={{ color: block.dark ? "#94a3b8" : "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{block.sem}</span>
                                    <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>{block.title}</h3>
                                </div>
                                <div style={{ padding: "1rem 1.5rem" }}>
                                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                        <thead>
                                            <tr>
                                                <th style={{ padding: "0.5rem 0.5rem 0.5rem 0", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Subject</th>
                                                <th style={{ padding: "0.5rem 0", textAlign: "right", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Core Skill Built</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {block.subjects.map((row, i, arr) => (
                                                <tr key={row.subject} style={{ borderTop: "1px solid #e2e8f0" }}>
                                                    <td style={{ padding: "0.7rem 0.5rem 0.7rem 0", fontSize: 13, fontWeight: 700, color: "#0f172a", lineHeight: 1.5 }}>{row.subject}</td>
                                                    <td style={{ padding: "0.7rem 0", fontSize: 12.5, color: "#64748b", textAlign: "right", lineHeight: 1.5 }}>{row.skill}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Practical Application Layer */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.75rem 2rem" }}>
                        <span style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>ISMR-Specific</span>
                        <h3 style={{ fontWeight: 900, fontSize: "1.15rem", color: "#ffffff", marginTop: "0.3rem", marginBottom: "1.25rem" }}>Practical Application Layer</h3>
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: "0.6rem 1rem 0.6rem 0", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Skill</th>
                                        <th style={{ padding: "0.6rem 1rem", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Task</th>
                                        <th style={{ padding: "0.6rem 0", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Where It Applies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { skill: "Excel Analysis", task: "Dataset tasks, 5k–10k rows", applies: "Placement rounds" },
                                        { skill: "MIS Reporting", task: "Dashboard creation", applies: "Analyst roles" },
                                        { skill: "Financial Interpretation", task: "Business case solving", applies: "Interview rounds" },
                                        { skill: "Case Analysis", task: "Decision under pressure", applies: "GD/Case rounds" },
                                    ].map((row, i) => (
                                        <tr key={row.skill} style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                                            <td style={{ padding: "0.8rem 1rem 0.8rem 0", fontSize: 13.5, fontWeight: 700, color: "#e2e8f0" }}>{row.skill}</td>
                                            <td style={{ padding: "0.8rem 1rem", fontSize: 13, color: "#cbd5e1" }}>{row.task}</td>
                                            <td style={{ padding: "0.8rem 0", fontSize: 13, color: "#67e8f9", fontWeight: 700 }}>{row.applies}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section id="careers" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Why Pune
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            Why Pursue an MBA in Finance in Pune?
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            Pune is one of India's strongest cities for finance and analytics careers.
                        </p>
                    </div>

                    {/* Why Pune Points */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "2rem", marginBottom: "1.25rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "1.5rem" }}>
                            {[
                                { icon: "🏦", text: "A dense BFSI ecosystem — banking, insurance, and financial services companies are headquartered here" },
                                { icon: "🌐", text: "Shared services and analytics centres of multinational corporations (IT + Finance hybrid roles)" },
                                { icon: "🏭", text: "Direct access to manufacturing and industrial corporate finance roles via the Chakan-Pimpri-Chinchwad belt" },
                                { icon: "🎯", text: "Active internship and live-project market from Semester 1" },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                                    <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: "0 0 1.25rem" }} />
                        <p style={{ fontSize: 14.5, color: "#64748b", lineHeight: 1.75, margin: 0 }}>
                            For MBA Finance specifically, Pune offers a combination of BFSI placements, corporate finance roles in large conglomerates, and growing analytics-finance hybrid opportunities that do not exist at the same scale in smaller cities.
                        </p>
                    </div>

                    {/* Why ISMR Stands Out */}
                    <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
                        <p style={{ fontSize: 15, fontWeight: 800, color: "#1d4ed8", marginBottom: "0.4rem" }}>Why ISMR Stands Out</p>
                        <p style={{ fontSize: 14.5, color: "#1e3a5f", lineHeight: 1.75, margin: 0 }}>
                            Most institutes teach the same SPPU syllabus. The difference at ISMR is how that syllabus is applied — specifically in preparation for placement rounds that most students fail, not from lack of knowledge, but from lack of execution practice.
                        </p>
                    </div>

                    {/* Gap vs Response Table */}
                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 900, color: "#0f172a", maxWidth: 700, margin: "0 auto", lineHeight: 1.4 }}>
                            Why MBA Finance Students Don't Reach Their Potential — And How ISMR Addresses It
                        </h3>
                    </div>

                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden", marginBottom: "2.5rem" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1.7fr", background: "#0f172a", padding: "1rem 1.5rem", gap: "1rem" }}>
                            <span style={{ fontSize: 12, fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Common Gap</span>
                            <span style={{ fontSize: 12, fontWeight: 500, color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.08em" }}>ISMR's Response</span>
                        </div>
                        {[
                            { gap: "No real dataset exposure before placements", response: "Dataset-based Excel training from Semester 1" },
                            { gap: "Weak business interpretation skills", response: "Case analysis as a regular training format" },
                            { gap: "Late preparation for placement rounds", response: "Structured mock placement programme across Year 2" },
                            { gap: "No clarity on analyst vs. backend roles", response: "Role-outcome counselling from admission stage" },
                            { gap: "Poor presentation and communication skills", response: "PSA (Presentation Skill Assessment) as part of the learning track" },
                        ].map((row, i) => (
                            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.3fr 1.7fr", padding: "1.1rem 1.5rem", gap: "1rem", borderTop: "0.5px solid #e2e8f0", background: i % 2 === 0 ? "#fff" : "#f8fafc", alignItems: "start" }}>
                                <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.65, margin: 0 }}>{row.gap}</p>
                                <p style={{ fontSize: 13.5, color: "#0f172a", fontWeight: 600, lineHeight: 1.65, margin: 0 }}>{row.response}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ background: "#0f172a", borderRadius: 12, padding: "2.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                        <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 900, color: "#fff", margin: 0, maxWidth: 620 }}>
                            Take the Next Step — MBA Finance Admission 2026 at ISMR Pune
                        </h3>
                        <p style={{ fontSize: 14.5, color: "#94a3b8", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Applications for MBA Finance Admission 2026 at ISMR Pune are open. Seats are limited — ISMR runs a focused cohort model.
                        </p>
                        <a href="#brochure" style={{ display: "inline-block", marginTop: "0.5rem", backgroundColor: "#2563eb", color: "#fff", fontWeight: 700, fontSize: 14.5, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none" }}>
                            Download the Brochure
                        </a>
                    </div>

                </div>
            </section>

            {/* ── WHY ISMR ── */}








            {/* ── FOOTER CTA ── */}
            <section style={styles.footerCta}>
                <div style={{ maxWidth: "40rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <h2 style={styles.footerH2}>Shape Global Business Infrastructure</h2>
                    <p style={styles.footerSubtitle}>Seats for MBA SCM Pune 2026 are limited. Secure yours with a single step — our counselors handle the rest.</p>
                    <a href="#admissions" style={styles.footerBtn}>Start Your Application →</a>
                    <p style={styles.footerNote}>ISMR Pune · AICTE Approved · SPPU Affiliated · DTE Maharashtra Recognized</p>
                </div>
            </section>
        </div>
    );
}