import React from "react";
import {
  MdArrowDropDown,
  MdOutlineSearch,
  MdShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Header({cart}) {
  return (
    <div className="bg-[#131921] text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex w-full h-14 items-center justify-center md:justify-between">
        <div className="flex items-center space-x-10">
          {/* logo */}
          <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            className="pl-1 h-10 md:pl-4" alt="amazon"
          />
          </Link>


          {/* search */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              className="h-10 md:w-[300px] lg:w-[500px] rounded-l-md outline-none text-black pl-2"
              placeholder="Search Product"
            />
            <div className="w-10 h-10 bg-orange-400 hover:bg-orange-500 flex items-center  justify-center rounded-r-md">
              <MdOutlineSearch className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-10">
          {/* flag */}
          <div className="items-center hidden lg:flex">
            <img
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              alt="india"
              className="h-4"
            />
            <MdArrowDropDown />
          </div>
          {/* signIn */}
          <div className="flex items-end">
            <div className="header-item1">
              <span>Hello,</span>
              <span className="font-medium">Sign In</span>
            </div>
            <MdArrowDropDown />
          </div>

          {/* orders */}
          <div className="header-item1">
            <span>Return</span>
            <span className="font-medium">Orders & list</span>
          </div>

          <div className="header-item1">
            <span>Your</span>
            <span className="font-medium">Prime</span>
          </div>
          </div>
          {/* cart */}

          <Link to="/cart" className="hidden md:flex">

          <div className="flex items-center space-x-1 pr-4">
            <MdShoppingCart className="w-5 h-5" />
            <span className="-mt-[20px] w-[20px] h-[20px] inline-block bg-white text-black rounded-full text-center text-xs font-bold">{cart?.total_items}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
