import React from 'react'
import { features } from '../../constants/Features';

export default function Featurecardbox() {
  return (
    <>
    {features.map((feature, i) => {
      return (
        <div
          className="w-full md:min-w-[30%] md:w-[30%] min-h-[60vh] bg-teal dark:bg-black dark:text-slate-500 dark:shadow-slate-800 pb-2 rounded-xl shadow-xl transition duration-200 ease-out hover:ease-in hover:scale-105"
          key={i}
        >
          <div className="w-full h-[30vh] overflow-hidden object-cover rounded-t-xl">
            <p className="absolute bg-teal px-2 py-1 rounded-tl-2xl rounded-br-2xl font-semibold dark:text-black">
              {feature.place}
            </p>
            <img
              src={feature.image}
              alt={feature.alt}
              width="100%"
              height="100%"
              className="w-full h-full"
            />
          </div>
          <div className="px-2">
            <p>
              {feature.description}.{" "}
              <a href="" className="text-green">
                Read More...
              </a>
            </p>
          </div>
          <div className="px-2 mt-2">
            <p className="font-semibold">Trip Price: {feature.price}</p>
            <hr />
          </div>
        </div>
      );
    })}
  </>
  )
}
