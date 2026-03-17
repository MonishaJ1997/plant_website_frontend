import { useState } from "react";
import { FaLeaf, FaTree, FaSeedling } from "react-icons/fa";
import "./FilterSidebar.css";

function FilterSidebar({ setCategory, setMinPrice, setMaxPrice }) {

  const [active, setActive] = useState("all");

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  const selectCategory = (cat) => {
    setActive(cat);
    setCategory(cat);
  };

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMin(value);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMax(value);
    setMaxPrice(value);
  };

  return (

    <div className="filter-sidebar">

      <h2 className="filter-title">Categories</h2>

      <div className="category-list">

        <div
          className={`category-item ${active === "all" ? "active" : ""}`}
          onClick={() => selectCategory("all")}
        >
          🌿 <span>All Plants</span>
        </div>

        <div
          className={`category-item ${active === "Indoor Plants" ? "active" : ""}`}
          onClick={() => selectCategory("Indoor Plants")}
        >
          <FaLeaf /> <span>Indoor Plants</span>
        </div>

        <div
          className={`category-item ${active === "Outdoor Plants" ? "active" : ""}`}
          onClick={() => selectCategory("Outdoor Plants")}
        >
          <FaTree /> <span>Outdoor Plants</span>
        </div>

        <div
          className={`category-item ${active === "Seeds" ? "active" : ""}`}
          onClick={() => selectCategory("Seeds")}
        >
          <FaSeedling /> <span>Seeds</span>
        </div>

      </div>

      <div className="price-filter">

        <h3>Price Range</h3>

        <div className="price-values">
          <span>${min}</span>
          <span>${max}</span>
        </div>

        <input
          type="range"
          min="0"
          max="500"
          value={min}
          onChange={handleMinChange}
          className="slider"
        />

        <input
          type="range"
          min="0"
          max="500"
          value={max}
          onChange={handleMaxChange}
          className="slider"
        />

      </div>

    </div>

  );
}

export default FilterSidebar;