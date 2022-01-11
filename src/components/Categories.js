import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
// import { MdOutlineMenu } from "react-icons/md";
import Sidebar from "./Sidebar";

function Categories({ cart,categoryList }) {
  return (
    <div className="bg-[#232f3e] pl-4 text-gray-200 fixed top-14 w-full h-10 items-center z-50 flex">
      <ul className="hidden md:flex space-x-5 pl-4 text-sm">
        {/* <li className="flex items-center">
            <MdOutlineMenu className="w-6 h-6"/>
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

        

        <li className="hidden lg:inline-flex">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
            className="h-6"
            alt="loading"
          />
        </li>
      </ul>
      <div className="flex justify-between full">
      <Sidebar cart={cart} categoryList={categoryList}/>
      <Link to="/cart" className="flex md:hidden">
        <div className="flex items-center space-x-1 pr-4">
          <MdShoppingCart className="w-5 h-5" />

        </div>
      </Link>
      </div>

    </div>
  );
}

export default Categories;
