import React from 'react';
import { FaUser } from 'react-icons/fa';
import {  AiOutlineTwitter} from 'react-icons/ai';
import {FaPinterestP} from 'react-icons/fa';
import {BiLogoLinkedin} from 'react-icons/bi';
import {GrFacebookOption} from 'react-icons/gr';
import {GrMail} from 'react-icons/gr';
import {BsFillTelephoneFill} from 'react-icons/bs';
 

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <GrMail className='ml-10' />
          <p className="text-black ml-5" > hello.colorlib@gmail.com</p>
          <div className="h-7 w-px bg-gray-700 mx-4"></div>
          <BsFillTelephoneFill />
          <p className="text-black">123-456-7890</p>
        </div>
      

        <div  className="flex items-center space-x-4">
          <GrFacebookOption/>
          <AiOutlineTwitter/>
          <BiLogoLinkedin/>
          <FaPinterestP/>
        </div>

        <div
          className="flex items-center space-x-4">
          <div className="relative">
            <select
              className="bg-white text-black px-4 py-2  focus:outline-none"
              defaultValue="en">
              <option value="en"> English </option>
              <option value="de">German</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaUser />
            <span className="text-black">Login</span>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;


