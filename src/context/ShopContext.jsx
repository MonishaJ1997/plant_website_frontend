import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
const BASE_URL = "http://127.0.0.1:8000";
const [cart, setCart] = useState([]);
const [wishlist, setWishlist] = useState([]);


// ✅ ADD TO CART (with quantity support)
const addCart = (plant) => {

  const imageUrl = plant.image?.startsWith("http")
    ? plant.image
    : `${BASE_URL}${plant.image}`;

  const exists = cart.find(item => item.id === plant.id);

  if (exists) {
    setCart(cart.map(item =>
      item.id === plant.id
        ? { ...item, qty: (item.qty || 1) + 1 }
        : item
    ));
  } else {
    setCart([
      ...cart,
      {
        ...plant,
        image: imageUrl,  // ✅ FIX HERE
        qty: 1
      }
    ]);
  }

};


// ✅ REMOVE FROM CART
const removeFromCart = (id) => {
setCart(cart.filter(item => item.id !== id));
};


// ✅ INCREASE QTY
const increaseQty = (id) => {
setCart(cart.map(item =>
item.id === id
? { ...item, qty: (item.qty || 1) + 1 }
: item
));
};


// ✅ DECREASE QTY
const decreaseQty = (id) => {
setCart(cart.map(item =>
item.id === id && item.qty > 1
? { ...item, qty: item.qty - 1 }
: item
));
};


// ✅ CLEAR CART
const clearCart = () => {
setCart([]);
};


const toggleWish = (product) => {

  const exists = wishlist.find(item => item.id === product.id);

  if (exists) {
    setWishlist(wishlist.filter(item => item.id !== product.id));
  } else {

    const imageUrl = product.image?.startsWith("http")
      ? product.image
      : `${BASE_URL}${product.image}`;

    setWishlist([
      ...wishlist,
      {
        ...product,
        image: imageUrl   // ✅ FIX HERE
      }
    ]);
  }
};


// ✅ TOTALS
const subtotal = cart.reduce(
(sum, item) => sum + item.price * (item.qty || 1),
0
);

const shipping = subtotal > 0 ? 50 : 0;

const total = subtotal + shipping;


return (
<ShopContext.Provider
value={{
cart,
wishlist,

addCart,
removeFromCart,
increaseQty,
decreaseQty,
clearCart,

toggleWish,

subtotal,
shipping,
total
}}
>

{children}

</ShopContext.Provider>
);

};