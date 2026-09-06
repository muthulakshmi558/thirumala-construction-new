import React from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Accent */}
      <div className="footer-accent"></div>

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column footer-about">
          <div className="footer-logo">
                <img
                  src={logo}
                  alt="Thirumala Construction"
                />         
                </div>

          <h3>Thirumala Construction</h3>

          <p>
            Thirumala Construction is committed to delivering quality
            construction solutions with reliability, innovation and
            professional excellence.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="WhatsApp">◔</a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/construction">Our Services</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>


        {/* Services */}
        <div className="footer-column">
          <h4>Our Services</h4>

          <ul>
            <li><a href="/construction">Constrcution</a></li>
            <li><a href="/manufacturing-products/fly-ash-bricks">Our Manufacturing products</a></li>
            <li><a href="/building-materials/m-sand">Building Materials</a></li>
            <li><a href="/construction">Interior Works</a></li>
            <li><a href="/construction">Building Construction</a></li>
          </ul>
        </div>


        {/* Contact */}
        <div className="footer-column contact-column">
          <h4>Get In Touch</h4>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <p>
              60-A,Chinnasamy Nagar,<br/>
              Ganapathy,Coimbatore - 641 006
              <br />
              Tamil Nadu, India
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <a href="tel:+91 94422 55664">
              +91 94422 55664
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <a href="mailto:karishmababu7224@gmail.com">
              karishmababu7224@gmail.com
            </a>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Thirumala Construction.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by{" "}
          <a href="https://aadhikwebstudio.netlify.app/">Aadhik Web Studio</a>
        </p>
      </div>


      {/* Floating Buttons */}
      <div className="floating-buttons">

        <a
          href="tel:+91 94422 55664"
          className="float-btn phone-btn"
          aria-label="Call"
        >
          ☎
        </a>

        <a
          href="https://wa.me/9442255664"
          className="float-btn whatsapp-btn"
          aria-label="WhatsApp"
        >
          ◔
        </a>

      </div>

      {/* Scroll Top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </footer>
  );
};

export default Footer;