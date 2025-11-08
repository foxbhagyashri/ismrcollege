import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BriefcaseFill } from "react-bootstrap-icons"; // Add this if you use it in the heading

function StudentCampusAndActivities() {
  const [activeSection, setActiveSection] = useState(
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT"
  );

  const interFont = {
    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
    fontSize: "16px",
    lineHeight: 1.7,
  };

  const navItems = [
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT",
    "TRAINING & DEVELOPMENT",
    "ACADEMIC AWARD CEREMONY",
    "DOMESTIC & INTERNATIONAL STUDY TOUR",
    "CULTURAL ACTIVITIES",
  ];

  const contentMap = {
    "NATIONAL & INTERNATIONAL INDUSTRIAL VISIT": (
      <div>
        <h3
          className="mb-3"
          style={{ ...interFont, fontWeight: 800, fontSize: "1.75rem", color: "#0a2240" }}
        >
          🌍 National & International Industrial Visits
        </h3>
        <p style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          Our students regularly participate in <strong>industrial visits</strong> 
          to leading organizations across India and abroad. These visits bridge 
          the gap between theoretical learning and real-world application, allowing 
          students to understand modern technologies, management practices, and 
          global business trends.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus optio, fugit repellendus ullam recusandae sunt animi, omnis commodi vitae totam culpa delectus eum obcaecati est aut temporibus doloremque ab?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem iusto ullam dolorem nostrum vero velit impedit aut, blanditiis numquam, distinctio beatae laudantium adipisci voluptate perspiciatis animi quisquam quae asperiores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, beatae blanditiis, dolorum harum molestiae odio unde reprehenderit quos iure corporis voluptas corrupti quisquam? Fuga debitis alias minus dolore! Corrupti, molestias.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident iusto tempora placeat delectus optio maiores labore rerum, sed quibusdam id porro, dolores accusamus? Consequatur quod maxime porro quidem eaque ad!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque molestias optio temporibus. Ullam dolorem obcaecati est praesentium ratione nostrum impedit expedita corrupti nesciunt, consequatur sequi illum illo quo suscipit?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ipsa illum deleniti esse molestiae aliquam recusandae placeat repudiandae nihil suscipit libero dicta, voluptatibus animi qui eveniet dolorum, at nesciunt amet.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum numquam delectus id sint, autem deserunt quidem. Error ullam praesentium consequatur sequi. Odit necessitatibus facilis quam cum vitae, repudiandae sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum nostrum, animi ex reprehenderit explicabo commodi! Placeat quibusdam fugit sit voluptatibus assumenda quos possimus? Dolorum officiis repudiandae distinctio. Aliquid, voluptatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas. Aut doloribus rerum incidunt esse illum voluptatibus repellendus rem optio ut, dolorem consequatur animi molestias molestiae, provident veniam, magni amet!
        </p>
        <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
          <li>Exposure to global industry standards and innovation.</li>
          <li>Interactions with industry professionals and experts.</li>
          <li>Understanding practical processes, systems, and workflow.</li>
        </ul>
      </div>
    ),
    "TRAINING & DEVELOPMENT": (
      <div>
        <h3
          className="mb-3"
          style={{ ...interFont, fontWeight: 800, fontSize: "1.75rem", color: "#0a2240" }}
        >
          🧠 Training & Development
        </h3>
              <p style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          The institute conducts comprehensive <strong>training and development programs</strong> 
          to enhance students’ employability skills, focusing on communication, aptitude, 
          technical proficiency, and personality development.
        </p>
        <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
          <li>Soft skills and leadership workshops.</li>
          <li>Technical and aptitude training sessions.</li>
          <li>Industry-oriented certification programs.</li>
        </ul>
      </div>
    ),
    "ACADEMIC AWARD CEREMONY": (
      <div>
        <h3
          className="mb-3"
          style={{ ...interFont, fontWeight: 800, fontSize: "1.75rem", color: "#0a2240" }}
        >
          🏅 Academic Award Ceremony
        </h3>
             <p style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          The Academic Award Ceremony recognizes outstanding students for their 
          <strong>excellence in academics, leadership, and extracurricular achievements.</strong>
        </p>
        <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
          <li>Best performer awards across all departments.</li>
          <li>Special recognition for research and innovation.</li>
          <li>Guest lectures and keynote addresses by distinguished alumni.</li>
        </ul>
      </div>
    ),
    "DOMESTIC & INTERNATIONAL STUDY TOUR": (
      <div>
        <h3
          className="mb-3"
          style={{ ...interFont, fontWeight: 800, fontSize: "1.75rem", color: "#0a2240" }}
        >
          ✈️ Domestic & International Study Tours
        </h3>
             <p style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          Study tours offer an opportunity for students to learn beyond classrooms. 
          These curated tours combine <strong>academic exposure with cultural learning</strong>.
        </p>
        <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
          <li>Visits to universities and innovation centers worldwide.</li>
          <li>Collaboration projects and joint learning experiences.</li>
          <li>Immersive exposure to international business and culture.</li>
        </ul>
      </div>
    ),
    "CULTURAL ACTIVITIES": (
      <div>
        <h3
          className="mb-3"
          style={{ ...interFont, fontWeight: 800, fontSize: "1.75rem", color: "#0a2240" }}
        >
          🎭 Cultural Activities
        </h3>
            <p style={{ ...interFont, maxWidth: "800px", textAlign: "justify" }}>
          The vibrant cultural life at our campus encourages students to express 
          themselves creatively. Annual festivals, talent shows, and cultural events 
          foster <strong>teamwork, leadership, and community engagement.</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores ex enim nobis, quos incidunt eligendi expedita! Impedit eligendi voluptate, quaerat itaque illo animi, deleniti sit adipisci ratione quia labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum nostrum, animi ex reprehenderit explicabo commodi! Placeat quibusdam fugit sit voluptatibus assumenda quos possimus? Dolorum officiis repudiandae distinctio. Aliquid, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas. Aut doloribus rerum incidunt esse illum voluptatibus repellendus rem optio ut, dolorem consequatur animi molestias molestiae, provident veniam, magni amet!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum numquam delectus id sint, autem deserunt quidem. Error ullam praesentium consequatur sequi. Odit necessitatibus facilis quam cum vitae, repudiandae sapiente!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque molestias optio temporibus. Ullam dolorem obcaecati est praesentium ratione nostrum impedit expedita corrupti nesciunt, consequatur sequi illum illo quo suscipit?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, voluptates voluptatibus, possimus corrupti facilis officiis ab ducimus corporis amet illum quibusdam nulla laborum tempore minus sunt excepturi id maxime hic?
        </p>
        <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
          <li>Annual cultural fest and intercollegiate competitions.</li>
          <li>Drama, dance, music, and art performances.</li>
          <li>Student clubs promoting diversity and creative freedom.</li>
        </ul>
      </div>
    ),
  };

  return (
    <>
      {/* ===== Header Section ===== */}
      
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #0a2240 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop)",
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
            }}
          >
            Student <span className="text-warning">Campus Life</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "16px",
              marginTop: "0.5rem",
            }}
          >
            Campus • <span className="text-warning">Student Activities</span>
          </p>
        </div>
      </section>

      {/* ===== Main Section ===== */}
      
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#f8f9fa",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        
        <div className="container">
             <h1
              className="mb-5"
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#0a2240",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              <BriefcaseFill className="me-3" style={{ color: "#0a2240" }} />
              Campus <span style={{ color: "#1a4d7a" }}>Life</span>
            </h1>
          <div className="row g-4  mt-2">
            {/* Left Navigation */}
            <div className="col-md-4 col-lg-3">
              <div
                className="shadow-sm bg-white rounded-3 p-3"
                style={{
                  borderLeft: "4px solid #0a2240",
                  minHeight: "100%",
                }}
              >
                {navItems.map((item) => (
                  <div
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`p-3 mb-2 rounded ${
                      activeSection === item ? "text-white" : "text-dark"
                    }`}
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      cursor: "pointer",
                      backgroundColor:
                        activeSection === item ? "#0a2240" : "#f8f9fa",
                      border:
                        activeSection === item
                          ? "2px solid #0a2240"
                          : "1px solid #dee2e6",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-8 col-lg-9">
              <div className="bg-white shadow-sm rounded-3 p-4 p-md-5">
                {contentMap[activeSection]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCampusAndActivities;
