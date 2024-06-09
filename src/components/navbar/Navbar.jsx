import React, { useState } from "react";
import navLinks from "../../constants/Navbar.js";
import { logo } from "../../assets/index.js";
import { Link } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline  } from "react-icons/io5";
import { close, hamburger, menu } from "../../assets/icons/index.js";


export default function Navbar() {
  const [isOpen, setIsOpen]=useState(false);

  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex w-full px-5 lg:px-24 py-1 justify-between items-center border-b-2 capitalize fixed z-20 bg-white shadow-md">
      <div className="flex items-center">
        <div className="w-[4em] overflow-hidden object-cover">
          <img src={logo} alt="image of logo icon" width="100%" height="100%" />
        </div>
        <p className="text-xl font-semibold">
          Zaph
          <br /> <span className="text-green">Tours</span>
        </p>
      </div>
      <nav className="hidden lg:flex gap-7 items-center">
        {navLinks.map((link) => (
          <p key={link.label} className="text-xl font-bold-400">
            <Link to={link.href} className="hover:text-green">
              {link.label}
            </Link>
          </p>
        ))}
      </nav>
        
      <div className="lg:hidden">
      <img src={isOpen ? close : menu} alt="navigation icons" onClick={toggleNavbar} className="w-7"/>
      </div>

      <nav className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white shadow-md px-5`}>
        {navLinks.map((link) => (
          <p key={link.label} className="text-xl font-bold-400 p-4 border-b">
            <Link to={link.href} className="hover:text-green" onClick={toggleNavbar}>
              {link.label}
            </Link>
          </p>
        ))}
      </nav>
    </div>
  );
}
