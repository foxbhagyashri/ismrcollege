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
                                <span style={styles.heroGradientText}>MBA Pharma Colleges in Pune — ISMR's Industry-Integrated Programme for Healthcare and Pharma Careers</span>
                            </h1>
                            <p style={{ fontSize: "1rem", color: "#e2e8f0", lineHeight: 1.6, marginTop: "1rem", maxWidth: "560px" }}>
                                ISMR's programme combines a rigorous, sector-specific curriculum with live industry exposure, preparing graduates for leadership roles across the pharma, hospital, and healthcare sectors. For students evaluating MBA in Pharma and Healthcare Management Colleges in Pune, ISMR offers end-to-end admissions support so that paperwork and deadlines never stand between you and your next step. We will walk you through the complete cost, payment schedule, and what you get at every stage of the programme.
                            </p>

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
                                    Quick Facts: MBA in Pharma & Healthcare Management at ISMR Pune
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
                                        { label: "Top Skills", value: "Pharma marketing, hospital administration, regulatory affairs, healthcare analytics" },
                                        { label: "Career Roles", value: "Pharma Product Manager, Hospital Administrator, Healthcare Consultant" },
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
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Programme Overview</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Understanding the Programme at Leading MBA Pharma Colleges in Pune</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "48rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            This two-year, full-time programme, structured across four semesters, is built for graduates who want to lead at the intersection of science and business. Learning goes beyond the classroom through industry case studies, GMP and NABH regulatory simulations, pharma plant visits, and hospital immersions.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>

                        {/* Programme Snapshot */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.5rem" }}>
                                <span style={{ color: "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Programme Snapshot</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>Key Details at a Glance</h3>
                            </div>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    {[
                                        { label: "Duration", value: "2 Years / 4 Semesters" },
                                        { label: "Mode", value: "Full-Time" },
                                        { label: "Affiliation", value: "Savitribai Phule Pune University (SPPU)" },
                                        { label: "Approvals", value: "AICTE, DTE, AIMS" },
                                        { label: "Eligibility", value: "Any graduate stream with a minimum of 50% marks" },
                                        { label: "Entrance Accepted", value: "MAH-MBA CET / CAT / CMAT" },
                                    ].map((row, i, arr) => (
                                        <tr key={row.label} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                            <td style={{ padding: "0.8rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, color: "#1d4ed8", whiteSpace: "nowrap", verticalAlign: "top" }}>
                                                {row.label}
                                            </td>
                                            <td style={{ padding: "0.8rem 1.5rem", fontSize: "0.8rem", color: "#334155", lineHeight: 1.5 }}>
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Key Subjects */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ backgroundColor: "#0f172a", padding: "1.5rem" }}>
                                <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Curriculum</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>Key Subjects</h3>
                                <p style={{ color: "#94a3b8", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>Core subject areas and what each one focuses on.</p>
                            </div>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    {[
                                        { label: "Pharmaceutical Marketing Management", value: "Product strategy, brand management, MR operations" },
                                        { label: "Hospital Administration", value: "Hospital systems, patient flow, resource planning" },
                                        { label: "Drug Regulatory Affairs", value: "CDSCO compliance, dossier preparation, licensing" },
                                        { label: "Healthcare Operations & Quality Management", value: "NABH standards, process efficiency, and audits" },
                                        { label: "Clinical Research Management", value: "Trial design, ICH-GCP guidelines, ethics" },
                                        { label: "Pharmacovigilance", value: "Adverse event reporting, drug safety monitoring" },
                                        { label: "Health Economics", value: "Pricing models, insurance, health policy" },
                                        { label: "Supply Chain in Pharma", value: "Cold chain, distribution, vendor management" },
                                        { label: "Medical Devices Management", value: "Regulatory framework, market access" },
                                        { label: "ERP in Healthcare", value: "SAP/Oracle applications in hospital and pharma settings" },
                                        { label: "Biostatistics", value: "Data interpretation, clinical trial analysis" },
                                    ].map((row, i, arr) => (
                                        <tr key={row.label} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                            <td style={{ padding: "0.75rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, color: "#0f172a", verticalAlign: "top", width: "45%" }}>
                                                {row.label}
                                            </td>
                                            <td style={{ padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* Closing statement */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "2rem", textAlign: "center" }}>
                        <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "56rem", margin: "0 auto" }}>
                            As one of the more structured MBA in Pharmaceutical Management Colleges in Pune, ISMR's curriculum qualifies graduates for roles across pharma companies, hospital chains, CROs, and regulatory bodies. It's backed by the credibility of an <span style={{ color: "#67e8f9", fontWeight: 700 }}>MBA Pharma & Healthcare Management Pune University SPPU</span> degree recognised across the sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ELIGIBILITY & ADMISSIONS ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Step 4 — Who Should Pursue This Course</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Is This Specialisation Right for You?</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "48rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            Students exploring this specialisation often come from diverse academic and professional backgrounds, but share one common goal: building a long-term career in the pharmaceutical and healthcare industry through management expertise and industry exposure. This specialisation is designed for students and professionals who want to grow within the sector while developing strong leadership, operational, and strategic management capabilities.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", maxWidth: "80rem", margin: "0 auto" }}>

                        {[
                            {
                                icon: "🔬",
                                title: "Science, Pharmacy & Allied Healthcare Graduates",
                                dark: false,
                                points: [
                                    "Students from B.Pharm, B.Sc., BAMS, BDS, BHMS, Biotechnology, and allied healthcare backgrounds often experience limited career progression in purely clinical or laboratory-based roles.",
                                    "This curriculum helps them transition into career opportunities in pharma marketing, regulatory affairs, pharmacovigilance, clinical research, and healthcare operations while continuing to build upon their scientific foundation.",
                                ],
                            },
                            {
                                icon: "💼",
                                title: "Working Professionals in Pharma or Hospital Settings",
                                dark: true,
                                points: [
                                    "Medical representatives, clinical coordinators, QA executives, and hospital professionals with practical sector experience can use this MBA to move into higher managerial responsibilities.",
                                    "Among professionally focused MBA Pharma Colleges in Pune, ISMR helps working professionals strengthen business decision-making, operational understanding, and strategic management capabilities that field experience alone may not fully develop.",
                                ],
                            },
                            {
                                icon: "📈",
                                title: "Commerce and Management Graduates Interested in Healthcare",
                                dark: false,
                                points: [
                                    "BCom and BBA graduates who understand business fundamentals but want to enter the rapidly growing pharmaceutical and healthcare sector gain valuable domain-specific exposure through this programme.",
                                    "The curriculum introduces students to pharmaceutical operations, healthcare systems, compliance structures, and regulated healthcare environments.",
                                ],
                            },
                            {
                                icon: "🏥",
                                title: "Aspiring Hospital Administrators and Healthcare Managers",
                                dark: true,
                                points: [
                                    "Students interested in hospital administration, healthcare operations, patient service management, or healthcare quality systems benefit from practical exposure to organisational management within medical and pharmaceutical environments.",
                                    "This track develops practical skills in patient care workflows, facility logistics, resource allocation, and healthcare quality compliance standards such as NABH.",
                                ],
                            },
                            {
                                icon: "🏢",
                                title: "Entrepreneurs and Family Business Members in Healthcare",
                                dark: false,
                                points: [
                                    "Individuals involved in pharmaceutical distribution, diagnostic centres, healthcare services, medical retail, or family-run healthcare businesses can use this MBA to professionalise operations.",
                                    "The programme delivers practical methods to strengthen compliance systems, optimise inventory logistics, and modernise established healthcare businesses through stronger managerial systems and industry-focused knowledge.",
                                ],
                            },
                        ].map((card, idx) => (
                            <div key={card.title} style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                                <div style={{
                                    background: card.dark ? "#0f172a" : "linear-gradient(135deg, #1d4ed8, #0891b2)",
                                    padding: "1.75rem",
                                }}>
                                    <div style={{
                                        width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem",
                                        backgroundColor: card.dark ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.2)",
                                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem",
                                    }}>{card.icon}</div>
                                    <h3 style={{ fontWeight: 900, fontSize: "1.05rem", color: "#ffffff", lineHeight: 1.3 }}>{card.title}</h3>
                                </div>
                                <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                                    {card.points.map((point, i) => (
                                        <div key={i} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                                            <span style={{ color: "#1d4ed8", fontSize: "0.9rem", fontWeight: 900, flexShrink: 0, marginTop: "0.1rem" }}>›</span>
                                            <p style={{ color: "#475569", fontSize: "0.825rem", lineHeight: 1.65 }}>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD PURSUE ── */}
            <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Step 5 — Benefits
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                        Benefits of Pursuing This MBA Specialisation
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 760 }}>
                        India is one of the largest pharmaceutical producers and home to one of the fastest-growing healthcare markets globally. Students evaluating MBA in Pharma and Healthcare Management Colleges in Pune are entering a sector where structured managerial talent is consistently in short supply, making this specialisation one of the more reliable career investments available today.
                    </p>

                    {/* Benefit Cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                        {[
                            {
                                icon: "📊",
                                tag: "Market Demand",
                                title: "Sector Scale & Hiring Demand",
                                dark: false,
                                points: [
                                    "India's pharma and healthcare sectors collectively employ millions and continue to expand through domestic consumption growth, medical tourism, and export-led manufacturing.",
                                    "Graduates enter a hiring market where domain-qualified managers are actively sought by pharma MNCs, hospital chains, and CROs across India and internationally.",
                                ],
                            },
                            {
                                icon: "💰",
                                tag: "ROI",
                                title: "Fees vs. Salary Outcomes",
                                dark: true,
                                points: [
                                    "For students researching the Best MBA Pharma & Healthcare Management Colleges in Pune 2026, the return on investment is a practical consideration.",
                                    "MBA Pharma Healthcare Management Pune fees are structured to remain accessible, with entry-level roles in pharma marketing, regulatory affairs, and hospital administration typically offering starting packages between ₹4–7 LPA — with faster growth trajectories than most general management roles in comparable sectors.",
                                ],
                            },
                            {
                                icon: "🎓",
                                tag: "Specialisation",
                                title: "Domain Credibility",
                                dark: false,
                                points: [
                                    "Knowledge of pharmacovigilance protocols, NABH accreditation standards, GMP compliance, and regulatory dossier preparation sets pharma MBA graduates apart from generalist managers.",
                                    "Employers across clinical research organisations, hospital chains, and drug manufacturers specifically seek candidates who can operate without a domain learning curve.",
                                ],
                            },
                            {
                                icon: "🔀",
                                tag: "Flexibility",
                                title: "Cross-Sector Mobility",
                                dark: true,
                                points: [
                                    "This degree opens doors across pharma MNCs, multi-specialty hospital chains, contract research organisations, health-tech startups, and insurance and TPA companies.",
                                    "Few MBA specialisations offer this breadth of industry options within a single sector ecosystem.",
                                ],
                            },
                            {
                                icon: "🖥️",
                                tag: "Future-Ready",
                                title: "Regulatory & Digital Health Exposure",
                                dark: false,
                                points: [
                                    "Subjects covering Drug Regulatory Affairs, ERP in Healthcare, and healthcare operations prepare graduates for roles increasingly shaped by EHR systems, telemedicine platforms, and AI-assisted diagnostics.",
                                    "These are not future skills; they are current hiring requirements at progressive healthcare organisations.",
                                ],
                            },
                            {
                                icon: "📍",
                                tag: "Location",
                                title: "Strategic Location Advantage",
                                dark: true,
                                points: [
                                    "Pune and the PCMC industrial belt host pharmaceutical manufacturing clusters, corporate hospitals, and biotech firms that form part of ISMR's live industry network.",
                                    "Students benefit from proximity to real corporate environments for guest lectures, plant visits, live projects, and placement connections.",
                                ],
                            },
                        ].map((card, i) => (
                            <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                    <div style={{
                                        width: 42, height: 42, borderRadius: 10,
                                        background: card.dark ? "#0f172a" : "#eff6ff",
                                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                    }}>
                                        <span style={{ fontSize: 20 }}>{card.icon}</span>
                                    </div>
                                    <div>
                                        <span style={{
                                            fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                                            color: card.dark ? "#67e8f9" : "#2563eb",
                                            background: card.dark ? "#0f172a" : "#eff6ff",
                                            borderRadius: 6, padding: "3px 9px", display: "inline-block", marginBottom: "0.25rem",
                                        }}>
                                            {card.tag}
                                        </span>
                                        <p style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>{card.title}</p>
                                    </div>
                                </div>
                                <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    {card.points.map((point, j) => (
                                        <div key={j} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                            <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                                            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: "#eff6ff", borderRadius: 12, padding: "1rem 1.25rem", border: "1px solid #bfdbfe" }}>
                        <p style={{ fontSize: 14, color: "#1d4ed8", fontWeight: 600, margin: 0 }}>
                            📌 Hiring sectors for graduates: Pharma MNCs, Hospital Chains, CROs, Health-Tech Startups, Insurance & TPA Companies
                        </p>
                    </div>
                </div>
            </section>




            {/* ── STRATEGIC MARKET BENEFITS ── */}
            <section id="admissions" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Step 6 — Admission Process
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            ISMR Admission Process
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 680, margin: "0 auto" }}>
                            Students pursuing MBA Pharmaceutical Management Pune Admission 2026 will find ISMR's enrollment cycle straightforward and counsellor-supported at every stage. Here is how the process works.
                        </p>
                    </div>

                    {/* Step Flow Indicator */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", marginBottom: "1.5rem" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", justifyContent: "center" }}>
                            {["Apply Online", "Counselling & Telephonic Interview", "Seat Confirmation", "Provisional Admission"].map((step, i, arr) => (
                                <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1d4ed8", background: "#eff6ff", borderRadius: 20, padding: "0.6rem 1.1rem" }}>
                                        {i + 1}. {step}
                                    </span>
                                    {i < arr.length - 1 && <span style={{ color: "#94a3b8", fontWeight: 700 }}>→</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Step Detail Cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
                        {[
                            {
                                step: "Step 1",
                                title: "Apply Online",
                                dark: false,
                                desc: "Applications are submitted through ISMR's online portal with a non-refundable application fee of ₹1,100/-. The process is designed to be completed quickly, and the portal remains open across admission cycles. Students are advised to apply early, given limited seat availability.",
                            },
                            {
                                step: "Step 2",
                                title: "Counselling and Telephonic Interview",
                                dark: true,
                                desc: "Following application review, shortlisted candidates are contacted for a telephonic counselling session. This is not a stress interview; it is a structured conversation to understand the student's academic background, sector interest, and career goals, and to confirm that the programme is the right fit before a seat is offered.",
                            },
                            {
                                step: "Step 3",
                                title: "Seat Confirmation",
                                dark: false,
                                desc: "Selected candidates receive an official offer letter within 4 working days. A seat retention fee of ₹30,000/- is required to confirm the seat, after which the admission is held securely until the next documentation stage.",
                            },
                            {
                                step: "Step 4",
                                title: "Provisional Admission",
                                dark: true,
                                desc: "Once the seat is confirmed, students are guided through documentation requirements including academic marksheets, entrance score certificates, identity proof, and SPPU eligibility verification. ISMR's admissions team provides a complete checklist and assists with any document-related queries to ensure a smooth transition to provisional enrollment.",
                            },
                        ].map((card, i) => (
                            <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
                                <div style={{ background: card.dark ? "#0f172a" : "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.25rem 1.5rem" }}>
                                    <span style={{ color: card.dark ? "#94a3b8" : "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{card.step}</span>
                                    <h3 style={{ fontWeight: 900, fontSize: "1rem", color: "#ffffff", marginTop: "0.3rem" }}>{card.title}</h3>
                                </div>
                                <div style={{ padding: "1.25rem 1.5rem" }}>
                                    <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Step 7 — Career Roles
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                        Career Opportunities After This MBA
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 760 }}>
                        Graduates are hired across pharma MNCs, corporate hospital chains, CROs, diagnostic networks, health-tech startups, medical device firms, insurance companies, and public health agencies.
                    </p>

                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "0.5rem", overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 13, fontWeight: 800, color: "#67e8f9" }}>Role</th>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 13, fontWeight: 800, color: "#94a3b8" }}>Industry</th>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 13, fontWeight: 800, color: "#94a3b8" }}>Core Responsibilities</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { role: "Pharmaceutical Brand Manager", industry: "Pharma MNCs, Generic Companies", resp: "Product marketing strategy, medical affairs coordination, sales force enablement" },
                                    { role: "Hospital Administrator / Operations Manager", industry: "Corporate & Multi-Specialty Hospitals", resp: "Patient flow management, NABH compliance, resource and vendor oversight" },
                                    { role: "Regulatory Affairs Manager", industry: "Pharma, Biotech, Medical Devices", resp: "CDSCO dossier submissions, product licensing, pharmacovigilance reporting" },
                                    { role: "Clinical Research Coordinator / Manager", industry: "CROs, Hospitals, Pharma R&D", resp: "Trial site management, ICH-GCP compliance, patient recruitment, data oversight" },
                                    { role: "Healthcare Consultant", industry: "Consulting Firms, Health-Tech", resp: "Operational efficiency, accreditation advisory, market entry strategy" },
                                    { role: "Medical Sales & Key Account Manager", industry: "Pharma, Medical Devices", resp: "Institutional account planning, tender management, clinical stakeholder selling" },
                                    { role: "Health Insurance & TPA Manager", industry: "Insurance Companies, TPAs", resp: "Claims processing, provider network management, policy compliance" },
                                ].map((row, i, arr) => (
                                    <tr key={row.role} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)" }}>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{row.role}</td>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, color: "#cbd5e1" }}>{row.industry}</td>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, color: "#94a3b8" }}>{row.resp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            {/* ── ADMISSION PROCESS + CAREER OPPORTUNITIES ── */}

            {/* ADMISSION PROCESS */}
            <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Step 8 — Why ISMR
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            Why Students Choose ISMR
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            Six reasons students evaluating MBA Pharma & Healthcare Management Colleges in Pune choose ISMR.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                        {[
                            {
                                icon: "🎓",
                                tag: "Recognition",
                                title: "AICTE-Approved & SPPU-Affiliated",
                                dark: false,
                                points: [
                                    "ISMR's MBA Pharma & Healthcare Management Pune University degree carries full national academic validity.",
                                    "AICTE approval and SPPU affiliation ensure the qualification is recognised by employers, government bodies, and higher education institutions across India.",
                                ],
                            },
                            {
                                icon: "🧬",
                                tag: "Curriculum",
                                title: "Healthcare-Specialized Curriculum",
                                dark: true,
                                points: [
                                    "The programme is built around sector-specific subjects: pharmacovigilance, NABH quality standards, GMP compliance, clinical research management, and drug regulatory affairs.",
                                    "This is not a general MBA with a pharma elective; the entire curriculum is designed around healthcare industry realities.",
                                ],
                            },
                            {
                                icon: "🤝",
                                tag: "Placements",
                                title: "Dedicated Placement & Corporate Relations",
                                dark: false,
                                points: [
                                    "Among MBA Pharma Colleges in Pune, ISMR maintains targeted placement connects with pharma companies, hospital chains, CROs, and health-tech firms — not a generic placement cell.",
                                    "Students pursuing an MBA in Pharmaceutical Management Colleges in Pune benefit from sector-specific recruitment drives, industry mentors, and role-aligned placement preparation.",
                                ],
                            },
                            {
                                icon: "👩‍🏫",
                                tag: "Faculty",
                                title: "Dual-Expertise Faculty",
                                dark: true,
                                points: [
                                    "Faculty at ISMR combine academic qualifications with active corporate backgrounds in pharma marketing, hospital administration, regulatory affairs, and clinical research.",
                                    "This means students receive both theoretical frameworks and practical industry perspectives in every classroom session.",
                                ],
                            },
                            {
                                icon: "📍",
                                tag: "Location",
                                title: "Pune & PCMC Geographic Advantage",
                                dark: false,
                                points: [
                                    "The institute's location within the Pune-PCMC pharma and healthcare belt gives students direct access to manufacturing plants, corporate hospitals, and biotech companies for live projects, site visits, and internship connections.",
                                    "These are advantages that institutions in non-industrial cities cannot replicate.",
                                ],
                            },
                            {
                                icon: "💬",
                                tag: "Transparency",
                                title: "Fee Transparency & Honest Counselling",
                                dark: true,
                                points: [
                                    "For students shortlisting Best MBA Pharma & Healthcare Management Colleges in Pune 2026, ISMR provides a complete fee breakdown upfront with no hidden charges or shifting admission criteria.",
                                    "Counselling sessions are designed to give students an honest assessment of fit, not just to convert inquiries into admissions.",
                                ],
                            },
                        ].map((card, i) => (
                            <div key={i} style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                                <div style={{
                                    background: card.dark ? "#0f172a" : "linear-gradient(135deg, #1d4ed8, #0891b2)",
                                    padding: "1.5rem",
                                }}>
                                    <div style={{
                                        width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem",
                                        backgroundColor: card.dark ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.2)",
                                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "0.9rem",
                                    }}>{card.icon}</div>
                                    <span style={{
                                        color: card.dark ? "#94a3b8" : "#bfdbfe",
                                        fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
                                    }}>{card.tag}</span>
                                    <h3 style={{ fontWeight: 900, fontSize: "1.05rem", color: "#ffffff", marginTop: "0.3rem", lineHeight: 1.3 }}>{card.title}</h3>
                                </div>
                                <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    {card.points.map((point, j) => (
                                        <div key={j} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                            <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                                            <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "#0f172a", padding: "4.5rem 0" }}>
                <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#67e8f9", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Step 9 — Visit Us
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>
                        See the Campus and Meet the Team Before You Decide
                    </h2>
                    <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.75, marginBottom: "2.25rem" }}>
                        Book a campus visit or schedule a virtual walkthrough — speak directly with faculty, current students, and our placement team so you can make an informed decision without any pressure.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="#book-visit" style={{
                            backgroundColor: "#67e8f9", color: "#0f172a", fontWeight: 800, fontSize: "0.9rem",
                            padding: "0.95rem 1.75rem", borderRadius: "0.75rem", textDecoration: "none",
                        }}>
                            Book a Campus Visit →
                        </a>
                        <a href="#virtual-walkthrough" style={{
                            backgroundColor: "transparent", color: "#ffffff", fontWeight: 800, fontSize: "0.9rem",
                            padding: "0.95rem 1.75rem", borderRadius: "0.75rem", textDecoration: "none",
                            border: "1px solid rgba(255,255,255,0.3)",
                        }}>
                            Schedule a Virtual Walkthrough
                        </a>
                    </div>
                </div>
            </section>
            {/* CAREER OPPORTUNITIES */}
            <section id="faq" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Step 10 — FAQs
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            Common questions about the MBA in Pharma & Healthcare Management programme at ISMR Pune.
                        </p>
                    </div>

                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
                        {[
                            {
                                q: "What is an MBA in Pharma and Healthcare Management?",
                                a: "It is a two-year postgraduate management programme designed to train graduates for leadership roles across the pharmaceutical, hospital, and healthcare sectors. The curriculum combines core management subjects with sector-specific disciplines such as regulatory affairs, pharmacovigilance, clinical research, and hospital operations.",
                            },
                            {
                                q: "Who can apply for an MBA in Pharmaceutical Management Colleges in Pune?",
                                a: "Graduates from any stream — B.Pharm, B.Sc., BAMS, BDS, BHMS, BCom, BBA, and others with a minimum of 50% marks are eligible to apply. A valid MAH-MBA CET, CAT, or CMAT score is also required for admission.",
                            },
                            {
                                q: "What is the duration of the MBA in Pharma & Healthcare Management at ISMR?",
                                a: "The programme is two years full-time, structured across four semesters. Each semester progressively builds on management fundamentals, sector specialisation, and live industry exposure.",
                            },
                            {
                                q: "Is an MBA in Hospital and Healthcare Management suitable for working professionals?",
                                a: "Yes — MBA in Hospital and Healthcare Management Colleges in Pune, including ISMR, actively admit working professionals from hospital administration, pharma sales, QA, and clinical coordination backgrounds. The programme is structured to build on existing sector experience and fast-track candidates into senior managerial roles.",
                            },
                            {
                                q: "Is ISMR AICTE-approved and SPPU-affiliated for MBA Pharma programmes?",
                                a: "Yes. ISMR holds AICTE approval along with DTE and AIMS recognition and is affiliated with Savitribai Phule Pune University. The degree carries full national academic and professional validity.",
                            },
                            {
                                q: "What is the scope of MBA Pharma and Healthcare Management in Pune?",
                                a: "Graduates can pursue roles across pharmaceutical companies, corporate hospitals, CROs, diagnostic networks, health-tech startups, medical device firms, and insurance organisations. Pune's pharma and healthcare industry concentration further strengthens local placement and networking opportunities.",
                            },
                            {
                                q: "What salary can I expect after completing an MBA in Pharma Healthcare Management from Pune?",
                                a: "Entry-level roles in pharma marketing, regulatory affairs, hospital administration, and clinical research typically offer starting packages between ₹4–7 LPA. Salaries scale with experience, specialisation, and the type of organisation — pharma MNCs and corporate hospital chains generally offer stronger early-career growth.",
                            },
                            {
                                q: "What are the fees for MBA Pharma Healthcare Management at ISMR Pune?",
                                a: "MBA Pharma Healthcare Management Pune Fees at ISMR are structured to be accessible and are communicated transparently at the time of counselling with no hidden charges. Contact the admissions team directly or request a brochure for the complete and current fee breakdown.",
                            },
                        ].map((item, i, arr) => (
                            <div key={i} style={{ padding: "1.5rem 2rem", borderBottom: i === arr.length - 1 ? "none" : "0.5px solid #e2e8f0" }}>
                                <p style={{ fontSize: 15, fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem", display: "flex", gap: "0.6rem" }}>
                                    <span style={{ color: "#2563eb" }}>{i + 1}.</span>
                                    <span>{item.q}</span>
                                </p>
                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, margin: 0, paddingLeft: "1.35rem" }}>
                                    {item.a}
                                </p>
                            </div>
                        ))}
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