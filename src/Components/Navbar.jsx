"use client"
import { useState } from "react";
import Image from "next/image";

import close from "../Assets/close.svg";
import menu from "../Assets/menu.svg";
import logo from "../Assets/logo.svg";
import { navLinks } from "../Constants";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" w-full flex py-6 justify-between items-center container ">
      
        <Link href={"home"}><Image  src={logo} alt="logo" className="w-[124px] h-[32px]" /></Link>

        <ul className="list-none sm:flex hidden  ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-[#4285F4]" : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title ? (
                <Link href={nav.id}>{nav.title}</Link>
              ) : (
                <select className="w-[8rem]">
                  {nav.sublinks.map((i) => (
                    <option key={i.title} value="">
                      {i.title}
                    </option>
                  ))}
                </select>
              )}
            </li>
          ))}
        </ul>
      

      <div
        className="sm:hidden flex justify-between items-center 
       bg-[linear-gradient(96deg,#e8fcf8,linen)]  "
      >
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[15px] h-[15px] object-contain bg-[#4285F4]"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${toggle?"fixed z-40 left-0 top-0 w-full h-screen origin-top bg-[linear-gradient(96deg,#e8fcf8,linen)] text-black p-10":"hidden"}`}>
         
           
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Image src={logo} alt="logo" className="w-[124px] h-[32px]" />
                  <p className="cursor-pointer text-md text-black">
                    <Image
                      src={toggle ? close : menu}
                      alt="menu"
                      className="w-[15px] h-[15px] object-contain bg-[#4285F4]"
                      onClick={() => setToggle(!toggle)}
                    />
                  </p>
                </div>
                <ul   className=" leading-[50px] text  m_title lowercase font-semibold">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins  font-semibold cursor-pointer text-[16px] leading-[50px] text  m_title lowercase ${
                active === nav.title ? "text-[#4285F4]" : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)} 
            >
              {nav.title ? (
                <Link  onClick={() => setToggle(!toggle)} href={nav.id}>{nav.title}</Link>
              ) : (
                <select className="w-[8rem] leading-[50px] list-item   m_title lowercase">
                  {nav.sublinks.map((i) => (
                    <option className="bg-red-600 border-none outline-none"  key={i.title} value="">
                      {i.title}
                    </option>
                  ))}
                </select>
              )}
            </li>
          ))}
        </ul>
              </div>
            </div>
         
        </div>
    </nav>
  );
};

export default Navbar;
