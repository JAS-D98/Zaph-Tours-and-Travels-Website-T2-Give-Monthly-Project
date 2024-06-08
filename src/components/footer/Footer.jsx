import React from "react";
import { footerLinks } from "../../constants/Footer";
import { socialMedia } from "../../constants/Contact";
import { footerlogo } from "../../assets";

export default function Footer() {
  return (
    <footer className="p-8 bg-footer text-white">
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start">
        <a href="/"><img src={footerlogo} alt="logo" width={150} height={46} className="m-0"/></a>
        <p className="text-xl font-bold mt-3">Zaph <span className="text-green">Tours</span></p>
        <p className="mt-2 text-base leading-7 text-white-400 sm:max-w-sm">Best Safaris and Adventures</p>
        <div className="flex items-center gap-5 mt-5 ">
           {socialMedia.map((icon)=>(
            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-green to-blue-600 rounded-full transition duration-150 ease-out hover:ease-in hover:scale-110 cursor-pointer">
              <img src={icon.src} alt={icon.alt} width={24} height={24}/>
            </div>
           ))}
        </div>
      </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-blue-500 cursor-pointer" key={link.name} ><a href="">{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div> 
    </div>
    <div className="flex justify-between text-white-400 mt-5 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
           <p className="flex items-center gap-2"><span className="text-2xl">&copy;</span> Copyright. || All rights reserved.</p> 
        </div>
    </div>
   <a href="https://jasperwambuguport.netlify.app"><p className="mt-1 items-center flex w-full justify-center"><span className="text-blue-500 italic">Jasper Wambugu</span></p></a> 
</footer>
);
}
