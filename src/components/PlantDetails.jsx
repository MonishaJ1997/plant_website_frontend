import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaArrowLeft, FaHeart, FaStar } from "react-icons/fa";
import "./PlantDetails.css";
import Navbar from "./Navbar";
import { ShopContext } from "../context/ShopContext";
import Footer from "./Footer";



function PlantDetails(){
const BASE_URL = "https://plant-website-backend-3y8q.onrender.com";
const { id } = useParams();
const navigate = useNavigate();

const [plant,setPlant] = useState(null);

const { addCart, toggleWish, wishlist } = useContext(ShopContext);

const liked = wishlist.find(p => p.id === plant?.id);

useEffect(()=>{

axios.get(`${BASE_URL}/api/plants/${id}/`)
.then(res=>{
setPlant(res.data)
})
.catch(err=>{
console.log(err)
})

},[id])

if(!plant) return <p>Loading...</p>;

return(

<>  {/* ✅ FIX 1: Wrap */}

<Navbar/>

<div className="details-container">

<div className="details-header">

<FaArrowLeft className="back" onClick={()=>navigate(-1)}/>

<h2>Details</h2>

<FaHeart
className={liked ? "wish liked" : "wish"}
onClick={()=>toggleWish(plant)}
/>

</div>

<div className="details-image">

{/* ✅ FIX 2: Correct image path */}
<img
  src={
    plant.image?.startsWith("http")
      ? plant.image
      : `${BASE_URL}${plant.image}`
  }
  alt={plant.name}
/>

</div>

<div className="details-content">

<h2 className="plant-name">{plant.name}</h2>

<div className="rating">
<FaStar className="star"/> {plant.rating || 4.5} (264 Review)
</div>

<p className="desc">
{plant.description || "No description available"}
</p>

<div className="specs">

<div className="spec">
<p>Size</p>
<span>{plant.size || "-"}</span>
</div>

<div className="spec">
<p>Plant</p>
<span>
{plant.category?.name || plant.category}
</span>
</div>

<div className="spec">
<p>Height</p>
<span>{plant.height || "-"}</span>
</div>

<div className="spec">
<p>Humid</p>
<span>{plant.humidity || "-"}</span>
</div>

</div>

<div className="price-box">

  <h3>₹ {plant.price}</h3>

  <div className="btn-row">

    {/* 🛒 Add to Cart */}
    <button
      className="add-btn"
      onClick={() => addCart(plant)}
    >
      Add to Cart
    </button>

    {/* ⚡ Buy Now */}
    <button
      className="buy-btn"
      onClick={() => {
        addCart(plant);
        navigate("/cart");
      }}
    >
      Buy Now
    </button>

  </div>

</div>

</div>

</div>
 <Footer />
</>

)

}

export default PlantDetails;
