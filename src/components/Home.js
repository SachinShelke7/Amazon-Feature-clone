import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

function Home({ productsList, addToCart, cart }) {
  return (
    <div>
      <div>
        <Link to="/cart" className="flex md:hidden">
          <span className="bg-white text-gray-700 text-center text-xs font-bold w-full flex justify-center fixed top-24 z-30 shadow-md">
            You Have {cart?.total_items} items worth<strong className="mx-1">{cart?.subtotal?.formatted_with_symbol}</strong> in Cart,Proceed To Checkout .
          </span>
        </Link>

        <img
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
          className="absolute"
        />
        <div className="relative bg-gradient-to-t from-white w-full h-[300px] md:h-screen" />
      </div>
      <Product productsList={productsList} addToCart={addToCart} />
    </div>
  );
}

export default Home;
