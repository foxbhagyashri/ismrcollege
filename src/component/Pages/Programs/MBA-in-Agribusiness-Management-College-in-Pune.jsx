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
                    <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "3rem" }}>
                        {/* Left Column */}
                        <div style={{ ...styles.heroContent, flex: "1 1 480px" }}>
                            <span style={styles.heroBadge}>SPPU Affiliated · AICTE Approved</span>
                            <h1 style={styles.heroH1}>
                                Searching for the Right<br />
                                <span style={styles.heroGradientText}>MBA in Agribusiness Management College in Pune?</span>{" "}
                                Your Answer Starts Here
                            </h1>

                            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                                India's agriculture sector is evolving fast — from traditional farming into organised supply chains, commodity markets, food processing industries, and agri-tech ventures.
                            </p>
                            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                                ISMR prepares you to lead at every level of this transformation through SPPU-affiliated academics, industry-integrated learning, and faculty that brings real agri-business experience into every classroom.
                            </p>

                            {/* Counselling Note */}
                            <div style={{ backgroundColor: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "1.75rem" }}>
                                <p style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700, marginBottom: "0.2rem" }}>Book a Free Counselling Session</p>
                                <p style={{ fontSize: "0.825rem", color: "#94a3b8", lineHeight: 1.6 }}>Get your questions answered before you commit to anything.</p>
                            </div>

                            {/* CTA Buttons */}
                            <div style={styles.heroCtas}>
                                <a href="#admissions" style={styles.ctaPrimary}>Book a Free Counselling Session →</a>
                                <a href="#curriculum" style={styles.ctaSecondary}>Explore Curriculum</a>
                            </div>
                        </div>

                        {/* Right Column: Program Snapshot Table */}
                        <div style={{ flex: "1 1 380px", maxWidth: "480px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1rem", overflow: "hidden", backdropFilter: "blur(8px)" }}>
                            <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                                <p style={{ fontWeight: 800, fontSize: "1rem", color: "#ffffff" }}>
                                    Program Snapshot: MBA in Agribusiness Management
                                </p>
                            </div>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    {[
                                        { label: "Duration", value: "2 Years / 4 Semesters" },
                                        { label: "Affiliation", value: "Savitribai Phule Pune University (SPPU)" },
                                        { label: "Approval", value: "AICTE / DTE / AIMS" },
                                        { label: "Learning Format", value: "Case Studies, Field Visits, Live Projects" },
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

                    {/* What Makes ISMR Top */}
                    <div style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", padding: "1.75rem 2rem", backdropFilter: "blur(8px)" }}>
                        <h2 style={{ fontWeight: 900, fontSize: "1.25rem", color: "#ffffff", marginBottom: "0.75rem" }}>
                            What Makes ISMR One of the Top MBA in Agribusiness Colleges in Pune?
                        </h2>
                        <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                            Agribusiness Management is where agricultural knowledge meets business leadership. The program covers the full agri-value chain: farm economics, supply chains, commodity markets, rural finance, food processing, and sustainability policy.
                        </p>
                        <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.75 }}>
                            Learning goes beyond the classroom. Students visit agricultural mandis, food processing units, and rural cooperatives, grounding theory in real operational environments before graduation.
                        </p>
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
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Curriculum</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Core Subjects at a Glance</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "48rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            Eight focus areas that span the complete agri-business value chain — from farm gate to market, finance to policy.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                        {[
                            {
                                num: "01",
                                icon: "🚚",
                                title: "Agri-Supply Chain & Logistics",
                                desc: "Learn how produce moves from farm gate to end consumer, covering procurement, cold chain infrastructure, warehousing, and last-mile distribution. Focus is on reducing post-harvest losses and improving margin realisation.",
                            },
                            {
                                num: "02",
                                icon: "🌾",
                                title: "Agricultural Marketing & Trade",
                                desc: "Understand commodity branding, mandi-to-retail transitions, export documentation, and international agri-trade policy. Build market linkage strategies that deliver real value to producers.",
                            },
                            {
                                num: "03",
                                icon: "🏦",
                                title: "Rural Finance & Microfinance",
                                desc: "Study NABARD credit programmes, Kisan Credit Card structures, SHG models, and MFI lending frameworks. Learn to assess farm enterprise viability and design rural financial products for smallholder farmers.",
                            },
                            {
                                num: "04",
                                icon: "📈",
                                title: "Commodity Markets & Risk Management",
                                desc: "Develop working knowledge of NCDEX and MCX exchanges, futures and options in agri-commodities, and enterprise-level hedging strategies to manage the price volatility inherent in agricultural business.",
                            },
                            {
                                num: "05",
                                icon: "🏭",
                                title: "Food Processing & Value Chain Management",
                                desc: "Explore how raw produce becomes consumer-ready products — with focus on FSSAI compliance, value addition economics, food safety systems, and retail integration in India's growing food processing sector.",
                            },
                            {
                                num: "06",
                                icon: "📜",
                                title: "Agri-Policy, Regulation & Sustainability",
                                desc: "Examine APMC structures, MSP mechanisms, contract farming regulations, and FPO frameworks. Understand how climate-smart agriculture and global sustainability mandates are reshaping agri-business strategy.",
                            },
                            {
                                num: "07",
                                icon: "🌱",
                                title: "Farm Business Management",
                                desc: "Apply core management principles — financial planning, operational efficiency, cash flow management — directly to farm enterprises. Build business plans suited to both smallholder contexts and commercial farming operations.",
                            },
                            {
                                num: "08",
                                icon: "🚀",
                                title: "Agri-Entrepreneurship & Startup Ecosystem",
                                desc: "Explore FPO structures, agri-tech incubators, and government startup schemes. Identify unmet market opportunities and develop pitch-ready agri-business concepts capable of attracting institutional funding.",
                            },
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em" }}>{item.num}</span>
                                </div>
                                <p style={{ fontWeight: 800, fontSize: "1rem", color: "#0f172a", margin: 0, lineHeight: 1.35 }}>{item.title}</p>
                                <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
                                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── ELIGIBILITY & ADMISSIONS ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Admissions 2026</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Eligibility & Admissions Criteria</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "42rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            What you need to qualify for the MBA in Agribusiness Management at ISMR Pune.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", maxWidth: "72rem", margin: "0 auto 1.5rem" }}>

                        {/* Academic Qualification */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.75rem" }}>
                                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>🎓</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>Academic Qualification</h3>
                                <p style={{ color: "#bfdbfe", fontSize: "0.825rem", lineHeight: 1.5 }}>Bachelor's degree in any stream from a recognised university.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                {[
                                    "Bachelor's degree in any stream from a recognised university",
                                    "Priority for: Agriculture, Horticulture, Food Technology, Dairy, Veterinary, Fisheries graduates",
                                    "Commerce, Science & Engineering graduates fully eligible",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
                                        <p style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minimum Marks */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ backgroundColor: "#0f172a", padding: "1.75rem" }}>
                                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>📊</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>Minimum Marks</h3>
                                <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Aggregate marks required at undergraduate level.</p>
                            </div>
                            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center", backgroundColor: "#f8fafc", borderRadius: "0.875rem", padding: "1rem 1.25rem", border: "1px solid #e2e8f0" }}>
                                    <div style={{ textAlign: "center", minWidth: "3.5rem" }}>
                                        <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#1d4ed8", lineHeight: 1 }}>50%</p>
                                        <p style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 600, marginTop: "0.15rem" }}>General</p>
                                    </div>
                                    <div style={{ width: "1px", height: "2.5rem", backgroundColor: "#e2e8f0", flexShrink: 0 }} />
                                    <p style={{ color: "#475569", fontSize: "0.825rem", lineHeight: 1.5 }}>Minimum aggregate marks required for general category candidates</p>
                                </div>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center", backgroundColor: "#eff6ff", borderRadius: "0.875rem", padding: "1rem 1.25rem", border: "1px solid #bfdbfe" }}>
                                    <div style={{ textAlign: "center", minWidth: "3.5rem" }}>
                                        <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0891b2", lineHeight: 1 }}>45%</p>
                                        <p style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 600, marginTop: "0.15rem" }}>SC/ST/OBC/PwD</p>
                                    </div>
                                    <div style={{ width: "1px", height: "2.5rem", backgroundColor: "#bfdbfe", flexShrink: 0 }} />
                                    <p style={{ color: "#475569", fontSize: "0.825rem", lineHeight: 1.5 }}>Minimum aggregate marks as per Maharashtra state norms</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", maxWidth: "72rem", margin: "0 auto 3rem" }}>

                        {/* Entrance Exams */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "1.75rem" }}>
                            <p style={{ fontWeight: 900, fontSize: "1rem", color: "#0f172a", marginBottom: "1rem" }}>Entrance Exams Accepted</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                {[
                                    "MAH-MBA CET (mandatory for Maharashtra domicile — CAP Round)",
                                    "CAT / CMAT / ATMA / MAT (also accepted)",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
                                        <p style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "1.75rem" }}>
                            <p style={{ fontWeight: 900, fontSize: "1rem", color: "#0f172a", marginBottom: "1rem" }}>Work Experience</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                {[
                                    "Not mandatory",
                                    "Relevant experience in agri-inputs, rural banking, food processing, or agri-tech is an advantage during selection",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
                                        <p style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* How ISMR Supports Admission */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "2rem", maxWidth: "72rem", margin: "0 auto" }}>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Admissions Support</p>
                        <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.25rem", marginBottom: "0.75rem" }}>How ISMR Supports Your Admission</h3>
                        <p style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                            The DTE Maharashtra CAP Round process — CET registration, document verification, preference filling, and seat acceptance — can be complex for first-time applicants. ISMR's admissions counseling team provides:
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            {[
                                "Entrance exam identification and registration guidance",
                                "Eligibility documentation support",
                                "Error-free enrollment support",
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.875rem", padding: "0.9rem 1.1rem" }}>
                                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>✅</span>
                                    <p style={{ color: "#e2e8f0", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.9rem" }}>
                            As one of the Best MBA Agribusiness Management Colleges in Pune 2026, ISMR ensures that eligible students receive the guidance and support needed to complete their admission journey smoothly and confidently.
                        </p>
                        <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.7 }}>
                            With SPPU affiliation, AICTE approval, industry-focused learning, and dedicated admission assistance, ISMR helps students move from admission confusion to career clarity — one guided step at a time.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHO SHOULD PURSUE ── */}
            <section id="curriculum" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Who Should Pursue This Course?
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                        Is the Agribusiness Management Course<br />in Pune Right for You?
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 700 }}>
                        Not every MBA is built for every ambition. This program is specifically designed for students and professionals who want to operate at the intersection of agriculture and business leadership. Here's who benefits most:
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
                        {[
                            {
                                icon: "🌿",
                                tag: "Agriculture & Science Graduates",
                                title: "Your technical foundation, now with a business layer",
                                hook: "Priority hire for agri-input firms, consulting, and trading houses.",
                                desc: "Your technical foundation is your biggest advantage — this program adds the business strategy layer on top of it. You graduate as the rare professional who understands both crop science and corporate decision-making, making you a priority hire for agri-input firms, consulting companies, and commodity trading houses.",
                            },
                            {
                                icon: "💼",
                                tag: "Commerce & Business Graduates",
                                title: "Sector-specific grounding a general MBA can't give you",
                                hook: "Crack agri-commodity markets and rural supply chains.",
                                desc: "Financial literacy alone isn't enough to crack agri-commodity markets or rural supply chains. This program gives you the sector-specific grounding — APMC trade structures, commodity pricing mechanics, agri-supply chain logic — that no general MBA covers.",
                            },
                            {
                                icon: "🏭",
                                tag: "Working Professionals in Agri, Seed, Fertilizer & FMCG",
                                title: "Break the ceiling without formal credentials",
                                hook: "Every module applies to your current role and your next one.",
                                desc: "Already working in the sector but hitting a ceiling without formal management credentials? This curriculum addresses the strategic and operational challenges you face daily — making every module immediately applicable to your current role and your next one.",
                            },
                            {
                                icon: "🌾",
                                tag: "Rural Economy & Development Professionals",
                                title: "Sharpen financial analysis and policy understanding",
                                hook: "Design interventions with real, measurable rural impact.",
                                desc: "If your work touches NABARD programmes, FPOs, rural cooperatives, or microfinance institutions — this program sharpens both the financial analysis and policy understanding you need to design interventions that create real, measurable rural impact.",
                            },
                            {
                                icon: "🚜",
                                tag: "Agri-Entrepreneurs & Family Farm Business Members",
                                title: "Replace guesswork with a scalable framework",
                                hook: "Data-driven planning and market linkage strategies.",
                                desc: "Running or inheriting a farm enterprise, agri-input dealership, or rural processing unit? This program replaces guesswork with a framework that covers data-driven planning, enterprise financial management, and market linkage strategies that help traditional agri-businesses scale confidently.",
                            },
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
                                <p style={{ fontSize: 13, fontWeight: 500, color: "#2563eb", margin: 0 }}>{p.hook}</p>
                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Benefits */}
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Benefits of Pursuing an MBA in Agribusiness Management
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", marginBottom: "0.75rem", color: "#0f172a" }}>
                        Why ISMR MBA Agribusiness Pune Delivers More Than a General Management Degree
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 760 }}>
                        Choosing a specialised MBA over a general one is a strategic career decision. Here is what students gain specifically from the Agribusiness Management course in Pune at ISMR — and why it translates into a measurable professional advantage:
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        {[
                            {
                                num: "01",
                                icon: "📈",
                                title: "Entering a Sector With Structural Long-Term Demand",
                                desc: "Agriculture is one of India's largest economic contributors, yet organised management talent within the sector remains significantly scarce relative to its scale. This gap creates sustained hiring demand across commodity firms, food processing companies, agri-tech ventures, and rural financial institutions for precisely the kind of professional this program produces.",
                            },
                            {
                                num: "02",
                                icon: "🎯",
                                title: "Career Advantage Over General MBA Graduates",
                                desc: "A general MBA graduate entering agri-sector roles lacks contextual fluency — commodity price cycles, mandi regulation, and rural credit infrastructure are invisible to them. ISMR MBA Agribusiness Pune graduates enter as specialists, translating directly into faster role progression and access to opportunities that generalist candidates cannot compete for.",
                            },
                            {
                                num: "03",
                                icon: "🛠️",
                                title: "Hands-On Exposure to Industry Tools and Platforms",
                                desc: "Students work with tools actively deployed across the industry — ERP systems used in food processing operations, GIS-based crop mapping tools in precision agriculture, and commodity risk models applied on NCDEX and MCX. This operational fluency is what separates ISMR graduates from candidates with only classroom training.",
                            },
                            {
                                num: "04",
                                icon: "🔀",
                                title: "Cross-Sector Career Applicability",
                                desc: "This degree opens doors well beyond traditional agriculture; graduates move into FMCG supply chains, agri-tech startups, cooperative banking, commodity brokerage, rural microfinance, export-import firms, and international development organisations. Few management specialisations offer this breadth of sectoral mobility.",
                            },
                            {
                                num: "05",
                                icon: "⚖️",
                                title: "A Rare Combination of Technical and Strategic Competence",
                                desc: "Most business professionals lack domain knowledge in agriculture. Most agricultural professionals lack strategic business skills. This program builds both — simultaneously. Employers across agri-input firms, food processing conglomerates, and rural development institutions actively seek this combination because it remains genuinely rare.",
                            },
                            {
                                num: "06",
                                icon: "📍",
                                title: "Location Advantage Within Maharashtra's Agri-Industrial Corridors",
                                desc: "Studying the MBA Agribusiness fees Pune 2026 investment pays off through proximity — Nashik's export belts, Sangli's processing clusters, Kolhapur's cooperative sugar industry, and Pune's agri-tech ecosystem are all accessible for internships, live projects, and recruiter engagement during the program itself.",
                            },
                        ].map((b, i) => (
                            <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", background: i % 2 === 0 ? "#f8fafc" : "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem 1.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                                    <div style={{ width: 46, height: 46, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontSize: 21 }}>{b.icon}</span>
                                    </div>
                                    <span style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.08em" }}>{b.num}</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 16.5, fontWeight: 800, color: "#0f172a", margin: "0 0 0.4rem", lineHeight: 1.35 }}>{b.title}</h3>
                                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── STRATEGIC MARKET BENEFITS ── */}
            <section id="benefits" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            FAQs
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            MBA Agribusiness Management at ISMR Pune — common questions answered.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[
                            {
                                q: "What is an MBA in Agribusiness Management?",
                                a: "The MBA in Agribusiness Management is a two-year postgraduate program that integrates agricultural science with business disciplines — including supply chain management, commodity markets, rural finance, and agri-policy. It prepares graduates to manage and lead across India's food production, processing, and distribution sectors at both operational and strategic levels.",
                            },
                            {
                                q: "Who can apply for an MBA in Agribusiness Management in Pune?",
                                a: "The program is open to graduates from any stream — Agriculture, Science, Commerce, or Engineering — holding a minimum of 50% aggregate marks from a recognised university. Applicants must also hold a valid score from an accepted entrance exam such as MAH-MBA CET, CAT, CMAT, ATMA, or MAT.",
                            },
                            {
                                q: "What is the duration of the MBA Agribusiness Management course?",
                                a: "The Agribusiness Management course in Pune at ISMR is a two-year full-time program structured across four semesters. Each semester progressively builds on the previous one, moving from foundational agri-economics and supply chain principles to advanced topics in commodity risk management, sustainability strategy, and agri-entrepreneurship.",
                            },
                            {
                                q: "Is MBA Agribusiness Management suitable for non-agriculture graduates?",
                                a: "Yes. Commerce, Science, and Engineering graduates are fully eligible and regularly pursue this program to build a specialised career in agri-trade, food processing, rural finance, or commodity markets. The curriculum is structured to develop an agricultural context from the ground up for students without prior agri-science backgrounds.",
                            },
                            {
                                q: "Is ISMR AICTE-approved for MBA Agribusiness Management?",
                                a: "Yes. ISMR holds full AICTE approval and is affiliated with Savitribai Phule Pune University (SPPU). It also holds DTE and AIMS recognition, ensuring the degree meets all statutory requirements for employment, government recruitment, and further academic pursuits.",
                            },
                            {
                                q: "What is the scope of MBA Agribusiness Management in India?",
                                a: "Agribusiness management professionals are in active demand across commodity exchanges, food processing companies, agri-tech startups, rural finance institutions, FMCG supply chains, and government development agencies. India's organised agri-economy continues to expand, and the shortage of trained management professionals within the sector makes this one of the more stable and opportunity-rich specialisations available today.",
                            },
                            {
                                q: "What are the MBA Agribusiness Fees at ISMR Pune for 2026?",
                                a: "For accurate and current MBA Agribusiness fees Pune 2026 information, we recommend contacting ISMR's admissions office directly or downloading the program brochure, as fee structures are subject to annual revision and may vary based on category, scholarship eligibility, or government-regulated fee norms under the DTE Maharashtra framework.",
                            },
                            {
                                q: "How does ISMR's SPPU affiliation benefit MBA Agribusiness students?",
                                a: "SPPU affiliation ensures that the degree awarded by ISMR carries full university recognition accepted by employers, public sector institutions, and postgraduate programs across India. It also means the curriculum, examination standards, and academic processes are governed by one of Maharashtra's most established and respected university frameworks, adding credibility to every credential ISMR graduates hold.",
                            },
                        ].map((item, i) => (
                            <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem 1.75rem" }}>
                                <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                                    <span style={{ fontSize: 13, fontWeight: 800, color: "#2563eb", background: "#eff6ff", borderRadius: 8, padding: "0.3rem 0.6rem", flexShrink: 0 }}>
                                        Q{i + 1}
                                    </span>
                                    <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1.4 }}>{item.q}</p>
                                </div>
                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, margin: 0, paddingLeft: "2.5rem" }}>{item.a}</p>
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