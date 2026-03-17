import { useContext } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Cart(){

const {
  cart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  subtotal,
  shipping,
  total
} = useContext(ShopContext);
const navigate = useNavigate();
return(

<>
<Navbar/>

<div className="cart-page">

<div className="cart-left">

<h2>My Cart</h2>

{cart.length === 0 ? (
<p>Your cart is empty</p>
) : (

cart.map(item => (

<div className="cart-card" key={item.id}>

<img src={item.image} alt={item.name} />

<div className="cart-info">

<h3>{item.name}</h3>
<p>₹ {item.price}</p>

<div className="qty-box">

<button onClick={() => decreaseQty(item.id)}>
<FaMinus/>
</button>

<span>{item.qty || 1}</span>

<button onClick={() => increaseQty(item.id)}>
<FaPlus/>
</button>

</div>

</div>

<FaTimes
className="remove"
onClick={() => removeFromCart(item.id)}
/>

</div>

))

)}

</div>

{/* RIGHT SIDE */}

<div className="cart-right">

<h3>Order Summary</h3>

<div className="summary-row">
<span>Subtotal</span>
<span>₹ {subtotal}</span>
</div>

<div className="summary-row">
<span>Shipping</span>
<span>₹ {shipping}</span>
</div>

<hr/>

<div className="summary-row total">
<span>Total</span>
<span>₹ {total}</span>
</div>

<button
className="checkout-btn"
onClick={()=>navigate("/checkout")}
>
Checkout
</button>
</div>

</div>
 <Footer />
</>

)

}

export default Cart;