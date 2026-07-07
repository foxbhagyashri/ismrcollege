import { useState } from "react";

const NAV_LINKS = ["Program", "Curriculum", "Eligibility", "Careers", "Admissions", "FAQs"];

const OUTCOMES = [
    {
        icon: "🎓",
        title: "SPPU & NEP 2020 Curriculum",
        desc: "The MBA in Marketing Management in Pune at ISMR follows the syllabus prescribed by Savitribai Phule Pune University and is structured under the National Education Policy 2020 with a credit-based system."
    },
    {
        icon: "🤝",
        title: "Academic & Practical Learning",
        desc: "It combines academic learning with practical exposure to prepare students for real marketing roles."
    },

];
const SUBJECTS = [
    { title: "Consumer Behaviour & Branding", desc: "Deep-dive into buyer psychology, brand positioning, perception management, and customer loyalty strategies." },
    { title: "Digital Marketing", desc: "SEO, SEM, social media strategy, content marketing, and data-driven performance campaigns." },
    { title: "Market Research & Business Analytics", desc: "Field research, data collection, statistical analysis, and competitor intelligence techniques." },
    { title: "Sales & Distribution Management", desc: "Revenue generation models, channel strategy, client acquisition, and sales team leadership." },
    { title: "Campaign Planning & Execution", desc: "End-to-end live marketing campaigns from ideation through execution and ROI measurement." },
];

const WHO_PROFILES = [
    { label: "Fresh Graduates", icon: "🎯", desc: "No prior experience required. From commerce, arts, science, or engineering — ISMR bridges the gap to your first marketing role." },
    { label: "Aspiring Brand Managers", icon: "🏷️", desc: "Build skills in brand strategy, positioning, and campaign management to fast-track into brand leadership roles." },
    { label: "Digital Marketing Enthusiasts", icon: "📱", desc: "Turn your passion for social media and online content into a structured career in performance and digital marketing." },
    { label: "Sales-Oriented Professionals", icon: "💼", desc: "Already in sales? Gain strategic credentials in branding and market research to break into managerial tracks." },
    { label: "Entrepreneurs", icon: "💡", desc: "Build marketing funnels, understand consumer behaviour, and run cost-effective campaigns for your own venture." },
];

const CAREERS = [
    { role: "Digital Marketing Executive", responsibility: "Handle SEO, paid ads, social media campaigns, and performance tracking.", growth: "₹3–6 LPA → Performance Marketing Manager → Digital Head" },
    { role: "Sales Manager", responsibility: "Focus on revenue generation, client acquisition, and managing sales teams.", growth: "₹4–7 LPA + incentives → Regional Manager → Business Head" },
    { role: "Brand Manager", responsibility: "Work on brand positioning, campaign planning, and customer perception.", growth: "₹5–8 LPA → Senior Brand Manager → Marketing Director" },
    { role: "Market Research Analyst", responsibility: "Analyze customer data, market trends, and competitor strategies.", growth: "₹3–6 LPA → Senior Analyst → Strategy Consultant" },
    { role: "Product Marketing Executive", responsibility: "Work on product positioning, go-to-market strategies, and launches.", growth: "₹4–7 LPA → Product Marketing Manager → Product Head" },
    { role: "Social Media Manager", responsibility: "Manage brand presence, content strategy, and audience engagement.", growth: "₹3–5 LPA → Social Media Lead → Digital Marketing Manager" },
];

const COMPARISON = [
    { parameter: "Learning Approach", others: "Theory-heavy curriculum", ismr: "Execution-based — live campaigns, real assignments" },
    { parameter: "Internship Structure", others: "End-of-program, often unstructured", ismr: "Integrated into the curriculum from early semesters" },
    { parameter: "Geographic Career Exposure", others: "Primarily Pune-city opportunities", ismr: "Dual exposure — Pune startup ecosystem & established industry" },
    { parameter: "University Affiliation", others: "Varies — autonomous or affiliated", ismr: "SPPU-affiliated, NEP 2020 compliant, AICTE approved" },
    { parameter: "Marketing Placement Rate", others: "Not publicly disclosed by most colleges", ismr: "92% — 2024–25 batch, highest among all ISMR specialisations" },
];

const STEPS = [
    { step: "01", title: "Profile Evaluation", desc: "ISMR reviews your academic background, entrance exam score, and career goals to confirm eligibility and align expectations." },
    { step: "02", title: "Eligibility-Based Selection", desc: "Admission is based on alignment between your profile and the program — ensuring students enter with clear goals." },
    { step: "03", title: "Application & Documentation", desc: "ISMR's team guides you through every document and form to make your MBA Marketing Admission 2026 complete and error-free." },
    { step: "04", title: "Seat Confirmation", desc: "Admission is confirmed via eligibility verification, interaction (if applicable), and fee submission. Intake is limited." },
];

