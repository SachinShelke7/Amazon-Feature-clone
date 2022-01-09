import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar({categoryList}) {
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
          className="flex text-white items-center cursor-pointer fixed right-0 pr-2 top-[62px] z-30"
        >
          CATEGORIES
          <MdOutlineMenu className="pl-2 w-8 h-8"/>
        </p>
        
      )}

      <div className={`top-14 right-0 w-full lg:w-[32vw] bg-[#232f3e] p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-500 ${ showSidebar ? "translate-x-0":"translate-x-full"}`}>
        <ul className="flex flex-col items-center space-y-5">
          {/* <li className="flex items-center">
            <MdOutlineMenu />
            All
          </li> */}
                    {
            categoryList?.map(category=>{
              return <li key={category.id} className="text-gray-300 font-medium hover:scale-105 hover:text-white">
                <Link to={`/category/${category.slug}`}>
                {category.name}
                </Link>

                </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
