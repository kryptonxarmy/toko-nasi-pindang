"use client";

import React, { useState } from "react";
import { FaHome, FaListAlt, FaList } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#00bcd4] h-[5.1rem] px-[2rem] md:px-[8rem] z-[50] w-full fixed top-0 flex justify-between items-center">
        <div className="max-h-full">
          <img className="h-[50px]" src="https://ujitiperb-dephub-go.id/templates/logo/logo.png" alt="logo dishub" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className="text-gray-600 text-2xl size-8"/>
          </button>
        </div>
        <ul
          className={`flex-col md:flex-row flex md:gap-4 gap-2 md:static absolute top-[5.1rem] md:top-0 left-0 w-full md:w-auto bg-[#00bcd4] md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 md:max-h-screen opacity-0 md:opacity-100 overflow-hidden"
          }`}
        >
          <li className="flex gap-1 items-center text-white px-4 md:px-0 py-2 md:py-0">
            <FaHome className="text-xl" />
            <h1 className="font-bold">HOME</h1>
          </li>
          <li className="flex gap-1 items-center text-white px-4 md:px-0 py-2 md:py-0">
            <MdPersonAddAlt1 className="text-xl" />
            <h1 className="font-bold">PENDAFTARAN</h1>
          </li>
          <li className="flex gap-1 items-center text-white px-4 md:px-0 py-2 md:py-0">
            <FaListAlt className="text-xl" />
            <h1 className="font-bold">TATACARA</h1>
          </li>
          <li className="flex gap-1 items-center text-white px-4 md:px-0 py-2 md:py-0">
            <FaList className="text-[20px] font-bold" />
            <h1 className="font-bold">FAQ</h1>
          </li>
          <li className="flex gap-1 items-center text-white px-4 md:px-0 py-2 md:py-0">
            <h1 className="font-bold ">LOGIN</h1>
            <LuLogIn className="text-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
