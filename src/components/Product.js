import React from "react";

function Product({ productsList, addToCart }) {
  return (
    <div className="product_main_card">
      {productsList.map((items) => {
        return (
          <div className="w-full flex justify-center " key={items.id}>
            <div className="product_card">
              <img
                src={items.image.url}
                alt="product"
                className="md:h-[300px] w-full object-cover object-top transform transition hover:scale-105 duration-200 p-1"
              />
              <h3 className="product_name">{items.name}</h3>
              <p className="price">{items.price.formatted_with_symbol}</p>
              <button className="cart_btn" onClick={() => addToCart(items.id, 1)}>Add to cart</button>

              {/* onClick={()=>addToCart(addToCart,1)} */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;