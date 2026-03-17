import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {

const [menuOpen,setMenuOpen] = useState(false);

const {cart,wishlist} = useContext(ShopContext);

const navigate = useNavigate();

return (

<nav className="navbar">

<div className="logo">
🌿 <span>PLANTOSHOP</span>
</div>

<div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
<FaBars/>
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li><NavLink to="/" end>Home</NavLink></li>
<li><NavLink to="/shop">Shop</NavLink></li>
<li><NavLink to="/care">Plant Care</NavLink></li>
<li><NavLink to="/blog">Blog</NavLink></li>

</ul>

<div className="nav-icons">

<div className="icon-wrapper" onClick={()=>navigate("/Wishlist")}>
<FaHeart className="icon"/>
{/*<span className="count">{wishlist.length}</span>*/}
</div>

<div className="icon-wrapper" onClick={()=>navigate("/Cart")}>
<FaShoppingCart className="icon"/>
<span className="count">{cart.length}</span>
</div>

</div>

</nav>

)

}

export default Navbar;