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
                            <span style={styles.heroBadge}>SPPU Affiliated · AICTE Approved · NAAC B++</span>
                            <h1 style={styles.heroH1}>
                                <span style={styles.heroGradientText}>MBA HR Colleges in Pune – ISMR | Where Deloitte, TCS & HDFC Bank Hire HR Talent</span>
                            </h1>
                            <p style={{ color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                                The MBA in Human Resource Management at ISMR B-School, Pune, is a 2-year, full-time, AICTE-approved, NAAC B++ accredited program affiliated with Savitribai Phule Pune University (SPPU).
                            </p>

                            {/* CTA Buttons */}
                            <div style={styles.heroCtas}>
                                <a href="#admissions" style={styles.ctaPrimary}>Apply for 2026 →</a>
                                <a href="#curriculum" style={styles.ctaSecondary}>Explore Curriculum</a>
                            </div>
                        </div>

                        {/* Right Column: Quick Facts Table */}

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
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>The Placement Reality Other MBA HR Colleges Don't Advertise</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "48rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            When Big 4 consulting firms recruit HR professionals from a Pune B-school, that's not a standard outcome. It's the result of a specific system.
                        </p>
                    </div>

                    {/* The Gap */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "2rem", marginBottom: "3rem" }}>
                        <p style={{ color: "#ffffff", fontWeight: 800, fontSize: "1rem", marginBottom: "1.25rem" }}>
                            Most MBA HR colleges in Pune connect students to recruiters in the final semester through a generic placement drive. ISMR B-School works differently:
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            {[
                                { icon: "🏢", text: "A dedicated \"Success Cell\" — a Corporate Relations Department — operates throughout the program, not just in the final semester" },
                                { icon: "🔄", text: "Pre-placement training, summer internship coordination, and final placement drives are all managed by the same structured cell" },
                                { icon: "🎯", text: "No handing students off to a single placement officer in the final year — the process is continuous, from Semester 1 onward" },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.875rem", padding: "0.9rem 1.1rem" }}>
                                    <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                                    <p style={{ color: "#cbd5e1", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.95rem" }}>
                            The 2024–25 MBA HR batch at ISMR recorded a 90% placement rate — with a recruiter profile that isn't standard for SPPU-affiliated MBA HR colleges in Pune.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>

                        {/* Recruiters */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.5rem" }}>
                                <span style={{ color: "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Who Recruited in 2024–25</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>A Recruiter Profile Built on the Success Cell's Year-Round Work</h3>
                                <p style={{ color: "#bfdbfe", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>Especially the Big 4 and Aditya Birla Group — not standard for SPPU-affiliated MBA HR colleges in Pune.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem" }}>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {[
                                        "Deloitte", "Accenture", "Infosys", "TCS", "Wipro", "Cognizant",
                                        "Capgemini", "EY", "PwC", "KPMG", "HCL Technologies",
                                        "Tech Mahindra", "ICICI Bank", "HDFC Bank", "Aditya Birla Group",
                                    ].map((name, i) => (
                                        <span key={i} style={{ backgroundColor: "#dbeafe", color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", padding: "0.45rem 0.85rem", borderRadius: "999px" }}>
                                            {name}
                                        </span>
                                    ))}
                                </div>
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
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: "0.3rem" }}>How MBA HR Placements at ISMR Pune Work</h3>
                                <p style={{ color: "#94a3b8", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.5 }}>What the Success Cell manages at each stage of the placement journey.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                                <div style={{ padding: "0.9rem 0", borderBottom: "1px solid #e2e8f0" }}>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>What is the Success Cell at ISMR?</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        The Success Cell is ISMR's dedicated Corporate Relations Department. It runs pre-placement training, coordinates summer internships, and manages final placement drives as one continuous process — not a single officer handling placements only in the final year.
                                    </p>
                                </div>
                                <div style={{ padding: "0.9rem 0" }}>
                                    <p style={{ fontWeight: 800, fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem" }}>What was the placement outcome for the 2024–25 MBA HR batch?</p>
                                    <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>
                                        The batch recorded a 90% placement rate. Recruiters included Deloitte, Accenture, Infosys, TCS, Wipro, Cognizant, Capgemini, EY, PwC, KPMG, HCL Technologies, Tech Mahindra, ICICI Bank, HDFC Bank, and Aditya Birla Group.
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
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Program Overview</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>MBA HR at ISMR – Course at a Glance</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "42rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            Everything you need to know about the MBA in Human Resource Management program, and how to become eligible for admission.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", maxWidth: "72rem", margin: "0 auto" }}>

                        {/* Course at a Glance */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", padding: "1.75rem" }}>
                                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>🎓</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>MBA HR at ISMR – Course at a Glance</h3>
                                <p style={{ color: "#bfdbfe", fontSize: "0.825rem", lineHeight: 1.5 }}>Full-time, on-campus MBA in Human Resource Management</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem" }}>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <tbody>
                                        {[
                                            { param: "Full Program Name", details: "MBA in Human Resource Management" },
                                            { param: "Duration", details: "2 Years (4 Semesters)" },
                                            { param: "Program Mode", details: "Full-Time, On-Campus" },
                                            { param: "Affiliation", details: "Savitribai Phule Pune University (SPPU)" },
                                            { param: "Approval", details: "AICTE" },
                                            { param: "Accreditation", details: "NAAC B++" },
                                            { param: "Recognitions", details: "AIMA, AIMS, AISHE" },
                                            { param: "Ranking", details: "20th — Beyond IIM Top 100 B-School Survey" },
                                            { param: "Entrance Exams Accepted", details: "MAH-CET / CAT / CMAT / MAT / XAT / ATMA / GMAT" },
                                            { param: "Location", details: "Wadki, Hadapsar, Pune" },
                                            { param: "2024–25 MBA HR Placement Rate", details: "90%" },
                                            { param: "Highest Package (2023)", details: "₹17.50 LPA" },
                                            { param: "MBA Fee (2 Years)", details: "₹4.6 Lakhs – ₹5.3 Lakhs" },
                                        ].map((row, i, arr) => (
                                            <tr key={row.param} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                                <td style={{ padding: "0.9rem 0.5rem 0.9rem 0", fontSize: "0.775rem", fontWeight: 800, color: "#1d4ed8", verticalAlign: "top", width: "42%" }}>
                                                    {row.param}
                                                </td>
                                                <td style={{ padding: "0.9rem 0", fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>
                                                    {row.details}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Eligibility - Admission Criteria */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ backgroundColor: "#0f172a", padding: "1.75rem" }}>
                                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1rem" }}>📋</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.4rem" }}>MBA HR Eligibility in Pune – Admission Criteria at ISMR</h3>
                                <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>What you need to qualify, and how the selection process works.</p>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem" }}>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <tbody>
                                        {[
                                            { criterion: "Academic Requirement", details: "Graduation from any UGC-recognised university in any stream — arts, science, commerce, or engineering. No prior HR or management background is required to apply." },
                                            { criterion: "Minimum Marks", details: "50% aggregate in graduation. Reserved category candidates (SC/ST/OBC) are eligible at 45%, as per SPPU norms." },
                                            { criterion: "Entrance Exam Requirement", details: "A valid score in any one of the following: MAH-MBA CET, CAT, CMAT, MAT, XAT, ATMA, or GMAT." },
                                            { criterion: "Selection Process", details: "Shortlisted candidates complete a telephonic or video call interview conducted by ISMR's admissions team. The interview evaluates communication clarity and career intent — skills that are relevant to an HR career from day one." },
                                        ].map((row, i, arr) => (
                                            <tr key={row.criterion} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                                <td style={{ padding: "0.9rem 0.5rem 0.9rem 0", fontSize: "0.775rem", fontWeight: 800, color: "#1d4ed8", verticalAlign: "top", width: "42%" }}>
                                                    {row.criterion}
                                                </td>
                                                <td style={{ padding: "0.9rem 0", fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>
                                                    {row.details}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD PURSUE ── */}
            <section id="curriculum" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Fees & Financing
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                        MBA HR Course Fees in Pune<br />– What You Pay at ISMR
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 640 }}>
                        A clear breakdown of tuition, hostel costs, and loan support for the MBA HR program at ISMR Pune.
                    </p>

                    {/* Fee Overview Card */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "3rem" }}>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Total 2-Year MBA HR Fees Range at ISMR</p>
                        <p style={{ color: "#ffffff", fontSize: "1.6rem", fontWeight: 900, lineHeight: 1.3, marginBottom: "0.75rem" }}>
                            ₹4.6 Lakhs – ₹5.3 Lakhs
                        </p>
                        <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            The fee is paid across four semesters. Students can also choose from ISMR's MBA Global or MBA Advanced variants, which carry different fee structures.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
                        {/* Education Loan Partners */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "1.5rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>Education Loan Partners</p>
                            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, marginBottom: "0.9rem" }}>
                                ISMR has formal tie-ups with the following lenders for education loan assistance:
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {["InVCred", "Avanse", "Auxilo", "Credila", "Axis Bank"].map((lender, i) => (
                                    <span key={i} style={{ fontSize: 13, fontWeight: 700, color: "#1d4ed8", background: "#eff6ff", borderRadius: 6, padding: "5px 11px" }}>
                                        {lender}
                                    </span>
                                ))}
                            </div>
                            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginTop: "0.9rem" }}>
                                The admissions team provides loan documentation support directly.
                            </p>
                        </div>

                        {/* Hostel Fee */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "1.5rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>Hostel Fee</p>
                            <p style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0891b2", marginBottom: "0.4rem" }}>₹1.1 Lakhs / year</p>
                            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>
                                On-campus hostel with separate facilities for girls and boys. The hostel fee includes food.
                            </p>
                        </div>
                    </div>

                    {/* Semester-Wise Curriculum */}
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Curriculum
                    </span>
                    <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 900, marginTop: "0.5rem", marginBottom: "0.75rem", color: "#0f172a" }}>
                        Semester-Wise MBA HR Curriculum at ISMR
                    </h2>
                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 700 }}>
                        Subjects are as per the SPPU MBA curriculum. Confirm the current semester structure with the admissions office.
                    </p>

                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "0.5rem", marginBottom: "3.5rem", overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Semester</th>
                                    <th style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Subjects</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { sem: "Semester 1", subjects: "Principles of Management, Business Economics, Organizational Behaviour, Financial Accounting & Control, Marketing Management, Business Communication & Soft Skills" },
                                    { sem: "Semester 2", subjects: "Human Resource Management, Industrial Relations & Labour Laws, Research Methodology, Operations Management, Management Information Systems, Business Ethics & Corporate Governance" },
                                    { sem: "Semester 3", subjects: "Talent Acquisition & Recruitment, Compensation & Benefits Management, Learning & Development, Performance Management Systems, HR Analytics, Organisational Behaviour (Advanced)" },
                                    { sem: "Semester 4", subjects: "Strategic Human Resource Management, Organisational Development & Change Management, International HRM, Project Dissertation" },
                                ].map((row, i) => (
                                    <tr key={row.sem} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)" }}>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, fontWeight: 800, color: "#67e8f9", verticalAlign: "top", whiteSpace: "nowrap" }}>{row.sem}</td>
                                        <td style={{ padding: "0.9rem 1.25rem", fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>{row.subjects}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Value-Added Certification Courses */}
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Included in Program
                    </span>
                    <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 900, marginTop: "0.5rem", marginBottom: "0.75rem", color: "#0f172a" }}>
                        Value-Added Certification Courses
                    </h2>
                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 760 }}>
                        Beyond the MBA curriculum, ISMR students complete certification courses that directly map to HR technology and operations.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
                        <div style={{ backgroundColor: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem" }}>
                            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>Certifications Included</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                                {[
                                    "Digital Marketing",
                                    "Business Analytics",
                                    "Advanced Excel (relevant for HR data, payroll, workforce analytics)",
                                    "Entrepreneurship Management",
                                    "Negotiation Skills",
                                    "Investment Banking & Hedge Funds",
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2563eb", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
                                        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "1.5rem", display: "flex", alignItems: "center" }}>
                            <p style={{ fontSize: 14, color: "#1d4ed8", fontWeight: 600, lineHeight: 1.65, margin: 0 }}>
                                📌 For HR students specifically, Business Analytics and Advanced Excel certifications build the quantitative HR skills — workforce planning, attrition analysis, compensation benchmarking — that large recruiters test during interviews.
                            </p>
                        </div>
                    </div>

                    {/* What the MBA HR Program Actually Builds */}
                    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
                        Program Outcomes
                    </span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", marginBottom: "2rem", color: "#0f172a" }}>
                        What the MBA HR Program Actually Builds
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { icon: "🧩", title: "Talent Acquisition in Real Hiring Environments", desc: "Students learn end-to-end recruitment — job description writing, sourcing, ATS-based screening, structured interview design, and offer closure. By the time of final placement interviews, this is applied experience, not textbook knowledge." },
                            { icon: "💵", title: "Compensation, Payroll, and HR Operations", desc: "CTC structuring, PF, ESIC, and payroll compliance are taught at an operational level. These are the first responsibilities most HR executives handle on the job." },
                            { icon: "⚖️", title: "Labour Laws and Compliance — India-Specific", desc: "The program covers the Industrial Disputes Act, Factories Act, Contract Labour Act, Shops & Establishments Act, and modern updates relevant to Indian HR professionals. Companies like HDFC Bank and Aditya Birla Group — both of which recruit from ISMR — operate at significant regulatory scale and expect working compliance knowledge from HR hires." },
                            { icon: "📐", title: "Performance Management and KPI Design", desc: "Appraisal cycle design, KPI framework building, bell-curve calibration, and 360-degree feedback systems are part of the curriculum — areas frequently tested in HR generalist and HRBP interviews at consulting and IT services firms." },
                            { icon: "🧠", title: "Strategic HR and People Analytics", desc: "Final-year exposure to HR as a business function — workforce planning, DEI metrics, HR technology adoption — prepares students for growth beyond the executive level." },
                        ].map((p, i) => (
                            <div key={i} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <span style={{ fontSize: 20 }}>{p.icon}</span>
                                    </div>
                                    <p style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>{p.title}</p>
                                </div>
                                <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
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
                            Placement Infrastructure
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            How ISMR's 'Success Cell' Drives MBA HR Placements in Pune
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            Most placement cells at MBA HR colleges function as a noticeboard — they inform students when a company is coming to campus. ISMR's placement infrastructure is structured differently.
                        </p>
                    </div>

                    {/* Success Cell Functions */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", marginBottom: "3.5rem" }}>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                            The Success Cell operates as a Corporate Relations Department (CRD) with three distinct functions:
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.25rem" }}>
                            {[
                                { step: "1", title: "Pre-Placement Training", desc: "Communication, HR situational interviews, case-based problem solving, and role-specific mock interviews run continuously from Semester 1. Students are not introduced to interview preparation in the final month." },
                                { step: "2", title: "Summer Internship Coordination", desc: "The CRD matches students with companies for internships during the program. Students from the MBA HR batch have interned with companies like Infosys, HDFC Bank, Aditya Birla Sunlife Insurance, IDFC First Bank, and Bajaj Finserv. A completed internship in a company that later recruits from campus is a practical advantage." },
                                { step: "3", title: "Final Placement Drives", desc: "Recruiters are mapped to student profiles before the drive — not assigned randomly on the day. The HR-specific 2024–25 batch achieved a 90% placement rate under this model." },
                            ].map((item, i, arr) => (
                                <div key={item.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: i < arr.length - 1 ? "1.25rem" : 0, borderBottom: i < arr.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                                    <span style={{ fontSize: 13, fontWeight: 800, color: "#1d4ed8", background: "#eff6ff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        {item.step}
                                    </span>
                                    <div>
                                        <p style={{ fontSize: 14.5, fontWeight: 800, color: "#0f172a", marginBottom: "0.3rem" }}>{item.title}</p>
                                        <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placement Data Header */}
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 900, color: "#0f172a", marginBottom: "0.5rem" }}>
                            MBA HR Placements in Pune – ISMR 2024–25 Data
                        </h2>
                    </div>

                    {/* Snapshot Table */}
                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.75rem", marginBottom: "1.25rem" }}>
                        <p style={{ color: "#67e8f9", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                            HR Batch Placement Snapshot
                        </p>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                {[
                                    { label: "MBA HR Placement Rate 2024–25", value: "90%" },
                                    { label: "Overall Institute Placement Rate 2024–25", value: "92%" },
                                    { label: "Highest Package (Institute, 2023)", value: "₹17.50 LPA" },
                                    { label: "Placement Cell", value: "Success Cell (CRD)" },
                                    { label: "Award", value: "National Excellence Award for Campus Placement in Maharashtra — Integrated Chambers of Commerce and Industry" },
                                ].map((row, i, arr) => (
                                    <tr key={row.label} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)" }}>
                                        <td style={{ padding: "0.75rem 0.5rem 0.75rem 0", fontSize: 13.5, fontWeight: 700, color: "#e2e8f0", verticalAlign: "top", width: "45%" }}>{row.label}</td>
                                        <td style={{ padding: "0.75rem 0", fontSize: 13.5, color: "#67e8f9", textAlign: "right", fontWeight: 800, verticalAlign: "top" }}>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* HR Roles Offered by Recruiters */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem", marginBottom: "1.25rem" }}>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                            HR Roles Offered by Recruiters
                        </p>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                {[
                                    { recruiter: "Deloitte, EY, PwC, KPMG", roles: "HR Analyst, Talent Acquisition Analyst, People Advisory Associate" },
                                    { recruiter: "Infosys, TCS, Wipro, Accenture, Cognizant, Capgemini, HCL", roles: "HR Executive, Campus Recruiter, HR Operations, HRBP (entry)" },
                                    { recruiter: "Tech Mahindra", roles: "HR Coordinator, Talent Acquisition" },
                                    { recruiter: "ICICI Bank, HDFC Bank", roles: "HR Operations Executive, Recruitment Executive, Compensation & Benefits" },
                                    { recruiter: "Aditya Birla Group", roles: "HR Management Trainee, HRBP, Talent Acquisition" },
                                ].map((row, i, arr) => (
                                    <tr key={row.recruiter} style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #e2e8f0" }}>
                                        <td style={{ padding: "0.9rem 0.75rem 0.9rem 0", fontSize: 13, fontWeight: 700, color: "#0f172a", verticalAlign: "top", width: "42%", lineHeight: 1.6 }}>{row.recruiter}</td>
                                        <td style={{ padding: "0.9rem 0", fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{row.roles}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Salary Range */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.75rem" }}>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                            HR Salary Range After MBA HR at ISMR
                        </p>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: "0 0.75rem 0.6rem 0", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Role</th>
                                    <th style={{ padding: "0 0.75rem 0.6rem 0", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Experience</th>
                                    <th style={{ padding: "0 0 0.6rem 0", textAlign: "right", fontSize: 11.5, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Salary Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { role: "HR Executive", exp: "0–2 years", salary: "₹3.0 – 4.5 LPA" },
                                    { role: "Recruiter / Talent Acquisition", exp: "0–2 years", salary: "₹3.5 – 5.5 LPA" },
                                    { role: "HR Analyst (Big 4 / Consulting)", exp: "0–2 years", salary: "₹5.0 – 8.0 LPA" },
                                    { role: "HR Generalist", exp: "3–5 years", salary: "₹5.0 – 9.0 LPA" },
                                    { role: "HR Business Partner", exp: "5+ years", salary: "₹9.0 – 18.0 LPA" },
                                ].map((row, i, arr) => (
                                    <tr key={row.role} style={{ borderTop: i === 0 ? "none" : "1px solid #e2e8f0" }}>
                                        <td style={{ padding: "0.75rem 0.75rem 0.75rem 0", fontSize: 13.5, fontWeight: 700, color: "#0f172a" }}>{row.role}</td>
                                        <td style={{ padding: "0.75rem 0.75rem 0.75rem 0", fontSize: 13, color: "#64748b" }}>{row.exp}</td>
                                        <td style={{ padding: "0.75rem 0", fontSize: 13.5, color: "#0891b2", textAlign: "right", fontWeight: 800 }}>{row.salary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>


            {/* ── ADMISSION PROCESS + CAREER OPPORTUNITIES ── */}

            {/* ADMISSION PROCESS */}
            <section id="admissions" style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Location
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            ISMR Location – MBA HR College in Hadapsar, Pune
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 700, margin: "0 auto" }}>
                            ISMR B-School is located in Wadki, Hadapsar, Pune — on the Pune–Solapur Road corridor in eastern Pune. This positions the institute within direct reach of the region's major corporate and industrial employment zones.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                        {[
                            { icon: "🏙️", title: "Kharadi IT Park", desc: "One of Pune's largest IT employment zones, housing Infosys, Cognizant, and Capgemini operations that actively recruit HR professionals." },
                            { icon: "🏢", title: "Magarpatta City", desc: "A self-contained township with a large corporate zone employing thousands of professionals across IT and ITES." },
                            { icon: "⚙️", title: "Hadapsar MIDC", desc: "Manufacturing and industrial units requiring HR operations and compliance professionals." },
                            { icon: "✈️", title: "Viman Nagar & Lohegaon Corridor", desc: "Home to aviation, logistics, and services firms." },
                        ].map((p, i) => (
                            <div key={i} style={{ background: "#f8fafc", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <span style={{ fontSize: 20 }}>{p.icon}</span>
                                    </div>
                                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>{p.title}</p>
                                </div>
                                <hr style={{ border: "none", borderTop: "0.5px solid #e2e8f0", margin: 0 }} />
                                <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: "#eff6ff", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "3.5rem", border: "1px solid #bfdbfe" }}>
                        <p style={{ fontSize: 14, color: "#1d4ed8", fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
                            📌 For students commuting from Solapur Road, Kondhwa, Katraj, Undri, Wanowrie, and the Pune–Solapur highway belt, ISMR is the most accessible full-time MBA HR college in this zone of Pune.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 900, color: "#0f172a", marginBottom: "0.5rem" }}>
                            What Makes ISMR One of the Best MBA HR Colleges in Pune
                        </h2>
                        <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            This is not a self-assessment. It is a comparison against what the segment actually offers.
                        </p>
                    </div>

                    <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "1.5rem" }}>
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: "0.6rem 1rem 0.6rem 0", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Parameter</th>
                                        <th style={{ padding: "0.6rem 1rem", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>What the segment typically offers</th>
                                        <th style={{ padding: "0.6rem 0", textAlign: "left", fontSize: 13, fontWeight: 800, color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.06em" }}>What ISMR delivers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { param: "Accreditation", segment: "AICTE + SPPU", ismr: "AICTE + SPPU + NAAC B++" },
                                        { param: "Placement cell", segment: "Single placement officer, final semester", ismr: "Dedicated Success Cell with CRD, running all year" },
                                        { param: "HR recruiter profile", segment: "Local SMEs, staffing firms, mid-tier IT", ismr: "Deloitte, EY, PwC, KPMG, TCS, Infosys, HDFC Bank" },
                                        { param: "Internship", segment: "Optional, self-arranged", ismr: "CRD-coordinated, part of the program" },
                                        { param: "Value-add certifications", segment: "None or a single course", ismr: "6 certifications, including HR-relevant Analytics and Excel" },
                                        { param: "International exposure", segment: "None", ismr: "Industrial visit to Dubai & South East Asia" },
                                        { param: "Recognition", segment: "Not ranked", ismr: "20th – Beyond IIM Top 100 B-School Survey" },
                                    ].map((row, i) => (
                                        <tr key={row.param} style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                                            <td style={{ padding: "0.8rem 1rem 0.8rem 0", fontSize: 13.5, fontWeight: 700, color: "#e2e8f0", verticalAlign: "top" }}>{row.param}</td>
                                            <td style={{ padding: "0.8rem 1rem", fontSize: 13, color: "#94a3b8", verticalAlign: "top", lineHeight: 1.55 }}>{row.segment}</td>
                                            <td style={{ padding: "0.8rem 0", fontSize: 13, color: "#67e8f9", fontWeight: 700, verticalAlign: "top", lineHeight: 1.55 }}>{row.ismr}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, maxWidth: 760 }}>
                        ISMR also holds the National Excellence Award for Campus Placement in Maharashtra, awarded by the Integrated Chambers of Commerce and Industry, and has been recognised as a Top 10 College and Institute in Maharashtra by Higher Education Digest.
                    </p>

                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section id="careers" style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ display: "inline-block", fontSize: 13, fontWeight: 500, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Admissions 2026
                        </span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>
                            MBA HR Admission 2026 at ISMR – Step-by-Step Process
                        </h2>
                        <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
                            Five stages from application to provisional admission.
                        </p>
                    </div>

                    {/* Step-by-Step Process */}
                    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: "2rem", marginBottom: "2.5rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                            {[
                                { step: "1", title: "Apply Online or Offline", desc: "Apply at ismrpune.edu.in. The application form can also be collected from the ISMR campus at Wadki, Hadapsar. Application fee: ₹1,000 (non-refundable)." },
                                { step: "2", title: "Entrance Score Submission", desc: "Submit your MAH-MBA CET, CAT, CMAT, MAT, XAT, ATMA, or GMAT scorecard. ISMR accepts all major management entrance exam scores." },
                                { step: "3", title: "Telephonic or Video Interview", desc: "Shortlisted candidates complete a brief interview with the admissions team. The process evaluates career intent and communication — not academic history alone." },
                                { step: "4", title: "Seat Confirmation", desc: "Admitted candidates receive a letter by email. Seat confirmation requires a payment of ₹30,000 within four working days. Seats are confirmed in order of payment completion — delayed confirmation results in seat cancellation even after selection." },
                                { step: "5", title: "Document Verification and Provisional Admission", desc: "Final admission is subject to document verification. Provisional admission is granted immediately after seat confirmation." },
                            ].map((item, i, arr) => (
                                <div key={item.step} style={{ display: "flex", gap: "1.1rem", alignItems: "flex-start", paddingBottom: i < arr.length - 1 ? "1.4rem" : 0, borderBottom: i < arr.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                                    <span style={{ fontSize: 14, fontWeight: 800, color: "#fff", background: "#2563eb", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        {item.step}
                                    </span>
                                    <div>
                                        <p style={{ fontSize: 15, fontWeight: 800, color: "#0f172a", marginBottom: "0.35rem" }}>{item.title}</p>
                                        <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
                        <p style={{ fontSize: 15, fontWeight: 800, color: "#1d4ed8", marginBottom: "0.9rem" }}>Documents Required</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                            {[
                                "Graduation certificates and mark sheets",
                                "Class 10 and 12 certificates",
                                "Entrance exam scorecard",
                                "Caste certificate (if applicable)",
                                "Migration certificate",
                                "Passport-size photographs",
                            ].map((doc, i) => (
                                <span key={i} style={{ fontSize: 13, fontWeight: 600, color: "#1d4ed8", background: "#fff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "0.5rem 0.9rem" }}>
                                    {doc}
                                </span>
                            ))}
                        </div>
                        <p style={{ fontSize: 13.5, color: "#1e3a5f", lineHeight: 1.7, margin: "1rem 0 0" }}>
                            Seats are limited and fill by confirmation order. Apply early for MBA HR Admission 2026.
                        </p>
                    </div>

                    {/* CTA */}
                    <div style={{ background: "#0f172a", borderRadius: 12, padding: "2.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                        <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 900, color: "#fff", margin: 0, maxWidth: 620 }}>
                            Take the Next Step — MBA HR Admission 2026 at ISMR Pune
                        </h3>
                        <p style={{ fontSize: 14.5, color: "#94a3b8", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Applications for MBA HR Admission 2026 at ISMR Pune are open. Seats are limited — ISMR runs a focused cohort model.
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