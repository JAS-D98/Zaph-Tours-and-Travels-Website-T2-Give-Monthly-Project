import React from "react";
import { direction, directionclear } from "../../assets";

export default function PageNotFound() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center">
      <img
        src={direction}
        alt="image of a woman showing direction"
        className="h-[50vh] dark:hidden"
      />
      <img
        src={directionclear}
        alt="image of a woman showing direction"
        className="h-[50vh] hidden dark:flex"
      />
      <p className="bg-gradient-to-r from-green to-blue-600 bg-clip-text text-transparent text-3xl lg:text-5xl font-bold text-center capitalize py-4">
        OOP's Page not found.
      </p>
    </div>
  );
}
