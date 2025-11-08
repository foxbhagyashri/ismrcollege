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
    <footer className="footer-section pt-5">
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
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Academics */}
          <Col lg={2} md={6} sm={12} className="mb-4">
            <h5 className="footer-title">Academics</h5>
            <ul className="footer-links">
              <li><a href="#">Undergraduates</a></li>
              <li><a href="#">University Overview</a></li>
              <li><a href="#">Online Education</a></li>
              <li><a href="#">How To Apply</a></li>
              <li><a href="#">Graduates</a></li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} sm={12} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Student Activities</a></li>
              <li><a href="#">Apply Form</a></li>
              <li><a href="#">Schedule A Tour</a></li>
              <li><a href="#">News & Blog</a></li>
              <li><a href="#">About ISMR</a></li>
            </ul>
          </Col>

          {/* Contact Us */}
          <Col lg={5} md={6} sm={12} className="mb-4 contact-section">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><FaPhoneAlt className="icon" /> +91 9923786079</li>
              <li><FaEnvelope className="icon" /> Wadki, Opp. Hotel Vijay Executive, Pune – 412308</li>
              <li><FaMapMarkerAlt className="icon" /> 3001810 Campus Way IUTothell WA 98011-8246</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Bottom Footer */}
      <div className="footer-bottom py-3 mt-4">
        <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="footer-logo d-flex align-items-center mb-3 mb-md-0">
            <span>
              Copyright © Website Design & Developed By{" "}
              <span className="footer-brand">Fox Aircomm Pvt Ltd</span> All Rights Reserved.
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
