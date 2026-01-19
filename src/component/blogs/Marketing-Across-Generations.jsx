import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutImg from "../../assets/About-img.jpg";
import allsectionbg from "../../assets/allsectionbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheckCircle } from "react-icons/fa";

import {
    faGem,
    faGlobe,
    faHandsHelping,
    faEye,
    faRocket,
    faCircle,
    faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";

// ---------------- STAT COUNTER ----------------
const StatCounter = ({ endValue, duration, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endValue / (duration / 50);

        const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [endValue, duration]);

    return (
        <h2 style={{ fontSize: "1rem", fontWeight: 700 }}>
            {Math.floor(count)}
            {suffix}
        </h2>
    );
};

// ---------------- MAIN COMPONENT ----------------
const MarketingAcrossGenerations = () => {
    return (
        <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
            {/* -------- HEADER -------- */}
            <section
                className="py-5 text-white text-center position-relative"
                style={{
                    background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                }}
            >
                <div
                    className="position-absolute top-0   end-0 w-100 h-100 opacity-25"
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
                        Blog
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                        }}
                    >
                        Blog • <span className="text-warning">Marketing Across Generations</span>
                    </p>
                </div>
            </section>

            {/* -------- ABOUT TEXT & IMAGE -------- */}
            <div className="container pb-5">
                <h2
                    style={{
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#0a2240",
                        marginTop: "3rem",
                    }}
                >
                    Marketing Across Generations: How Brands Talk Differently to Baby Boomers, Gen Z & Gen Alpha
                </h2>

                <img src="/Marketing-Across-Generations.jpg" alt="Marketing Across Generations" />



                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    Marketing is no longer a one-size-fits-all activity. In today’s hyper-connected world, consumers belong to different generations with distinct values, expectations, communication styles, and decision-making patterns. What convinces a Baby Boomer to trust a brand may completely fail with Gen Z—and might not even register with Gen Alpha.<br></br>
                    This is why generational marketing has become a critical component of modern marketing strategy. Understanding <i>how brands talk differently to Baby Boomers, Gen Z, and Gen Alpha</i> is essential for marketers operating in the era of Marketing 5.0, where technology meets human-centric thinking.
                </p>

                <h5
                    style={{
                        fontSize: "18px",
                        color: "#000",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",
                    }}
                >
                    Why Generational Marketing Matters Today
                </h5>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    Every generation is shaped by the social, economic, and technological environment it grows up in. These experiences influence:
                </p>
                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        <b>Buying behavior</b>
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        <b>Media consumption habits</b>
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        <b>Brand loyalty</b>
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        <b>Trust and skepticism toward advertising</b>
                    </li>
                </ul>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    In a digital-first economy, brands must carefully tailor their message, medium, and meaning to each generation. Failing to do so results in wasted marketing budgets and disconnected consumers.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    Baby Boomers: Trust, Value, and Reliability
                </p>

                <h5
                    style={{
                        fontSize: "18px",
                        color: "#00",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",
                    }}
                >
                    Who Are They?
                </h5>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    Baby Boomers were born roughly between 1946 and 1964. They grew up in a period of economic growth, industrial expansion, and traditional family structures.
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    How They Think as Consumers
                </p>



                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Prefer reliability over novelty
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Value brand reputation and trust
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Are relatively loyal once convinced
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Respond well to rational, information-rich communication
                    </li>
                </ul>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                    }}
                >
                    How Brands Talk to Baby Boomers
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",
                    }}
                >
                    Brands targeting Baby Boomers focus on:
                </p>

                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Product quality and durability
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Long-term value and savings
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Testimonials, guarantees, and credibility
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Traditional media such as TV, print, and email
                    </li>
                </ul>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",

                    }}
                >
                    For example, insurance, healthcare, banking, and FMCG brands often use emotional reassurance combined with logical benefits when addressing this segment.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",

                    }}
                >
                    Key Marketing Insight For Baby Boomers, marketing is about reducing risk and building trust.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",

                    }}
                >
                    Gen Z: Authenticity, Speed, and Social Identity
                </p>


                <h5
                    style={{
                        fontSize: "18px",
                        color: "#00",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",
                    }}
                >
                    Who Are They?
                </h5>


                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",

                    }}
                >
                    Gen Z includes individuals born approximately between 1997 and 2012. They are true digital natives—raised with smartphones, social media, and instant access to information.
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",

                    }}
                >
                    How They Think as Consumers
                </p>
                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Highly skeptical of traditional advertising
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Value authenticity and transparency
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Influenced by peers, creators, and communities
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Expect brands to take a stand on social issues
                    </li>
                </ul>

                <h5
                    style={{
                        fontSize: "18px",
                        color: "#000",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",

                    }}
                >
                    How Brands Talk to Gen Z
                </h5>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",

                    }}
                >
                    Marketing communication for Gen Z is:
                </p>
                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Short, visual, and fast-paced
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Story-driven and emotion-rich
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Delivered through platforms like Instagram, YouTube, and short-form videos
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Often humorous, conversational, or purpose-driven
                    </li>
                </ul>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Brands speak with Gen Z, not at them. Memes, influencer collaborations, interactive content, and user-generated campaigns dominate this space.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Key Marketing InsightGen Z doesn’t want to be sold to—they want to relate, participate, and believe.
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Gen Alpha: Experience, Immersion, and Interaction
                </p>

                <h5
                    style={{
                        fontSize: "18px",
                        color: "#00",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",

                    }}
                >
                    Who Are They?
                </h5>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Gen Alpha refers to those born after 2012. This generation is growing up with AI, voice assistants, AR/VR, and immersive digital experiences as a norm.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",

                    }}
                >
                    How They Think as Consumers
                </p>


                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Highly visual and interactive learners
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Short attention spans but deep engagement with experiences
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Influenced strongly by parents and digital environments
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Expect instant gratification and personalization
                    </li>
                </ul>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Although Gen Alpha does not yet have direct purchasing power, they strongly influence family buying decisions and represent the future consumer market.
                </p>


                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    How Brands Talk to Gen Alpha
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",


                    }}
                >
                    Marketing to Gen Alpha focuses on:
                </p>


                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Gamification and interactivity
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        AR filters, immersive storytelling, and virtual environments
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Edutainment (education + entertainment)
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Visual-first, voice-enabled, and experience-driven communication
                    </li>
                </ul>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Brands are moving from “messages” to experiences when engaging with Gen Alpha.
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Key Marketing Insight For Gen Alpha, marketing is not communication—it’s interaction.
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Marketing 5.0 and the Generational Shift
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Marketing 5.0 emphasizes technology for humanity. This philosophy is especially relevant when addressing multiple generations simultaneously.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",

                    }}
                >
                    Modern brands use:
                </p>


                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        AI and data analytics to personalize messaging
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Predictive marketing to anticipate generational needs
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Omnichannel strategies to reach each generation on its preferred platform
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Human-centric storytelling to maintain emotional connection
                    </li>
                </ul>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    A single brand may run different campaigns for different generations—each aligned with the same core values but expressed in unique ways.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Challenges in Multi-Generational Marketing
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",


                    }}
                >
                    Marketers today face several challenges:
                </p>
                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Balancing consistency with customization
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Avoiding stereotypes while segmenting generations
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Managing multiple platforms and communication styles
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Ensuring ethical use of data and personalization
                    </li>
                </ul>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    The solution lies in deep consumer understanding combined with adaptive strategy.
                </p>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    What MBA Students and Future Marketers Should Learn
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontWeight: "600",


                    }}
                >
                    For management students and aspiring marketers, generational marketing offers critical lessons:
                </p>


                <ul>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Consumers are not just age groups—they are mindsets
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Technology enables personalization, but empathy drives connection
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        Successful brands adapt their voice without losing identity
                    </li>
                    <li style={{ marginBottom: "8px", fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
                        The future marketer must be data-savvy, culturally aware, and emotionally intelligent
                    </li>
                </ul>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    Understanding generational differences is no longer optional—it is a core marketing competency.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    From the trust-seeking Baby Boomers to the authenticity-driven Gen Z and the experience-hungry Gen Alpha, marketing has become a dynamic conversation across generations. Brands that understand how to communicate differently—yet consistently—across these segments will build deeper relationships and long-term loyalty.
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: "1.7",
                        marginTop: "1rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        textAlign: "justify",
                        textJustify: "inter-word",


                    }}
                >
                    In the evolving world of Marketing 5.0, success belongs to those who don’t just follow trends, but understand people—across time, technology, and transformation.
                </p>

            </div>



        </div >
    );
};

export default MarketingAcrossGenerations;
