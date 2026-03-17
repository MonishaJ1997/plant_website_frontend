import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";   // ✅ FIX 1
import { ShopContext } from "../context/ShopContext";

function PlantCard({ plant }) {
 const BASE_URL = "http://127.0.0.1:8000"
const { addCart, toggleWish, wishlist } = useContext(ShopContext);

const navigate = useNavigate();   // ✅ FIX 1

const liked = wishlist.find(p => p.id === plant.id);

return (

<div
className="plant-card"
onClick={() => navigate(`/plant/${plant.id}`)}
>

<div className="image-box">

{/* ✅ FIX 3: Safe image */}
{plant.image && (
<img src={`${BASE_URL}${plant.image}`} alt={plant.name} />
)}

{/* ❤️ Wishlist */}
<FaHeart
className={liked ? "heart liked" : "heart"}
onClick={(e) => {
e.stopPropagation();   // ✅ FIX 2 (IMPORTANT)
toggleWish(plant);
}}
/>

</div>

<h4>{plant.name}</h4>

<p className="price">₹ {plant.price}</p>

{/* 🛒 Add to Cart */}
<button
className="cart-btn"
onClick={(e) => {
e.stopPropagation();   // ✅ FIX 2 (IMPORTANT)
addCart(plant);
}}
>
<FaShoppingCart /> Add to Cart
</button>

</div>

);

}

export default PlantCard;