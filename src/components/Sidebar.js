import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col min-h-screen py-2 w-full md:hidden">
      {showSidebar ? (
        <p
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex text-white items-center cursor-pointer fixed right-4 top-[62px] z-50"
        >
          X
        </p>
      ) : (
        <p
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex text-white items-center cursor-pointer fixed right-4 top-[62px] z-30"
        >
          CATEGORIES
          <MdOutlineMenu className="pl-2 w-8 h-8"/>
        </p>
      )}

      <div className={`top-14 right-0 w-full lg:w-[32vw] bg-[#232f3e] p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-500 ${ showSidebar ? "translate-x-0":"translate-x-full"}`}>
        <ul className="flex flex-col items-center space-y-5">
          <li className="flex items-center">
            <MdOutlineMenu />
            All
          </li>
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
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
