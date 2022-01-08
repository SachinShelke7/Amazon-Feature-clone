import React from "react";
import Product from "./Product";
import Header from "./Header";

function Home({productsList, addToCart}) {


  return (
    <div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
          className="absolute"
        />
        <div className="relative bg-gradient-to-t from-white w-full h-[300px] md:h-screen" />
      </div>
      <Product productsList={productsList} addToCart={addToCart}/>
    </div>
  );
}

export default Home;