const FAQS = [
    { q: "What is an MBA in Marketing Management at ISMR?", a: "A two-year SPPU-affiliated postgraduate program focused on real-world marketing skills — including branding, digital marketing, sales, and consumer behaviour — with an integrated internship and live campaign exposure." },
    { q: "Who can apply?", a: "Any graduate in any stream from a recognised university with a minimum of 50% marks (45% for reserved categories) and valid scores in MAH-MBA CET, CAT, MAT, CMAT, ATMA, or XAT." },
    { q: "What is the placement rate for MBA Marketing at ISMR?", a: "92% of the 2024–25 MBA Marketing batch were placed — the highest placement rate across all ISMR specialisations. Graduates secured roles in branding, digital marketing, sales, and B2B marketing." },
    { q: "Which companies recruit MBA Marketing graduates from ISMR?", a: "Top recruiters include HUL, ITC, Nestlé, Dabur, P&G, Godrej Consumer Products, Amazon, Flipkart, Reliance Retail, Coca-Cola India, PepsiCo, and Asian Paints." },
    { q: "Is ISMR AICTE-approved?", a: "Yes. ISMR is AICTE approved, DTE Maharashtra recognised, and affiliated with Savitribai Phule Pune University (SPPU), compliant with NEP 2020." },
    { q: "Are MBA Marketing course fees worth it at ISMR?", a: "ISMR focuses on ROI-driven education — with a 92% placement rate, integrated internships, and skill-based training, the investment is structured to lead to real employability, not just degree completion." },
];

const WHY = [
    { icon: "🏛️", title: "AICTE & SPPU Credibility", desc: "Formally approved by AICTE and DTE, affiliated with Savitribai Phule Pune University, NEP 2020 compliant." },
    { icon: "📣", title: "Execution-Based Learning", desc: "Live campaigns, real assignments, and internship-integrated curriculum — not theory-heavy classroom instruction." },
    { icon: "🤝", title: "92% Placement Rate", desc: "Highest placement rate across all ISMR specialisations for the 2024–25 batch — real roles, real companies." },
    { icon: "👩‍🏫", title: "Industry-Aligned Faculty", desc: "Management scholars combined with visiting marketing leaders from FMCG, retail, and digital sectors." },
    { icon: "📍", title: "Dual Market Exposure", desc: "Access to Pune's startup ecosystem and established FMCG, retail, and B2B industries for internships and placements." },
    { icon: "💰", title: "ROI-Focused Education", desc: "Every element of the program is structured around your employability and career growth — not just degree completion." },
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

    // COMPARISON TABLE
    comparisonSection: {
        padding: "5rem 0",
        backgroundColor: "#0f172a",
        color: "#ffffff",
    },
    comparisonEyebrow: {
        color: "#67e8f9",
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
    },
    comparisonH2: {
        fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
        fontWeight: 900,
        marginTop: "0.5rem",
        color: "#ffffff",
    },
    comparisonSubtitle: {
        color: "#94a3b8",
        marginTop: "0.75rem",
        maxWidth: "36rem",
        margin: "0.75rem auto 0",
        fontSize: "0.95rem",
        lineHeight: 1.6,
    },
    comparisonTableWrapper: {
        overflowX: "auto",
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.1)",
        marginTop: "2.5rem",
    },
    comparisonTable: {
        width: "100%",
        fontSize: "0.875rem",
        borderCollapse: "collapse",
    },
    comparisonThead: {
        backgroundColor: "rgba(255,255,255,0.05)",
    },
    comparisonThParam: {
        textAlign: "left",
        padding: "1rem 1.5rem",
        fontWeight: 700,
        color: "#94a3b8",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        width: "28%",
    },
    comparisonThOthers: {
        textAlign: "left",
        padding: "1rem 1.5rem",
        fontWeight: 700,
        color: "#94a3b8",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        width: "36%",
    },
    comparisonThIsmr: {
        textAlign: "left",
        padding: "1rem 1.5rem",
        fontWeight: 700,
        color: "#22d3ee",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        width: "36%",
    },
    comparisonTrEven: {
        backgroundColor: "rgba(255,255,255,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
    },
    comparisonTrOdd: {
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(255,255,255,0.06)",
    },
    comparisonTdParam: {
        padding: "1.1rem 1.5rem",
        fontWeight: 700,
        color: "#e2e8f0",
        fontSize: "0.875rem",
        verticalAlign: "top",
    },
    comparisonTdOthers: {
        padding: "1.1rem 1.5rem",
        color: "#64748b",
        fontSize: "0.875rem",
        verticalAlign: "top",
        lineHeight: 1.5,
    },
    comparisonTdIsmr: {
        padding: "1.1rem 1.5rem",
        color: "#67e8f9",
        fontWeight: 600,
        fontSize: "0.875rem",
        verticalAlign: "top",
        lineHeight: 1.5,
    },
    comparisonFootnote: {
        marginTop: "2rem",
        padding: "1.25rem 1.5rem",
        backgroundColor: "rgba(34,211,238,0.08)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: "0.75rem",
        color: "#cbd5e1",
        fontSize: "0.875rem",
        lineHeight: 1.7,
        textAlign: "center",
    },
    comparisonFootnoteHighlight: {
        color: "#22d3ee",
        fontWeight: 700,
    },

    // COMPARISON TABLE
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

