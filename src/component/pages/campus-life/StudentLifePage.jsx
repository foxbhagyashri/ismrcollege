import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BriefcaseFill } from "react-bootstrap-icons";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import SEO from "../../SEO";

/* =================== 3 CARD SLIDER =================== */
const ImageSlider = ({ title, images = [] }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const safeImages = Array.isArray(images) ? images : [];
  const totalPages = Math.max(1, Math.ceil(safeImages.length / 3));

  const startAuto = () => {
    if (totalPages <= 1) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalPages);
    }, 4000);
  };

  const resetAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages]);

  const next = () => {
    setIndex((prev) => (prev + 1) % totalPages);
    resetAuto();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalPages) % totalPages);
    resetAuto();
  };

  if (safeImages.length === 0) return null;

  return (
    <div className="slider-block">
      <h6 className="text-center text-danger fw-semibold mb-3">{title}</h6>

      <div className="multi-slider">
        <button className="arrow left" aria-label={`Previous ${title}`} onClick={prev}>❮</button>

        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {[...Array(totalPages)].map((_, page) => (
              <div className="slide-page" key={page}>
                {safeImages.slice(page * 3, page * 3 + 3).map((img, i) => (
                  <div className="img-card" key={i}>
                    <img src={img} alt={`${title} ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" aria-label={`Next ${title}`} onClick={next}>❯</button>
      </div>
    </div>
  );
};

/* =================== MAIN PAGE =================== */
function StudentCampusAndActivities() {
  const [activeSection, setActiveSection] = useState(
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT"
  );
  const [activeCultural, setActiveCultural] = useState("Holi");

  const navItems = [
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT",
    "TRAINING & DEVELOPMENT",
    "ACADEMIC AWARD CEREMONY",
    "DOMESTIC & INTERNATIONAL STUDY TOUR",
    "CULTURAL ACTIVITIES",
  ];

  const contentMap = {
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT": (
      <ImageSlider
        title="Industrial Visits"
        images={[
          "/Industry Visit @ National Paints Abu Dhabi.jpg",
          "/2-1.png",
          "/3-1.png",
          "/5-1.png",
          "/IMG_7331.jpg",
          "/IMG_7389.jpg",

        ]}
      />
    ),

    "TRAINING & DEVELOPMENT": (
      <ImageSlider
        title="Training Programs"
        images={["/4-1.png", "/5.png", "/6.png", "/activity-e1643704137253.jpg", "/IMG-20190311-WA0141.jpg", "/planting.jpg"]}
      />
    ),

    "ACADEMIC AWARD CEREMONY": (
      <ImageSlider
        title="Award Ceremony"
        images={["/7.png", "/8.png", "/9.png", "/7-1.png", "/IMG_6995.jpg", "/IMG_6939.jpg"]}
      />
    ),

    "DOMESTIC & INTERNATIONAL STUDY TOUR": (
      <ImageSlider
        title="Study Tours"
        images={[
          "/Students @ Ferrari World Abu Dabhi.jpg",
          "/Students @ Burj Al Arab Beach Dubai.jpg",
          "/12.png",
          "/Picnic @ Mahableshwar .jpg",
          "/DSC05259.jpg",
          "/Industrial Visit @ Bhushan Steel.jpg",
        ]}
      />
    ),

    "CULTURAL ACTIVITIES": (
      <>
        <div className="sub-tabs mb-4">
          {["Holi", "Ganpati", "Fresher Party", "Dahi Handi", "Garba Event", "Trekking", "Picnic"].map((item) => (
            <button
              key={item}
              className={`btn ${activeCultural === item ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => setActiveCultural(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {activeCultural === "Holi" && (
          <ImageSlider title="Holi Celebration" images={["/DSC05794.jpg", "/IMG_4282.jpg", "/IMG_4088.jpg", "/IMG_1702.jpg", "/IMG_1690.jpg"]} />
        )}
        {activeCultural === "Ganpati" && (
          <ImageSlider title="Ganpati Festival" images={["/IMG_2270.jpg", "/DSC04202.jpg", "/DSC04135.jpg", "/DSC_0404.jpg", "/DSC_0096.jpg"]} />
        )}
        {activeCultural === "Fresher Party" && (
          <ImageSlider title="Freshers Party" images={["/_DSC3779 (1).jpg", "/_DSC3913.jpg", "/_DSC3941 (1).jpg", "/_DSC3978.jpg", "/_DSC3769.jpg"]} />
        )}
        {activeCultural === "Dahi Handi" && (
          <ImageSlider title="Dahi Handi" images={["/IMG_7279.jpg", "/DSC_0292.jpg", "/DSC_0230.jpg", "/DSC_0221.jpg", "/DSC_0175.jpg"]} />
        )}
        {activeCultural === "Garba Event" && (
          <ImageSlider title="Garba Event" images={["/GarbhaCelbration.jpg", "/WhatsApp Image 2025-10-27 at 2.33.48 PM (1).jpeg", "/WhatsApp Image 2025-10-16 at 3.09.13 PM.jpeg", "/WhatsApp Image 2025-10-27 at 2.33.48 PM.jpeg", "/IMG_0032.jpg"]} />
        )}
        {activeCultural === "Trekking" && (
          <ImageSlider title="Trekking" images={["/20160124_160248.jpg", "/IMG_6983.jpg", "/DSC_0376.jpg", "/DSC_0176.jpg", "/DSC_0063.jpg"]} />
        )}
        {activeCultural === "Picnic" && (
          <ImageSlider title="Picnic" images={["/Mahabaleshwar.jpeg", "/Venna lake.jpg", "/VennaLake.jpeg", "/Panchgani.jpg"]} />
        )}
      </>
    ),
  };

  return (
    <>
      <SEO
        title="Student Campus Life & Activities | ISMR Pune"
        description="Experience vibrant campus life, cultural fests, sports events, industrial visits, study tours, and clubs at ISMR Pune."
        canonical="https://ismrpune.edu.in/campus-life/student-life/"
      />
      <style>{`


        .campus-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 30px;
        }
        .campus-tab {
          padding: 12px 18px;
          border-radius: 30px;
          background: #f1f3f5;
          font-weight: 600;
          cursor: pointer;
        }
        .campus-tab.active {
          background: #0a2240;
          color: white;
        }
        .sub-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
        }


.multi-slider {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.slider-window {
  overflow: hidden;
  width: 100%;
}

.slider-track {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.slide-page {
  min-width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* EACH IMAGE CARD */
.img-card {
  width: 33.33%;
  max-width: 360px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.img-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
}

/* Arrows */
.arrow {
  background: #0a2240;
  color: #fff;
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.arrow.left {
  margin-right: 15px;
}

.arrow.right {
  margin-left: 15px;
}

/* ================= MOBILE ================= */
@media (max-width: 991px) {
  .slide-page {
    gap: 12px;
  }

  .img-card {
    width: 48%;
  }
}

/* ================= SMALL MOBILE ================= */
@media (max-width: 600px) {
  .slide-page {
    flex-direction: column;
  }

  .img-card {
    width: 100%;
  }

  .img-card img {
    height: 220px;
  }
}


      `}</style>

      <section
        className="py-5 text-white text-center"
        style={{
          background: `linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%), url(${allsectionbg})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
        }}
      >
        <div className="container position-relative py-4">
          <h1 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "40px" }}>
            Student <span className="text-warning">Campus Life</span>
          </h1>
          <p className="mb-0" style={{ fontSize: "15px", color: "#ffffff" }}>
            Campus Life • <span className="text-warning">Student Campus Life</span>
          </p>
        </div>
      </section>

      <div className="container py-5">
        <h3 className="text-center mb-4 fw-bold">
          <BriefcaseFill /> Campus Life
        </h3>

        <div className="campus-tabs">
          {navItems.map((item) => (
            <div
              key={item}
              className={`campus-tab ${activeSection === item ? "active" : ""}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {contentMap[activeSection]}
      </div>
    </>
  );
}

export default StudentCampusAndActivities;
