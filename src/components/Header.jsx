import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

const Header = () => {
    let Links =[
        {name:"ALL DEPARTMENTS",link:"/"},
        {name:"HOME",link:"/"},
        {name:"SHOP",link:"/"},
        {name:"COLLECTION",link:"/"},
        {name:"BLOG",link:"/"},
        {name:"PAGE",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full left-0 bg-black text-white'>
           <div className='md:flex items-center justify-between py-4 md:px-10 px-7 ml-20 '>
           
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <FaTimes/> : <FaBars />
                }
            </div>
            {/* link items */}   
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-20 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-20 md:my-0 my-20'>
                        <a href={link.link} className='text-white hover:text-orange-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
           </div>
        </div>
    );
};

export default Header;

