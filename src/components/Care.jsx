import Navbar from "../components/Navbar";
import "./Care.css";
import { FaTint, FaSun, FaLeaf, FaBug, FaSeedling, FaTemperatureHigh } from "react-icons/fa";
import Footer from "./Footer";
function PlantCare() {

  return (
    <>
      <Navbar />

      <div className="plantcare">

        {/* HERO */}
        <div className="care-hero">
          <h1>Plant Care Guide 🌿</h1>
          <p>Everything you need to keep your plants healthy, green, and thriving.</p>
        </div>

        {/* MAIN CARE GRID */}
        <div className="care-section">

          <div className="care-card">
            <FaTint className="care-icon"/>
            <h3>Watering</h3>
            <p>Water when soil is dry. Avoid overwatering to prevent root rot.</p>
          </div>

          <div className="care-card">
            <FaSun className="care-icon"/>
            <h3>Sunlight</h3>
            <p>Place plants in bright indirect light for best growth.</p>
          </div>

          <div className="care-card">
            <FaLeaf className="care-icon"/>
            <h3>Fertilizing</h3>
            <p>Feed plants every 2–4 weeks during growing season.</p>
          </div>

          <div className="care-card">
            <FaBug className="care-icon"/>
            <h3>Pest Control</h3>
            <p>Use neem oil or natural sprays to protect plants.</p>
          </div>

        </div>

        {/* EXTRA CARE TIPS */}
        <div className="extra-care">

          <h2>Advanced Care Tips 🌱</h2>

          <div className="extra-grid">

            <div className="extra-card">
              <FaSeedling className="care-icon"/>
              <h3>Repotting</h3>
              <p>Repot your plant every 1–2 years to allow root growth.</p>
            </div>

            <div className="extra-card">
              <FaTemperatureHigh className="care-icon"/>
              <h3>Temperature</h3>
              <p>Keep plants in a stable temperature (18°C – 30°C).</p>
            </div>

            <div className="extra-card">
              <FaTint className="care-icon"/>
              <h3>Humidity</h3>
              <p>Most plants love humidity. Mist leaves regularly.</p>
            </div>

          </div>

        </div>

        {/* DO & DON'T */}
        <div className="dos-donts">

          <h2>Do's & Don'ts</h2>

          <div className="dd-container">

            <div className="dos">
              <h3>✔ Do's</h3>
              <ul>
                <li>Use good quality soil</li>
                <li>Ensure proper drainage</li>
                <li>Clean plant leaves</li>
                <li>Give enough sunlight</li>
              </ul>
            </div>

            <div className="donts">
              <h3>❌ Don'ts</h3>
              <ul>
                <li>Do not overwater</li>
                <li>Avoid direct harsh sunlight</li>
                <li>Don't ignore pests</li>
                <li>Don't keep in dark places</li>
              </ul>
            </div>

          </div>

        </div>

        {/* QUOTE / BANNER */}
        <div className="care-banner">
          <h2>"To plant a garden is to believe in tomorrow 🌿"</h2>
        </div>

      </div>
       <Footer />
    </>
  );
}

export default PlantCare;