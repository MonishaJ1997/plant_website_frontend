import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard";
import FilterSidebar from "../components/FilterSidebar";
import "./Shop.css";
import Footer from "./Footer";


function Shop(){

const [plants,setPlants] = useState([]);
const [category,setCategory] = useState("all");

const [minPrice,setMinPrice] = useState(0);
const [maxPrice,setMaxPrice] = useState(500);
const BASE_URL = "http://127.0.0.1:8000";
useEffect(()=>{

axios.get(`${BASE_URL}/api/plants/`,{
params:{
category:category,
min:minPrice,
max:maxPrice
}
})
.then(res=>{
setPlants(res.data)
})
.catch(err=>{
console.log(err)
})

},[category,minPrice,maxPrice])

return(

<>
<Navbar/>

<div className="shop-container">

<FilterSidebar
setCategory={setCategory}
setMinPrice={setMinPrice}
setMaxPrice={setMaxPrice}
/>

<div className="plant-grid">

{plants.map((plant)=>(
<PlantCard key={plant.id} plant={plant}/>
))}

</div>

</div>
 <Footer />
</>

)

}

export default Shop;