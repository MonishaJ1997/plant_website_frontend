import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Navbar from "./Navbar";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";
import Footer from "./Footer";

function Wishlist() {

  const { wishlist, toggleWish, addCart } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="wishlist-page">

        <h2>My Wishlist </h2>

        {wishlist.length === 0 ? (
          <p className="empty">No items in wishlist</p>
        ) : (

          <div className="wishlist-grid">

            {wishlist.map(item => (

              <div className="wishlist-card" key={item.id}>

                {/* ❌ TOP RIGHT REMOVE */}
                <FaTimes
                  className="remove-cross top"
                  onClick={() => toggleWish(item)}
                />

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => navigate(`/plant/${item.id}`)}
                />

                {/* DETAILS */}
                <h3>{item.name}</h3>
                <p>₹ {item.price}</p>

                {/* ACTION */}
                <div className="wishlist-actions">

                  <button
                    className="cart-btn"
                    onClick={() => addCart(item)}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
       <Footer />
    </>
  );
}

export default Wishlist;