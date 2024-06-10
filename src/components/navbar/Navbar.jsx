import React, { useState } from "react";
import navLinks from "../../constants/Navbar.js";
import { logo, logoclear } from "../../assets/index.js";
import { Link } from "react-router-dom";
// import { IoCloseOutline, IoMenuOutline  } from "react-icons/io5";
import { close, menu } from "../../assets/icons/index.js";


export default function Navbar() {
  const [isOpen, setIsOpen]=useState(false);

  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex w-full px-5 lg:px-24 py-1 justify-between items-center border-b-2 capitalize fixed z-20 bg-white shadow-md dark:bg-black dark:border-b-2-">
      <a href="/">
      <div className="flex items-center">
        <div className="w-[4em] overflow-hidden object-cover">
          <img src={logo} alt="image of logo icon" width="100%" height="100%" className="dark:hidden"/>
          <img src={logoclear} alt="image of logo icon" width="100%" height="100%" className="hidden dark:flex"/>
        </div>
        <p className="text-md lg:text-xl font-semibold dark:text-slate-100">
          Zaph
          <br /> <span className="text-green">Tours</span>
        </p>
      </div>
      </a>
      <nav className="hidden lg:flex gap-7 items-center dark:text-slate-400">
        {navLinks.map((link) => (
          <p key={link.label} className="text-xl font-bold-400">
            <Link to={link.href} className="hover:text-green">
              {link.label}
            </Link>
          </p>
        ))}
      </nav>
        
      <div className="lg:hidden">
      <img src={isOpen ? close : menu} alt="navigation icons" onClick={toggleNavbar} className="w-7 cursor-pointer"/>
      </div>

      <nav className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white dark:bg-black dark:text-slate-400 shadow-md px-5`}>
        {navLinks.map((link) => (
          <p key={link.label} className="text-xl font-bold-400 p-4 border-b">
            <Link to={link.href} className="hover:text-green p-3" onClick={toggleNavbar}>
              {link.label}
            </Link>
          </p>
        ))}
      </nav>
    </div>
  );
}
