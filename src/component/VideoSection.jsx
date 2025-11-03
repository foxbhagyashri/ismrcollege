import React from "react";
import "./VideoSection.css";
import { FaFileAlt, FaSearch, FaDollarSign, FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        
        <button className="play-button">
          <FaPlay />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
