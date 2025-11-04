import React from "react";
import "./Marquee.css";

const Marquee = () => {
  const announcements = [
    {
      id: 1,
      title: "Harvard University",
      message: "New scholarship program for international students starting Fall 2024",
      date: "March 15, 2024",
      type: "scholarship",
    },
    {
      id: 2,
      title: "Stanford University",
      message: "Research symposium on Artificial Intelligence scheduled for April 20th",
      date: "March 12, 2024",
      type: "event",
    },
    {
      id: 3,
      title: "MIT",
      message: "Registration open for summer coding bootcamp - limited seats available",
      date: "March 10, 2024",
      type: "admission",
    },
    {
      id: 4,
      title: "Cambridge University",
      message: "Campus tour dates announced for prospective students and parents",
      date: "March 8, 2024",
      type: "event",
    },
    {
      id: 5,
      title: "Oxford University",
      message: "New online courses in Humanities now available for enrollment",
      date: "March 5, 2024",
      type: "course",
    },
    {
      id: 6,
      title: "Yale University",
      message: "Deadline extension for graduate applications until March 30th",
      date: "March 3, 2024",
      type: "admission",
    },
    {
      id: 7,
      title: "Princeton University",
      message: "Annual science fair winners announced - check website for details",
      date: "March 1, 2024",
      type: "achievement",
    },
  ];

  const getBadgeClass = (type) => {
    switch (type) {
      case "scholarship":
        return "badge-success";
      case "event":
        return "badge-primary";
      case "admission":
        return "badge-warning";
      case "course":
        return "badge-info";
      case "achievement":
        return "badge-danger";
      default:
        return "badge-secondary";
    }
  };

  const getBadgeText = (type) => {
    switch (type) {
      case "scholarship":
        return "Scholarship";
      case "event":
        return "Event";
      case "admission":
        return "Admission";
      case "course":
        return "New Course";
      case "achievement":
        return "Achievement";
      default:
        return "Announcement";
    }
  };

  return (
    <div className="container my-5 marquee-section">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2 className="section-title">Institute Announcements</h2>
          <br /><br />
        </div>
      </div>

      <div className="marquee-container rounded shadow-sm p-3">
        <div className="marquee-content">
          {announcements.concat(announcements).map((announcement, index) => (
            <div key={index} className="announcement-card">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className={`badge ${getBadgeClass(announcement.type)}`}>
                      {getBadgeText(announcement.type)}
                    </span>
                    <small className="text-muted">{announcement.date}</small>
                  </div>
                  <h6 className="card-title">{announcement.title}</h6>
                  <p className="card-text">{announcement.message}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0 text-center">
                  <button className="btn btn-sm btn-outline-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default Marquee;
