import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function PlantCard({ plant }) {
  const BASE_URL = "https://plant-website-backend-3y8q.onrender.com";

  const { addCart, toggleWish, wishlist } = useContext(ShopContext);

  const navigate = useNavigate();

  const liked = wishlist.find((p) => p.id === plant.id);

  return (
    <div
      className="plant-card"
      onClick={() => navigate(`/plant/${plant.id}`,{ state: plant })}
    >
      <div className="image-box">
        {plant.image && (
          <img src={`${BASE_URL}${plant.image}`} alt={plant.name} />
        )}

        {/* ❤️ Wishlist */}
        <FaHeart
          className={liked ? "heart liked" : "heart"}
          onClick={(e) => {
            e.stopPropagation();
            toggleWish(plant);
          }}
        />
      </div>

      <h4>{plant.name}</h4>
      <p className="price">₹ {plant.price}</p>

      <div className="btn-row">
  {/* 🛒 Add to Cart */}
  <button
    className="cart-btn"
    onClick={(e) => {
      e.stopPropagation();
      addCart(plant);
    }}
  >
    Add to Cart
  </button>

  {/* ⚡ Buy Now */}
  <button
    className="buy-btn"
    onClick={(e) => {
      e.stopPropagation();
      addCart(plant);
      navigate("/cart");
    }}
  >
    Buy Now
  </button>
</div>
    </div>
  );
}

export default PlantCard;
