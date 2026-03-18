import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaSeedling, FaHandHoldingHeart, FaTint, FaSpa } from "react-icons/fa";
import Footer from "./Footer";
import plantImg from "../assets/plantlanding.png";
function Home(){
const BASE_URL = "https://plant-website-backend-3y8q.onrender.com";
const [image,setImage] = useState("");
const navigate = useNavigate();
useEffect(()=>{

axios.get(`${BASE_URL}/api/homepage/`)
.then(res=>{
setImage(BASE_URL + res.data.image);
})

},[])

return(

<>
<Navbar/>

<div className="hero">

<div className="hero-left">

<p className="tag">WELCOME TO PLANTOSHOP</p>

<h1>LET'S MAKE A BETTER PLANET</h1>

<p className="subtitle">
We are committed to protecting nature and growing beautiful plants.
</p>

<button 
  className="btn"
  onClick={() => navigate("/Shop")}
>
  SHOP NOW
</button>
</div>

<div className="hero-right">
 {image && <img src={image} alt="plant" />}
</div>

</div>






<div className="services">

  <h2>Services We Provide</h2>

  <div className="service-container">

    <div className="service-card">
      <FaHandHoldingHeart className="icons" />
      <h3>Landscaping</h3>
      <p>LandScaping takes on many forms, from installing trees</p>
    </div>

    <div className="divider"></div>

    <div className="service-card">
      <FaSeedling className="icons" />
      <h3>Plant Planting</h3>
      <p>LandScaping takes on many forms, from installing trees</p>
    </div>

    <div className="divider"></div>

    <div className="service-card">
      <FaTint className="icons" />
      <h3>Water Fountain</h3>
      <p>LandScaping takes on many forms, from installing trees</p>
    </div>

    <div className="divider"></div>

    <div className="service-card">
      <FaSpa className="icons" />
      <h3>Garden Care</h3>
      <p>LandScaping takes on many forms, from installing trees</p>
    </div>

  </div>

</div>




<div className="expert-section">

  <div className="expert-left">
    <img src={plantImg} alt="plant" />
  </div>

  <div className="expert-right">

    <h2>We have experts who helps you with your gardening</h2>

    

    <p className="description">
      We have arrange of indoor gardeners that can provide solutions 
      for your modern homes and take care of your garden in the best way possible.
    </p>

    <div className="highlight-box">
      The services offered by us are provided by a team of experienced professionals, 
      who uses latest equipments and superior grade of materials and gadgets
    </div>

  </div>

</div>
 <Footer />
</>
 
)

}

export default Home;
