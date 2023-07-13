// import { Badge} from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { FaSearch } from 'react-icons/fa';
import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';

const Nav = () => {

  // const style =
  //   'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';

  return (


    <div className="navbar h-[80px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[20px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className=" left flex flex-1  items-center">
          {/* Logo */}
          <div className="center flex-1 text-center  mobile:ml-7">
            <img className='ml-20' src='https://preview.colorlib.com/theme/fashi/img/logo.png' alt='' />
          </div>

          {/* Search Input */}
          <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[100px] p-[5px] ">
          <select
              className="bg-white text-black px-2 py-2  focus:outline-none"
              defaultValue="all categories">
              <option value="categories">All Categories</option>
              <option value="categories">Mens</option>
              <option value="categories">Womens</option>
              <option value="categories">Kids</option>
            </select>
            <div className="h-4 w-px bg-black mx-4"></div>
            <input type='text' className="border-none mobile:w-[50px]" placeholder="What do you need?" />
            <FaSearch className="text-orange-400" style={{ fontSize: '16px' }} />
          </div>


          <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
            <AiOutlineHeart  size={24} className='mr-10' />
            <BsBag size={24} className='mr-10'/>
            <p className='font-bold'>$150.00</p>
            </div>
          {/* <span className="absolute right-[-8px] top-[-1px] h-[15px] w-[15px] bg-[#e7ab3c] text-white rounded-full text-[11px] font-bold text-center leading-[15px]">1</span> */}
          </div>
      </div>
    </div>
  );
};

export default Nav;
