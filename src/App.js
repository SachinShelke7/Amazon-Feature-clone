import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import Product from "./components/Product";

function App() {

  const [productsList, setProductsList] = useState([]);
  const [productsListByCategory, setProductsListByCategory] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProductsList(response.data);
    // console.log(response);
  }
  const fetchProductsByCategory = async (category) => {
    const response = await commerce.products.list({category_slug:[category]
    });
    setProductsListByCategory(response.data);
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

const fetchCategories = async() => {
  const response = await commerce.categories.list();
  setcategoryList(response.data);
  console.log(response);
}

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <Router>
      
      <div className="pt-24 relative">
        <Header cart={cart}/>
        <Categories categoryList={categoryList} />
      </div>
      <Routes>
        <Route path="/" element={<Home productsList={productsList} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart}/>} />
        <Route element={<Categories cart={cart} />} />
        <Route path="/category/:slug" element={<Product  productsList={productsListByCategory} addToCart={addToCart} fetchProductsByCategory={fetchProductsByCategory}/>} />
      </Routes>
    </Router>
  );
}

export default App;
