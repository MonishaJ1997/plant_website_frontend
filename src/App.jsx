import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import PlantDetails from "./components/PlantDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import Care from "./components/Care";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";

function App(){
return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/shop" element={<Shop/> }/>
<Route path="/plant/:id" element={<PlantDetails/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/wishlist" element={<Wishlist/>}/>
<Route path="/care" element={<Care/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/blog/:id" element={<BlogDetails />} />

</Routes>

</BrowserRouter>

)
}

export default App;