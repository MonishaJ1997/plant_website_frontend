import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO + ABOUT */}
        <div className="footer-col">
          <h2 className="logo">
            🌿PLANTOSHOP
          </h2>
          <p>
            Bringing nature closer to your home. Explore a wide variety of plants
            and make your space greener and healthier.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Plant Care</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 PLANTOSHOP. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;