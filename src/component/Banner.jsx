import React, { useState, useEffect } from "react";
import "./Banner.css"; // Assuming the CSS file is named Banner.css

const Travel = () => {
  const videos = [
    "mp.mp4",
    "mp1.mp4",
    "mp3.mp4",
    "mp4.mp4",
    "mp5.mp4",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide functionality remains the same
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer);
  }, [videos.length]);

  return (
    <section className="home">
      {/* Background Videos */}
      {videos.map((src, i) => (
        <video
          key={i}
          className={`video-slide ${i === activeIndex ? "active" : ""}`}
          src={src}
          autoPlay
          muted
          loop
        ></video>
      ))}

      {/* Overlay added via CSS ::after */}

      {/* STATIC Text Content - RENDERED ONCE */}
      <div className="content active">
        <div className="title"> 
          <p>
            Shri Balaji Education Society's <span>2007</span>
          </p>
          <h1>
            INTERNATIONAL SCHOOL OF<br /> MANAGEMENT AND RESEARCH
          </h1>
        
          {/* Optional: Add the "Read more" link if desired, though it wasn't in the provided static structure */}
          <a href="#">Read more</a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="media_icon">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>

      {/* Navigation Dots */}
      <div className="slide-navigation">
        {videos.map((_, i) => (
          <div
            key={i}
            className={`nav-btn ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Travel;