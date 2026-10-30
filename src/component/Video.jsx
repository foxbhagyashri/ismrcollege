import React from "react";
import "./Banner2.css";

// Accepts a plain ID or a full URL (watch, youtu.be, embed, shorts)
function getYouTubeId(input = "") {
    const match = input.match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([\w-]{11})/
    );
    return match ? match[1] : input.trim();
}

export default function VideoSection({ id = "hC3H64UZGA8", title = "YouTube video player" }) {
    const videoId = getYouTubeId(id);

    const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&rel=0&iv_load_policy=3&cc_load_policy=0&modestbranding=1&playsinline=1`;

    return (
        <>
            <style>{`
        .video-section {
          width: 100%;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>

            <section className="video-section">
                <div className="video-wrapper">
                    <iframe
                        src={src}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    );
}