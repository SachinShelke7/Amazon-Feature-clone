import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart({cart, removeFromCart}) {
  return (
    <div className="flex flex-col md:flex-row p-[20px] justify-between">
      <div className="mb-[20px]">
        <div>
          <h3 className="text-lg font-bold">Hello, Sachin </h3>
          <h2 className="text-xl font-bold p-[10px] border-b">
            Your Shoping Cart
          </h2>
          {/* products */}
          {
            cart?.line_items?.map(item=>{
             return <div className="flex my-[20px] items-center border-b pb-5 w-[360px] md:w-[500px]" key={item.id}>
               <img
                src={item.image.url}
                alt="s"
                className="pt-1 w-[150px] h-[150px] md:w-[180px] md:h-[180px] object-contain"
              /> 
              <div className="pl-[20px] md:pl-[40px]">
                <p className="font-bold">{item.name}</p>
                <p className="my-[10px] text-sm">
                  <strong>{item.price.formatted_with_symbol} * {item.quantity} = {cart.currency.symbol} {item.price.raw * item.quantity}</strong>
                </p>
                <button className="bg-[#f0c14b] border border-black text-sm font-medium py-1 px-2 rounded-full" onClick={()=>removeFromCart(item.id)}>
                  Remove From Basket
                </button>
              </div>
            </div>
            })
          }


        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end">
        <div
          className="flex flex-col justify-between w-[300px] h-[150px] p-[20px] bg-gray-100 border border-[#ddd] rounded-lg sticky 
          top-[120px]"
        >
          <div>
            {" "}
            <p>
              Subtotal ({cart?.total_items} items) <strong>{cart?.subtotal?.formatted_with_symbol}</strong>
            </p>
            <small>
              <input type="checkbox" />
              This Order Contain A Gift.
            </small>
          </div>
          <button className="w-full border border-black rounded-md bg-[#f0c14b] py-1 font-medium">
            Proceed to Checkout
          </button>

        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
