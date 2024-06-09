import React from "react";
import {
  hero,
  arrow,
  people,
  world1,
  world2,
  cameraLady,
  nature1,
  nature2,
  mount1,
  mount2,
  mountKenya1,
  luwenzori1,
  lakenakuru,
  Tsavo,
  coast,
  coast1,
  nairobi,
} from "../../assets/index.js";
import Button from "../../components/button/Button.jsx";
import Featurecardbox from "../../components/featurecardbox/Featurecardbox.jsx";
import Testimonialcard from "../../components/testimonialcard/Testimonialcard.jsx";

export default function LandingPage() {
  return (
    <>
      {/* Start of Hero Section */}
      <div className="flex items-center flex-col-reverse px-5 lg:px-24 w-full min-h-[100vh] lg:flex-row gap-2">
        <div className="w-full text-center items-center lg:items-start lg:w-1/2 lg:text-start h-full flex flex-col gap-4">
          <div>
            <p className="text-green">Best Safaris and Adventures</p>
            {/* <h1 className=' text-[2em] lg:text-[3em] font-bold capitalize'>It's fun out there, <span className='text-green'>let's go explore</span>. Discover New Places<span className='text-green'> With us</span>.</h1> */}
            <h1 className=" text-[2em] lg:text-[3em] font-bold capitalize bg-gradient-to-r from-green to-blue-500 bg-clip-text text-transparent">
              It's fun out there, <span>let's go explore</span>. Discover New
              Places<span> With us</span>.
            </h1>
            <p className=" text-md lg:text-xl">
              Grab an opportunity to immerse yourself in new cultures. Embark on
              an unforgettable journey.
            </p>
          </div>
          <img src={people} alt="image of tourists" className="w-[25%]" />
          <p className="font-semibold capitalize">
            Join Over 1.6K+ Tourists every Month
          </p>
          <Button title="Start Exploring" icon={arrow} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center hero-bg rounded-xl">
          {/* <img src={hero} alt="image of a lady with a bag" /> */}
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Start of about Us Section */}
      <div className="flex flex-col items-center justify-center px-10 mt-[5%] lg:mt-0 lg:w-[90%] mx-auto">
        <h1 className="text-xl text-center flex items-center gap-2">
          <div className="bg-green h-1 w-[6em] rounded" />{" "}
          <span> About Us </span>{" "}
          <div className="bg-green h-1 w-[6em] rounded" />
        </h1>
        <div className="flex flex-col justify-between mt-10 md:flex-row items-center lg:items-start gap-3 lg:gap-0">
          <div className="w-full lg:w-[40%]">
            <h1 className="text-green capitalize text-md">
              Read Our Amazing Story
            </h1>
            <p className="leading-1 text-xl mt-6">
              We are more than just a travel company; We are your gateway to
              extarordinary experiences and adventures. With a passion for
              exploration, our dedicated team curates journeys that redefine
              adventure and capture the essence of each destination. Our mission
              is to create memories that lingeer long after you've returned
              home. We offer meticulously planned itineraries, personalized
              services, and a commitment to responsible travel.
            </p>
          </div>
          <div className="w-full lg:w-[50%] min-h-[60vh] grid grid-cols-3 gap-2 place-content-center">
            <div className="bg-red-400 row-span-1 rounded-xl h-[10em] overflow-hidden col-span-2 ">
              <img
                src={world1}
                alt="image of maldives"
                width="100%"
                height="100%"
                className="w-full h-full"
                />
            </div>
            <div className="bg-blue-300 rounded-xl h-[8em] overflow-hidden">
              <img
                src={world2}
                alt="world animation"
                width="100%"
                height="100%"
                className="w-full h-full"
                />
            </div>
            <div className='bg-black col-span-1 rounded-xl h-[10em] overflow-hidden object-cover'>
                  <img src={cameraLady} alt="woman aking a photo" width="100%" height="100%" className='w-full h-full'/>
            </div>
            <div className="bg-blue-300 col-span-2 lg:row-span-2 h-[10em] overflow-hidden rounded-xl object-cover">
              <img
                src={nature2}
                alt="hot air balloons"
                width="100%"
                height="100%"
                className="w-full h-full"
                />
            </div>
          </div>
        </div>
      </div>
      {/* End of about Us Section */}

      {/* Start of featured destinations section */}
      <div className="flex flex-col items-center justify-center px-10 mt-[5%] lg:w-[90%] mx-auto">
        <h1 className="text-xl text-center flex items-center gap-2">
          <div className="bg-green h-1 w-[6em] rounded" />{" "}
          <span> Featured Destinations </span>{" "}
          <div className="bg-green h-1 w-[6em] rounded" />
        </h1>
        <p className="mt-4 text-center">
          Unlock the mysteries of areas we've visited. Embark <br />
          on an unforgettable journey
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 mt-8">
              <Featurecardbox/>
        </div>
      </div>
      {/* End of featured destinations section */}

      {/* Start of testimonials section */}
      <div className="flex flex-col items-center justify-center px-10 mt-[5%] lg:w-[90%] mx-auto">
        <h1 className="text-xl text-center flex items-center gap-2">
          <div className="bg-green h-1 w-[6em] rounded" />{" "}
          <span> Testimonials </span>{" "}
          <div className="bg-green h-1 w-[6em] rounded" />
        </h1>
        <p className="mt-4 text-center">
          We take pride in providing exceptional travel experiences. Don't Just
          take our word for it but <br /> hear from our satisfied customers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <Testimonialcard />
        </div>
      </div>
      {/* End of testimonials section */}

      {/* Start of newsletter section */}
      <div className="w-full min-h-[60vh] flex flex-col lg:flex-row items-center justify-center px-3 pb-8 lg:px-5 bg-gradient-to-r from-green to-blue-500 mt-8 flex-wrap">
        <div className="w-full lg:w-1/2 lg:h-[40vh] text-center">
          <h1 className="text-3xl lg:text-5xl font-bold capitalize">
            Subscribe to our newsletter{" "}
            <span className="text-slate-100">and get instant updates</span> at
            the comfort of your home.
          </h1>
          <p className="font-semibold text-xl mt-2">
            Get weekly email updates on matters safaris and adventures
          </p>
          <form
            action=""
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-2"
          >
            <input
              type="text"
              placeholder="Enter your email here"
              className="py-3 px-4 rounded-full text-xl text-green outline-none"
            />
            <Button title="Subscribe" marginTop="0" />
          </form>
        </div>
      </div>
      {/* End of newsletter section */}
    </>
  );
}
