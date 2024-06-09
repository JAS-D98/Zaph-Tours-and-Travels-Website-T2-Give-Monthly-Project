import React from "react";
import { testimonials } from "../../constants/Testimonials";

export default function Testimonialcard() {
  return (
    <>
      {testimonials.map((testimonial, i) => {
        return (
          <div className="w-[20em] h-[24em] rounded-xl overflow-hidden shadow-xl" key={i}>
            <div className="w-full h-[25vh] overflow-hidden flex flex-col justify-end">
              <img
                src={testimonial.touristSiteImg}
                alt={testimonial.touristAlt}
              />
              <p className="absolute -mt-10 text-xl bg-teal rounded-tr-2xl px-2">
                {testimonial.touristSite}
              </p>
            </div>
            <div className="flex flex-col py-2 px-5">
              <div className="flex items-end gap-4">
                <div className="w-[3em] h-[3em] overflow-hidden rounded-full object-cover">
                  <img
                    src={testimonial.testimonialImg}
                    alt={testimonial.testimonialAlt}
                    width="100%"
                    height="100%"
                  />
                </div>
                <h1 className="text-xl font-semibold">
                  {testimonial.testimonialName}
                </h1>
              </div>
              <p className="mt-4">{testimonial.TestimonialText}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
