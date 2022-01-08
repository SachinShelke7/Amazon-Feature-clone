import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";

function App() {

  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProductsList(response.data);
    // console.log(response);
  }
  const addToCart = async (prodId,qty) => {
    const response = await commerce.cart.add(prodId,qty);
    setCart(response.cart)
    // console.log(response)

    // const response = await
  };
  const fetchCart=async()=> {
    setCart(await commerce.cart.retrieve())
  }
const removeFromCart=async(prodId)=>{
  const response = await commerce.cart.remove(prodId)
  setCart(response.cart)
}
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      
      <div className="pt-24 relative">
        <Header cart={cart}/>
        <Categories />
      </div>
      <Routes>
        <Route path="/" element={<Home productsList={productsList} addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart}/>} />
        <Route path="/cat" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
