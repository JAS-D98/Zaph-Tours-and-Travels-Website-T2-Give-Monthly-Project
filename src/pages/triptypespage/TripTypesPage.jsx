import React from "react";
import Button from "./../../components/button/Button";
import { arrow, logo } from './../../assets/index'
import Packages from "../../components/packages/Packages";
export default function TripTypesPage() {
  return (
    <div className="w-full min-h-[100vh]">
      {/* Start of destination header section */}
      <div className="w-full h-[100vh] flex flex-col items-center justify-center px-5 lg:px-32">
        <p className="bg-gradient-to-r from-green to-blue-600 bg-clip-text text-transparent text-3xl lg:text-6xl font-bold text-center capitalize mt-[10%]">
          We recommend the best destinations for you with amazing packages
          offered every month.
        </p>
        <p className="text-center mt-4 text-xl fond-bold text-gray-500">
          We provide the very best packages for individuals as well as those who
          wish to travel with their families.
        </p>
        <img src={logo} alt="image of logo" />
      </div>
      {/* End of destination header section */}

      {/* Start of Our Packages Section */}
      <div className="flex flex-col items-center px-5 lg:px-0 justify-center lg:w-[90%] mx-auto">
        <h1 className="text-xl text-center flex items-center gap-2 mt-8">
          <div className="bg-green h-1 w-[3em] rounded" />{" "}
          <span> Packages We Offer </span>{" "}
          <div className="bg-green h-1 w-[3em] rounded" />
        </h1>
        <p className="mt-4 lg:text-xl text-gray-500 capitalize text-center">
          Easy Affordable Tourist Packages. There's one just for you
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 mt-8">
          <Packages/>
        </div>
      </div>
      {/* End of Our Packages Section */}

      {/* Start of blog section */}
      <div className="flex flex-col items-center px-5 lh:px-0 justify-center lg:w-[90%] mx-auto">
        <h1 className="text-xl text-center flex items-center gap-2 my-8">
          <div className="bg-green h-1 w-[3em] rounded" />{" "}
          <span> Read our blogs </span>{" "}
          <div className="bg-green h-1 w-[3em] rounded" />
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit eos, libero, reiciendis aliquid amet earum culpa molestiae dignissimos incidunt corporis ipsam adipisci veniam sapiente officiis maiores sit doloribus. Magnam dolorum porro tenetur ipsum facilis, ducimus maxime a. Officia, ipsum.</p>
        <Button title="Read Our Blogs" icon={arrow}/>
        </div>     
      {/* End of blog section */}

      {/* start of cta section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-3 pb-8 lg:px-5 bg-gradient-to-r from-green to-blue-500 mt-8 flex-wrap">
        <div className="w-full min-h-[28vh] lg:h-[40vh] text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl lg:text-5xl font-bold capitalize">
            Don't Miss the{" "}
            <span className="text-slate-100">20% discount to explore</span> the
            beauty the world has to offer
          </h1>
          <p className="font-semibold text-xl mt-2">
            We have a very special offer just for you
          </p>
          <Button title="Make a Booking Now" />
        </div>
      </div>
      {/* end of cta section */}
    </div>
  );
}