export default function ISMRMarketingLanding() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div style={styles.page}>
            {/* ── HERO ── */}
            <section id="program" style={styles.hero}>
                <div style={styles.heroBgGrid} />
                <div style={styles.heroInner}>
                    <div style={styles.heroContent}>
                        <span style={styles.heroBadge}>SPPU Affiliated · AICTE Approved · NEP 2020</span>
                        <h1 style={styles.heroH1}>
                            MBA in Marketing Management in Pune at ISMR – Admission 2026,  <br />
                            <span style={styles.heroGradientText}>Fees, Syllabus & Placements</span>
                        </h1>
                        <p style={styles.heroSubtitle}>
                            Build a Job-Ready Marketing Career with Practical Industry Exposure

                        </p>
                        <p style={styles.heroSubtitle}>
                            This MBA program at ISMR focuses on real-world marketing skills through hands-on learning, not just classroom theory.

                        </p>
                        <p style={styles.heroSubtitle}>
                            <ul>
                                <li>Internships integrated into the curriculum
                                </li>
                                <li>Live campaign execution
                                </li>
                                <li>Industry-aligned training modules
                                </li>
                            </ul>
                        </p>
                        <p style={styles.heroSubtitle}>
                            Ideal for students planning MBA Marketing admission in Pune for 2026 and looking for better ROI.

                        </p>

                        <div style={styles.heroCtas}>
                            <a href="#admissions" style={styles.ctaPrimary}>Apply for 2026 →</a>
                            <a href="#curriculum" style={styles.ctaSecondary}>Explore Curriculum</a>
                        </div>
                        <div style={styles.statsGrid}>
                            {[
                                { val: "2 Years", label: "Full-Time Program" },
                                { val: "92%", label: "Placement Rate 2024–25" },
                                { val: "₹3–8 LPA", label: "Starting Package Range" },
                                { val: "100%", label: "Execution-Based Learning" },
                            ].map(s => (
                                <div key={s.label} style={styles.statCard}>
                                    <p style={styles.statVal}>{s.val}</p>
                                    <p style={styles.statLabel}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <svg style={{ position: "absolute", bottom: 0, width: "100%", display: "block" }} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 60L1440 60L1440 0C1200 50 960 60 720 40C480 20 240 0 0 20L0 60Z" fill="white" />
                </svg>
            </section>

            {/* ── WHY ISMR OVER OTHERS ── */}
            <section style={styles.comparisonSection}>
                <div style={styles.container}>
                    <div style={{ ...styles.sectionHeader }}>
                        <span style={styles.comparisonEyebrow}>ISMR vs Other Colleges</span>
                        <h2 style={styles.comparisonH2}>Why Students Choose ISMR Over<br />Other MBA Marketing Colleges in Pune</h2>
                        <p style={styles.comparisonSubtitle}>
                            Pune has over 100 colleges offering an MBA with a marketing specialisation. The difference between them is not always visible in a brochure — it shows up in how the program is structured and what students are doing before final placements.
                        </p>
                    </div>
                    <div style={styles.comparisonTableWrapper}>
                        <table style={styles.comparisonTable}>
                            <thead style={styles.comparisonThead}>
                                <tr>
                                    <th style={styles.comparisonThParam}>Parameter</th>
                                    <th style={styles.comparisonThOthers}>Most Pune MBA Colleges</th>
                                    <th style={styles.comparisonThIsmr}>✦ ISMR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON.map((row, i) => (
                                    <tr key={i} style={i % 2 === 0 ? styles.comparisonTrEven : styles.comparisonTrOdd}>
                                        <td style={styles.comparisonTdParam}>{row.parameter}</td>
                                        <td style={styles.comparisonTdOthers}>{row.others}</td>
                                        <td style={styles.comparisonTdIsmr}>{row.ismr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={styles.comparisonFootnote}>
                        ISMR is among the <span style={styles.comparisonFootnoteHighlight}>Top MBA colleges in Pune</span> — a focused institute where marketing as a specialisation consistently outperforms other streams in placement outcomes, and where the program structure is built for students who want <span style={styles.comparisonFootnoteHighlight}>a job, not just a degree</span>.
                    </p>
                </div>
            </section>

            {/* ── PROGRAM OUTCOMES ── */}
            <section style={styles.sectionWhite}>
                <div style={styles.container}>
                    <div style={styles.sectionHeader}>

                        <h2 style={styles.sectionH2}>What is the MBA in Marketing Management in Pune at ISMR?</h2>
                    </div>

                    <div style={styles.outcomesGrid}>
                        {OUTCOMES.map((o, i) => (
                            <div key={i} style={styles.outcomeCard}>
                                <div style={styles.outcomeIcon}>{o.icon}</div>
                                <h3 style={styles.outcomeTitle}>{o.title}</h3>
                                <p style={styles.outcomeDesc}>{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── PROGRAM OVERVIEW ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Program Details</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Everything You Need to Know</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>

                        {/* Card 1 — Subjects */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", padding: "2rem", border: "1px solid #f1f5f9" }}>
                            <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>📚</div>
                            <h2 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0f172a", marginBottom: "0.5rem" }}>What subjects are covered in this MBA Marketing program in Pune?</h2>
                            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                                The program includes a mix of core business and marketing-focused subjects:

                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    { icon: "🎯", label: "MBA marketing subjects in Pune", desc: "consumer behaviour, branding, digital marketing" },
                                    { icon: "🔬", label: "Research components", desc: "field projects and business research" },
                                    { icon: "🏢", label: "Internship", desc: "Internship integrated into the curriculum" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", backgroundColor: "#ffffff", padding: "0.875rem", borderRadius: "0.75rem", border: "1px solid #e2e8f0" }}>
                                        <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                                        <div>
                                            <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "#0f172a" }}>{item.label}</p>
                                            <p style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.1rem" }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2 — Practical Learning */}
                        <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", borderRadius: "1.25rem", padding: "2rem", color: "#ffffff" }}>
                            <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>⚙️</div>
                            <h3 style={{ fontWeight: 900, fontSize: "1.1rem", marginBottom: "0.5rem" }}>How does ISMR provide practical learning in MBA Marketing?</h3>
                            <p style={{ color: "#bfdbfe", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                                The MBA Marketing program in Pune at ISMR focuses on hands-on learning through:
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    { icon: "📣", text: "Live marketing assignments" },
                                    { icon: "💡", text: "Case-based learning using real business scenarios" },
                                    { icon: "🚀", text: "Campaign planning and execution exposure" },
                                    { icon: "🏢", text: "Internship-based learning" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", backgroundColor: "rgba(255,255,255,0.12)", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                                        <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                                        <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: "#bfdbfe", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                                This ensures students develop job-ready marketing skills, not just theoretical knowledge.

                            </p>
                        </div>

                        {/* Card 3 — Fees Worth It */}
                        <div style={{ backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "2rem", color: "#ffffff" }}>
                            <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>💰</div>
                            <h3 style={{ fontWeight: 900, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Are the MBA Marketing course fees in Pune worth it at ISMR?</h3>
                            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                                When evaluating MBA Marketing course fees in Pune, students should look beyond brand value and focus on outcomes:

                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                                {[
                                    { icon: "✅", label: "Placement Opportunities", desc: "92% placement rate, 2024–25 batch" },
                                    { icon: "✅", label: "Skill Development", desc: "Tools, analytics & campaign execution" },
                                    { icon: "✅", label: "Internship Exposure", desc: "Integrated from early semesters" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                                        <div>
                                            <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "#e2e8f0" }}>{item.label}</p>
                                            <p style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.1rem" }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ backgroundColor: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", borderRadius: "0.75rem", padding: "0.875rem 1rem" }}>
                                <p style={{ fontSize: "0.8rem", color: "#67e8f9", lineHeight: 1.6 }}>
                                    At ISMR, the focus is on ensuring your investment leads to <strong>real employability and career growth</strong> — not just degree completion.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── PLACEMENTS ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>2024–25 Placement Data</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Why ISMR Ranks Among the Top MBA Marketing Colleges in Pune for Placement Outcomes</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "40rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            A common concern students have is: <em>"Will I actually get placed after the MBA?"</em> The answer is yes.
                        </p>
                    </div>

                    {/* 92% Hero Stat */}
                    <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #172554 60%, #164e63 100%)", borderRadius: "1.5rem", padding: "2.5rem", marginBottom: "2rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.1rem", marginTop: "0.5rem" }}>The answer is yes.</p>
                            <p style={{ fontSize: "5rem", fontWeight: 900, color: "#22d3ee", lineHeight: 1 }}>92%</p>
                            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.1rem", marginTop: "0.5rem" }}>of MBA Marketing students from the 2024–25 batch were placed —</p>
                            <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginTop: "0.4rem", maxWidth: "32rem", lineHeight: 1.6 }}>
                                the highest placement rate across all MBA specialisations at ISMR. <br></br>This is not a blanket "placement assistance" claim. It reflects students securing roles in branding, sales, digital marketing, and B2B marketing across national-level companies.
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: "200px" }}>
                            {[
                                { icon: "🏷️", label: "Branding" },
                                { icon: "📈", label: "Sales" },
                                { icon: "💻", label: "Digital Marketing" },
                                { icon: "🤝", label: "B2B Marketing" },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.75rem", padding: "0.6rem 1rem" }}>
                                    <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                                    <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.875rem" }}>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>

                        {/* Where Graduates Get Placed */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #f1f5f9", overflow: "hidden" }}>
                            <div style={{ padding: "1.5rem 1.5rem 1rem", borderBottom: "1px solid #f1f5f9" }}>
                                <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Top Recruiters</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0f172a", marginTop: "0.25rem" }}>Where MBA Marketing Graduates Get Placed</h3>
                            </div>
                            <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                                {[
                                    { category: "FMCG & Consumer Brands", icon: "🛒", color: "#dbeafe", textColor: "#1d4ed8", companies: "HUL, ITC, Nestlé India, Dabur, Marico, Britannia, P&G, Godrej Consumer Products, Tata Consumer Products" },
                                    { category: "Retail & E-commerce", icon: "📦", color: "#dcfce7", textColor: "#15803d", companies: "Reliance Retail, Amazon, Flipkart" },
                                    { category: "Beverages", icon: "🥤", color: "#fef9c3", textColor: "#a16207", companies: "Coca-Cola India, PepsiCo India" },
                                    { category: "Paints & Coatings", icon: "🎨", color: "#fce7f3", textColor: "#be185d", companies: "Asian Paints" },
                                ].map((row, i) => (
                                    <div key={i} style={{ padding: "1rem 0", borderBottom: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                                            <span style={{ fontSize: "0.95rem" }}>{row.icon}</span>
                                            <span style={{ display: "inline-block", backgroundColor: row.color, color: row.textColor, fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "9999px" }}>{row.category}</span>
                                        </div>
                                        <p style={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, paddingLeft: "1.6rem" }}>{row.companies}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How ISMR Strengthens Placements */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #f1f5f9", overflow: "hidden" }}>
                            <div style={{ padding: "1.5rem 1.5rem 1rem", borderBottom: "1px solid #f1f5f9" }}>
                                <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Placement Enablers</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0f172a", marginTop: "0.25rem" }}>How ISMR Strengthens Placement Outcomes</h3>
                            </div>
                            <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                                {[
                                    { icon: "🏢", focus: "Internship-Driven Learning", desc: "You gain hands-on experience before final placements, reducing the fresher gap." },
                                    { icon: "🛠️", focus: "Skill-Based Training", desc: "You learn skills aligned with real roles like digital marketing, sales, and branding." },
                                    { icon: "📅", focus: "Continuous Preparation", desc: "You are trained for interviews, communication, and job expectations throughout the program." },
                                    { icon: "🌐", focus: "Multi-Industry Exposure", desc: "You get access to opportunities across startups, agencies, and industrial sectors." },
                                ].map((row, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", padding: "1rem 0", borderBottom: i < 3 ? "1px solid #f1f5f9" : "none", alignItems: "flex-start" }}>
                                        <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.5rem", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{row.icon}</div>
                                        <div>
                                            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0f172a", marginBottom: "0.2rem" }}>{row.focus}</p>
                                            <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.5 }}>{row.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ROLES & SALARIES ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>After Your MBA</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>MBA Marketing Placements at ISMR — What Roles and Salaries to Expect</h2>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "42rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            After completing an MBA in Marketing, your career path depends on the roles you choose and the skills you build, not just the degree itself.

                        </p>
                        <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "42rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            Understanding what each role involves helps you make better career decisions.
                        </p>
                        <h3 style={{ fontSize: "clamp(1.2rem, 3.0vw, 2.0rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Key Roles You Can Explore</h3>
                    </div>

                    {/* Role Cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
                        {[
                            { icon: "💻", role: "Digital Marketing Executive", salary: "₹3–6 LPA", salaryColor: "#0891b2", salaryBg: "#cffafe", desc: "Handle SEO, paid ads, social media campaigns, and performance tracking.", growth: ["Performance Marketing Manager", "Digital Head"] },
                            { icon: "📈", role: "Sales Manager", salary: "₹4–7 LPA + incentives", salaryColor: "#15803d", salaryBg: "#dcfce7", desc: "Focus on revenue generation, client acquisition, and managing sales teams.", growth: ["Regional Manager", "Business Head"] },
                            { icon: "🏷️", role: "Brand Manager", salary: "₹5–8 LPA", salaryColor: "#7c3aed", salaryBg: "#ede9fe", desc: "Work on brand positioning, campaign planning, and customer perception.", growth: ["Senior Brand Manager", "Marketing Director"] },
                            { icon: "🔬", role: "Market Research Analyst", salary: "₹3–6 LPA", salaryColor: "#b45309", salaryBg: "#fef3c7", desc: "Analyze customer data, market trends, and competitor strategies.", growth: ["Senior Analyst", "Strategy Consultant"] },
                            { icon: "🚀", role: "Product Marketing Executive", salary: "₹4–7 LPA", salaryColor: "#be185d", salaryBg: "#fce7f3", desc: "Work on product positioning, go-to-market strategies, and launches.", growth: ["Product Marketing Manager", "Product Head"] },
                            { icon: "📱", role: "Social Media Manager", salary: "₹3–5 LPA", salaryColor: "#1d4ed8", salaryBg: "#dbeafe", desc: "Manage brand presence, content strategy, and audience engagement.", growth: ["Social Media Lead", "Digital Marketing Manager"] },
                        ].map((card, i) => (
                            <div key={i} style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

                                {/* Top row — icon + salary badge */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: card.salaryBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                                        {card.icon}
                                    </div>
                                    <span style={{ backgroundColor: card.salaryBg, color: card.salaryColor, fontSize: "0.75rem", fontWeight: 800, padding: "0.3rem 0.75rem", borderRadius: "9999px" }}>
                                        {card.salary}
                                    </span>
                                </div>

                                {/* Role title + description */}
                                <div>
                                    <h3 style={{ fontWeight: 900, fontSize: "1rem", color: "#0f172a", marginBottom: "0.4rem" }}>{card.role}</h3>
                                    <p style={{ color: "#64748b", fontSize: "0.825rem", lineHeight: 1.6 }}>{card.desc}</p>
                                </div>

                                {/* Career growth path */}
                                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
                                    <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>Career Growth</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
                                        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#475569", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", padding: "0.25rem 0.6rem", borderRadius: "0.4rem" }}>
                                            {card.role.split(" ")[0]} {card.role.split(" ")[1]}
                                        </span>
                                        {card.growth.map((step, j) => (
                                            <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                                <span style={{ color: "#cbd5e1", fontSize: "0.75rem" }}>→</span>
                                                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: card.salaryColor, backgroundColor: card.salaryBg, padding: "0.25rem 0.6rem", borderRadius: "0.4rem" }}>
                                                    {step}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Bottom note */}
                    <div style={{ marginTop: "2.5rem", backgroundColor: "#0f172a", borderRadius: "1.25rem", padding: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                            <p style={{ fontWeight: 900, fontSize: "1.05rem", color: "#ffffff", marginBottom: "0.4rem" }}>What Actually Determines Your Career Growth</p>
                            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "36rem" }}>
                                Internship experience, skill development, and industry exposure — focusing on these helps you move faster from entry-level roles to managerial and leadership positions.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            {["Internship Experience", "Skill Development", "Industry Exposure"].map((tag, i) => (
                                <span key={i} style={{ backgroundColor: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.25)", color: "#67e8f9", fontSize: "0.775rem", fontWeight: 700, padding: "0.4rem 0.9rem", borderRadius: "9999px" }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ── INDUSTRY OPPORTUNITIES & CAREER GROWTH ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>

                        {/* Industry Opportunities */}
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", border: "1px solid #e2e8f0", padding: "2rem" }}>
                            <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1.25rem" }}>🏙️</div>
                            <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Pune Job Market</span>
                            <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0f172a", margin: "0.4rem 0 1.25rem" }}>Industry Opportunities in Pune</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                {[
                                    { icon: "💻", color: "#cffafe", text: "Strong demand in IT companies, startups, and digital agencies" },
                                    { icon: "🛒", color: "#dcfce7", text: "Growing opportunities in FMCG, retail, and D2C brands" },
                                    { icon: "🏭", color: "#fef3c7", text: "Stable roles in the industrial and B2B sectors across Pune" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem", backgroundColor: "#f8fafc", borderRadius: "0.75rem", border: "1px solid #f1f5f9" }}>
                                        <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", backgroundColor: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{item.icon}</div>
                                        <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What Determines Career Growth */}
                        <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", borderRadius: "1.25rem", padding: "2rem", color: "#ffffff" }}>
                            <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "1.25rem" }}>🚀</div>
                            <span style={{ color: "#bfdbfe", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Growth Factors</span>
                            <h3 style={{ fontWeight: 900, fontSize: "1.1rem", margin: "0.4rem 0 0.5rem" }}>What Actually Determines Your Career Growth</h3>
                            <p style={{ color: "#bfdbfe", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Your career after an MBA in Marketing is influenced by:</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.5rem" }}>
                                {[
                                    { icon: "🏢", label: "Internship Experience", desc: "Practical exposure to real work environments" },
                                    { icon: "🛠️", label: "Skill Development", desc: "Tools, analytics, campaign execution" },
                                    { icon: "🌐", label: "Industry Exposure", desc: "Understanding different business models and markets" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.12)", padding: "0.875rem", borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                                        <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                                        <div>
                                            <p style={{ fontWeight: 700, fontSize: "0.875rem" }}>{item.label}</p>
                                            <p style={{ color: "#bfdbfe", fontSize: "0.8rem", marginTop: "0.15rem" }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: "#e0f2fe", fontSize: "0.825rem", lineHeight: 1.6, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1rem" }}>
                                Focusing on these factors helps you move faster from entry-level roles to <strong>managerial and leadership positions</strong>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ISMR ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#0f172a" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#67e8f9", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Is ISMR Right for You?</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#ffffff" }}>Who Should Choose ISMR?</h2>
                        <p style={{ color: "#94a3b8", marginTop: "0.75rem", maxWidth: "38rem", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            ISMR is ideal for students seeking a career-focused MBA with practical exposure, long-term growth, and strong ROI.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", alignItems: "start" }}>

                        {/* Ideal For */}
                        <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.25rem", padding: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                                <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.6rem", backgroundColor: "rgba(34,211,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>✅</div>
                                <h3 style={{ fontWeight: 900, fontSize: "1.05rem", color: "#ffffff" }}>ISMR is Ideal If…</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    "You want a career in marketing, not just an MBA degree",
                                    "You want to build a long-term career, not just secure a job",
                                    "You prefer practical exposure over theory-heavy learning",
                                    "You are targeting placements in Pune",
                                    "You are looking for ROI-focused education",
                                ].map((point, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.875rem", backgroundColor: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "0.75rem" }}>
                                        <span style={{ color: "#22d3ee", fontWeight: 900, fontSize: "1rem", flexShrink: 0, marginTop: "0.05rem" }}>→</span>
                                        <p style={{ color: "#e2e8f0", fontSize: "0.875rem", lineHeight: 1.5 }}>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Not Ideal For + CTA */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.25rem", padding: "1.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                    <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.6rem", backgroundColor: "rgba(248,113,113,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>⚠️</div>
                                    <h3 style={{ fontWeight: 900, fontSize: "1.05rem", color: "#ffffff" }}>Not Ideal If…</h3>
                                </div>
                                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.875rem", backgroundColor: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: "0.75rem" }}>
                                    <span style={{ color: "#f87171", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>✕</span>
                                    <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.5 }}>You only want a degree without focusing on outcomes</p>
                                </div>
                            </div>

                            <div style={{ background: "linear-gradient(135deg, #1d4ed8, #0891b2)", borderRadius: "1.25rem", padding: "2rem", textAlign: "center" }}>
                                <p style={{ fontWeight: 900, fontSize: "1.15rem", color: "#ffffff", marginBottom: "0.5rem" }}>Ready to Take the Next Step?</p>
                                <p style={{ color: "#bfdbfe", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>MBA Marketing Admission 2026 at ISMR is limited due to a fixed intake capacity. Speak with the admissions team today.</p>
                                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                                    <a href="tel:+91" style={{ backgroundColor: "#22d3ee", color: "#0f172a", fontWeight: 900, padding: "0.7rem 1.4rem", borderRadius: "0.75rem", fontSize: "0.875rem", textDecoration: "none", display: "inline-block" }}>📞 Call Us</a>
                                    <a href="mailto:admissions@ismr.ac.in" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", fontWeight: 700, padding: "0.7rem 1.4rem", borderRadius: "0.75rem", fontSize: "0.875rem", textDecoration: "none", display: "inline-block", border: "1px solid rgba(255,255,255,0.2)" }}>✉ Email Us</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ELIGIBILITY & ADMISSION PROCESS ── */}
            <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>MBA Marketing Admission 2026 Pune</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, marginTop: "0.5rem", color: "#0f172a" }}>Eligibility & Admission Process</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>

                        {/* Eligibility Table */}
                        <div style={{ backgroundColor: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                            <div style={{ padding: "1.5rem", borderBottom: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
                                <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Requirements</span>
                                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0f172a", marginTop: "0.3rem" }}>Eligibility Criteria</h3>
                            </div>
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                                {[
                                    { label: "Minimum Qualification", value: "Graduate in any discipline from a recognised university" },
                                    { label: "Minimum Marks", value: "50% aggregate (45% for reserved category candidates)" },
                                    { label: "Entrance Exam Accepted", value: "MAH-MBA/MMS CET · CAT · MAT · CMAT · ATMA · XAT" },
                                    { label: "Affiliation", value: "SPPU-affiliated — admission follows DTE Maharashtra norms" },
                                ].map((row, i) => (
                                    <div key={i} style={{ padding: "1rem 0", borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
                                        <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>{row.label}</p>
                                        <p style={{ fontSize: "0.875rem", color: "#1e293b", fontWeight: 600, lineHeight: 1.5 }}>{row.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{ margin: "0 1.5rem 1.5rem", backgroundColor: "#dbeafe", border: "1px solid #bfdbfe", borderRadius: "0.75rem", padding: "0.875rem 1rem" }}>
                                <p style={{ fontSize: "0.8rem", color: "#1d4ed8", fontWeight: 600, lineHeight: 1.5 }}>
                                    📌 Final-year graduation students are eligible to apply provisionally.
                                </p>
                            </div>
                        </div>

                        {/* Admission Steps */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                { step: "01", title: "Profile Evaluation", desc: "ISMR evaluates your academic background, entrance exam score, and career goals to ensure eligibility and clarify your goals before admission." },
                                { step: "02", title: "Eligibility-Based Selection", desc: "Admission is based on alignment between your profile and the program's requirements — ensuring students enter with clear expectations." },
                                { step: "03", title: "Application & Documentation Support", desc: "ISMR ensures your MBA Marketing Admission 2026 Pune process is complete and error-free." },
                                { step: "04", title: "Final Admission & Seat Confirmation", desc: "Admission is confirmed through eligibility verification, interaction (if applicable), and fee submission." },
                            ].map((s, i) => (
                                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "#f8fafc", borderRadius: "1rem", padding: "1.25rem", border: "1px solid #e2e8f0" }}>
                                    <div style={{ minWidth: "2.5rem", height: "2.5rem", borderRadius: "0.6rem", background: "linear-gradient(135deg, #1d4ed8, #0891b2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: 900, fontSize: "0.8rem", flexShrink: 0 }}>{s.step}</div>
                                    <div>
                                        <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0f172a", marginBottom: "0.25rem" }}>{s.title}</p>
                                        <p style={{ color: "#64748b", fontSize: "0.825rem", lineHeight: 1.6 }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Limited seats banner */}
                            <div style={{ backgroundColor: "#0f172a", borderRadius: "1rem", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                                <div>
                                    <p style={{ fontWeight: 900, color: "#ffffff", fontSize: "0.9rem" }}>⚡ Limited Intake for 2026</p>
                                    <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.2rem" }}>Speak with the ISMR admission team today</p>
                                </div>
                                <a href="tel:+91" style={{ backgroundColor: "#22d3ee", color: "#0f172a", fontWeight: 900, padding: "0.6rem 1.25rem", borderRadius: "0.75rem", fontSize: "0.825rem", textDecoration: "none", whiteSpace: "nowrap" }}>📞 Call Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── FOOTER CTA ── */}
            <section style={styles.footerCta}>
                <div style={{ maxWidth: "40rem", margin: "0 auto", padding: "0 1.5rem" }}>
                    <h2 style={styles.footerH2}>Start Your Marketing Career in Pune</h2>
                    <p style={styles.footerSubtitle}>Seats for MBA Marketing Pune 2026 are limited. Secure yours with a single step — our counselors handle the rest.</p>
                    <a href="#admissions" style={styles.footerBtn}>Start Your Application →</a>
                    <p style={styles.footerNote}>ISMR Pune · AICTE Approved · SPPU Affiliated · DTE Maharashtra Recognized · NEP 2020 Compliant</p>
                </div>
            </section>
        </div>
    );
}