import React from 'react'
import { packages } from '../../constants/Packages';

export default function Packages() {
  return (
    <>
    {packages.map((pack, i) => {
      return (
        <div
          className="w-full lg:w-[30%] min-h-[50vh] h-auto bg-teal pb-2 rounded-xl shadow-xl"
          key={i}
        >
          <div className="w-full h-[30vh] overflow-hidden object-cover rounded-t-xl">
            <p className="absolute bg-teal px-2 py-1 rounded-br-2xl font-semibold">
              {pack.type}
            </p>
            <img
              src={pack.image}
              alt={pack.alt}
              width="100%"
              height="100%"
              className="w-full h-full"
            />
          </div>
          <div className="px-2">
            <p className="font-semibold">
              {pack.description}.{" "}
              <a href="" className="text-green">
                Read More...
              </a>
            </p>
          </div>
          <div className="px-2 mt-2">
            <p className="font-bold">Trip Prices</p>
            <hr />
          </div>
        </div>
      );
    })}
  </>
  )
}
