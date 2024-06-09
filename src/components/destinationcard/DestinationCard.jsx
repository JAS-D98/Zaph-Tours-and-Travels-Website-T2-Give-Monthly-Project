import React from "react";
import { MdGroups2, MdPerson } from "react-icons/md";
import { destinations } from "../../constants/Destinations";

export default function DestinationCard() {
  return (
    <>
      {destinations.map((destination, i) => {
        return (
          <div
            className="w-full md:min-w-[30%] md:w-[30%] min-h-[60vh] bg-teal pb-2 rounded-xl shadow-xl"
            key={i}
          >
            <div className="w-full h-[30vh] overflow-hidden object-cover rounded-t-xl">
              <p className="absolute bg-teal px-2 py-1 rounded-br-2xl font-semibold">
                {destination.siteName}
              </p>
              <img
                src={destination.image}
                alt={destination.alt}
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>
            <div className="px-2">
              <p>
                {destination.description}.{" "}
                <a href="" className="text-green">
                  Read More...
                </a>
              </p>
            </div>
            <div className="px-2 mt-2">
              <p className="font-semibold">Trip Prices</p>
              <hr />
              <div className="flex flex-col items-left text-left justify-start gap-2">
                <p className="flex items-center gap-2 font-semibold text-left">
                  <span className="text-green flex items-center gap-2">
                    <MdGroups2 /> Group:-
                  </span>{" "}
                  {destination.pricePerGroup}
                </p>
                <p className="flex items-center gap-2 font-semibold text-left">
                  {" "}
                  <span className="text-green flex items-center gap-2">
                    <MdPerson /> Individual:-
                  </span>{" "}
                  {destination.individualCost}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
