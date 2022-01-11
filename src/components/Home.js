import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Product from "./Product";

function Home({ productsList, addToCart, cart }) {
  return (
    <div>
      <div>
        <Link to="/cart" className="flex md:hidden">
          <span className="bg-white text-gray-700 text-center text-xs font-bold w-full flex justify-center fixed top-24 z-30 shadow-md">
            You Have {cart?.total_items} items worth
            <strong className="mx-1">
              {cart?.subtotal?.formatted_with_symbol}
            </strong>{" "}
            in Cart,Proceed To Checkout .
          </span>
        </Link>

        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"
            alt=""
            className="-mb-[15px] z-[1] absolute0 hidden md:inline-flex"
          />
          {/* <div className="relative  bg-gradient-to-t from-white w-full h-[300px] md:h-screen z-[2]" /> */}
        </div>
        <Product productsList={productsList} addToCart={addToCart} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
