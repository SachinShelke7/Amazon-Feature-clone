import React from "react";
// import { MdOutlineMenu } from "react-icons/md";
import Sidebar from "./Sidebar";

function Categories() {
  return (
      <div className="bg-[#232f3e] pl-4 text-gray-200 fixed top-14 w-full h-10 items-center z-50 flex">
        <ul className="hidden md:flex space-x-5 pl-4 text-sm">
          {/* <li className="flex items-center">
            <MdOutlineMenu className="w-6 h-6"/>
            All
          </li> */}
          <li>Home&Kitchen</li>
          <li>New Release</li>
          <li>Computers</li>
          <li>Amazon Pay</li>
          <li>Today's Deal</li>
          <li>Prime</li>
          <li>Electronics</li>
          <li>Customer Service</li>
          <li>Fashion</li>
          <li>Best Seller</li>

          <li className="hidden lg:flex">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
              className="h-6"
              alt="loading"
            />
          </li>
        </ul>
        <Sidebar />
      </div>
  );
}

export default Categories;
