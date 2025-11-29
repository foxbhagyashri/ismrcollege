import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-4">
      <Container>
        <Row>
          {/* About ISMR */}
          <Col lg={3} md={6} sm={12} className="mb-4 text-center text-md-start">
            <img
              src="/ISMR logo_page-0001.png"
              alt="ISMR Logo"
              className="mb-3 footerlogo"
            />
            <div className="social-icons mt-3">
              <a
                href="https://www.facebook.com/ismrcollegepune/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ismrofficial/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/school/international-school-of-management-and-research-pune/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>


  {/* Quick Links */}
  <Col lg={2} md={6} sm={12} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Student Activities</a>
              </li>
              <li>
                <a href="#">Apply Form</a>
              </li>
              <li>
                <a href="#">Schedule A Tour</a>
              </li>
              <li>
                <a href="#">News & Blog</a>
              </li>
              <li>
                <a href="#">About ISMR</a>
              </li>
            </ul>
          </Col>


          {/* Academics */}
          <Col lg={4} md={4} sm={12} className="mb-4">
            <h5 className="footer-title">Location</h5>
            <div className="footer-map mt-3">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4852719774135!2d73.9687828737175!3d18.41626317235503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c058e8d9e15b%3A0x541eee74dbde91ba!2sISMR%20-%20MBA%20College%20Pune!5e0!3m2!1sen!2sin!4v1764314251873!5m2!1sen!2sin" width="600" height="200" style={{ border: 0, borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </Col>

        

          {/* Contact Us + Map Section */}
          <Col lg={3} md={3} sm={12} className="mb-5">
            <div className="contact-section">
              <h5 className="footer-title">Contact Us</h5>
              <ul className="footer-contact">
                <li>
                  <FaPhoneAlt className="icon" /> +91 9923786079
                </li>
                <li>
                  <FaEnvelope className="icon" /> admissions@ismrpune.edu.in
                </li>
                <li>
                  <FaMapMarkerAlt size={30} className="icon" />
                  ISMR Campus Bypass Pune Saswad Road, Sr.No.907, Opp Hotel Vijay
                  Executive, Gaidhara Kanifnath College Road, Wadki, Pune – 412 308.
                </li>
              </ul>

            </div>
          </Col>

        </Row>
      </Container>

      {/* Bottom Footer */}
      <div className="footer-bottom py-3 mt-4">
        <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <span className="footer-bottom-text text-center">
            © Website Design & Developed By{" "}
            <span className="footer-brand">Fox Aircomm Pvt Ltd</span> | All
            Rights Reserved.
          </span>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
